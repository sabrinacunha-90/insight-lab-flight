import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/dashboard.module.css";

import { Layout, Row, Col, Select, Divider, Button, Tooltip, DatePicker, Space, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';
import { useRouter } from 'next/dist/client/router';

const { Content } = Layout;
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export default function Dasboard() {

  const [voos, setVoos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("/classes/Voo").then((response) => {
      setVoos(response.data.results);
    });
  }, []);

  return (
    <Layout>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
            <Content>
              <Row className={styles.container}>
                <h1 className={styles.title}>
                  Insight Lab Flight
                </h1>
                <Col>
                <h2 className={styles.description}>
                  Buscar Voo
                </h2>
                </Col>
                <div>
                    <Space direction="horizontal">
                      <div>
                      <Select
                        name="origem"
                        showSearch
                        allowClear
                        style={{ width: 200 }}
                        placeholder="Origem"
                        onChange={(value) => setVoos(value)}
                      > {
                        voos.map((voo) => (
                          <Option key={voo.objectId} value={voo.origem}>{voo.origem}</Option>
                        ))}  
                      </Select>
                      </div>
                      <div>
                      <Select
                        name="destino"
                        showSearch
                        allowClear
                        style={{ width: 200 }}
                        placeholder="Destino"
                        onChange={(value) => setVoos(value)}
                      > {
                        voos.map((voo) => (
                          <Option key={voo.objectId} value={voo.destino}>{voo.destino}</Option>
                        ))}  
                      </Select>
                      </div>
                      <div>
                      <DatePicker onChange={onChange} picker="selecione a data" />
                      </div>
                    </Space>    
                    <Divider/>
                    <Space type="vertical">
                    <Link href="/listar_voos">
                    <Button type="primary" icon={<SearchOutlined />}>Pesquisar</Button>
                    </Link>      
                    </Space>
                  </div>
              </Row>              
              </Content>
          </Layout>
      </Layout>
    </Layout>
  );
}
