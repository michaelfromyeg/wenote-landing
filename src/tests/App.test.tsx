import React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import App from '../components/App';

test('The app doesn\'t crash!', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
