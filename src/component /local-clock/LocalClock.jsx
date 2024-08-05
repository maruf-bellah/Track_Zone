import { useEffect } from "react";
import useClock from "../hooks/useClock";
import ClockDisplay from "../shared/clock-display/ClockDisplay";
import ClockAction from "../shared/clock-action/ClockAction";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);
  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          offset={offset}
          timezone={timezone}
          title={clock.title}
        />
      )}

      <ClockAction
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
        local={true}
      ></ClockAction>
    </div>
  );
};

export default LocalClock;
