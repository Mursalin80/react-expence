import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import { AddExpence } from "../../components/AddExpence";
import { expData } from "../../redux/expenData";

let onSubmitSpy, wrap;

beforeEach(() => {
  onSubmitSpy = jest.fn();
  wrap = shallow(<AddExpence onSubmit={onSubmitSpy} />);
});

test("should render add expence", () => {
  expect(toJson(wrap)).toMatchSnapshot();
});

test("should on submit expence ", () => {
  wrap.find("ExpanceForm").prop("onSubmit")(expData[1]);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expData[1]);
});
