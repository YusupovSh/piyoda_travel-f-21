    import React from "react";
    import { Route,  Routes } from "react-router-dom";
    import { routers } from "../../constants/router";

    function Main() {
      return (
        <main className="main">
          <Routes>
            {
                routers.map(({path, id, component}) => (
                <Route path={path} element={component} key={id}/>
              ))
            }
          </Routes>
        </main>
      );
    }

    export default Main;
