export interface IUser {
  image: string;
  twitterName: string;
  country: string;
  city: string;
}
export class User implements IUser {
  image: string;
  twitterName: string;
  country: string;
  city: string;

  constructor(obj: IUser) {
      Object.assign(this,obj);
  }
}


