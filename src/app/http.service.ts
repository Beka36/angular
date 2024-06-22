import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable, catchError } from "rxjs";
import { map } from "rxjs";

@Injectable()
export class HttpService{
    
    errorMessage: String = "";
    
    constructor(private http: HttpClient){ }

    getUsers(): Observable<User[]> {
        return this.http.get('assets/users.json').pipe(map((data:any)=>{
            let userList = data["userList"];

            return userList.map(function(user: any): User {
                return new User(user.userName, user.userAge);
            });
        }),
     
        catchError(err => {
        console.log(err);
        this.errorMessage = err.message;
        return[];
    }))

};

}