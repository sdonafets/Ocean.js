import React from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { Button } from "antd";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <Image src="/assets/wave.png" width="18" height="18" alt="logo" />
        Ocean.js
      </div>
    </nav>
  );
};
export default Navbar;
