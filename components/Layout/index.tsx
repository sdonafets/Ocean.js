import React from "react";
import {Breadcrumb, Layout as AntLayout, Menu} from "antd";
import {HomeTwoTone} from "@ant-design/icons";

const Layout = ({children}) => {
    return (<AntLayout style={{minHeight:"100vh"}}>
            <AntLayout.Header className={"header"}>
                <div className={"logo"}/>
                <Menu theme={"dark"} mode={"horizontal"} defaultSelectedKeys={["home"]}>
                    <Menu.Item key={"home"}>Dashboard</Menu.Item>
                </Menu>
            </AntLayout.Header>
            <AntLayout style={{paddingRight: '24px'}}>
                <AntLayout.Sider width={200}>
                    <Menu
                        mode={"inline"}
                        defaultSelectedKeys={["home"]}
                        style={{height: "100%", borderRight: 0}}
                    >
                        <Menu.Item key={"home"} icon={<HomeTwoTone/>}>Dashboard</Menu.Item>
                    </Menu>
                </AntLayout.Sider>
                <AntLayout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{margin: "16px"}}>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <AntLayout.Content style={{padding: 24, margin: 0, minHeight: 280, backgroundColor: "#ffffff"}}>
                        {children}
                    </AntLayout.Content>
                </AntLayout>
            </AntLayout>
        </AntLayout>
    );
}
export default Layout;