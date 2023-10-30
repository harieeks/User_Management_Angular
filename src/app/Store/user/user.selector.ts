import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Users, userList } from "../Model/user.model";

const getUsers=createFeatureSelector<userList>('user')

export const getUserList=createSelector(getUsers,(state)=>{
    return  state.list;
})

export const getIndividualUser=createSelector(getUsers,(state)=>{
    return state.userObj;
})
