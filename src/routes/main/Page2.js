import React from 'react';
import styles from './Main.module.scss';
const Page2 = () => {
	return (
		<div className={`${styles.page2} ${styles.page} disableScroll`}>
			<div className={styles.right}>
				<h3 className={styles.title}>FROM CONCEPT TO CONSUMER</h3>
				<div className={styles.tags}>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>CONCEPT</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>DESIGN</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>TOOLING</span>
					</div>
				</div>
				<p>
					We empower YOU to let your creativity run wild. From concept
					design to 3D modeling and manufacturing of the final
					product, our specialists will work with you every step of
					the way.
				</p>
				<p>
					Jerhél’s team of creative talent has unparalleled industry
					experience. We can bring your idea to life and make your
					imagination a reality.
				</p>
			</div>
			<div className={styles.left}>
				{/* <video loop autoPlay src="/video/sketch.mp4" /> */}
				<img alt="sketch" src="/video/sketch.gif" />
			</div>
		</div>
	);
};
export default Page2;
