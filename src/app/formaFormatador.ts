import { Forma } from "./forma";
import { Poligono } from "./poligono";

export interface FormaFormatador {
    id: number;
    poligonos: Poligono[];
    formas: Forma[];
  }