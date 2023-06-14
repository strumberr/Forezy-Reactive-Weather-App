// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const visualCrossingApKeys = [
  process.env.VAPI_KEY1,
  process.env.VAPI_KEY2,
  process.env.VAPI_KEY3,
];

const openWeatherMapApi = process.env.OWM_API_KEY;

const geoapifyApi = process.env.GEOAPIFY_API_KEY;

const ipDataApi = process.env.IPDATA_API_KEY;

const BASE_URL = process.env.BASE_URL;

export default function api1handler(req, res) {
  const { tempLat, tempLon } = req.query;

  const FetchData = async () => {
    try {
      console.log("api1 fetching")
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${tempLat}&lon=${tempLon}&appid=${openWeatherMapApi}&units=metric`
      );
      console.log("api1 just fetched")
      const jsonData = await response.json();
      return res.status(200).json(jsonData).end();

    } catch (error) {
      return "bad request"
    }

  };

  FetchData();

}
