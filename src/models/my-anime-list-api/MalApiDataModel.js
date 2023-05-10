let unavailableString = 'Unavailable.';

// Free Img from Vecteezy.com
let unavailableImg = 'https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg';

// Easter Egg? I don't know if this will ever slip out haha.
let unavailableTrailer = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';

class Anime {
  constructor(id, title, type, synopsis, picture, characters, trailer, englishTitle, episodes, status, aired, premiered,
              broadcast, volumes, chapters, published, authors, serialization, producers, studios, source, genres, duration,
              rating, score, scoreStats, ranked, popularity, favorites) {

    // Guaranteed properties from MyAnimeList API

    this.id = id;
    this.title = title;
    this.type = type;

    // All other properties

    this.synopsis = synopsis ?? unavailableString;
    this.picture = picture ?? unavailableImg;
    this.characters = characters ?? [];
    this.trailer = trailer ?? unavailableTrailer;
    this.englishTitle = englishTitle ?? unavailableString;
    this.episodes = episodes ?? unavailableString;
    this.status = status ?? unavailableString;
    this.aired = aired ?? unavailableString;
    this.premiered = premiered ?? unavailableString;
    this.broadcast = broadcast ?? unavailableString;
    this.volumes = volumes ?? unavailableString;
    this.chapters = chapters ?? unavailableString;
    this.published = published ?? unavailableString;
    this.authors = authors ?? [];
    this.serialization = serialization ?? unavailableString;
    this.producers = producers ?? [];
    this.studios = studios ?? [];
    this.source = source ?? unavailableString;
    this.genres = genres ?? [];
    this.duration = duration ?? unavailableString;
    this.rating = rating ?? unavailableString;
    this.score = score ?? unavailableString;
    this.scoreStats = scoreStats ?? unavailableString;
    this.ranked = ranked ?? unavailableString;
    this.popularity = popularity ?? unavailableString;
    this.favorites = favorites ?? unavailableString;
  }
}
