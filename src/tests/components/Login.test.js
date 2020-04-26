import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import { Login } from "../../components/Login";

test("should render snapshot of login", () => {
  let wrap = toJson(shallow(<Login />));
  expect(wrap).toMatchSnapshot();
});
