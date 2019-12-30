import React from 'react';
import {Link} from "react-router-dom";

class TopRow extends React.Component {
	render() {
		return(
			<div className="header">
				<a href="#default" className="logo">WorkLight Tools</a>
				<div className="header-right">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/products">Products</Link>
					<Link to="/cart">Cart</Link>
				</div>
			</div>
		);
	}
}

export default TopRow;