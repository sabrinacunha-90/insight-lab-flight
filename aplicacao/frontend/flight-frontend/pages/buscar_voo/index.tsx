import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/dashboard.module.css";

import { Layout, Row, Col, Select, Button, Space, Form, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';
import { useRouter } from 'next/dist/client/router';

const { Content } = Layout;
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export default function buscarVoo() {
  const [voos, setVoos] = useState([]);

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
                <Card>
                <Form>
                    <Space direction="horizontal">
                      <Form.Item name="origem">
                        <Select
                          size="large"
                          name="origem"
                          showSearch
                          allowClear
                          style={{ width: 200 }}
                          placeholder="Origem"
                          onChange={onChange}
                        > {Array.from(new Set(voos.map(voo => voo.origem))).map(objectId => {
                          return <option value={objectId}>{objectId}</option>
                        })} 
                        </Select>
                      </Form.Item>

                      <Form.Item name="destino">
                        <Select
                          size="large"
                          name="destino"
                          showSearch
                          allowClear
                          style={{ width: 200 }}
                          placeholder="Destino"
                          onChange={onChange}
                        > {Array.from(new Set(voos.map(voo => voo.destino))).map(objectId => {
                          return <option value={objectId}>{objectId}</option>
                        })}   
                        </Select>
                      </Form.Item>
                      </Space>  
                      
                      <Form.Item>
                      <Space type="vertical">
                        <Link href="/listar_voos">
                        <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Buscar</Button>
                        </Link>      
                      </Space>
                      </Form.Item>   
                  </Form>
                  </Card>
              </Row>              
              </Content>
          </Layout>
      </Layout>
    </Layout>
  );
}
