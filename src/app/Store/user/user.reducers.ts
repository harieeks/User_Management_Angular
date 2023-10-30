import { createReducer, on } from "@ngrx/store";
import { UserList } from "./user.state";
import { addUserSuccess, deleteUserSuccess, getActiveUserSuccess, getUserSuccess, loadUserFailure, loaduserSuccess, openPopUP, updateUserSuccess, uploadImageSuccess } from "./user.actions";

const _userReducer=createReducer(UserList,
    on(loaduserSuccess,(state,action)=>{
        return{
            ...state,
            list:[...action.userData],
            errormessage:''
        }
    }),
    on(loadUserFailure,(state,action)=>{
        return{
            ...state,
            list:[],
            errormessage:action.errormessage
        }
    }),
    on(addUserSuccess,(state,action)=>{
        return{
            ...state,
            list: [...state.list,action.inputData],
            errormessage:''

        }
    }),
    on(getUserSuccess,(state,action)=>{
        return{
            ...state,
            userObj:action.obj,
            errormessage:''
        }
    }),
    on(openPopUP,(state,action)=>{
        return{
            ...state,
            userObj:{
                id:0,
                firstname:'',
                lastname:'',
                email:'',
                password:'',
                role:'',
                image:''
            }
        }
    }),
    on(updateUserSuccess,(state,action)=>{
        
        return{
            ...state,
            list: action.inputData,
            errormessage:''
        }
    }),
    on(deleteUserSuccess,(state,action)=>{
        const newdata=state.list.filter(o =>o.id !==action.id)
        
        return{
            ...state,
            list:newdata,
            errormessage:''
        }
    }),
    on(uploadImageSuccess,(state,action)=>{
        return{
            ...state,
            userObj:action.user,
            errormessage:''
        }
    }),
    on(getActiveUserSuccess,(state,action)=>{
        return{
            ...state,
            userObj:action.user,
            errormessage:''
        }
    })

)

export function UserReducer(state:any,action:any){
  return _userReducer(state,action);
}