import Head from "next/head";
import Image from "next/image";
import { Inter, Nunito } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import image1 from "/public/illustrations/graduation-hat.png";
import image2 from "/public/illustrations/books-pile.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
        <Header />

        <section className={styles.center}>
          <div className={styles.title}>
            <p className={nunito.className}>WELCOME TO THE</p>
            <p className={nunito.className}>SPONSORSHIP CEREMONY</p>
          </div>

          <div className={styles.info}>
            <p>
              The Sponsorship Ceremony is an event that takes place every year.
              The aim of this event is to welcome the new students of the
              University of Yaounde I in the Computer Science Department and
              give them the opportunity to meet their godfathers and godmothers.
            </p>
          </div>

          <motion.div
            style={{
              position: "absolute",
              left: -100,
            }}
            initial={{
              top: -70,
            }}
            animate={{
              top: -20,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src={image1}
              alt="graduation hat"
              width={200}
              height={200}
              className={styles.image1}
            />
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              right: 0,
            }}
            initial={{
              top: -70,
            }}
            animate={{
              top: -20,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src={image2}
              alt="books pile"
              width={150}
              height={150}
              className={styles.image2}
            />
          </motion.div>
        </section>

        <section className={styles.controls}>
          <Link href="/parrainage">
            <button className={styles.button}>Start Attributions</button>
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
