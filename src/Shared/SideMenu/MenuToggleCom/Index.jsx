import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import styles from "./index.module.css";
import { menudata } from "../../../Data/Sidemenudata";

const MenuToggle = ({ name, menulogos }) => {
  const [toggle, settoggle] = useState(false);
  const dashboardtoggle = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className={styles.menudashboard} onClick={dashboardtoggle}>
        <div className={styles.logocontentcontainer}>
          <i>{menulogos}</i>
          <span className={styles.dashboard}>{name}</span>
          <i>
            <IoIosArrowBack
              className={
                toggle ? styles.dashboardarrow1 : styles.dashboardarrow2
              }
            />
          </i>
        </div>
      </div>
      {(name == "Apps" || name == "Ecommerce") && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "230px" } : { height: "0px" }}
        >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} className={styles.dashboardchild} key={item.id}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
      {name == "Components" && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "660px" } : { height: "0px" }}
        >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} className={styles.dashboardchild} key={item.id}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
      {(name == "Icons" || name == "Authentication") && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "120px" } : { height: "0px" }}
        >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} key={item.id} className={styles.dashboardchild}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
      {name == "Pages" && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "160px" } : { height: "0px" }}
        >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} key={item.id} className={styles.dashboardchild}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
      {name == "Forms" && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "400px" } : { height: "0px" }}
        >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} key={item.id} className={styles.dashboardchild}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}

      {(name == "Cards" ||
        name == "Documentation" ||
        name == "Support" ||
        name == "Menu Level" ||
        name == "Pricing" ||
        name == "FAQ" ||
        name == "Time Line" ||
        name == "User Profile") && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "40px" } : { height: "0px" }}
        >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} key={item.id} className={styles.dashboardchild}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
      {(name == "Dashboard" ||
        name == "Charts" ||
        name == "Maps" ||
        name == "Tables" ||
        name == "Widgets") && (
        <div
          className={toggle ? styles.toggledashboard1 : styles.toggledashboard2}
          style={toggle ? { height: "80px" } : { height: "0px" }} >
          {menudata.map((item) => {
            return (
              <>
                {item.name === name && (
                  <div id={item.id} key={item.id} className={styles.dashboardchild}>
                    <i>
                      <FaCaretRight size={20} />
                    </i>
                    <span>{item.first}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MenuToggle;
