export type blog =
  | {
      title: string;
      date: string;
      summary: string;
      tags: string;
      draft: boolean;
      layout: string;
      // injected
      url?: string;
    }
  | Record<string, any>;
