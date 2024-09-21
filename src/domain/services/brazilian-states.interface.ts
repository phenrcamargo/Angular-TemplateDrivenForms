import { Observable } from "rxjs";
import { CountryStateVO } from "../value-objects/country-state.vo";

export interface IBrazilianStatesService {
  getStates(): Observable<CountryStateVO[]>;
}
