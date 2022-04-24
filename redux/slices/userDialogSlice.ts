import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState as AppState} from "../store";

type User = {
    createdAt: Date,
    name: string,
    avatar: string,
    bio: string,
    id: number
}

export interface UserDialogState {
    user: User | undefined,
    open: boolean
}

const initialState: UserDialogState = {
    user: undefined,
    open: false
}

export const userDialogSlice = createSlice({
    name: 'userDialog',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload
        }
    }
})

export const {setOpen, setUser} = userDialogSlice.actions;


export const selectUser = (state: AppState) => state.userDialog.user
export const selectOpen = (state: AppState) => state.userDialog.open

export default userDialogSlice.reducer;