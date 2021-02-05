import React from 'react';

import styles from './Main.module.scss';
import icon1 from '@/assets/main_page_5/icon_1.png';
import icon2 from '@/assets/main_page_5/icon_2.png';
import icon3 from '@/assets/main_page_5/icon_3.png';
import right from '@/assets/main_page_5/right.png';

const Page5 = () => {
	return (
		<div className={`${styles.page5} ${styles.page} disableScroll`}>
			<div className={styles.left}>
				<div className={styles.title}>PRODUCT LAUNCH PROGRAM</div>
				<div className={styles.divider} />
				<p>
					A dedicated Project Coordinator oversees every facet of your
					project and will keep you up to date every step of the way.
				</p>
				<p>
					We have the flexibility and attentiveness to deliver what
					you need when you need it with short lead times and quick
					product turnaround.
				</p>
				<p>Click below to explore more.</p>
				<div className={styles.bottomMenu}>
					<img
						alt="sec_1_icon1"
						src={icon1}
						className={`${styles.icon} `}
					></img>
					<img
						alt="sec_1_icon1"
						src={icon2}
						className={styles.icon}
					></img>
					<img
						alt="sec_1_icon1"
						src={icon3}
						className={styles.icon}
					></img>
				</div>
			</div>
			<div className={styles.right}>
				<img className={styles.img} src={right} alt="" />
				<h3 className={styles.subtitle}>Conceptual Design</h3>
				<p>
					Bring us your current idea or let one of our experienced
					marketing specialists introduce you to the latest designs
					that suit your packaging needs. Our innovative design team
					will keep you one step ahead of the competition.
				</p>
				<p>
					Once a concept has been settled upon, our design team will
					develop this concept into three dimensional drawings, a
					working model and develop new colors.
				</p>
				<p>
					Our product engineering team—consisting of individuals with
					a lifetime of experience in cosmetic packaging—will ensure
					your packaging is robust.
				</p>
				<p>
					3D drawing, Modeling Shop, In-house custom color
					development; There is nothing related to cosmetics packaging
					that is beyond our reach.
				</p>
				<p>Jerhél brings your ideas to life</p>
			</div>
		</div>
	);
};
export default Page5;
