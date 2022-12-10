import { load } from "cheerio/lib/slim";

interface ILyricFinder {
  artist: string;
  title: string;
}

interface ILyricFinderResponse {
  error: boolean;
  title: string;
  artist: string;
  lyrics: string;
  source: string;
  errorMessage?: undefined;
}

interface ILyricFinderResponseError {
  error: boolean;
  errorMessage: string;
  title?: undefined;
  artist?: undefined;
  lyrics?: undefined;
  source?: undefined;
}

/**
 * @serverside
 * @param obj an object containing artist and title
 * @returns a promise object containing lyrics
 */
const lyricFinder = async ({
  artist = "",
  title = "",
}: ILyricFinder): Promise<ILyricFinderResponse | ILyricFinderResponseError> => {
  const searchParam = `${artist} ${title}`;
  const linkProvider = `https://www.google.com/search?q=${encodeURIComponent(
    searchParam
  )}+lyrics&ie=UTF-8`;

  const html = await fetch(linkProvider).then(async (body) => {
    return body.text();
  });

  // use cheerio to parse the html and find the text
  const $ = load(html);

  // the result of the class name is different in nodejs environment and browser for google, debug it in server
  const lyrics = $('div[class="hwc"]')
    .find('div[class="BNeawe tAd8D AP7Wnd"]')
    .map((i, value) => {
      return $(value);
    });
  const name = $('span[class="BNeawe tAd8D AP7Wnd"]');
  const artists = $('span[class="BNeawe s3v9rd AP7Wnd"]').map((_i, value) => {
    return $(value);
  });
  const source = $('span[class="uEec3 AP7Wnd"]');

  // if lyric is not exist
  if (!lyrics?.[0]) return { error: true, errorMessage: "Lyric not found." };

  return {
    error: false,
    title: name?.text(),
    artist: artists[1]?.text(),
    lyrics: lyrics[0]?.text(),
    source: source?.text(),
  };
};

export default lyricFinder;
