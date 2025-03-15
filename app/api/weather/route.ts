export async function GET() {
  const weatherResponse = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=43.3494&longitude=-4.0479&hourly=temperature_2m,rain&current=is_day&timezone=Europe%2FBerlin&forecast_days=1",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const weather = await weatherResponse.json();

  if (!weather) {
    return new Response("Error getting weather", { status: 400 });
  }

  return new Response(JSON.stringify(weather), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
}
