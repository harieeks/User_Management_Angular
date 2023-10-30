import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/Service/user.service";
import { addUser, addUserSuccess, beginLogin, beginRegister, deleteUser, deleteUserSuccess, getActiveUser, getActiveUserSuccess, getUser, getUserSuccess, loadUserFailure, loadUsers, loaduserSuccess, updateUser, updateUserSuccess, uploadImage, uploadImageSuccess} from "./user.actions";
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { showalert } from "../Common/App.Action";
import { Router } from "@angular/router";
import { UserAuthService } from "src/app/Service/user-auth.service";
import { Store } from "@ngrx/store";
import { Users } from "../Model/user.model";

@Injectable()
export class UserEffect{
    constructor(
        private actions$:Actions,
        private service:UserService,
        private route:Router,
        private auth_service:UserAuthService
        ){}

    _userRegister=createEffect(()=>
    this.actions$.pipe(
        ofType(beginRegister),
        exhaustMap((action)=>{
            return this.service.userRegistration(action.userdata).pipe(
                map(()=>{
                    this.route.navigate(['login'])
                    return showalert({message:"Registered success fully",resulttype:'pass'})
                }),
                catchError((_error)=>of(showalert({message:"Registration failed",resulttype:'fail'})))
            )
        })
    )
    );

    _userLogin=createEffect(()=>
    this.actions$.pipe(
        ofType(beginLogin),
        mergeMap((action)=>
        this.service.userLogin(action.userdata).pipe(
            mergeMap((response:{ user: Users; token: string })=>{
                this.auth_service.setToken(response.token);
                // this.auth_service.setUser(response.user);
                if(response.user.role ==='USER'){
                    this.route.navigate(['user'])
                }else if(response.user.role ==='ADMIN'){
                    this.route.navigate(['home'])
                }
                return [showalert({ message: 'Login success fully', resulttype: 'pass' })];
            }),
            
        )
        )
    )
    )

    _loadUsers=createEffect(()=>
    this.actions$.pipe(
        ofType(loadUsers),
        exhaustMap((action)=>{
            return this.service.getUsers().pipe(
                map((data)=>{
                    return loaduserSuccess({userData:data})
                }),
                catchError((_error)=>of(loadUserFailure({errormessage:_error.message})))
            )
        })
    )
    )

    _addUser=createEffect(()=>
    this.actions$.pipe(
        ofType(addUser),
        switchMap((action)=>{
            return this.service.createUser(action.inputData).pipe(
                map((data)=>{

                    return addUserSuccess({inputData:data})
                }),
                catchError((_error)=>of(showalert({message:"Failed to create user",resulttype:'fail'})))

            )
        })
    )
    )

    _getUser=createEffect(()=>
    this.actions$.pipe(
        ofType(getUser),
        exhaustMap((action)=>{
            return this.service.getUserById(action.id).pipe(
                map((data:Users)=>{
                    return getUserSuccess({obj:data})
                }),
                catchError((_error)=>of(showalert({message:"Failed to get user",resulttype:'fail'})))
            )
        })
    )
    )

    _updateUser=createEffect(()=>
    this.actions$.pipe(
        ofType(updateUser),
        switchMap((action)=>{
            return this.service.updateUser(action.inputData.id,action.inputData).pipe(
                switchMap((data)=>{
                    return of(updateUserSuccess({inputData:data}))
                }),
                catchError((_error)=>of(showalert({message:"Failed to update user",resulttype:'fail'})))
            )
        })
    )
    )

    _deleteUser=createEffect(()=>
    this.actions$.pipe(
        ofType(deleteUser),
        exhaustMap((action)=>{
            return this.service.deleteById(action.id).pipe(
                switchMap((data)=>{
                    if(data){
                        return [
                            deleteUserSuccess({ id: action.id }),
                            loadUsers() 
                        ];
                    }else{
                        return of(showalert({ message: 'Failed to delete user', resulttype: 'fail' }));
                    }
                })
            )
        })
    )
    )

    _uploadImage=createEffect(()=>
    this.actions$.pipe(
        ofType(uploadImage),
        exhaustMap((action)=>{
            return this.service.uploadImage(action.file).pipe(
                switchMap((data)=>{
                    return of(uploadImageSuccess({user:data}))
                }),
                catchError((_error)=>of(showalert({message:"Failed to upload image",resulttype:'fail'})))
            )
        })
    )
    )

    _getActiveUser=createEffect(()=>
    this.actions$.pipe(
        ofType(getActiveUser),
        exhaustMap((action)=>{
            return this.service.getUser().pipe(
                map((data)=>{
                    return getActiveUserSuccess({user:data})
                })
            )
        })
    )
    )

    
}