const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN;
const API_URL = "https://api.discogs.com";

const jsonOrReject = message => res =>
  res.ok
    ? res.json()
    : Promise.reject({
        status: res.status,
        statusText: res.statusText,
        error: { message }
      });

const searchArtists = query =>
  fetch(`${API_URL}/database/search?q=${query}&type=artist&per_page=5&token=${DISCOGS_TOKEN}`)
  .then(jsonOrReject("Error while loading artists."));

const artistAlbums = (id, page) =>
  fetch(`${API_URL}/artists/${id}/releases?per_page=5&page=${page}&token=${DISCOGS_TOKEN}`)
  .then(jsonOrReject("Error while loading artist albums."));

export { artistAlbums, searchArtists };
