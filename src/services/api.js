const spreadsheetId = "1NCmpIAY5OMSHzIvRHqaSiVVL17VfW4Vr6k25436cGkQ";


const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetId}/od6/public/values?alt=json`;


export const getData = async () => {
  const response = await fetch(url, {

  }).then((response) => response.json());
  return response.feed.entry;
};