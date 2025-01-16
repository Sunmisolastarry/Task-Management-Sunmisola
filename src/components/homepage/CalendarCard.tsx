"use client";

import * as React from "react";

import { Calendar } from "../ui/calendar";

const CalendarCard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-[10px] shadow bg-white"
      />
    </div>
  );
};

export default CalendarCard;
