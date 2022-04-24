import {Container, Grid} from '@mui/material'
import AppBar from './AppBar';
import {ReactNode} from "react";
import UserDialog from '../content/users/profile/UserDialog';

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {

    return <>
        <AppBar/>
        <UserDialog/>
        <Container>
            {children}
        </Container>
    </>
}