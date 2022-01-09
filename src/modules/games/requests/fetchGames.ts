import { Game } from "../types/Game";
import { RequestParams } from "modules/common/types/RequestParams";
import { PARSED_GAMES } from '../utils/parsed';



export type Params = RequestParams & {
  real?: string;
  provider?: string;
};

export function fetchGames({ 
  page = 1, 
  size = 12,
  real,
  provider,
}: Params): Promise<Game[]> {
  // Emulate fake API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const startIndex = 0;
      const endIndex = page * size;

      const filtered: Game[] = PARSED_GAMES
        .filter((game: Game) => {
          if (!real && !provider) { return true; }
          // check for real
          if (real && !provider) {
            return Object.keys(game.real).includes(real);
          }
          // check for provider
          if (!real && provider) {
            return game.provider === provider;
          }

          if (real && provider) {
            return Object.keys(game.real).includes(real) && game.provider === provider;
          }

          return true;
        })
        .slice(startIndex, endIndex);

      resolve(filtered);
    }, 1000);
  });
}
