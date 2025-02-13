import ClockListItem from "./ClockListItem";

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />
      {clocks?.length === 0 ? (
        <p>There is no clock , please create one</p>
      ) : (
        <>
          {clocks?.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              localClock={localClock}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ClockList;
