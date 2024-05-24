import React from "react";
import ShiftCard from "../../src/components/ShiftCard";
import { SampleShift, SampleShiftList } from "../../src/samples/SampleShift";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Row from "../../src/components/Row";
import Column from "../../src/components/Column";

export default function Page() {
  return (
    <Column
      className="col-class"
      style={{}}
    >
      <Row
        className="row-class"
        style={{}}
      >
        <Column
          className="col-class"
          style={{}}
        >
          <h1>Opportunities</h1>
          <List>
            {SampleShiftList.map((shift) => (
              <ShiftCard
                key={shift.id}
                id={shift.id}
                title={shift.title}
                student={shift.student}
                description={shift.description}
              />
            ))}
          </List>
        </Column>
        <Column
          className="col-class"
          style={{}}
        >
          <h1>Upcoming Lessons</h1>
          <List>
            {SampleShiftList.map((shift) => (
              <ShiftCard
                key={shift.id}
                id={shift.id}
                title={shift.title}
                student={shift.student}
                description={shift.description}
              />
            ))}
          </List>
        </Column>
      </Row>
    </Column>
  )
}