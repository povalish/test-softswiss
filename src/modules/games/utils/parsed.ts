import GamesJSON from '../games.json';
import { Game } from '../types/Game';

export const GAMES_TITLES = Object.keys(GamesJSON);
export const PARSED_GAMES: Game[] = GAMES_TITLES.map((key) => ({
  // @ts-ignore
  ...GamesJSON[key],
  key: key.replace('/', '-'),
}));
