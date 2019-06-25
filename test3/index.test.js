import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Test3 from './index';

import DataForm from './DataForm';
import Field from './Field';

Enzyme.configure({ adapter: new Adapter() });

it('Test 3: Values passed from state to form set name, value and onChange', () => {
    const defaultProps = {
        name: 'testField',
        value: 'startValue',
        label:'My Label',
        onChange: () => {}
    };
    const wrapper = mount(<Field {...defaultProps} />);
    expect(wrapper.find(`input[name="${defaultProps.name}"]`).length).toBe(1);
    wrapper.setProps({
        error: 'An error has occured'
    });
    expect(wrapper.find('.invalid-feedback').length).toBe(1);
});

it('Test 3: Field updates to value are reflected in the state of the form', () => {
    const wrapper = mount(<DataForm />);

    const changeValues = {
        email: 'test@email.com',
        first_name: 'TestFirst',
        last_name: 'TestLast'
    };

    expect(wrapper.find('input').length).toBe(3);
    wrapper.find('input').forEach((node) => {
        // Ensure that the input has the necessary props!        
        const elementNameProp = node.getElement().props.name;
        // expect(elementNameProp).toBeDefined();
        node.simulate('change', { target: { name: elementNameProp, value: changeValues[elementNameProp]}});
        node.simulate('blur');

        const newState = wrapper.state();
        expect(newState.values[elementNameProp]).toBeDefined();
        expect(newState.values[elementNameProp]).toEqual(changeValues[elementNameProp]);
        
        

    })
});

it('Test 3: Errors will stop the form submitting', () => {
    const wrapper = mount(<DataForm />);

    // Now - just hit submit and see what happens!
    

    // Set an error
    wrapper.setState({
        errors: {
            first_name: 'Error here' 
        }
    })
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.state().submitted).not.toEqual(true);
})