export interface ILogin {
  email: string;
}
export class User implements ILogin {
  email: string;

  constructor(obj: ILogin) {
    Object.assign(this,obj);
  }
}
