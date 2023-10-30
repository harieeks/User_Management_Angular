import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/Store/Model/user.model';
import { beginRegister } from 'src/app/Store/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder:FormBuilder,private store:Store){

  }

  registerForm=this.builder.group({
    firstname:this.builder.control('',Validators.required),
    lastname:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.required)
   
  })
  proceedRegister(){
    if(this.registerForm.valid){
      const _userObj:Users={
        firstname: this.registerForm.value.firstname as string,
        lastname: this.registerForm.value.lastname as string,
        email: this.registerForm.value.email as string,
        password: this.registerForm.value.password as string,
        id: 0,
        role: 'USER',
        image: ''
      }
      this.store.dispatch(beginRegister({userdata:_userObj}))  
    }
  }

}
