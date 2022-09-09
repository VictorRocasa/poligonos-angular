import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Poligono } from './poligono';




@Injectable({
  providedIn: 'root'
})
export class PoligonoService {

  private urlGetPoligonos = 'http://localhost:8080/api/poligonos/CRUD';  // URL to web api

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //HTTP getPoligonos
  getPoligonos() : Observable<Poligono[]>{
    return this.http.get<Poligono[]>(this.urlGetPoligonos)
      .pipe(
        tap(_ => catchError(this.handleError<Poligono[]>('getPoligonos', []))
      ));
  }

  //HTTP post
  adicionarPoligono(poligono: Poligono){

  }

  //HTTP delete
  deletarPoligono(idPoligono:number){

  }

  //HTTP put
  atualizarPoligono(){

  }

  //HTTP getEstoque
  getPoligonosIguais(){

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
