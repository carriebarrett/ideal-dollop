import React from "react";
import ShiftCard from "../../src/components/ShiftCard";
import { SampleShift, SampleShiftList } from "../../src/samples/SampleShift";
import List from "@mui/material/List";
import Row from "../../src/components/Row";
import Column from "../../src/components/Column";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateCalendarServerRequest from "../../src/components/Calendar";

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
          <h1>Completed Lessons</h1>
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