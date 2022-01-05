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
        marginBottom: "10px",
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
            <span style={{ fontWeight: "800", fontSize: "14px" }}>
              Ceo at microsoft ( 2016 - 2018)
            </span>
            <p style={{ fontSize: "13px" }}>Working on different dom...</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ background: "#FF7070" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span style={{ fontWeight: "800", fontSize: "14px" }}>
              {" "}
              Director- at Microsoft
            </span>
            <p style={{ fontSize: "13px" }}>Workedd</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
