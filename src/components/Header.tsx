import styles from "@/styles/Home.module.css";
import Image from "next/image";
import comsasLogo from "/public/comsas.png";
import uy1Logo from "/public/uy1.png";

export const Header = () => {
  return (
    <header className={styles.description}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Image src={uy1Logo} alt="COMSAS" width={40} height={50} style={{ marginRight: 20 }} />
        <p>University of Yaounde I</p>
      </div>
      <div>
        <a
          href="#"
          rel="noopener noreferrer"
          style={{ verticalAlign: "middle" }}
        >
          By <Image src={comsasLogo} alt="COMSAS" width={70} height={70} />
        </a>
      </div>
    </header>
  );
};
