import Document, { Html,Head, Main, NextScript } from 'next/document';
const pagesWithoutReact = ['/'];
export default class MyDocument extends Document {
  render() {
    const { __NEXT_DATA__ } = this.props;
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          {!pagesWithoutReact.includes(__NEXT_DATA__.pathname) ? <NextScript /> : null}        </body>
      </Html>
    )
  }
};