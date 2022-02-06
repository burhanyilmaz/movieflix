export const ApiKey = '4214fbc2ece3d81fbd2d59aece1e2325';
export const ApiBaseUrl = 'https://api.themoviedb.org/3';
export const ImageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export const Endpoints = {
  movie: (id: number) => `${ApiBaseUrl}/movie/${id}?api_key=${ApiKey}`,
  movies: `${ApiBaseUrl}/discover/movie?sort_by=popularity.desc&api_key=${ApiKey}`,
  genre: `${ApiBaseUrl}/genre/movie/list?language=en-US&api_key=${ApiKey}`,
  search: (query: string, page?: number) =>
    `${ApiBaseUrl}/search/movie?api_key=${ApiKey}&language=en-US&page=${page || 1}&query=${query}`,
  cast: (movieId: number) => `${ApiBaseUrl}/movie/${movieId}/credits?api_key=${ApiKey}`,
  upcomingMovies: (page?: number) =>
    `${ApiBaseUrl}/movie/upcoming?api_key=${ApiKey}&language=en-US&page=${page || 1}`,
  image: (image: string) => `${ImageBaseUrl}/${image}`,
};

export default {};
