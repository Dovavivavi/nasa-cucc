const baseUrl = 'https://api.nasa.gov/planetary';
const key = '4hrbRcDLDQtmrglPbHKC4ZYeZdrPL2jTbuBBDuC1';

async function getApod() {
  const response = await fetch(`${baseUrl}/apod?api_key=${key}`);
  return response.json;
}

export default getApod;
