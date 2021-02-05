import React from 'react';
import { Input } from 'antd';

import styles from './Main.module.scss';
import logo from '@/assets/logo.png';
import arrow from '@/assets/arrow.png';
import twitterIcon from '@/assets/twitter.png';
import instagramIcon from '@/assets/instagram.png';
const Page7 = () => {
	return (
		<div className={`${styles.page7} ${styles.page} disableScroll`}>
			<div className={`${styles.contentWr} disableScroll `}>
				<div className={styles.content}>
					<img className={styles.logo} src={logo} alt="logo" />
					<div className={styles.title}>
						CONNECT WITH JERHÉL TO GET STARTED
					</div>
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="email" placeholder="Email" />
					<textarea placeholder="Content" rows="3" />
					<div className={styles.contactBtn}>
						CONTACT
						<span className={styles.arrow}>
							<img src={arrow} alt="arrow" />
						</span>
					</div>
				</div>
			</div>
			<div className={`${styles.intro} disableScroll`}>
				<div className={styles.introContent}>
					<div className={styles.logoWr}>
						<img className={styles.logo} src={logo} alt="logo" />
						<div className={styles.btn}>
							Subscribe to our newsletter
						</div>
					</div>
					<div className={styles.secondBlock}>
						<div className={styles.itemWr}>
							<div className={`${styles.item} ${styles.social}`}>
								<div className={styles.label}>SOCIAL MEDIA</div>
								<div
									className={`${styles.value} ${styles.imgWr}`}
								>
									<img src={twitterIcon} alt="twitter" />
									<img src={instagramIcon} alt="instagram" />
								</div>
							</div>
							<div className={styles.item}>
								<div className={styles.label}>ADDRESS</div>
								<div className={styles.value}>
									63 New Hook Road, Bayonne, NJ 07002
								</div>
							</div>
						</div>
						<Input type="text" placeholder="Email" />
					</div>

					<div className={styles.item}>
						<div className={styles.label}>PHONE</div>
						<div className={styles.value}>
							Sales: 201-436-6662 ext. 213
						</div>
						<div className={styles.value}>
							Customer Service: 201-436-6662 ext. 202
						</div>
						<div className={styles.value}>Fax: 201-436-6121</div>
					</div>
					<div className={styles.item}>
						<div className={styles.label}>EMAIL CONTACTS</div>
						<div className={styles.value}>sales@jerhel.com</div>
						<div className={styles.value}>info@jerhel.com</div>
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.copyright}>
					Copyright 2020, JERHEL PLASTICS, INC. all rights reserved.
				</div>
			</div>
		</div>
	);
};
export default Page7;
