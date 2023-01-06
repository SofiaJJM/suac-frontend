import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    LoginComponent
  ],
  exports:[
    LoginComponent
  ],
  imports:[
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule { }
