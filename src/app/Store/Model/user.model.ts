import { EntityState } from "@ngrx/entity";

export interface Users{
    id:number
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    role:string;
    image:string
}

// export interface singUser{
//     firstname:string;
//     lastname:string;
//     email:string;
//     password:string;
// }

export interface UserCred{
    email:string;
    password:string;
}

// export interface UserInfo{
//     firstname:string;
//     lastname:string;
//     email:string;
// }

export interface UserData{
    id:number,
    firstname:string;
    lastname:string;
    email:string;
    password:string;

}

export interface userList{
    list:Users[],
    userObj:Users,
    errormessage:string
}

// export interface UserModel extends EntityState<Users>{

// }