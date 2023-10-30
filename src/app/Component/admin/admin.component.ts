import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/Store/Model/user.model';
import { getUserList } from 'src/app/Store/user/user.selector';
import { loadUsers } from 'src/app/Store/user/user.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private dialog:MatDialog,private store:Store){}


}
