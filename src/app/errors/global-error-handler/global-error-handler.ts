import { environment } from './../../../environments/environment';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from './server-log-service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor(private injector: Injector) {
    }
    
    handleError(error: any): void {
        
        console.log('--- Global Error Handler --- ');

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const logServerService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
                        ? location.path()
                        : '';

        const message = error.message ? error.message : error.toString();

        if(environment.production)
            router.navigate(['/error']);

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                                        .map(sf=>sf.toString())
                                        .join('\n');
                console.log(message);
                console.log(stackAsString);
                console.log('Backend information...');
                logServerService
                    .log({ message, url, userName: userService.getUserName(), stack: stackAsString}
                    ).subscribe(()=>{
                        console.log('Error log sent to server...');
                    },
                    err=>{
                        console.log(err);
                        console.log('Fail to send the log to server...');
                    });
                    
            });
    }

}