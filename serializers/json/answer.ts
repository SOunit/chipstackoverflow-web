import Answer from "@@/models/Answer";
import { fromComment, toComment } from "@@/serializers/json/comment";
import {
  fromUserProfile,
  toUserProfile,
} from "@@/serializers/json/userProfile";

export function fromAnswer(answer: Answer): Record<string, any> {
  return {
    ...answer,
    author: fromUserProfile(answer.author),
    comments: answer.comments.map((comment) => fromComment(comment)),
    createdAt: answer.createdAt.toJSON(),
    lastUpdatedAt: answer.lastUpdatedAt.toJSON(),
  };
}

export function toAnswer(json: Record<string, any>): Answer {
  return (
    {
      ...json,
      author: toUserProfile(json.author),
      comments: json.comments.map((commentJSON: any) => toComment(commentJSON)),
      createdAt: new Date(json.createdAt),
      lastUpdatedAt: new Date(json.lastUpdatedAt),
    } as Answer
  );
}
