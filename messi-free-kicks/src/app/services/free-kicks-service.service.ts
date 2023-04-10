import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreeKicks } from '../module/free-kicks-list';

@Injectable({
  providedIn: 'root'
})
export class FreeKicksServiceService {

  private url = 'http://localhost:3000/'

  private httOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // GET
  get freeKickList(): Observable<Array<FreeKicks>> {

    return this.http.get<Array<FreeKicks>>(`${this.url}list-free-kicks`, this.httOptions)
    .pipe(
      res => res,
      error => error
    )
  }
}
