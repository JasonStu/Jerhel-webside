import React from 'react';
import styles from './Main.module.scss';
import image from '@/assets/main_page_5.png';
const Page4 = () => {
	return (
		<div className={`${styles.page4} ${styles.page} disableScroll`}>
			<div className={styles.textSection}>
				<h3 className={styles.title}>LIVE LIFE IN FULL COLOR</h3>
				<div className={styles.tags}>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>COLOR MATCHING</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>CONSISTENCY</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>CUSTOMIZATION</span>
					</div>
				</div>
				<p>Color speaks volumes.</p>
				<p>
					Make your message heard loud and clear with the full beauty
					of color and wide array of quality finishes.
				</p>
				<p>
					No detail is sparred with our in-house custom color matching
					laboratory. Don’t just paint by the numbers– develop a truly
					unique color experience for the consumer.
				</p>
			</div>
			<div className={styles.videoWr}>
				<img alt="" src={image} />
				{/* <video loop autoPlay src="/video/introduce.mp4" /> */}
			</div>
		</div>
	);
};
export default Page4;
