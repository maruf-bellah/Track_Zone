import useClock from "./component /hooks/useClock";

const App = () => {
  const { clock: local } = useClock();
  const { clock: pst } = useClock("PST");

  console.log("local", local.date);
  console.log("pst", pst.date);

  return (
    <div>
      <h1>Hello Maruf Bella</h1>
    </div>
  );
};

export default App;
