import React from 'react';
import t from 'prop-types';
import { Layout } from '@components';

const Post = ({ url }) => (
  <Layout>
    <h1>Post slug: { url.query.slug }</h1>
  </Layout>
);

Post.propTypes = {
  url: t.object.isRequired,
};

export default Post;
