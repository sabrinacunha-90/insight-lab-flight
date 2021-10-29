import '../styles/globals.css'

import Link from 'next/link';
import dscegov from 'cegov-antd'
import "cegov-antd/dist/index.css"
import type { AppProps } from 'next/app'

import { ConfigProvider, Row, Col, Divider, Button } from 'antd';
import { SearchOutlined, SaveOutlined } from '@ant-design/icons'
import pt_BR from 'antd/lib/locale/pt_BR'

const { Header } = dscegov();

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ConfigProvider locale={pt_BR}>
        <Header>
          <Row>
            <Col span={12}>
              <Link href="/buscar_voo">
                <Button icon={<SearchOutlined />} type="primary">Buscar Voo</Button>
              </Link>
            </Col>
            <Col span={12}>
              <Link href="/cadastrar_voo">
                <Button icon={<SaveOutlined />} type="primary">Cadastrar Voo</Button>
              </Link>
            </Col>
          </Row>
        </Header>
        <Component {...pageProps} />
      </ConfigProvider>
  )
}

export default MyApp
