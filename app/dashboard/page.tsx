'use client';

import React from "react";
import ShiftCard from "../../src/components/ShiftCard";
import { SampleShift, SampleShiftList } from "../../src/samples/SampleShift";
import List from "@mui/material/List";
import Row from "../../src/components/Row";
import Column from "../../src/components/Column";
import DateCalendarServerRequest from "../../src/components/Calendar";
import { getShifts } from "../../src/models/Shift";
import Shift from "../../src/models/Shift";

export default function Page() {
  let initialShifts: Shift[] = [];
  // const requestAbortController = React.useRef<AbortController | null>(null);
  const [shifts, setShifts] = React.useState(initialShifts);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchShifts = () => {
    // const controller = new AbortController();
    getShifts().then(response => {
      setShifts(response);
      setIsLoading(false);
    })
      .catch((error) => {
        throw (error);
      });
  };
  React.useEffect(() => {
    fetchShifts()
  }, []);
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
            {shifts.map((shift) => (
              <ShiftCard
                key={shift.id}
                id={shift.id}
                date={shift.date}
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
          <h1>Calendar</h1>
          <DateCalendarServerRequest />
        </Column>
      </Row>
      <Row
        className="row-class"
        style={{}}
      >
        <Column
          className="col-class"
          style={{}}
        >
          <h1>Upcoming Lessons</h1>
          <List>
            {shifts.map((shift) => (
              <ShiftCard
                key={shift.id}
                id={shift.id}
                date={shift.date}
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
          <h1>Completed Lessons</h1>
          <List>
            {shifts.map((shift) => (
              <ShiftCard
                key={shift.id}
                id={shift.id}
                date={shift.date}
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