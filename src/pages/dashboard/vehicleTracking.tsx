import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import Pusher from "pusher-js";
import { Box, Flex, Skeleton } from "@chakra-ui/react";
import Layout from "../../layouts/dashboard/sideBar";
import LiveTrack from "../../layouts/dashboard/liveTrack";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const fetcher = (url) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google);
    script.onerror = reject;
    document.head.appendChild(script);
  });

const VehicleTracking = () => {
  const [carDetails, setCarDetails] = useState<any>(null);
  const [lastLocation, setLastLocation] = useState<any>(null); // Store the last updated location
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [infoWindowPosition, setInfoWindowPosition] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const { data: google, error } = useSWR(
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyDnKdXlv5lStHzJjhIoe08s0Bw4ZcQUB18`,
    fetcher
  );

  const getCarDetails = async () => {
    const pusher = new Pusher("cf378b7d56a8a5a1b7ad", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("location");
    channel.bind("car-location", (data) => {
      setCarDetails(data.vehicle);
    });
  };

  const getLastUpdate = async () => {
    // Fetch token and authenticate
    const token = localStorage.getItem("token");
    // const myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 88|9RbCzSHvzTZ7QqAzCk3ys1YctShg5y9chnevOgQC1eccd809"
    // );

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    // }}

    const requestOptions = {
      method: "POST",
      headers: {Authorization: `Bearer ${token}`,}
    };

    const response = await fetch(
      "https://cti.maypaseducation.com/api/get/location",
      requestOptions
    );

    const data = await response.json();
    setLastLocation(data.vehicle.last_location); // Save the last location
  };

  useEffect(() => {
    getLastUpdate();
    getCarDetails();
  }, []);

  useEffect(() => {
    if (google) {
      setGoogleLoaded(true);
    }
  }, [google]);

  const handleMarkerClick = useCallback((position) => {
    setInfoWindowPosition(position);
    setInfoWindowOpen(true);
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowOpen(false);
  }, []);

  const getInitialCenter = () => {
    if (carDetails) {
      return {
        lat: parseFloat(carDetails.tracker.lat),
        lng: parseFloat(carDetails.tracker.lon),
      };
    } else if (lastLocation) {
      return {
        lat: parseFloat(lastLocation.latitude),
        lng: parseFloat(lastLocation.longitude),
      };
    } else {
      return { lat: 0, lng: 0 }; // Default center if no data is available
    }
  };

  return (
    <Layout name="Vehicle Tracking" needed={false} vehicle={null}>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        pb={10}
        gap={10}
        mt={5}
      >
        <LiveTrack display="block" />
        <Box width={"100%"} className="">
          <APIProvider apiKey={"AIzaSyDnKdXlv5lStHzJjhIoe08s0Bw4ZcQUB18"}>
            <Map
              style={{ width: "100%", height: "100vh", borderRadius: 40 }}
              defaultCenter={getInitialCenter()}
              defaultZoom={3}
              gestureHandling={"greedy"}
              disableDefaultUI={false}
            >
              {googleLoaded && (
                <>
                  <Marker
                    position={getInitialCenter()}
                    onClick={() => handleMarkerClick(getInitialCenter())}
                    icon={{
                      url: "/veh.svg",
                      //@ts-ignore
                      scaledSize: new google.maps.Size(100, 100), // Adjust the size as needed
                    }}
                  />
                  {infoWindowOpen && (
                    <InfoWindow
                      position={infoWindowPosition}
                      onCloseClick={handleInfoWindowClose}
                    >
                      <div>
                        <h2>InfoWindow content!</h2>
                        <p>
                          Some arbitrary html to be rendered into the
                          InfoWindow.
                        </p>
                      </div>
                    </InfoWindow>
                  )}
                </>
              )}
            </Map>
          </APIProvider>
        </Box>
      </Flex>
    </Layout>
  );
};

export default VehicleTracking;
