import { GameFilter } from "../types/GameFilter";
import GamesJSON from '../games.json';
const GAMES_TITLES = Object.keys(GamesJSON);



export function fetchFilterProvider(): Promise<GameFilter[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filters = new Set<GameFilter>();

      GAMES_TITLES.forEach((key) => {
        // @ts-ignore
        filters.add(GamesJSON[key].provider as string);
      });

      resolve([...filters]);
    }, 1000);
  });
};

export function fetchFilterReal(): Promise<GameFilter[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filters = new Set<GameFilter>();

      GAMES_TITLES.forEach((key) => {
        // @ts-ignore
        const reals: string[] = Object.keys(GamesJSON[key].real);
        reals.forEach((real) => filters.add(real));
      });      

      resolve([...filters]);
    }, 1000);
  });
};
