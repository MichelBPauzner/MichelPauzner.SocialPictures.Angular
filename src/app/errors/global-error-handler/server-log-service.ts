import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';

const API = environment.LogApiUrl;

@Injectable({
    providedIn: 'root'
})
export class ServerLogService{

    constructor(private http: HttpClient){

    }

    log(serverLog: ServerLog){
       return this.http.post(API + '/infra/log', serverLog);

    }
}