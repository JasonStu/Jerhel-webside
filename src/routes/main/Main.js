import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';
import { Modal } from 'antd';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import styles from './Main.module.scss';
import line from '@/assets/line.png';
const menus = [
	{ label: 'An Originator and Innovator', value: 1 },
	{ label: 'From Concept To Consumer', value: 2 },
	{ label: 'Elegance Meets Precision', value: 3 },
	{ label: 'Live Life Full Of Color', value: 4 },
	{ label: 'Moving At The Speed Of Fashion', value: 5 },
	{ label: 'Natural Beauty', value: 6 },
	{ label: 'Connect with JerhÉl To Get Started', value: 7 },
];

SwiperCore.use([Mousewheel]);
const Menu = ({ active, visited }) => {
	return (
		<div className={styles.menu}>
			{menus.map((menu) => (
				<div
					className={`${styles.menuItem} ${
						active === menu.value ? styles.active : null
					} ${visited.includes(menu.value) ? styles.visited : ''}`}
					key={menu.value}
				>
					<div
						className={`${styles.menuIndicator} ${
							active === menu.value ? styles.active : ''
						}`}
					></div>
					<div className={styles.label}>{menu.label}</div>
					<img src={line} alt="indicator" />
				</div>
			))}
		</div>
	);
};

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			innerSwiper: null,
			active: 0,
			modalVisible: false,
			hiding: false,
			inited: false,
			menuVisible: false,
			visitedPages: [1],
		};
	}
	render() {
		return (
			<div className={styles.main}>
				{this.state.modalVisible ? (
					<Modal
						visible={this.state.modalVisible}
						footer={null}
						centered={true}
						destroyOnClose={true}
						closable={false}
						width="100vw"
						maskClosable={false}
						wrapClassName={`${styles.modal} ${
							this.state.hiding ? styles.hide : ''
						}`}
					>
						<video
							onEnded={() => {
								console.log('video ended');
								this.setState({ hiding: true });
								setTimeout(() => {
									this.setState({ modalVisible: false });
									this.setState({ hiding: false });
								}, 1000);
							}}
							// muted
							id="introVideo"
							// autoPlay
							src="/video/introduce.mp4"
						/>
					</Modal>
				) : null}
				<Swiper
					direction="vertical"
					nested={true}
					speed={1000}
					noSwipingClass="disableInnerSwiping"
					mousewheel={true}
					onSwiper={(i) => {
						this.setState({ innerSwiper: i });
					}}
					onSlideNextTransitionStart={(s) => {
						if (s.activeIndex === 1) {
							this.setState({ menuVisible: true });
						}
						// this.props.swiper.mousewheel.disable();
					}}
					onSlidePrevTransitionStart={(s) => {
						if (s.activeIndex === 0) {
							this.setState({ menuVisible: false });
						}
						// this.props.swiper.mousewheel.disable();
					}}
					onSlideChangeTransitionEnd={(s) => {
						this.setState({ active: s.activeIndex });
						this.setState({
							visitedPages: [
								...this.state.visitedPages,
								s.activeIndex,
							],
						});
						if (s.activeIndex === 3) {
							s.mousewheel.disable();
						}
						// if (s.activeIndex === 5 && !this.state.inited) {
						// 	this.setState({ modalVisible: true, inited: true });
						// 	setTimeout(() => {
						// 		let video = document.getElementById(
						// 			'introVideo'
						// 		);
						// 		let videoPlay = video.play();
						// 		videoPlay
						// 			.then(() => {})
						// 			.catch(() => {
						// 				console.log(`can't play video`);
						// 				video.muted = true;
						// 				video.play();
						// 			});
						// 	}, 1000);
						// }
					}}
				>
					{this.state.menuVisible && (
						<Menu
							active={this.state.active}
							visited={this.state.visitedPages}
						/>
					)}
					<SwiperSlide>
						<Home />
					</SwiperSlide>
					<SwiperSlide>
						<Page1 />
					</SwiperSlide>
					<SwiperSlide>
						<Page2 />
					</SwiperSlide>
					<SwiperSlide>
						<Page3 swiper={this.state.innerSwiper} />
					</SwiperSlide>
					<SwiperSlide>
						<Page4 />
					</SwiperSlide>
					<SwiperSlide>
						<Page5 />
					</SwiperSlide>
					<SwiperSlide>
						<Page6 />
					</SwiperSlide>
					<SwiperSlide>
						<Page7 swiper={this.state.innerSwiper} />
					</SwiperSlide>
				</Swiper>
			</div>
		);
	}
}

export default Main;
