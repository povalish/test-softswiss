
type GameCollections = {
  novelty: number;
  popularity: number;
  slots?: number;
  all: number;
}

type GameReal = {
  [key: string]: { id: number };
}

export type Game = {
  title: string;
  provider: string;
  collections: GameCollections;
  real: GameReal;
  demo?: string;
  key: string;
}

export type Games = {
  [key: string]: Game;
}
