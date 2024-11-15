import React from "react";
import styles from "./index.module.css";
import Container from "../../Container/Index";
import SideMenu from "../../Shared/SideMenu/Index";
import Navbar from "../../Shared/Navbar/Index";
const Dashboard = () => {


  return (
    <>
      <Container>
        <div className={styles.dashboardcontainer}>
          <header className={styles.headercontainer}>
            <SideMenu />
            <Navbar />
          </header>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
