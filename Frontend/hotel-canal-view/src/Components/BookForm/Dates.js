import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../datepicker.css";
import { FaRegCalendar } from "react-icons/fa";
import { addDays } from "date-fns";

function Dates() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(false);

  return (
    <div>
      <div className="relative flex items-center left-8 h-[62px]">
        <div className="absolute z-10 right-20">
          <div>
            <FaRegCalendar className="text-xl text-[color:var(--color4)] " />
          </div>
        </div>
        <DatePicker
          className="h-full focus:outline-none focus:border-none focus:ring-0 text-left"
          selected={startDate}
          placeholderText="Check In"
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
        />
      </div>
      <div className="relative flex items-center left-8 h-[62px]">
        <div className="absolute z-10 right-20">
          <div>
            <FaRegCalendar className="text-xl text-[color:var(--color4)] " />
          </div>
        </div>
        <DatePicker
          className="h-full focus:outline-none focus:border-none focus:ring-0"
          selected={endDate}
          placeholderText="Check Out"
          onChange={(date) => setEndDate(date)}
          minDate={addDays(startDate,1)}
        />
      </div>
    </div>
  );
}

export default Dates;
