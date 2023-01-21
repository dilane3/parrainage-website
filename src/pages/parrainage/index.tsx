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
import DATA from "../../../public/data/data.json";
import image from "/public/illustrations/good.png";

type GodFatherType = {
  id: number;
  name: string;
  color: string;
  godSons: {
    id: number;
    name: string;
    color: string;
  }[];
};

export default function Parrainage() {
  // State
  const [position, setPosition] = useState(0);
  const [action, setAction] = useState("show");
  const [godFathers, setGodFathers] = useState<GodFatherType[]>([]);

  // UseEffect
  useEffect(() => {
    handleFormatData(DATA);
  }, []);

  useEffect(() => {
    if (position !== godFathers.length) {
      (async () => {
        setAction("show");

        console.log(2300 * godFathers[position].godSons.length + 2000);

        await sleep(2300 * godFathers[position].godSons.length + 2000);

        setAction("confetti");
      })();
    }
  }, [position, godFathers]);

  // Some handlers
  const handleNext = () => {
    setAction("hidden");

    (async () => {
      await sleep(5000);

      setPosition((prev) => prev + 1);
    })();
  };

  const handleFormatData = (
    data: { godfather: string; godsons: string[] }[]
  ) => {
    const godFathers: GodFatherType[] = [];

    data.forEach((godFather, index) => {
      const godFatherData: GodFatherType = {
        id: index + 1,
        name: godFather["godfather"],
        color: generateColor(),
        godSons: [],
      };

      godFather.godsons.forEach((godSon, index) => {
        godFatherData.godSons.push({
          id: index + 1,
          name: godSon,
          color: generateColor(),
        });
      });

      godFathers.push(godFatherData);
    });

    setGodFathers(godFathers);
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

        {position !== godFathers.length && (
          <Confetti
            action={action}
            godSonNumber={godFathers[position].godSons.length}
          />
        )}

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
        ) : godFathers.length > 0 ? (
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

            <h1 className={styles.title}>THANK YOU SO MUCH.</h1>

            <p className={styles.description}>
              We are so happy to have you in this ceremony. We will contact you
              as soon as possible.
            </p>
          </section>
        ) : null}

        <Footer />
      </main>
    </>
  );
}
