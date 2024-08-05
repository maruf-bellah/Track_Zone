import { useState } from "react";
import LocalClock from "./component /local-clock/LocalClock";
import ClockList from "./component /clock-list/ClockList";

const LOCAL_CLOCK_INT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INT });
  const [clocks, setClocks] = useState([]);

  const id = Math.random(10 * new Date());

  const createClock = (clock) => {
    clock.id = id.toString();
    setClocks([...clocks, clock]);
  };

  const updateLocalClock = (updateClock) => {
    const updateClocks = clocks.map((clock) => {
      if (clock.id === updateClock.id) {
        return updateClock;
      }
      return clock;
    });
    setClocks(updateClocks);
  };

  const deleteClock = () => {
    const updateClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updateClocks);
  };

  console.log(clocks);

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        clocks={clocks}
        updateClock={updateLocalClock}
        deleteClock={deleteClock}
        localClock={localClock}
      />
    </div>
  );
};

export default App;
