import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {selectOpen, selectUser, setOpen} from '../../../../redux/slices/userDialogSlice';
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import {Check, Clear} from "@mui/icons-material";


export default function User() {
    const open = useAppSelector(selectOpen);
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch()

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
                    <IconButton>
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
                        <Typography gutterBottom variant="h5" component="div">
                            {user && user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user && user.bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Dialog>
    );
}
