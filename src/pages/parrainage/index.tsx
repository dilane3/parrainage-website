import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Parrainage() {
  return (
    <>
      <Head>
        <title>Parrainage</title>
        <meta
          name="description"
          content="Welcome to the parrainage 2023 of University of Yaounde in Computer Science"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Parrainage</h1>
      </main>
    </>
  );
}
