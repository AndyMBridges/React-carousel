import React from 'react';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('App renders without crashing', () => {
    shallow(<App />);
});
