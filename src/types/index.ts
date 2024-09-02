export type Tree = {
  title: string;
  slug: string;
  category: {
    id: number;
    title: string;
    color: string;
  };
  description: string;
  question: Question;
};

export type Answer = {
  id: number;
  text: string;
  description?: string;
  question?: Question;
  result?: {
    text: string;
  };
};

export type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

export type GivenAnswer = {
  questionId: number;
  answerId: number;
};
