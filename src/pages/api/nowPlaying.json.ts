import type { APIRoute } from "astro";
import lyricFinder from "../../modules/song/utils/lyricFinder";
import { getNowPlaying } from "../../modules/song/utils/spotify";

export const get: APIRoute = async () => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return { body: JSON.stringify({ isPlaying: false }) };
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[2].url;
  const songUrl = song.item.external_urls.spotify;

  // find lyric
  const lyric = await lyricFinder({ artist, title });

  return {
    body: JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      lyric: !lyric.error ? lyric.lyrics : lyric.errorMessage,
    }),
  };
};
