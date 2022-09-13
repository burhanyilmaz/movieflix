import CookieIcon from './CookieIcon';
import FavoriteIcon from './FavoriteIcon';
import SearchIcon from './SearchIcon';

export { default as Star } from './StarIcon';
export { default as Back } from './BackIcon';

export const TabBarIcons = {
  Home: CookieIcon,
  Favorite: FavoriteIcon,
  Search: SearchIcon,
};

export const Icons = {
  ...TabBarIcons,
};
