import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "@/assets/wave.png";
import { useRouter } from "next/router";
import { Button, Input } from "antd";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className={styles.navbar}>
            <Button
                className={styles.menu}
                type="ghost"
                icon={<Image src={logo} className={styles.logo} alt="logo"/>}
                onClick={() => router.push("/")}
            />
            <Input.Search placeholder="Ricerca" onSearch={(z)=>console.log(z)} enterButton style={{ width: 200 }}/>
        </nav>
    );
};
export default Navbar;