export async function getRoute(origin: { lat: number, lng: number }, destination: { lat: number, lng: number }) {
  const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Routing failed');
  }
  const data = await response.json();
  if (data.routes && data.routes.length > 0) {
    const route = data.routes[0];
    return {
      distance: route.distance, // in meters
      duration: route.duration, // in seconds
      geometry: route.geometry,
    };
  }
  return null;
}
