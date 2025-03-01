import { getBaseURL } from "./helpers";

const getStravaRides = async () => {
  try {
    const baseURL = getBaseURL();
    const stravaResponse = await fetch(`${baseURL}/api/strava`, {});

    if (!stravaResponse.ok) {
      console.error(`Failed to fetch API: ${stravaResponse.statusText}`);
      return null;
    }

    const stravaData = await stravaResponse.json();

    const ridesPerYear = stravaData.filter((activity) => {
      const activityType = activity.type.toLowerCase();
      const activityDate = new Date(activity.start_date);

      const isBikeRide = activityType === "ride";

      const is2025 = activityDate.getFullYear() === 2025;

      return isBikeRide && is2025;
    });

    const totalDistance = ridesPerYear.reduce((total, activity) => {
      return total + (activity.distance || 0);
    }, 0);

    return totalDistance;
  } catch (error) {
    console.error("❌ Error calling Strava Data:", error);
    return null;
  }
};

export default getStravaRides;
