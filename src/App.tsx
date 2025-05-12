import { OrdersPage } from "./pages/OrderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderDetails } from "./pages/OrderDetails";

function App() {
    return (
        <>
          <Router>
              <Routes>
                  <Route path="/" Component={OrdersPage}/>
                  <Route path="/detalhes/:id" Component={OrderDetails}/>
              </Routes>
          </Router>
        </>
    )
}

export default App;
