import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
const name = "Yoshi Code.";
export const siteTitle = "Next.js blog";
function Layout(props) {
  const { children, home } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              alt="aaaa"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.jpg"
              alt="aaaa"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">ホームへ戻る</Link>}
    </div>
  );
}

export default Layout;
