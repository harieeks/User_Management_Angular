import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken',jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') as string;
  }

  public clear(){
    localStorage.clear();
  }

  public isLogged(){
    return this.getToken();
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  public getUser(){
    return localStorage.getItem('user') as string;
  }
}
