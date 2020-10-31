import Document, { Html,Head, Main, NextScript } from 'next/document';
import stylesheet from '../styles/Homepage.less';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};