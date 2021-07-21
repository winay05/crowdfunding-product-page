import React from "react";
import { Container } from "react-bootstrap";
import "./Dashboard.css";
import TopCard from "./Cards/TopCard";
import StatsCard from "./Cards/StatsCard";
import AboutCard from "./Cards/AboutCard";

function Dashboard(props) {
  return (
    <Container className="dashboard-container">
      <div className="card-container">
        <TopCard {...props} />

        <StatsCard {...props} />

        <AboutCard {...props} />
      </div>
    </Container>
  );
}

export default Dashboard;
