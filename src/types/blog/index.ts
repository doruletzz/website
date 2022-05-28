export interface IPost {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string;
  user: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}
