import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ 
  children, 
  title = 'Welcome to Cheetah Coalition',
  description = 'The advanced safari society.' 
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>  
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}