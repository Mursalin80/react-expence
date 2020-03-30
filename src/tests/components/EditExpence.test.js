import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import { EditExpence } from "../../components/EditExpence";
import { expData } from "../../redux/expenData";
import { editExpance } from "../../redux/action";

let editExp, wrap;

beforeEach(() => {
  editExp = jest.fn();
  wrap = shallow(<EditExpence editExpance={editExp} expence={expData[1]} />);
});

test("should render add expence", () => {
  expect(toJson(wrap)).toMatchSnapshot();
});
