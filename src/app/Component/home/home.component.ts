import { Component, DoCheck, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/Store/Model/user.model';
import { getUserList } from 'src/app/Store/user/user.selector';
import { deleteUser, getUser, loadUsers, openPopUP } from 'src/app/Store/user/user.actions';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserAuthService } from 'src/app/Service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userlist!: Users[];
  displayedColumns:string[]=["id","name","email","action"];
  filteredUserList:Users[]=[];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  constructor(
    private dialog:MatDialog,
    private store:Store,
    private authService:UserAuthService,
    private router:Router
    ){}

  ngOnInit(){
    this.store.dispatch(loadUsers())
    this.store.select(getUserList).subscribe(item =>{
      this.userlist=item
      this.dataSource=new MatTableDataSource<Users>(this.userlist)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    });
    
  }

  ngDoCheck(){
  }
  title!:string;

  openPopup(code:number,title:string){
    this.store.dispatch(openPopUP());
    this.dialog.open(AddUserComponent,{
      width:'50%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        code:code,
        title:title
      }
    })
    this.title=title
  }

  addUser(){
    this.openPopup(0,'Add user');
  }

  editUser(userId:number){
    this.openPopup(userId,'Edit user');
    this.store.dispatch(getUser({id:userId}))
    
  }

  deleteUser(userid:number){
    this.store.dispatch(deleteUser({id:userid}))
    window.location.reload()
  }

  logout(){
    this.authService.clear()
    this.router.navigate(['/login']);   
  }

  searchUser(text:Event){
    const inputElement=text.target as HTMLInputElement
    const textValue=inputElement.value;

    this.filteredUserList=this.userlist.filter(user =>
      user.firstname.toLowerCase().includes(textValue.toLowerCase())
    );
    this.dataSource= new MatTableDataSource<Users>(this.filteredUserList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.sort;
  }

  

}
