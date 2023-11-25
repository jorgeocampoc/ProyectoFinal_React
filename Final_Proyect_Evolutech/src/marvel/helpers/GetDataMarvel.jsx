import CryptoJS from "crypto-js";
export var totalCharacters = "";
export const GetDataMarvel = async (
  tipo = "",
  offset = "",
  limit = "",
  name = ""
) => {
  const apiKeyPrivate = "5f6af3bfa8367782b99b35440f54996dad26c169";
  const apiKeyPublic = "989f75bced341a4a9e6c2df560b8e0ab";
  const ts = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
  const hash = CryptoJS.MD5(ts + apiKeyPrivate + apiKeyPublic).toString();
  const api = `http://gateway.marvel.com/v1/public/${tipo}?apikey=${apiKeyPublic}&ts=${ts}&hash=${hash}&offset=${offset}&limit=${limit}&${name}`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    const { results, total } = data.data;
    totalCharacters = total;
    return { results, total };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
