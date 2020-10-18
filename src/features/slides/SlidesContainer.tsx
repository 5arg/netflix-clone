import React from "react";
import { useSlides } from "../../context/SlidesContext";
import useContent from "../../hooks/useContent";
import selectionFilter from "../../utils/selectionFilter";

export default function SlidesContainer() {
  const { featuredSlideId, setFeaturedSlideId } = useSlides();
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return <div>container</div>;
}
