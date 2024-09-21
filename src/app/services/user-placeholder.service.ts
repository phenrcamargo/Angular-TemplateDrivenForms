import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserPlaceholderVO } from "../../domain/value-objects/user-placeholder.vo";
import { IUserPlaceholderService } from "../../domain/services/user-placeholder.interface";

@Injectable({
    providedIn: 'root',
})
export class UsersPlaceholderService implements IUserPlaceholderService {
    constructor(
        private readonly _httpClient: HttpClient
    ) {}

    getUsersPlaceholder(): Observable<UserPlaceholderVO[]> {
        return this._httpClient.get<UserPlaceholderVO[]>('https://jsonplaceholder.typicode.com/users');
    }
}
