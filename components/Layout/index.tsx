import React from "react";
import Navbar from "@/components/Layout/Navbar";
import {Layout as AntdLayout} from "antd";
import styles from "./Layout.module.scss"

const Layout = ({children}) => {
    return (
        <div className="App">
            <Navbar/>
            <AntdLayout>
                <AntdLayout.Content className={styles.content}>
                    {children}
                </AntdLayout.Content>
            </AntdLayout>
        </div>
    );
}
export default Layout;