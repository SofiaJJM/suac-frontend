import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.user;
    const password = this.form.value.password;
    if (usuario =='123' && password=='123'){

    }else{
      this.error();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña invalido', 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  

}
