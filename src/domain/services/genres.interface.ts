import { Observable } from "rxjs";
import { GenresVO } from "../value-objects/genres.vo";

export interface IGenresService {
  getGenres(): Observable<GenresVO[]>;
}
