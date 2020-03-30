import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import { ExpenList } from "../../components/ExpenList";
import { expData } from "../../redux/expenData";

test("should render expences list ", () => {
  let wrapper = shallow(<ExpenList expences={expData} />),
    ExpWrapper = toJson(wrapper);
  expect(ExpWrapper).toMatchSnapshot();
});

// with no expence

test("should render expences list with no expence", () => {
  let wrapper = shallow(<ExpenList expences={[]} />),
    ExpWrapper = toJson(wrapper);
  expect(ExpWrapper).toMatchSnapshot();
});
