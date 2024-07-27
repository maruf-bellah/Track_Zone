import { format } from "date-fns";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let offsetHr = offset / 60;
  return (
    <div>
      <h2>Title : {title} </h2>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaa")}</h3>
      <p>
        {timezone}
        {offsetHr > 0 ? -`+${Math.abs(offset)}` : `-${Math.abs(offset)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
