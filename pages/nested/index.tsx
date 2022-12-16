import React, { useState, FormEventHandler } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";



interface User {
    id:String,
    name:String
}

interface Props {
    users: User[]
}

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    return {
      props: { users: json },
    };
  };
 

const Nested = (props:Props): JSX.Element => {
    const { users } = props;
    return (
        <div className="card-container">
            <List>
                    {users &&
                    users.map((user,index) => {
                        return (
                        <Link href={`nested/${user.id}`} key={index}>
                            <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={user.name} />
                            </ListItemButton>
                            </ListItem>
                        </Link>
                        );
                    })}
                </List>
        </div>
    )
}

export default Nested
