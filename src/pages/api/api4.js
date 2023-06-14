const visualCrossingApKeys = [
    process.env.VAPI_KEY1,
    process.env.VAPI_KEY2,
    process.env.VAPI_KEY3,
  ];

  const randomVisualCrossingApKeys = visualCrossingApKeys[Math.floor(Math.random() * visualCrossingApKeys.length)];
  
  const openWeatherMapApi = process.env.OWM_API_KEY;
  
  const geoapifyApi = process.env.GEOAPIFY_API_KEY;
  
  const ipDataApi = process.env.IPDATA_API_KEY;
  
  const BASE_URL = process.env.BASE_URL;
  
  export default function api3handler(req, res) {
    const { tempLocation } = req.query;
  
    const FetchData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${tempLocation}?unitGroup=metric&key=${randomVisualCrossingApKeys}&contentType=json`
        );

        const jsonData = await response.json();
        return res.status(200).json(jsonData).end();
  
      } catch (error) {
        return "bad request"
      }
  
    };
  
    FetchData();
  
  }