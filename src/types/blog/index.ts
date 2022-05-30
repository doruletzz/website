import { IEntity } from "../entity";
import { IError } from "../utils/error";

export interface IPost extends IEntity {
  slug: string;
  coverImg?: string;
  title: string;
  summary: string;
  content: string;
  user?: string;
  tags?: Array<Tag>;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum Tag {
  programming,
  blog,
  design,
  react,
  books,
}

export interface PostError extends IError {}
