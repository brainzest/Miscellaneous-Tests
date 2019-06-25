import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Test1 from './index';
import GithubUserSearch from './GitHubUserSearch';

jest.mock('axios', () => {
    return () => {
        return Promise.resolve({
            data: {
                login: 'test2'
            }
        });
    }
});



Enzyme.configure({ adapter: new Adapter() });

it ('Test 1: Can detected changes in properties and reflect in state', () => {
    //expect.assertions(1);
    const wrapper = mount(<GithubUserSearch username={'test'} />);
    const initialState = wrapper.state();
    wrapper.setProps({
        username: 'test2'
    });
    const newState = wrapper.state();
    expect(newState.githubProfile.login).toBe('test2');
});
