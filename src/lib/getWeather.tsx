import { getBaseURL } from "./helpers";

const getWeather = async () => {
  try {
    const baseURL = getBaseURL();
    const weatherResponse = await fetch(`${baseURL}/api/weather`, {
      next: { revalidate: 120 },
    });

    if (!weatherResponse.ok) {
      console.error(`Failed to fetch API: ${weatherResponse.statusText}`);
      return null;
    }

    const weather = await weatherResponse.json();
    const { hourly: currentWeather } = weather;

    return currentWeather;
  } catch (error) {
    console.error("❌ Error calling Github Data:", error);
    return null;
  }
};

export default getWeather;
