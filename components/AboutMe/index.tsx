import React from "react";
import { Col, Row, Space, Typography } from "antd";
import styles from "./AboutMe.module.scss";
import Link from "next/link";
import Image from "next/image";
import Avatar from "antd/lib/avatar/avatar";

const AboutMe = () => {
  return (
    <Space className={styles.content} direction={"vertical"} size={"large"}>
      <Row justify={"space-between"} align="middle">
        <Col xs={2} sm={6} />
        <Col
          xs={20}
          sm={12}
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={150}
            src={
              <Image
                alt="Picture of the author"
                layout={"fill"}
                src={"/assets/85155592.jpg"}
              />
            }
          />
        </Col>
        <Col xs={2} sm={6} />
      </Row>
      <Row justify={"space-between"} align="middle">
        <Col xs={2} sm={6} />
        <Col
          xs={20}
          sm={12}
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title className={styles.title}>
            Ciao, sono Stefano De Santis.
          </Typography.Title>
        </Col>
        <Col xs={2} sm={6} />
      </Row>
      <div>
        <Row justify={"space-between"} align="middle">
          <Col xs={2} sm={6} />
          <Col
            xs={20}
            sm={12}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography.Text className={styles.description}>
              Sono uno sviluppatore full-stack, un amante del mare, un content
              creator.
            </Typography.Text>
          </Col>
          <Col xs={2} sm={6} />
        </Row>
        <Row justify={"space-between"} align="middle">
          <Col xs={2} sm={6} />
          <Col
            xs={20}
            sm={12}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography.Text className={styles.description}>
              Lavoro come Software Engineer in un azienda bolognese.
            </Typography.Text>
          </Col>
          <Col xs={2} sm={6} />
        </Row>
      </div>
      <Row justify={"start"} align="middle">
        <Col xs={2} sm={6} />
        <Col
          xs={20}
          sm={12}
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Space size={"large"}>
            <Typography.Text className={styles.description}>
              <Link href={"https://github.com/sdonafets/"}>GitHub</Link>
            </Typography.Text>
            <Typography.Text className={styles.description}>
              <Link href={"https://www.linkedin.com/in/stefanodesantis4"}>
                Linkedin
              </Link>
            </Typography.Text>
          </Space>
        </Col>
        <Col xs={2} sm={6} />
      </Row>
    </Space>
  );
};
export default AboutMe;
