export async function GET() {
  const tokenResponse = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
      scope: "read",
    }),
  });
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  if (!accessToken) {
    return new Response("Error getting Stravan token", { status: 400 });
  }

  const activitiesResponse = await fetch(
    `${process.env.STRAVA_API}athlete/activities`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  const activities = await activitiesResponse.json();

  return new Response(JSON.stringify(activities), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
