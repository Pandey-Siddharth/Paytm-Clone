import{BrowserRouter,Route,Routes} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";


function App() {

  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path= "/dashboard" element = {<Dashboard/>}/>
            <Route path="/send" element = {<SendMoney />}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
