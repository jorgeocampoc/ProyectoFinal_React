export function convertEpisode(episode){
    let s = episode.substring(1,3);
    let e = episode.substring(4,6);
    return {s,e};
  }