import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/Header";
import toJson from "enzyme-to-json";
import "../Enyzme.config";

test("should ", () => {
  let wrapper = shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
