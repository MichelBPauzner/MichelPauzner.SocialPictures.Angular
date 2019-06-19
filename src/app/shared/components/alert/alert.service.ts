import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Alert, AlertType } from './alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterChangeRoute = false;

    constructor(router: Router){
        router.events.subscribe(event=>{
            if(event instanceof NavigationStart){
                if(this.keepAfterChangeRoute){
                    this.keepAfterChangeRoute = false;
                } else {
                    this.clear();
                }
            }
        });

    }

    success(message: string, keepAfterChangeRoute: boolean = false ){
        this.alert(AlertType.SUCCESS, message, keepAfterChangeRoute);
    }

    warning(message: string, keepAfterChangeRoute: boolean = false){
        this.alert(AlertType.WARNING, message, keepAfterChangeRoute);
    }

    danger(message: string, keepAfterChangeRoute: boolean = false){
        this.alert(AlertType.DANGER, message, keepAfterChangeRoute);
    }

    info(message: string, keepAfterChangeRoute: boolean = false){
        this.alert(AlertType.INFO, message, keepAfterChangeRoute);
    }

    private alert(alertType: AlertType, message: string, keepAfterChangeRoute: boolean){
        this.keepAfterChangeRoute = keepAfterChangeRoute;
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }

    clear(){
        this.alertSubject.next(null);
    }

}