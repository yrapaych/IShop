import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useRoutes } from "./Routes";
import { useEffect } from 'react';
function App() {

  const routes = useRoutes();
  console.log("Client has started");
  return (
    <Router >
        {routes}
    </Router>
  );
}

export default App;
