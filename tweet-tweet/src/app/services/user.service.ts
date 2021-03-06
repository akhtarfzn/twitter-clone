import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.interface';
import { Login } from '../models/login.interface';

const USER_DOMAIN: string = 'http://localhost:3000/api/';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    httpOptions = {
        headers: this.headers
    };
    
    constructor(private http: HttpClient){}

    createUser(user: User): Observable<HttpResponse<User>>{
        console.log(user);
        return this.http.post<User>(`${USER_DOMAIN}signup`, user, { ...this.httpOptions, observe: "response" });
    }   

    loginUser(user: Login): Observable<HttpResponse<Login>>{
        console.log(user);
        return this.http.post<Login>(`${USER_DOMAIN}login`, user, { ...this.httpOptions, observe: "response" });
    }
}