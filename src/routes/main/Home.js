import styles from './Home.module.scss';
import logo from '@/assets/logo.png';

const Home = () => {
	return (
		<div className={styles.content}>
			<img alt="logo" className={styles.logo} src={logo} />
			<div className={styles.title}>
				THE LEADER IN COSMETICS PACKAGING
			</div>
			<div className={styles.subtitle}>
				Brilliant packaging is integral to the consumer experience. Done
				right it leaves a lasting impression and builds loyalty. It
				showcases the product without ever taking the spotlight itself.
			</div>
			<div className={styles.bottomText}>
				JERHÉL PACKAGING LET'S YOUR BRAND SHINE
			</div>
		</div>
	);
};

export default Home;
