import { createEntityAdapter } from "@ngrx/entity";
import { Users, userList } from "../Model/user.model";

// export const UserAdapter=createEntityAdapter<Users>();

// export const UserState:UserModel=UserAdapter.getInitialState();
// export const UserStateList:UserModel=UserAdapter.getInitialState();

export const UserList:userList={
    list: [],
    userObj:{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        id: 0,
        role: "",
        image: ""
    },
    errormessage: ""
}
