import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import { ExpenListItems } from "../../components/ExpenListItems";
import { expData } from "../../redux/expenData";

test("should render expence list item ", () => {
  let wrap = shallow(<ExpenListItems {...expData[0]} />);
  let listJson = toJson(wrap);
  expect(listJson).toMatchSnapshot();
});
