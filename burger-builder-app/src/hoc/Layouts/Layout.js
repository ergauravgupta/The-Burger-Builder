import React, { Component } from 'react';
import Aux from '../Aux_/Aux_';
import classes from './Layout.css';
import { connect } from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
	state = {
		showSideDrawer: false
	};
	sideDrawerClosedHandler = () => {
		this.setState({
			showSideDrawer: false
		});
	};
	drawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};
	render() {
		return (
			<Aux>
				<Toolbar isAuth={this.props.isAuthenticated} drawerToggleClicked={this.drawerToggleHandler} />
				<SideDrawer
					isAuth={this.props.isAuthenticated}
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				{/* <div>Toolebar,SideDrawer,BackDrop</div> */}
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};
export default connect(mapStateToProps)(Layout);
