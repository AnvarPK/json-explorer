import { Col, Row, Statistic } from 'antd';
import React from 'react';

const Stastitics = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Array Types" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Object Types" value={112893} precision={2} />
    </Col>
  </Row>
);
export default Stastitics;