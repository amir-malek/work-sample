// @ts-nocheck
import * as React from 'react';
import {useEffect, useState} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {selectOpen, selectUser, setOpen} from '../../../../redux/slices/userDialogSlice';
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {CardActionArea, InputAdornment} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import {Check, Clear, Edit} from "@mui/icons-material";
import axios from "axios";


export default function User() {
    const open = useAppSelector(selectOpen);
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch()
    const [editable, setEditable] = useState({
        name: false,
        bio: false
    })
    const [inputs, setInputs] = useState({
        name: '',
        bio: ''
    })

    useEffect(() => {
        if (open) {
            setInputs({
                name: user && user.name,
                bio: user && user.bio
            })
        }
        setEditable({
            name: false,
            bio: false
        })
    }, [open])

    const submit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        await axios.put(`${process.env.NEXT_PUBLIC_MOCKAPI_BASE_URL}/users/${user.id}`, {
            name: inputs.name,
            bio: inputs.bio
        });
        dispatch(setOpen(false))
    }

    const handleClose = () => {
        dispatch(setOpen(false));
    };

    return (
        <Dialog onClose={handleClose} open={open} scroll={"body"}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <DialogTitle>Edit User</DialogTitle>
                <div>
                    <IconButton onClick={handleClose}>
                        <Clear/>
                    </IconButton>
                    <IconButton onClick={submit}>
                        <Check/>
                    </IconButton>
                </div>
            </div>
            <Card raised={false} sx={{height: '100%'}}>
                <CardActionArea disableRipple sx={{height: '100%'}}>
                    <CardMedia
                        sx={{maxHeight: 400}}
                        component="img"
                        image={user && user.avatar}
                        alt={user && user.name}
                    />
                    <CardContent sx={{height: '50%'}}>
                        <TextField disabled={!editable.name} sx={{width: '100%', marginBottom: 2}} variant={"outlined"}
                                   value={inputs.name} defaultValue={inputs.name} onChange={e => {
                            setInputs({...inputs, name: e.target.value})
                        }} InputProps={{
                            endAdornment: <InputAdornment position={"end"}>
                                <IconButton onClick={() => {
                                    setEditable({...editable, name: !editable.name})
                                }}>
                                    <Edit/>
                                </IconButton>
                            </InputAdornment>
                        }}/>
                        <TextField disabled={!editable.bio} sx={{width: '100%'}} multiline value={inputs.bio}
                                   defaultValue={inputs.bio} onChange={e => {
                            setInputs({...inputs, bio: e.target.value})
                        }} InputProps={{
                            endAdornment: <InputAdornment position={"end"}>
                                <IconButton onClick={() => {
                                    setEditable({...editable, bio: !editable.bio})
                                }}>
                                    <Edit/>
                                </IconButton>
                            </InputAdornment>
                        }}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Dialog>
    );
}
