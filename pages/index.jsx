import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home"

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
      </Head>
      <Header/>
      {/* <h1 className="text-center h-screen bg-primary">FOOD ORDERING</h1> */}
      <Home/>
    </div>
  );
}
