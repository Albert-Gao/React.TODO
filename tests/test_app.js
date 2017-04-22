import chai from 'chai'
import React from 'react'
import {First} from '../app/Components'
import {shallow} from 'enzyme'

let expect = chai.expect

describe("<First/>", ()=>{
    "use strict";
    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<First />);
        expect(wrapper.find('h1')).to.have.length(1)
    });
})