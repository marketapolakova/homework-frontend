import "./App.css";
import { infoBoxData } from "./data/infoBoxData";
import { chartData } from "./data/chartData";
import { tableData } from "./data/tableData";
import InfoBox from "./components/InfoBox";
import BusinessCard from "./components/BusinessCard";
import Chart from "./components/Chart";
import Table from "./components/Table";
import Heading from "./components/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Row>
        {infoBoxData.map((data) => {
          return (
            <Col m={2}>
              <InfoBox
                key={data.name}
                name={data.name}
                value={data.value}
                unit={data.unit}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col Col m={6}>
          <Heading>Dnešní lektor</Heading>
          <BusinessCard
            img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            position="Lektor"
            name="Jakub"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Col>
        <Col Col m={6}>
          <Heading>Průběžné hodnocení podle témat</Heading>
          <Chart data={chartData} />
        </Col>
      </Row>

      <Heading>Studenti</Heading>

      <Table tableData={tableData} />
    </div>
  );
}

export default App;
