import NumberToDate from "./NumberToDate";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <p>Year {NumberToDate.getYears(108084724000)}</p>
        <p>Mounth {NumberToDate.getMonths(108084724000)}</p>
        <p>Day {NumberToDate.getDays(108084724000)}</p>
        <p>Hours {NumberToDate.getHours(108084724000)}</p>
        <p>Minutes {NumberToDate.getMinute(108084724000)}</p>
        <p>Secondes {NumberToDate.getSeconde(108084724000)}</p>
        <p>milisecondes {NumberToDate.setDuration(3, 5, 3, 1, 2, 4)}</p>
      </div>
    </div>
  );
}
