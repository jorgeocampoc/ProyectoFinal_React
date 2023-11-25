import { convertEpisode } from "../utilities/ConvertSesion";

export var finalIndex = 0;
export const GetDataRickAndMorty = async (
  tipo = "",
  page = "",
  character = "",
  gender = "",
  status = ""
) => {
  try {
    const api = `https://rickandmortyapi.com/api/${tipo}/?page=${page}&name=${character}&gender=${gender}&status=${status}`;
    const res = await fetch(api);
    const { results, info } = await res.json();
    if (tipo === "character") {
      const characters = results.map(
        ({ id, name, status, image, gender, origin, species }) => ({
          id,
          name,
          status,
          image,
          gender,
          origin: origin.name,
          species,
          img:
            species === "Human"
              ? "https://p4.wallpaperbetter.com/wallpaper/140/900/941/rick-and-morty-adult-swim-cartoon-morty-smith-wallpaper-preview.jpg"
              : "https://okdiario.com/img/2023/02/19/ovni-655x368.jpg",
        })
      );
      finalIndex = info.pages;
      return { characters, info };
    } else {
      const characters = results.map(({ id, name, episode, air_date }) => ({
        id,
        name,
        season: convertEpisode(episode),
        air_date,
      }));
      finalIndex = info.pages;
      return {
        characters,
        info,
      };
    }
  } catch (error) {
    return {
      characters: [],
      info: { count: 1, next: null, pages: 1, prev: null },
    };
  }
};
