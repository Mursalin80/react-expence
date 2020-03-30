import React from "react";
import ExpenList from "./ExpenList";
import ExpenListFilter from "./ExpenListFilter";
import AddExpence from "./AddExpence";

export default function ExpenDashBord() {
  return (
    <div>
      <h1>Dash Bord</h1>
      <AddExpence />
      <ExpenListFilter />
      <ExpenList />
    </div>
  );
}
