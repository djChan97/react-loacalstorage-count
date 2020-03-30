import React from "react";
import "./index.scss";
import Icon from "../Icon/index";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const navClsPrefix = "nav";
	return <div className={navClsPrefix}>
		<NavLink to={"/money"} activeClassName={"selected"}>
			<Icon name={"money"}/>
			记账
		</NavLink>
		<NavLink to={"/labels"} activeClassName={"selected"}>
			<Icon name={"tag"}/>
			标签
		</NavLink>
		<NavLink to={"/statistics"} activeClassName={"selected"}>
			<Icon name={"chart"}/>
			统计
		</NavLink>
	</div>;
};

export default Nav;
