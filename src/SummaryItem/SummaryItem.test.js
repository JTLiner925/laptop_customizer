import React from 'react';
import ReactDOM from 'react-dom';
import SummaryItem from './SummaryItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
