import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GodFatherCard } from "@/components/GodFatherCard";
import { GodSonCard } from "@/components/GodSon";
import { Confetti } from "@/components/Confetti";
import { generateColor, sleep } from "../../utils/index";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import image from "/public/illustrations/good.png";

const godFathers = [
  {
    id: 1,
    name: "ARMEL DILANE KOMBOU M.",
    level: "Master 1",
    color: generateColor(),
    godSons: [
      {
        id: 1,
        name: "ALEX MARTIN MELINGA",
        level: "Licence 1",
        color: generateColor(),
      },
      {
        id: 2,
        name: "ROBIN DES BOIS",
        level: "Licence 2",
        color: generateColor(),
      },
      {
        id: 3,
        name: "REMI KAMGA",
        level: "Licence 2",
        color: generateColor(),
      },
    ],
  },
  {
    id: 2,
    name: "EDMOND GHISLAIN MAKOLLE",
    level: "Master 1",
    color: generateColor(),
    godSons: [
      {
        id: 1,
        name: "RAPHAEL KAMGA",
        level: "Licence 1",
        color: generateColor(),
      },
      {
        id: 2,
        name: "JUNIOR KELINGUE",
        level: "Licence 2",
        color: generateColor(),
      },
      {
        id: 3,
        name: "JULIEN KAMGA",
        level: "Licence 2",
        color: generateColor(),
      },
    ],
  },
];

export default function Parrainage() {
  // State
  const [position, setPosition] = useState(0);
  const [action, setAction] = useState("show");

  // UseEffect
  useEffect(() => {
    (async () => {
      setAction("show");

      await sleep(10000);

      setAction("confetti");
    })();
  }, [position]);

  // Some handlers
  const handleNext = () => {
    setAction("hidden");

    (async () => {
      await sleep(1500 * godFathers[position].godSons.length);

      setPosition((prev) => prev + 1);
    })();
  };

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

        {position !== godFathers.length && <Confetti action={action} />}

        {position !== godFathers.length ? (
          <section className={styles.sponsorshipSection}>
            <GodFatherCard data={godFathers[position]} action={action} />

            {godFathers[position].godSons.map((godSon) => (
              <GodSonCard
                key={godSon.id}
                index={godSon.id - 1}
                data={godSon}
                action={action}
              />
            ))}

            {action === "confetti" && (
              <button className={styles.nextButton} onClick={handleNext}>
                Next
              </button>
            )}
          </section>
        ) : (
          <section className={styles.sponsorshipSection}>
            <motion.div
              style={{
                position: "absolute",
              }}
              initial={{
                top: -20,
              }}
              animate={{
                top: 20,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image
                src={image}
                alt="Thank you"
                width={200}
                height={200}
                style={{
                  marginTop: -100,
                }}
              />
            </motion.div>

            <h1 className={styles.title}>Thank you for your participation</h1>

            <p className={styles.description}>
              We will contact you as soon as possible
            </p>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
