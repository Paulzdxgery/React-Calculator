

export type TipoSeccion = 'home' | 'simple' | 'completa' | 'buscador';

export interface Receta {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
}