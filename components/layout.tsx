import React,{ ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { useSession } from "next-auth/react";

interface Props {
    children : ReactNode
}

const Layout = ({ children } : Props) => {
    const { status } = useSession();
    return (
        <>
        { status == "authenticated" && <Header /> }
        {children}
        </>
    )
}

export default Layout;