import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Admin from "./components/Admin";
import SignUp from "./components/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";
import LogIn from "./components/LogIn";

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Header />
    //     <SignUp />
    //     {/* <Captcha /> */}
    //     {/* <Admin /> */}
    //     <Footer />

    //     <Routes>
    //       <Route exact path="/" component={Home} />{" "}
    //     </Routes>
    //   </Router>
    // </div>
    <Router>
      <Header />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<SignUp />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
