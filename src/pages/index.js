import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from '@components';

import { fetchExample } from 'reducers/example/action-creators';

const Home = props => (
  <Layout className="home">
    <div className="box">
      <h1 className="box__title">{props.title}</h1>
      <br />
      <hr />
      <button type="button" onClick={props.fetchTest}>Redux dispatch title</button>
    </div>
  </Layout>
);

Home.propTypes = {
  title: t.string,
  fetchTest: t.func,
};

const mapStateToProps = ({ example }) => ({
  title: example.title,
});

const mapDispatchToProps = dispatch => ({
  fetchTest() {
    dispatch(fetchExample('Sending Title to Dispatch'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
