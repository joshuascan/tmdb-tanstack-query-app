export type TvShowResponse = {
  results: TvShow[];
  total_pages: number;
};

export type TvShow = {
  id: number;
  name: string;
  first_air_date: string;
  overview?: string;
  vote_average: number;
  poster_path: string;
};

export type TvShowDetails = {
  name?: string;
  first_air_date?: string;
  last_air_date?: string;
  overview?: string;
  vote_average?: number;
  poster_path?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  genres?: { id: number; name: string }[];
};

export type MovieResponse = {
  results: Movie[];
  total_pages: number;
};

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview?: string;
  vote_average: number;
  poster_path: string;
};

export type MovieDetails = {
  budget?: number;
  genres?: { id: number; name: string }[];
  title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  vote_average?: number;
};

export type CastDetails = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

export type CreditsResponse = {
  cast: CastDetails[];
};

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}
