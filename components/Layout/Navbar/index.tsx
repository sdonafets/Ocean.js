import React, {useState} from "react";
import {Button, Drawer, Typography} from "antd";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "@/assets/wave.png";

const Navbar = ({menu}) => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className={styles.navbar}>
            <Button
                className={styles.menu}
                type="ghost"
                icon={<Image src={logo} className={styles.logo} alt="logo"/>}
                onClick={() => setVisible(true)}
            />
            <Drawer
                title="Ocean.js"
                placement="left"
                onClose={() => setVisible(false)}
                visible={visible}
            >
                {menu}
            </Drawer>
            <Typography className={styles.title}>
                <Typography.Title  className={styles.detail}>
                    Ocean.js
                </Typography.Title>
            </Typography>
        </nav>
    );
};
export default Navbar;