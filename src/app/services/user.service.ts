import { Observable } from "rxjs";
import { UserEntity, UserEntityProps } from "../../domain/entities/user.entity";
import { IUserService } from "../../domain/services/user.interface";
import { UserEntityHandler } from "../../domain/handlers/user-entity.handler";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService implements IUserService {
  private readonly usersList: UserEntityProps[] = [
    {
      name: 'Usuário 1',
      username: 'usuario1',
      email: 'usuario1@example.com',
      password: 'senha1',
      birthDate: '01/12/1990',
      state: 13,
      musics: [
        { title: 'Música 1', band: 'Banda A', genre: 8, isFavorite: false },
        { title: 'Música 2', band: 'Banda B', genre: 11, isFavorite: false },
        { title: 'Música 3', band: 'Banda C', genre: 9, isFavorite: true },
      ],
    },
    {
      name: 'Usuário 2',
      username: 'usuario2',
      email: 'usuario2@example.com',
      password: 'senha2@44',
      birthDate: '02/02/1995',
      state: 50,
      musics: [
        { title: 'Música 4', band: 'Banda X', genre: 1, isFavorite: false },
        { title: 'Música 5', band: 'Banda Y', genre: 7, isFavorite: true },
        { title: 'Música 6', band: 'Banda Z', genre: 12, isFavorite: false },
      ],
    },
    {
      name: 'Usuário 3',
      username: 'usuario3',
      email: 'usuario3@example.com',
      password: 'senha3@123@122',
      birthDate: '03/03/2000',
      state: 42,
      musics: [
        { title: 'Easy', band: 'Commodores', genre: 2, isFavorite: true },
        { title: 'True', band: 'Spandau Ballet', genre: 2, isFavorite: false },
        { title: "If You Don't Know Me by Now", band: 'Simply Red', genre: 2, isFavorite: false },
      ],
    },
];


  getUsers(): Observable<UserEntity[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        const userEntityList: UserEntity[] = [];
        this.usersList.forEach((userProps) => {
          userEntityList.push(UserEntityHandler.create(userProps));
        })
        observer.next(userEntityList);
        observer.complete();
      }, 3000);
    });
  }
}
