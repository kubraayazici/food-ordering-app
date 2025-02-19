import Head from "next/head";
import Home from "./home"

export default function Index() {
  return (
    <div className="bg-black">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </Head>
      {/* <h1 className="text-center h-screen bg-primary">FOOD ORDERING</h1> */}
      <Home/>
    </div>
  );
}
