import React from "react";
import useContent from "../../hooks/useContent";
import selectionFilter from "../../utils/selectionFilter";

export default function SlidesContainer() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  return <div></div>;
}
