import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <object type="text/html" data="/map.html" width="100%" height="600px"></object>
    </div>
  );
};

export default GoogleMap;