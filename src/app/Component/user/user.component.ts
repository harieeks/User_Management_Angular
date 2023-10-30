import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserAuthService } from 'src/app/Service/user-auth.service';
import { UserService } from 'src/app/Service/user.service';
import { getActiveUser, uploadImage } from 'src/app/Store/user/user.actions';
import { getIndividualUser } from 'src/app/Store/user/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  constructor(
    private authService:UserAuthService,
    private service:UserService,
    private store:Store,
    private router:Router
    ){}
  
  user: any; 
  apiurl:any;
  img:any;

  ngOnInit() {
    this.store.dispatch(getActiveUser())
    this.store.select(getIndividualUser).subscribe(res=>{
      this.user=res
      this.img=res.image
      console.log(res.image);
      
      this.apiurl=`http://localhost:8080/static/images/${this.user.image}`
    })
    
    console.log(this.apiurl);
    
  }
  
  formData=new FormData();
  onChange(event:any){
   
    
    if(event.target.files.length > 0){
      const file=event.target.files[0]
      console.log(event);
      this.formData.append('file',file)
     
    }
  }

  uploadUserImage(){
    this.store.dispatch(uploadImage({file:this.formData}));
  }

  logout(){
    this.authService.clear()
    this.router.navigate(['/login']);   
  }

}
