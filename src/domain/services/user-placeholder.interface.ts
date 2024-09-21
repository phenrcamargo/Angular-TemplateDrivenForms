import { Observable } from "rxjs";
import { UserPlaceholderVO } from "../value-objects/user-placeholder.vo";

export interface IUserPlaceholderService {
  getUsersPlaceholder(): Observable<UserPlaceholderVO[]>;
}
