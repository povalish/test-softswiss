import { Game } from '../types/Game';
import { PARSED_GAMES } from '../utils/parsed';


export function fetchGameDetails(id: string): Promise<Game> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundedGame = PARSED_GAMES.find((game) => game.key === id);
      if (foundedGame) { resolve(foundedGame); }
      else { reject('Not found'); }
    }, 700);
  });
};
