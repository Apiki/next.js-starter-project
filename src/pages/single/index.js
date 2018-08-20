import React from 'react';
import t from 'prop-types';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Single = props => (
  <ul>
    {props.shows.map(({ show }) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/single?id=${show.id}`}>
          <a>{show.name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

Single.propTypes = {
  shows: t.arrayOf(t.object),
};

Single.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Single;
