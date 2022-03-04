import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"


export default function Layout({children}){
    return(
        <>
        <Head>
            <link rel="shortcut icons" href="/images/favicon.ico" />
            <title>PokeNext</title>
        </Head>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}