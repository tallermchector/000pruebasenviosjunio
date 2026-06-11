export async function geocode(address: string) {
  const q = `${address}, Mar del Plata, Buenos Aires, Argentina`;
  const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&bbox=-57.65,-38.08,-57.50,-37.90`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Geocoding failed');
  }
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return {
      lat: data.features[0].geometry.coordinates[1],
      lng: data.features[0].geometry.coordinates[0],
    };
  }
  return null;
}
