import Document, { Html,Head, Main, NextScript } from 'next/document';
import stylesheet from '../styles/Homepage.less';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
            <style dangerouslySetInnerHTML={{ __html:stylesheet}}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};