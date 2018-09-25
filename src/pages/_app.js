import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';

// import '@styles/index.scss';
import withRedux from 'lib/with-redux';

class CustomApp extends App {
  render() {
    const {
      Component,
      pageProps,
      store,
    } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(CustomApp);
