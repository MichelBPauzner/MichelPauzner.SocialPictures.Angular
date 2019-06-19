import { AlertService } from './alert.service';
import { Component, Input } from '@angular/core';
import { Alert, AlertType } from './alert';

@Component({
    selector: 'ap-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent{
    
    @Input() timeout =3000;
    alerts: Alert[] = [];
    
    
    constructor(private alertService: AlertService){
        this.alertService
            .getAlert()
            .subscribe(alert=>{
                if(!alert){
                    this.alerts = [];
                    return;
                } else {
                    this.alerts.push(alert);
                    setTimeout(() => this.removeAlert(alert), this.timeout);
                }

            });

     }

     removeAlert(alertToBeRemoved: Alert){
         this.alerts = this.alerts.filter(alert => alert != alertToBeRemoved);

     }

     getAlertClass(alert: Alert){
         if(!alert){
             return '';
         }

         switch (alert.alertType){
            case AlertType.DANGER:
                 return 'alert alert-danger';
            case AlertType.INFO:
                return 'alert alert-info';
            case AlertType.WARNING:
                return 'alert alert-warning';
            default:
                return 'alert alert-success';
         }
     }
     
}