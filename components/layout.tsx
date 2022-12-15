import React from "react";
import Header from "./header";
import Footer from "./footer";
import type { AppProps } from 'next/app'

const Layout = ({ children } : AppProps) => {
    return (
        <>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        </>
    )
}

export default Layout;