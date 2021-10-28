import Link from 'next/link';
import dscegov from 'cegov-antd'
import "cegov-antd/dist/index.css"
import type { AppProps } from 'next/app'

import { ConfigProvider } from 'antd';
import pt_BR from 'antd/lib/locale/pt_BR'

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ConfigProvider locale={pt_BR}>
        <Component {...pageProps} />
      </ConfigProvider>
  )
}

export default MyApp
