'use client';

import React from "react";
import SpatialQuestion from "../../src/components/spatial/SpatialQuestion";
import { randomBool } from "../../src/components/spatial/SpatialQuestion";
import Column from "../../src/components/Column";
import Row from "../../src/components/Row";

export default function Page() {
  const [score, setScore] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [allMatches, setAllMatches] = React.useState([randomBool(), randomBool(), randomBool()]);
  return (
    <Column
      className="col-class"
      style={{}}
    >
      <h1>Spatial Visualization Practice</h1>
      <Row
        className="row-class"
        style={{}}
      >
        {allMatches.map((questionMatches, index) => (
          <SpatialQuestion key={index} matches={questionMatches} ></SpatialQuestion>
        ))}
      </Row>
    </Column>
  )
}