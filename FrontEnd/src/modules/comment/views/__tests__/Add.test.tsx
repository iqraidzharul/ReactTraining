/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme/build';
import configureStore from 'redux-mock-store';

import { initialState } from '../../ConfigBook';
import Add from '../Add';

const mockStore = configureStore();
let wrapper: any;
let store: any;

it('renders without crashing', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Add store={store}/>);
  });
});
