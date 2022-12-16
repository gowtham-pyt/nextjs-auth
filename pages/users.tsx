import React, { useState, FormEventHandler } from "react";
import { useSession } from "next-auth/react";
import { userAtom } from "../lib/atoms";
import { useAtom } from 'jotai'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {}
 
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


const Users = (props:Props): JSX.Element => {

    const { status, data } = useSession();
    const [ userInfo, setUserInfo ] = useState({
        name:"",
        email:"",
        username:""
    })

    const [ users,setUser ] = useAtom(userAtom)

    const handleSubmit:FormEventHandler = (e) => {
        e.preventDefault();
        setUser([...users,{...userInfo,id:guidGenerator()}])
        setUserInfo({
            name:"",
            email:"",
            username:""
        })
    }   

    const handleDelete = (id:String) => {
        let removeUser = users.filter((user)=> user.id !== id)
        setUser(removeUser)
    }

    console.log('users',users)

    return (
        <div className="card-container">
            <div className="user-container">
                <div className="user-form">
                    <form>
                        <div className="form-control">
                            <label>Name</label>
                            <input 
                                type={"text"}
                                className="user-input"
                                value={userInfo.name}
                                onChange={(e)=>{
                                    setUserInfo({
                                        ...userInfo,
                                        name:e.target.value
                                    })
                                }}
                                name="name" />
                        </div>

                        <div className="form-control">
                            <label>Username</label>
                            <input 
                                type={"text"}
                                className="user-input"
                                value={userInfo.username}
                                onChange={(e)=>{
                                    setUserInfo({
                                        ...userInfo,
                                        username:e.target.value
                                    })
                                }}
                                name="username" />
                        </div>

                        <div className="form-control">
                            <label>Email</label>
                            <input 
                                type={"text"}
                                className="user-input"
                                value={userInfo.email}
                                onChange={(e)=>{
                                    setUserInfo({
                                        ...userInfo,
                                        email:e.target.value
                                    })
                                }}
                                name="email" />
                        </div>

                        <button onClick={handleSubmit}>Add User</button>
                    </form>
                </div>
                <div className="user-list">
                    <List>
                        {
                            users.map((user,index)=>(
                                <ListItem
                                key={index}
                                secondaryAction={
                                    <IconButton onClick={()=>handleDelete(user.id)} edge="end" aria-label="delete">
                                    <DeleteIcon color="success"/>
                                    </IconButton>
                                }
                                >
                                <ListItemAvatar>
                                    <Avatar>
                                    <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.name}
                                    secondary={user.username}
                                    secondaryTypographyProps={{
                                        color:"#ffff"
                                    }}
                                />
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </div>
        </div>
    )
}

export default Users
