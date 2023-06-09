import React, { useEffect, useState } from 'react';

function ChartComponent({ user }) {
  const [imageDataUrl, setImageDataUrl] = useState('');

  useEffect(() => {
    fetchChartImage();
  }, []);

  const fetchChartImage = async () => {
    try {
      const response = await fetch('https://mavle.dk/tomcat/carbon2count/api/chart/' + user.username);
      const data = await response.json();
      const chartImageData = data.chartImageData;

      // Convert chartImageData to data URL
      const imageDataUrl = `data:image/png;base64,${chartImageData}`;
      setImageDataUrl(imageDataUrl);
    } catch (error) {
      console.error('Error fetching chart image:', error);
    }
  };

  return (
    <div>
      {imageDataUrl && <img src={imageDataUrl} alt="Chart Image" />}
    </div>
  );
}

export default ChartComponent;