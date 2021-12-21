import React from "react";
import {Col, Row, Space, Typography} from "antd";
import styles from "./AboutMe.module.scss"
import Link from "next/link";
import Image from "next/image";
import Avatar from "antd/lib/avatar/avatar";

const AboutMe = () => {
    return (
        <Space className={styles.content} direction={"vertical"} size={"large"}>
            <Row justify={"space-between"}>
                <Col span={6}/>
                <Col span={12}>
                    <Avatar size={200}
                            src={<Image alt="Picture of the author" layout={"fill"} src={"/assets/85155592.jpg"}/>}/>
                </Col>
                <Col span={6}/>
            </Row>
            <Row justify={"space-between"}>
                <Col span={6}/>
                <Col span={12}>
                    <Typography.Title className={styles.title}>Ciao, sono Stefano De Santis.</Typography.Title>
                </Col>
                <Col span={6}/>
            </Row>
            <div>
                <Row justify={"space-between"}>
                    <Col span={6}/>
                    <Col span={12}>
                        <Typography.Text className={styles.description}>Sono uno sviluppatore full-stack, un amante del
                            mare, un content
                            creator.</Typography.Text>
                    </Col>
                    <Col span={6}/>
                </Row>
                <Row justify={"space-between"}>
                    <Col span={6}/>
                    <Col span={12}>
                        <Typography.Text className={styles.description}>Lavoro come Software Engineer in un azienda
                            bolognese.</Typography.Text>
                    </Col>
                    <Col span={6}/>
                </Row>
            </div>
            <Row justify={"start"}>
                <Col span={6}/>
                <Col span={12}>
                    <Typography.Text className={styles.description}>
                        <Link href={"https://github.com/sdonafets/"}>GitHub</Link>
                    </Typography.Text>
                </Col>
                <Col span={6}/>
            </Row>
        </Space>
    );
}
export default AboutMe;