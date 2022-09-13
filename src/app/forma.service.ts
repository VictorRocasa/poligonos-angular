import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FormaFormatador } from './formaFormatador';

@Injectable({
  providedIn: 'root'
})
export class FormaService {

  private url = 'http://localhost:8080/api/formas/CRUD/';  // URL to web api

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //HTTP getPoligonos
  getFormas() : Observable<FormaFormatador[]>{
    return this.http.get<FormaFormatador[]>(this.url)
      .pipe(catchError(this.handleError<FormaFormatador[]>('getPoligonos', [])
      ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
