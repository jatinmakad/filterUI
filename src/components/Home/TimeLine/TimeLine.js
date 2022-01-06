import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
const TimeLine = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Timeline style={{ padding: "0" }} className="timeline">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ background: "#FF7070" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p style={{ fontWeight: "800", fontSize: "13px" }}>
              Ceo at microsoft ( 2016 - 2018)
            </p>
            <p style={{ fontSize: "12px" }}>Working on different dom...</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ background: "#FF7070" }} />
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>
            <p style={{ fontWeight: "800", fontSize: "13px" }}>
              {" "}
              Director- at Microsoft
            </p>
            <p style={{ fontSize: "12px" }}>Workedd</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
