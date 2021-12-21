import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../../../public/assets/wave.png";
import {useRouter} from "next/router";
import {Button} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import Link from "next/link";

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
            <div>
                <Link passHref href={"mailto:stefano.desantis4@libero.it"}><MessageOutlined/></Link>
            </div>
        </nav>
    );
};
export default Navbar;