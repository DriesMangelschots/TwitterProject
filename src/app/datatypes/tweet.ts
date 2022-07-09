export interface ITweet {
    id: number;
    content: string;
    likedBy: string[];
    commentedBy: string[];

  }
export class Tweet implements ITweet {
    id: number;
    content: string;
    likedBy: string[];
    commentedBy: string[];

    constructor(obj: ITweet) {
        Object.assign(this, obj);
    }
}