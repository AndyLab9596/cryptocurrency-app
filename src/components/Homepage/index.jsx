import { Col, Row, Statistic, Typography } from 'antd';
import React, { Fragment } from 'react';

const { Title } = Typography;

const Homepage = () => {
    return (
        <Fragment>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
                <Col span={12}><Statistic title="Total Total Markets" value="5" /></Col>
            </Row>
        </Fragment>
    );
};

export default Homepage;