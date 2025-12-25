// Game Types for Math Generator Components
export interface MathQuestion {
  question: string;
  answer: number;
  options?: number[];
  display: string;
}

export interface GameSettings {
  operation: string;
  difficulty: string;
  questionCount: number;
}
