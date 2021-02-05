import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './router.module.scss';
import Header from '@/components/Header';
import Main from './routes/main/Main';
import Product from './routes/product/Product';

function RouterConfig() {
	return (
		<Router>
			<div className={styles.main}>
				<Header />
				<div className={styles.content}>
					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route path="/product">
							<Product />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default RouterConfig;
