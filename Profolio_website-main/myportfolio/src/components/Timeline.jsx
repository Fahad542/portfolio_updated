import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements, Projects } from "./Data";
const Timeline = () => {
  return (
    <div className="verticaltimeline-container">
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.75)",
              boxShadow: "0 0 20px purple",
              borderRadius: "20px",
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${"white"}`,
            }}
            iconStyle={{ background: element.background, color: element.color }}
            icon={
              <img
                src={element.icon}
                alt={element.title}
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white" }}
            >
              {element.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              {element.subtitle}
            </h4>
            <p style={{ color: "white" }}>{element.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
