import React from 'react';

import { IBlogPost } from '@/interfaces/blog';
import { customFetch } from '@/utils/customFetch';

type Props = {
  posts?: Array<IBlogPost>;
};

export async function getStaticProps(__context: any) {
  try {
    const res = await customFetch('/api?resourceType=articles');
    return {
      props: {
        posts: res.data,
      },
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('error');
    // eslint-disable-next-line no-console
    console.error(err);
    return {
      props: {
        posts: null,
      },
    };
  }
}

const Posts = ({ posts }: Props) => {
  return (
    <div>
      {posts?.map((el, i) => (
        <pre key={i}>{JSON.stringify(el, null, 2)}</pre>
      ))}
    </div>
  );
};

export default Posts;