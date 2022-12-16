import React, { useState, FormEventHandler } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'


interface User {
    id:String,
    name:String,
    username:String,
    email:String
}

interface Props {
    user: User
}
export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const json = await response.json()

    const paths = json.map((user:User) => {
        return {
            params: {id:user.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context: { params: { id: any; }; }) => {
    const id = context.params.id

    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

    const json = await response.json()

    return {
        props: {user: json}
    }

}

const Details = (props:Props): JSX.Element => {
    const { user } = props;
    return (
        <Stack spacing={5} m={20}>
        <Typography variant='h3'>{user.name}</Typography>
        <Typography variant='subtitle1' color='gray'>{user.username}</Typography>
        <Typography variant='subtitle1' color='gray'>{user.email}</Typography>
    </Stack>
    )
}

export default Details
