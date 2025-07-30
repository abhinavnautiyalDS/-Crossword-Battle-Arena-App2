export type Clue = {
  id: number;
  clue: string;
  answer: string;
  direction: "across" | "down";
  position: [number, number]; // [row, col]
  points: number;
};

export type Puzzle = {
  id: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  size: number;
  clues: Clue[];
};

export type GridState = {
  [key: string]: {
    letter: string;
    isPlayer: boolean;
  };
};

export type Difficulty = "easy" | "medium" | "hard";

export type GameStatsData = {
  total_games: number;
  player_wins: number;
  ai_wins: number;
  ties: number;
  win_rate: number;
  avg_player_score: number;
  avg_ai_score: number;
  difficulty_stats: {
    easy: number;
    medium: number;
    hard: number;
  };
  recent_games: {
    id: number;
    difficulty: string;
    mode: string;
    player_score: number;
    ai_score: number;
    winner: string;
    duration: number;
    created_at: string;
  }[];
};
