const { render, useState } = wp.element;
import React from 'react';
import App from "./component/App";

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('corona-react-app')
);
