/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme/build';
import configureStore from 'redux-mock-store';
import Home from '../Home';

import { initialState } from '../../ConfigBook';

const mockStore = configureStore();
let wrapper: any;
let store: any;

it('renders without crashing', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Home store={store}/>);
  });
});
