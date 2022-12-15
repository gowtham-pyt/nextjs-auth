 import NextAuth, { NextAuthOptions } from "next-auth";
 import CredentialsProvider from "next-auth/providers/credentials";
 const authOptions:  NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            type:'credentials',
            credentials: {
                // email: {
                //     label:"Email",
                //     type:"email"
                // },
                // password: {
                //     label:"Password",
                //     type:"password"
                // }
            },
            authorize(credentials,req){
                const { email, password } = credentials as {
                    email: string,
                    password: string
                };
                if (email !== "test@gmail.com" || password !== "12345") {
                    throw new Error("Invalid credential")
                }

                return {
                    id:'1',
                    name:"User Test",
                    email:"test@gmail.com",
                    username:"test@"
                }
            }
        })
    ],
    pages: {
        signIn:"/auth/login",
        signOut:"/auth/login"
    }
 }

 export default NextAuth(authOptions)