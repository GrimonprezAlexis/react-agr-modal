import React, { useState } from 'react';
import { Modal } from "../lib/components/modal";

const App = () => {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
  
    return (
      <div>
        { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
        <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
        <Modal show={show} close={closeModalHandler} title='Statut' body='Employee Created !'/>
      </div>
    );
};
export default App;