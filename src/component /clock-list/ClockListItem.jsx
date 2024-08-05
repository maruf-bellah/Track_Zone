import { useState } from "react";
import useClock from "../hooks/useClock";
import ClockDisplay from "../shared/clock-display/ClockDisplay";
import ClockAction from "../shared/clock-action/ClockAction";
import { formatDistance } from "date-fns";

const ClockListItem = ({
  local = false,
  clock,
  updateClock,
  deleteClock,
  localClock,
}) => {
  const { date } = useClock(clock.timezone, clock.offset);
  if (!date) return null;

  // console.log(formatDistance(localClock, date));

  return (
    <div>
      {/* <h3>Time Difference : {formatDistance(localClock, date)}</h3> */}
      <ClockDisplay
        date={date}
        offset={clock.offset}
        timezone={clock.timezone}
        title={clock.title}
      />

      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
