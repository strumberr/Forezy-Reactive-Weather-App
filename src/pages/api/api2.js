const visualCrossingApKeys = [
    process.env.VAPI_KEY1,
    process.env.VAPI_KEY2,
    process.env.VAPI_KEY3,
  ];
  
  const openWeatherMapApi = process.env.OWM_API_KEY;
  
  const geoapifyApi = process.env.GEOAPIFY_API_KEY;
  
  const ipDataApi = process.env.IPDATA_API_KEY;
  
  const BASE_URL = process.env.BASE_URL;
  
  export default function api2handler(req, res) {
    const { tempLat, tempLon } = req.query;
  
    const FetchData = async () => {
      try {
        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${tempLat}&lon=${tempLon}&apiKey=${geoapifyApi}`
        );

        const jsonData = await response.json();
        return res.status(200).json(jsonData).end();
  
      } catch (error) {
        return "bad request"
      }
  
    };
  
    FetchData();
  
  }