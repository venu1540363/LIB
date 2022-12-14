import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import { Registation} from "./Components/index"
//Firstpage, About, Branches, Login
function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Firstpage /> */}
      {/* <About /> */}
      {/* <Branches /> */}
      {/* <Registation /> */}

      <Router>
        <Routes>
         <Route path="/Registation" element={<Registation/>}/>
         {/* <Route path="/" element={<Login />}/> */}
         {/* <Route path="/node" element={<Node_fun/>}/> */}
         </Routes>
      </Router>
    </>
  );
}

export default App;
