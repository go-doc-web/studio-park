import { apolloClient } from '../lib/apolloClient';
import GetMenu from '../query/queries/getMenus.graphql';
import type { GetMenuQuery } from '../generated/graphql';

import Image from 'next/image';
import styles from './page.module.css';

export const revalidate = 60;

export default async function Home() {
  const { loading, data } = await apolloClient.query<GetMenuQuery>({
    query: GetMenu,
  });
  console.log('data', data);
  console.log('loading', loading);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {data?.menus?.map((menu_item, index) => {
          return <div key={index}>{menu_item?.name}</div>;
        })}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
