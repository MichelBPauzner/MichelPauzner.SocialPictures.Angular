import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [ SignInComponent, SignUpComponent, HomeComponent ],
    imports: [ 
        ReactiveFormsModule, 
        CommonModule,
        FormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule {

}