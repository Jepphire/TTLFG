export class User {
  constructor(
    public email?: string,
    public id?: string,
    private _token?: string,
    private _tokenExpiration?: Date,
    public displayName?: string
  ) {}

  get token() {
    if(!this._tokenExpiration || new Date() > this._tokenExpiration) {
      return null;
    }
    return this._token
  }
}
