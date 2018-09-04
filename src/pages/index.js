import React from 'react';
import { Link } from 'routes';
import { Layout } from '@components';

export default () => (
  <Layout>
    <h1>Next.js Starter Projects</h1>
    <p>Lets get started.</p>
    <br />
    <Link route="/artigo/test-article-page">
      <a>Go to post page with slug: <code>test-article-page</code></a>
    </Link>
  </Layout>
);
