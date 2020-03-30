import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import "../Enyzme.config";
import ExpenDashBord from "../../components/ExpenDashBord";

test("should render ExpenDashBord page", () => {
  let wrap = toJson(shallow(<ExpenDashBord />));
  expect(wrap).toMatchSnapshot();
});
