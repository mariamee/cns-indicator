import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-cil items-center ujstify center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>ONDA CNS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <div className=" bg-white rounded-2xl shadow-2xl flex w-2/3 MAX-W-4xl">
            {/*  Sign in Section */}
            <div></div>
            {/*  Caroussel Section */}
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
