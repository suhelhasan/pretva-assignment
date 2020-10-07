import React, { useContext } from "react";
import styling from "./Dashboard.module.css";
import { Context } from "../../../context/context";
import { DATA } from "../../../context/action.types";
import { FiMenu } from "react-icons/fi";
import About from "./Sections/About/About";
import Product from "./Sections/Product/Product";
import Ratings from "./Sections/Ratings/Ratings";

function Dashboard() {
  let { tasks, dispatch } = useContext(Context);
  console.log("hello hello", tasks);

  let toggleSidebar = () => {
    dispatch({
      type: DATA,
      payload: { ...tasks, sidebar: !tasks.sidebar },
    });
  };
  let changeComponent = (component) => {
    dispatch({
      type: DATA,
      payload: { ...tasks, currentComponent: component },
    });
  };

  let currentComponent = () => {
    if (tasks.currentComponent === "About the Company") {
      return <About />;
    } else if (tasks.currentComponent === "Product Gallery") {
      return <Product />;
    } else if (tasks.currentComponent === "Ratings & Reviews") {
      return <Ratings />;
    }
  };

  return (
    <div className={tasks.sidebar ? styling.Dashboard : styling.fullDashboard}>
      <FiMenu onClick={toggleSidebar} className={styling.toggleButton} />

      <div className={styling.content}>
        <p>
          <span style={{ color: "#124d51", fontWeight: "bold" }}>
            My Account
          </span>{" "}
          / Company Profile / {tasks.currentComponent}
        </p>

        <div className={styling.innerNavBar}>
          <div
            className={
              tasks.currentComponent === "About the Company"
                ? styling.activeNavLink
                : styling.navLink
            }
            onClick={() => changeComponent("About the Company")}
          >
            <p>About the Company</p>
          </div>
          <div
            className={
              tasks.currentComponent === "Product Gallery"
                ? styling.activeNavLink
                : styling.navLink
            }
            onClick={() => changeComponent("Product Gallery")}
          >
            <p>Product Gallery</p>
          </div>
          <div
            className={
              tasks.currentComponent === "Ratings & Reviews"
                ? styling.activeNavLink
                : styling.navLink
            }
            onClick={() => changeComponent("Ratings & Reviews")}
          >
            <p>Ratings & Reviews</p>
          </div>
        </div>
        {currentComponent()}
      </div>
    </div>
  );
}

export default Dashboard;
