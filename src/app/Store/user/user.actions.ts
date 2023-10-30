import { createAction, props } from "@ngrx/store";
import { UserCred, Users } from "../Model/user.model";

export const BEGIN_REGISTER='[auth] begin register';
export const BEGIN_LOGIN='[auth] begin login';
export const LOAD_USER='[load] load users';
export const LOAD_USER_SUCCESS='[load] get users success';
export const LOAD_USER_FAILURE='[load] load users failure';
export const ADD_USER='[add] add users ';
export const ADD_USER_SUCCESS='[add] add users success';
export const Get_USER='[get] get user ';
export const GET_USER_SUCCESS='[get] get user success';
export const OPEN_POPUP='[user page] open pop up'
export const UPDATE_USER='[update] update users ';
export const UPDATE_USER_SUCCESS='[update] update  users success';
export const DELETE_USER='[delete] delete user';
export const DELETE_USER_SUCCESS='[delete] delete user success';
export const UPLOAD_IMAGE='[upload] upload image';
export const UPLOAD_IMAGE_SUCCESS='[upload] image success';
export const Active_USER='[get] active user';
export const Active_USER_SUCCESS='[get] active user success';







export const beginRegister=createAction(BEGIN_REGISTER,props<{userdata:Users}>());
export const beginLogin=createAction(BEGIN_LOGIN,props<{userdata:UserCred}>());

export const loadUsers=createAction(LOAD_USER);
export const loaduserSuccess=createAction(LOAD_USER_SUCCESS,props<{userData:Users[]}>());
export const loadUserFailure=createAction(LOAD_USER_FAILURE,props<{errormessage:string}>());

export const addUser=createAction(ADD_USER,props<{inputData:Users}>())
export const addUserSuccess=createAction(ADD_USER_SUCCESS,props<{inputData:Users}>())

export const updateUser=createAction(UPDATE_USER,props<{inputData:Users}>())
export const updateUserSuccess=createAction(UPDATE_USER_SUCCESS,props<{inputData:Users[]}>())

export const getUser=createAction(Get_USER,props<{id:number}>())
export const getUserSuccess=createAction(GET_USER_SUCCESS,props<{obj:Users}>())

export const openPopUP=createAction(OPEN_POPUP);

export const deleteUser=createAction(DELETE_USER,props<{id:number}>());
export const deleteUserSuccess=createAction(DELETE_USER_SUCCESS,props<{id:number}>())

export const uploadImage=createAction(UPLOAD_IMAGE,props<{file:FormData}>());
export const uploadImageSuccess=createAction(UPLOAD_IMAGE_SUCCESS,props<{user:Users}>());

export const getActiveUser=createAction(Active_USER)
export const getActiveUserSuccess=createAction(Active_USER_SUCCESS,props<{user:Users}>());