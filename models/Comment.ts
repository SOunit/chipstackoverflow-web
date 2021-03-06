import UserProfile from "@@/models/UserProfile";

export default interface Comment {
  id: CommentId;
  body: CommentBody;
  likes: number;
  dislikes: number;
  liked: boolean;
  disliked: boolean;
  author: UserProfile;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export type CommentId = string & {
  _CommentIdBrand: never;
};

export type CommentBody = string & {
  _CommentBodyBrand: never;
};
