import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GodFatherCard } from "@/components/GodFatherCard";
import { GodSonCard } from "@/components/GodSon";
import { Confetti } from "@/components/Confetti";

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
        <Header />

        <Confetti />

        <section className={styles.sponsorshipSection}>
          <GodFatherCard />

          <GodSonCard index={0} />
          <GodSonCard index={1} />
          <GodSonCard index={2} />
          <GodSonCard index={3} />
        </section>

        <Footer />
      </main>
    </>
  );
}
