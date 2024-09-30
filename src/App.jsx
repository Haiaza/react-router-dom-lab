// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Nav   from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";

//components



const App = () => {
  
  const [mailboxes, setMailboxes] = useState([])
  //state variables
  
  
  const addMailbox = (newMailbox) => {
    // Assign a new box number based on the length of the mailboxes array
    const nextBoxNumber = mailboxes.length + 1;
    const mailboxWithNumber = { ...newMailbox, boxNumber: nextBoxNumber };

    setMailboxes([...mailboxes, mailboxWithNumber]);
  }
  

  return(
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={ 	<main><h1>Post Office</h1></main> } />
        <Route path="/mailboxes" element={ <MailboxList mailboxes={mailboxes} /> } />
        <Route path="/new-mailbox" element={ <MailboxForm addMailbox={addMailbox} /> } />
        {/* <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails /> } /> */}
      </Routes>
    </div>
  )
};

export default App;