import React, {useState} from "react";
import Navbar from "@/components/Layout/Navbar";
import {Layout as AntdLayout} from "antd";
import TopicMenu from "@/components/Layout/TopicMenu/TopicMenu";
import styles from "./Layout.module.scss"

const Layout = ({children}) => {
    const topics = ["First topic", "Second topic", "Third topic"];
    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState("0");
    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );
    return (
        <div className="App">
            <Navbar menu={Menu}/>
            <AntdLayout>
                <AntdLayout.Content className={styles.content}>
                    {children}
                </AntdLayout.Content>
            </AntdLayout>
        </div>
    );
}
export default Layout;