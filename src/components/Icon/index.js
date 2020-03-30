import React from "react";
import "./index.scss";

const Icon = ({name}) => {
	const iconCLsPrefix = "icon";
	return <svg className={iconCLsPrefix} aria-hidden="true">
		<use xlinkHref={`#icon-${name}`}/>
	</svg>;
};

export default Icon;
