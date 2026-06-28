export type IGame = {
  id: string;
  finished_on: string | null;
  format: string[] | null;
  title: string | null;
  played: boolean;
  purchased: boolean | null;
  purchase_date: string | null;
  platform: string[] | null;
  dlcs: IGame[] | null;
};
