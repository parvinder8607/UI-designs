// lib/gsapTimeline.js
import { gsap } from "gsap";

let timeline = null;

export const getTimeline = () => {
  if (!timeline) {
    timeline = gsap.timeline();
  }
  return timeline;
};

export const resetTimeline = () => {
  if (timeline) {
    timeline.kill();
    timeline = null;
  }
};
