import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/dashboard.module.css";

import { Layout, Row, Col, Button, Space, Form, Input, Modal, Card } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';
import { useRouter } from 'next/dist/client/router';

const { Content } = Layout;

export default function cadastrarVoo() {

    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [precoVoo, setPrecoVoo] = useState("");
    const [assentosDisponiveis, setAssentosDisponiveis] = useState("");
    const [assentosOcupados, setAssentosOcupados] = useState("");
    const router = useRouter();

    function success() {
        Modal.success({
          content: 'Cadastro realizado com sucesso!',
          onOk() {
            router.push("/");
          }       
        });
    }

    const cadastrar = () => {
        axios.post("/classes/Voo", {
            origem,
            destino,
            precoVoo,
            assentosDisponiveis,
            assentosOcupados,
            companhiaAerea: { 
                "__type": "Pointer",
                "className": "CompanhiaAerea",
                "objectId": "xt70aFHB9j"}
        }).then(reponse => {
            console.log('Cadastro realizado!');
        })
    }

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
                    <Form onFinish={cadastrar}>
                        <Space direction="horizontal">
                        <Form.Item name="origem">
                        <span style={{ fontWeight: 'bold' }}>Origem:</span>
                        <Input defaultValue={origem} onChange={(input) => setOrigem(input.target.defaultValue) } size="large" allowClear/>
                        </Form.Item>
                        <Form.Item name="destino">
                        <span style={{ fontWeight: 'bold' }}>Destino:</span>
                        <Input defaultValur={destino} onChange={(input) => setDestino(input.target.defaultValue) } size="large" allowClear/>
                        </Form.Item>
                        <Form.Item name="precoVoo">
                        <span style={{ fontWeight: 'bold' }}>Preço:</span>
                        <Input defaultValue={precoVoo} onChange={(input) => setPrecoVoo(input.target.defaultValue) } size="large" allowClear/>
                        </Form.Item>
                        <Form.Item name="assentosDisponiveis">
                        <span style={{ fontWeight: 'bold' }}>Assentos Disponíveis:</span>
                        <Input defaultValue={assentosDisponiveis} onChange={(input) => setAssentosDisponiveis(input.target.defaultValue) } size="large" allowClear/>
                        </Form.Item>
                        <Form.Item name="assentosOcupados">
                        <span style={{ fontWeight: 'bold' }}>Assentos Ocupados:</span>
                        <Input defaultValue={assentosOcupados} onChange={(input) => setAssentosOcupados(input.target.defaultValue) } size="large" allowClear/>
                        </Form.Item> 
                        </Space>
                        <Form.Item>
                        <Space type="vertical">
                            <Button type="primary" htmlType="submit" onClick={success} icon={<SaveOutlined />}>Cadastrar</Button>
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
