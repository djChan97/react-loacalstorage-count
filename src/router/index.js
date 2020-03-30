import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Money from "../views/Money";
import Nav from "../components/Nav/index";

export default () => {
	return <HashRouter>
		<Nav/>
		<Switch>
			<Route path={"/"} component={Money}/>
		</Switch>
	</HashRouter>;
}
