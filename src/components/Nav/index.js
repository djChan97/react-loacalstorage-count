import React from "react";
import "./index.scss";
import Icon from "../Icon/index";

const Nav = () => {
	const navClsPrefix = "nav";
	return <div className={navClsPrefix}>
		<span className={`${navClsPrefix}-item`}><Icon/></span>
		<span className={`${navClsPrefix}-item`}>标签</span>
		<span className={`${navClsPrefix}-item`}>统计</span>
	</div>;
};

export default Nav;
