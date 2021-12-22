import React from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { Button } from "antd";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/assets/wave.png" width="18" height="18" alt="logo" />
        <Button
          className={styles.menu}
          type="link"
          onClick={() => router.push("/")}
        >
          Ocean.js
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
