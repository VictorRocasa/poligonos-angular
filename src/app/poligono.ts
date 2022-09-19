import { Forma } from "./forma";

export interface Poligono {
    id: number;
    lados: number;
    tamanho: number;
    dataCriacao: Date;
    ultimaModificacao: Date; 
    forma: Forma;
  }