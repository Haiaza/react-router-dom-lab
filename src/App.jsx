// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Nav   from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";

//components



const App = () => {
  
  const [mailboxes, setMailboxes] = useState([])
  //state variables
  
  
  const addBox = (formData) => {
    setMailboxes(formData)
  }
  

  return(
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={ 	<main><h1>Post Office</h1></main> } />
        {/* <Route path="/mailboxes" element={ <MailboxList /> } /> */}
        <Route path="/new-mailbox" element={ <MailboxForm /> } />
        {/* <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails /> } /> */}
      </Routes>
    </div>
  )
};

export default App;