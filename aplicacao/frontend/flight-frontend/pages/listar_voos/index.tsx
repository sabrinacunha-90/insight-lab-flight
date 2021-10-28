import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import styles from "../../styles/dashboard.module.css";


import { Layout, Button, Col, Row, Card, Form} from 'antd';
import { IoAirplane } from '@ant-design/icons';
import axios from '../../utils/axios';
import { useRouter } from 'next/dist/client/router';

const { Content } = Layout;

export default function ListarVoos() {
    const [voos, setVoos] = useState([]);
    const router = useRouter();

    const atualizarVoo = () => {
        axios.get("/classes/Voo", {
             
        }).then(reponse => {
            router.push("/dashboard");
        })
    }

    useEffect(() => {   
        axios
          .get("/classes/Voo", {
            params: {
              include: "companhiaAerea"
            }
          })
          .then((response) => {
            setVoos(response.data.results);
            console.log(response.data.results);
          });
      }, []);   

    return(
        <Layout>
            <Layout style={{ padding: "0 24px 24px" }}>
            <Content>
            <div>
            <Row className={styles.conainer}>
                <h1 className={styles.title} align="middle">
                    Voos Disponíveis
                </h1>
            </Row>
            </div>
            <div>
            <Row gutter={16}>  {
                voos.map((voo) => (<Col span={8}>
                    <Card title="AAA" bordered={true}>
                        <Form onFinish={atualizarVoo}>
                        <p><b>Origem: </b> {voo.origem}</p>
                        <p><b>Destino: </b> {voo.destino}</p>
                        <p><b>Preço: R$</b> {voo.precoVoo}</p>
                        <p><b>Assentos Disponíveis: </b> {voo.assentosDisponiveis}</p>
                        <p><b>Assentos Ocupados: </b> {voo.assentosOcupados}</p>
                        <Button htmlType="submit" type="primary">Comprar</Button>
                        </Form>
                    </Card>
                </Col>))}   
            </Row> 
            </div>
            </Content>
            </Layout>
        </Layout>
    );
}