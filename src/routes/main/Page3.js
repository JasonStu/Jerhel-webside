import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import styles from './Main.module.scss';
const TOTAL_COUNT = 80;
const Page3 = (props) => {
	const [index, setIndex] = useState(1);
	const [imgList, setImgList] = useState([]);
	const canvasRef = useRef(null);
	useEffect(() => {
		_.times(TOTAL_COUNT, (index) => {
			var img = new Image();
			img.onload = function () {
				img.onload = null;
				if (index === 0) {
					const context = canvasRef.current.getContext('2d');
					context.drawImage(img, 0, 0, 897, 753);
				}
			};
			img.src = `/image/main_page_3/model_${index + 1}.jpg`;
			setImgList((list) => {
				list.push(img);
				return list;
			});
		});
	}, []);
	const handleScroll = (e) => {
		let i = index;
		if (e.nativeEvent.deltaY <= 0) {
			if (index > 1) {
				props.swiper.mousewheel.disable();
			} else {
				props.swiper.mousewheel.enable();
			}
			if (index > 1) {
				i--;
			}
		} else {
			if (index + 1 < TOTAL_COUNT) {
				props.swiper.mousewheel.disable();
			} else {
				props.swiper.mousewheel.enable();
			}
			if (index < TOTAL_COUNT) {
				i++;
			}
		}

		setIndex(i);

		const context = canvasRef.current.getContext('2d');
		context.drawImage(imgList[i - 1], 0, 0, 897, 753);
	};
	return (
		<div
			className={`${styles.page3} ${styles.page} disableScroll`}
			onWheel={(e) => handleScroll(e)}
		>
			<div className={styles.textSection}>
				<h3 className={styles.title}>ELEGANCE MEETS PRECISION</h3>
				<div className={styles.tags}>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>PRECISION</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>HIGH QUALITY</span>
					</div>
					<div className={styles.tagWr}>
						<div className={styles.dot}></div>
						<span className={styles.tag}>FAST TURN-AROUND</span>
					</div>
				</div>
				<p>
					Jerhél provides a marriage of expert craftsmanship and a
					keen eye for detail.
				</p>
				<p>
					We create the feel and aesthetic your brand needs. Based on
					the concept we develop together, our team will design the
					tooling necessary to manufacture your product to the highest
					quality industry standards.
				</p>
				<p>
					Strategic global partnerships with tool makers leads to
					better timing and better pricing for our customers.
				</p>
			</div>
			<canvas ref={canvasRef} width="897" height="753"></canvas>
		</div>
	);
};
export default Page3;
