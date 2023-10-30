import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserCred } from 'src/app/Store/Model/user.model';
import { beginLogin } from 'src/app/Store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder:FormBuilder,private store:Store){}

  registerForm=this.builder.group({
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.required)  
  })

  proceedLogin(){
    if(this.registerForm.valid){
      const _userObj:UserCred={
        email: this.registerForm.value.email as string,
        password: this.registerForm.value.password as string      
      }
      this.store.dispatch(beginLogin({userdata:_userObj}))
    }
  }


}
