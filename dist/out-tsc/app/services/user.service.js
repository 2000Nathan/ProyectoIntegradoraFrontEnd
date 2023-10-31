import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '/api/users/';
    }
    //Servidio para registrar un usuario
    signIn(user) {
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}signin`, user);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
//# sourceMappingURL=user.service.js.map