import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	return(
			<div className="container">
				<div>Screen Left</div>
				<div>Screen Right</div>
			</div>
		)
}

// Use non-null assertion or a conditional check
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App/>);
} else {
  console.error('Root element not found');
}
