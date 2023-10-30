import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/Store/Model/user.model';
import { addUser, getUser, updateUser } from 'src/app/Store/user/user.actions';
import { getIndividualUser } from 'src/app/Store/user/user.selector';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(
    private builder:FormBuilder,
    private ref:MatDialogRef<AddUserComponent>,
    private store:Store
    ){}

  ngOnInit(){
    this.store.select(getIndividualUser).subscribe(res =>{
      this.userForm.setValue({id:res.id,firstname:res.firstname,lastname:res.lastname,email:res.email,password:res.password})

    })

  }
  @Input()
  title!:string;

  userForm=this.builder.group({
    id: this.builder.control(0),
    firstname:this.builder.control('',Validators.required),
    lastname:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.required)

  })

  saveUser(){
    if(this.userForm.valid){
      let count=1

      const _obj:Users={
        id: this.userForm.value.id as number,
        firstname: this.userForm.value.firstname as string,
        lastname: this.userForm.value.lastname as string,
        email: this.userForm.value.email as string,
        password: this.userForm.value.password as string,
        role: 'USER',
        image: ''
      }
      
      if(_obj.id===0){
        console.log("hai");
        
        this.store.dispatch(addUser({inputData:_obj}))
      }else{
        console.log(_obj.id);
        this.store.dispatch(updateUser({inputData:_obj}))
      }
      this.closePopup();
    }
  }
  closePopup(){
    this.ref.close();
  }


}
