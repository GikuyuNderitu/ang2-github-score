import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../interfaces/user';
import 'rxjs'

@Injectable()
export class GithubService {

  constructor(private _http: Http) { }

  getUser(username: string) :Promise<User> {
    return this._http.get(`https://api.github.com/users/${username}`)
    .map( (data : Response) => data.json()).toPromise()
  }

}
