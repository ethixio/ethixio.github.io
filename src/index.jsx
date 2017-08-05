import React from 'react';
import { render } from 'react-dom';
import './styles.less';

const App = () => (
	<div className="app">
		<div className="center-column">
			<div>
				<h1>ETHIX.IO</h1>
				<div className="subtitle"><h6>Ethereum Information Exchange</h6></div>
			</div>
			<p>{'Identity. Ownership. Licensing. Content by the people, \
				for the people. This is the Ethereum Information Exchange: \
				an ethically constrained platform for creators and consumers.'}</p>
			<h2>Context</h2>
			<p>{'SoundCloud is failing. End to end free content doesn\'t pay well. \
				But, it is an amazing service on numerous levels. Meanwhile, \
				unconstrained free content supplied by p2p networks have no control \
				mechanisms and are therefore featureless (beyond core upload/download) \
				and run rampant with copyright violation. On the other end of the spectrum, \
				centralized digital distributors take a hefty cut of profits. Even YouTube, \
				full of free content and feature rich, moves towards monitization strategies \
				that degrade the user experience. People create content. They want to share that content. \
				Sometimes with only a few others. Sometimes they want to sell it. We no longer need a \
				single entity to control how we do that.'}</p>
			<h2>More</h2>
			<p className="stay-tuned">Stay tuned.</p>
		</div>
	</div>
);

render((
	<App />
), document.getElementById('app'));
