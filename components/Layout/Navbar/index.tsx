import React from "react";
import styles from "./Navbar.module.scss";
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
                onClick={() => router.push("/")}
            >Ocean.js</Button>
            <div>
                <Link passHref href={"mailto:stefano.desantis4@libero.it"}><MessageOutlined
                    style={{fontSize: "20px", paddingTop: "4px", paddingBottom:"4px"}}/></Link>
            </div>
        </nav>
    );
};
export default Navbar;