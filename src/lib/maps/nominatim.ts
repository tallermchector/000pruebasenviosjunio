export async function geocodeNominatim(address: string) {
  const q = `${address}, Mar del Plata, Buenos Aires, Argentina`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'EnviosDosRuedas/1.0',
    },
  });
  if (!response.ok) {
    throw new Error('Geocoding failed');
  }
  const data = await response.json();
  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
    };
  }
  return null;
}
