import React, { useEffect, useState } from 'react';

function ChartComponent() {
  const [imageDataUrl, setImageDataUrl] = useState('');

  useEffect(() => {
    fetchChartImage();
  }, []);

  const fetchChartImage = async () => {
    try {
      const response = await fetch('http://localhost:8080/carbon2count/api/chart/test');
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