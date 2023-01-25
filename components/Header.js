import BrandIcon from './icons/BrandIcon';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

const headerList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Works',
    path: '/works',
  },
  {
    name: 'About-me',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

function Header() {
  const router = useRouter();
  // console.log('asPath', router.asPath);
  // console.log('Query', router.query);
  return (
    <section className={styles.container}>
      <section className={styles.logo}>
        <BrandIcon />
        <h3 className="heading-4">Header</h3>
      </section>
      <ul className={styles.list}>
        {headerList.map((list) => (
          <li className={router.asPath === list.path && styles.listActive}>
            <Link href={list.path}>{list.name}</Link>
          </li>
        ))}

        {/* <li className={router.asPath === '/' && styles.listActive}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li className={router.asPath === '/about' && styles.listActive}>
          <Link href="/about">About-me</Link>
        </li>
        <li>Contacts</li> */}
        <li>EN</li>
      </ul>
    </section>
  );
}

export default Header;
