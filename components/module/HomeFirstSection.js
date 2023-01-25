import AvatarImage from '../../assets/AvatarImage';
import styles from './Home.module.css';
import { useRouter } from 'next/router';

function HomeSection() {
  const router = useRouter();
  return (
    <section className={styles.firstContainer}>
      <section>
        <h1 className="heading-1">
          Elias is a web designer and front-end developer
        </h1>
        <button onClick={() => router.push('/contact')}>Contact me!!</button>
      </section>
      <section>
        <AvatarImage />
      </section>
    </section>
  );
}

export default HomeSection;
