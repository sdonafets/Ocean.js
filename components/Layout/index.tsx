import React, {useState} from "react";
import Navbar from "@/components/Layout/Navbar";
import {Layout as AntdLayout} from "antd";
import TopicMenu from "@/components/Layout/TopicMenu/TopicMenu";
import styles from "./Layout.module.scss"
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();

    const topics = ["Home", "About"];
    const [selectedKey, setSelectedKey] = useState(0);

    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        router.push("/" + topics[key]);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
            theme={"light"}
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