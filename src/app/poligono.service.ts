import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Poligono } from './poligono';
import { ContadorPoligono } from './contadorPoligono';




@Injectable({
  providedIn: 'root'
})
export class PoligonoService {

  private url = 'http://localhost:8080/api/poligonos/CRUD/';  // URL to web api

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //HTTP getPoligonos
  getPoligonos() : Observable<Poligono[]>{
    return this.http.get<Poligono[]>(this.url)
      .pipe(catchError(this.handleError<Poligono[]>('getPoligonos', [])
      ));
  }

  //HTTP post
  adicionarPoligono(poligono:Poligono): Observable<Poligono> {
    return this.http.post<Poligono>(this.url, poligono, this.httpOptions).pipe(catchError(this.handleError<Poligono>('addPoligono')));
  }

  //HTTP delete
  deletarPoligono(idPoligono:number): Observable<Poligono> {
    const url = `${this.url}apagar/${idPoligono}`;
  
    return this.http.delete<Poligono>(url, this.httpOptions).pipe(catchError(this.handleError<Poligono>('deletePoligono')));
  }

  //HTTP put
  atualizarPoligono(param:string): Observable<any> {
    return this.http.put(this.url+'editar'+param, this.httpOptions).pipe(catchError(this.handleError<any>('updatePoligono')));
  }

  //HTTP getEstoque
  listarEstoque() : Observable<ContadorPoligono[]>{
    return this.http.get<ContadorPoligono[]>(this.url+'agrupamento')
      .pipe(catchError(this.handleError<ContadorPoligono[]>('getPoligonos', [])
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
