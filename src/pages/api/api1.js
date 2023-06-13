// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const visualCrossingApKeys = [
  process.env.NEXT_PUBLIC_VAPI_KEY1,
  process.env.NEXT_PUBLIC_VAPI_KEY2,
  process.env.NEXT_PUBLIC_VAPI_KEY3,
];

const openWeatherMapApi = process.env.NEXT_PUBLIC_OWM_API_KEY;

const geoapifyApi = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

const ipDataApi = process.env.NEXT_PUBLIC_IPDATA_API_KEY;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function api1handler(req, res) {
  const { tempLat, tempLon } = req.query;

  const FetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${tempLat}&lon=${tempLon}&appid=${openWeatherMapApi}&units=metric`
      );
      const jsonData = await response.json();
      return res.status(200).json(jsonData);

    } catch (error) {
      return "bad request"
    }

  };

  FetchData();

}
