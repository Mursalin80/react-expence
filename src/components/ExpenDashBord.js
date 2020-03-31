import React from "react";
import ExpenList from "./ExpenList";
import ExpenListFilter from "./ExpenListFilter";

export default function ExpenDashBord() {
  return (
    <div>
      <h1>Dash Bord</h1>

      <ExpenListFilter />
      <ExpenList />
    </div>
  );
}
