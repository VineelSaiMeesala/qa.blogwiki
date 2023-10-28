import records from "./data/Newsdb.json";
import "./CSS/Testcops.css";
export default function TestCop() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {records.map((record) => {
        return (
          <div key={record.id}>
            <h1>{record.title}</h1>
            <p>{record.description}</p>
            <img className="ImagetestJS" src={record.image} alt="text" />
          </div>
        );
      })}
    </div>
  );
}
