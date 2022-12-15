import React, { useState, FormEventHandler } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { signOut } from "next-auth/react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {}
 

const Profile = (props:Props): JSX.Element => {

    const { status, data } = useSession();
    console.log("status",status)
    console.log("data",data)

    if (status == "unauthenticated") {
        Router.replace("/auth/login")
    }

    const logout = () => {
        signOut({})
    }

    return (
        <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://wallpapers.com/images/high/concrete-road-and-trees-fall-5vi4ha1kit559ela.webp"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     { data?.user?.name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    { data?.user?.email }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={logout}>Logout</Button>
                </CardActions>
                </Card>
        </div>
    )
}

export default Profile
