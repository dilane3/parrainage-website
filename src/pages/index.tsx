import Head from "next/head";
import Image from "next/image";
import { Inter, Nunito } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to parrainage</title>
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
        <section className={styles.description}>
          <p>University of Yaounde I</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Comsas
            </a>
          </div>
        </section>

        <section className={styles.center}>
          <div className={styles.title}>
            <p className={nunito.className}>WELCOME TO THE CEREMONY OF</p>
            <p className={nunito.className}>PARRAINAGE</p>
          </div>

          <div className={styles.info}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              totam voluptates cupiditate asperiores. Veritatis dicta voluptatum
              totam iusto perspiciatis, repellendus cum et beatae eveniet
              dignissimos necessitatibus odio est qui sunt adipisci asperiores
            </p>
          </div>
        </section>

        <section className={styles.grid}>
        </section>
      </main>
    </>
  );
}
