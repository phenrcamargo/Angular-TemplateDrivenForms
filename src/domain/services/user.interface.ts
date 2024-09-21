import { Observable } from "rxjs";
import { UserEntity } from "../entities/user.entity";

export interface IUserService {
  getUsers(): Observable<UserEntity[]>;
}
