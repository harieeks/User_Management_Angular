import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCred, Users } from '../Store/Model/user.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  )

  userRegistration(userdata:Users){
    const apiUrl="http://localhost:8080/api/v1/auth/register"
    return this.http.post(apiUrl,userdata,{headers:this.requestHeader})
  }

  userLogin(userdata:UserCred):Observable<{ user: Users; token: string }> {
    const apiUrl="http://localhost:8080/api/v1/auth/authenticate"
    return this.http.post(apiUrl,userdata,{headers:this.requestHeader}).pipe(
      map((response :any)=>{
        return {
          user: response.user,
          token: response.token,
        };
      })
    )
  }

  getUsers():Observable<Users[]>{
    const apiUrl="http://localhost:8080/api/v1/admin/users"
    return this.http.get<Users[]>(apiUrl);
  }

  deleteById(id:number){
    const apiUrl="http://localhost:8080/api/v1/admin/delete-user/"+id
    return this.http.delete(apiUrl);
  }

  updateUser(id:number,userdata:Users):Observable<Users[]>{
    const apiUrl="http://localhost:8080/api/v1/admin/edit-user/"+id
    return this.http.put<Users[]>(apiUrl,userdata);  
  }

  createUser(userdata:Users):Observable<Users>{
    const apiUrl="http://localhost:8080/api/v1/admin/add-user"
    return this.http.post<Users>(apiUrl,userdata);
  }

  getUserById(id:number):Observable<Users>{
    const apiUrl="http://localhost:8080/api/v1/admin/get-user/"+id;
    return this.http.get<Users>(apiUrl)
  }

  uploadImage(file:FormData):Observable<Users>{
    const apiUrl="http://localhost:8080/api/v1/admin/upload-image"
    return this.http.post<Users>(apiUrl,file);
  }

  getUser():Observable<Users>{
    const apiUrl="http://localhost:8080/api/v1/admin/get-user"
    return this.http.get<Users>(apiUrl);
  }
}
