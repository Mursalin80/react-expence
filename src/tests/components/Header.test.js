import { shallow } from "enzyme";
import React from "react";
import {Header} from "../../components/Header";
import toJson from "enzyme-to-json";
import "../Enyzme.config";

test("Header snapshot", () => {
  let wrapper = shallow(<Header logout={()=>{}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});


test('Call logout on button click',()=>{
  let startLogout = jest.fn();
  const wrap =shallow(<Header logout={startLogout} />);
  wrap.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})
