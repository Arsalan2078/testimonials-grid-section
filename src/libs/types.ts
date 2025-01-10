import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface TestimonialProps {
  authorImage: string;
  authorName: string;
  authorStatus: string;
  testimonialShort: string;
  testimonialLong: string;
}
