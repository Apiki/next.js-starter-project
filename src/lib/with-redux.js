import React, { Component } from 'react';
import configureStore from 'redux-flow/store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const maybeCreateStore = (initialState) => {
  if (isServer) {
    return configureStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
};

export default App => (
  class AppWithRedux extends Component {
    static async getInitialProps(appContext) {
      const store = maybeCreateStore();

      appContext.ctx.store = store;

      let props = {};
      if (typeof App.getInitialProps === 'function') {
        props = await App.getInitialProps(appContext);
      }

      return {
        ...props,
        initialState: store.getState(),
      };
    }

    constructor(props) {
      super(props);

      this.store = maybeCreateStore(props.initialState);
    }

    render() {
      return <App {...this.props} store={this.store} />;
    }
  }
);
