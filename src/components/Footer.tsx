import styles from "@/styles/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} - Made with{" "}
      <span style={{ color: "red", margin: "0 5px" }}>❤️</span> by{" "}
      <a
        href="https://dilane3.com"
        target="_blank"
        style={{ marginLeft: 7 }}
        rel="noreferrer"
      >
        {" "}
        Dilane3
      </a>
      @lias D3
    </footer>
  );
};
