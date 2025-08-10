import React, { JSX } from "react";

import { formatDate } from "@/lib/helpers";

export default function Date(dateObject: {
  dateString: string | null;
}): JSX.Element | null {
  const { dateString } = dateObject;
  if (!dateString) return null;
  return (
    <time dateTime={dateString}>{formatDate(dateString, "readable")}</time>
  );
}
