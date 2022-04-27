import Profile from '../components/content/users/profile';
import type {ReactElement} from "react";
import Layout from '../components/layout';
import {GetServerSideProps} from "next";
import axios, {AxiosError, AxiosResponse} from 'axios';
import {Grid} from "@mui/material";

type UserData = {
    createdAt: Date,
    name: string,
    avatar: string,
    bio: string,
    id: number
}[]

interface HomeProps {
    users: UserData
}


export default function Home({users}: HomeProps) {


    return <Grid container item spacing={5} sx={{marginTop: 5, marginBottom: 5}}>
        {users.map(user => {
            return <Grid key={user.id} item md={4} xs={12}>
                <Profile user={user}/>
            </Grid>
        })}
    </Grid>
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>
        {page}
    </Layout>
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    let res: AxiosResponse<UserData>;
    let users: UserData;

    try {
        res = await axios.get(`${process.env.NEXT_PUBLIC_MOCKAPI_BASE_URL}/users`)
        users = res.data
    } catch (e: Error | AxiosError) {
        users = []
    }

    return {
        props: {
            users
        }
    }
}