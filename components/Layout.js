import Container from './Container';
import Header from './Header';
import GithubIcon from './icons/GithubIcon';
import Line from './Line';
import styles from './Layout.module.css';
import Link from 'next/link';

function Layout(props) {
  const { children } = props;
  return (
    <section
      style={{
        display: 'flex',
        maxWidth: 1366,
        margin: 'auto',
      }}
    >
      <section style={{ marginLeft: 17, width: 170 }}>
        <section className={styles.icons}>
          <Line />
          <Link href="https://nextjs.org/docs/api-reference/next/router">
            <GithubIcon />
          </Link>
        </section>
      </section>
      <section>
        <Container>
          <Header />
          <main>{children}</main>
        </Container>
        <hr />
        <Container>
          <footer>© Copyright 2022. Made by Elias</footer>
        </Container>
        {/* Footer */}
      </section>
    </section>
  );
}

export default Layout;
