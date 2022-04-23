import {Container, Grid} from '@mui/material'
import AppBar from './AppBar';
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {

    return <>
        <AppBar/>
        <Container>
            {children}
        </Container>
    </>
}