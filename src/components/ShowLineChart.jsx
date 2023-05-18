import React, { useEffect, useState } from "react";
const chartUrl = "https://quickchart.io/chart?c={type:%27bar%27,data:{labels:[%27Q1%27,%27Q2%27,%27Q3%27,%27Q4%27],%20datasets:[{label:%27Users%27,data:[50,60,70,180]},{label:%27Revenue%27,data:[100,200,300,400]}]}}"
const mavleUrl = "http://mavle.dk/tomcat/carbon2count/api/chart"
const localUrl = "http://localhost:8080/carbon2count/api/chart"

const Image = () => {
  const [img, setImg] = useState();

//   const fetchChartImage = async () => {
//     const body = {
//       backgroundColor: 'transparent',
//       width: 500,
//       height: 300,
//       format: 'png',
//       chart: "{type:'bar',data:{labels:['January','February','March','April','May'],datasets:[{label:'Dogs',data:[50,60,70,180,190]}]},options:{scales:{yAxes:[{ticks:{callback:function(value){return'$'+value;}}}]}}}"
//     };
  
//     try {
//       const res = await fetch(localUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       });
  
//       const imageBlob = await res.blob();
//       const imageObjectURL = URL.createObjectURL(imageBlob);
//       setImg(imageObjectURL);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

const fetchChartImage = async () => { 
    const res = await fetch(localUrl);
    const imageBlob = await res.blob(); 
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
    };

  useEffect(() => {
    fetchChartImage();
  }, []);

  return (
    <>
      <img src={img} alt="chart" />
      </>
  );
}

export default Image;