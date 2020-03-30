import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import ExpanceForm from "../../components/ExpanceForm";
import { expData } from "../../redux/expenData";

test("should render expence form", () => {
  let wrap = toJson(shallow(<ExpanceForm />));
  expect(wrap).toMatchSnapshot();
});

test("should render expence form with data", () => {
  let wrap = toJson(shallow(<ExpanceForm expence={expData[2]} />));
  expect(wrap).toMatchSnapshot();
});

// simulate from summition
test("simulate from summition", () => {
  let wrap = shallow(<ExpanceForm onSubmit={() => {}} />);
  wrap.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrap.state("error").length).toBeGreaterThan(0);
  expect(toJson(wrap)).toMatchSnapshot();
});

test("simulate input note change", () => {
  let wrap = shallow(<ExpanceForm />);
  let value = "new note";

  wrap
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value, name: "note" }
    });
  expect(wrap.state("note")).toBe(value);
  expect(toJson(wrap)).toMatchSnapshot();
});

test("simulate amount input change", () => {
  let wrap = shallow(<ExpanceForm />);
  let amount = "3000";
  wrap
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: amount, name: "amount" }
    });
  expect(wrap.state("amount")).toBe(amount);
});

test("onSubmit form handler", () => {
  let onSubmitSpy = jest.fn();
  let { note, description, amount, createdAt } = expData[2];
  let wrap = shallow(
    <ExpanceForm expence={expData[2]} onSubmit={onSubmitSpy} />
  );
  wrap.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrap.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    note,
    description,
    amount,
    createdAt
  });
});
