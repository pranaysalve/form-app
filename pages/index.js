import Head from "next/head";
import App from "@/forms/formapp";

export default function Home() {
  console.log("process", process.env.MONGOURI);
  return (
    <>
      <Head>
        <title>Dashboard | Updating....</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex justify-center flex-row bg-gray-100 min-h-screen"> */}
      <main className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="w-96 h-full">
          <App />
        </div>
      </main>
    </>
  );
}
