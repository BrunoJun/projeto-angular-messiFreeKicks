import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreeKicks } from '../module/free-kicks-list';

@Injectable({
  providedIn: 'root'
})
export class FreeKicksService {

  private url = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  // GET
  get freeKickList(): Observable<Array<FreeKicks>> {

    return this.http.get<Array<FreeKicks>>(`${this.url}list-free-kicks`)
    .pipe(
      res => res,
      error => error
    )
  }
}
