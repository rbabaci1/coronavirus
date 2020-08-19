import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import "./home.scss";

export default function Home() {
  const globalCases = useFetch("https://corona.lmao.ninja/v2/all");

  if (!globalCases.cases) return <h1 className="status">Loading...</h1>;

  return (
    <div className="home">
      <div className="view-countries">
        <Link to="/countries">view by country</Link>
      </div>

      <h1>Global Cases</h1>

      <div className="top">
        <section>
          <h2>Coronavirus Cases:</h2>

          <NumberFormat
            value={globalCases.cases}
            displayType={"text"}
            thousandSeparator={true}
            renderText={value => <span className="cases">{value}</span>}
          />
        </section>

        <section>
          <h2>Deaths:</h2>

          <NumberFormat
            value={globalCases.deaths}
            displayType={"text"}
            thousandSeparator={true}
            renderText={value => <span className="deaths">{value}</span>}
          />
        </section>
      </div>

      <div className="bottom">
        <section>
          <h2>Recovered:</h2>

          <NumberFormat
            value={globalCases.recovered}
            displayType={"text"}
            thousandSeparator={true}
            renderText={value => <span className="recovered">{value}</span>}
          />
        </section>

        <section>
          <h2>Active Cases:</h2>

          <NumberFormat
            value={globalCases.active}
            displayType={"text"}
            thousandSeparator={true}
            renderText={value => <span className="active-cases">{value}</span>}
          />
        </section>
      </div>
    </div>
  );
}
