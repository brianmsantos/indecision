import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
       <Modal
         isOpen ={!!props.selectedOption}
         onRequestClose={props.handleClearSelectedOption}
         contentLabel="Selected Option"
         closeTimeoutMS={200}
         className= "modal"
       >
       <h3 className="modal__title">Selected Option</h3>
       {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
       </Modal>
    );


export default OptionModal; 

//Create a new evenrt handle in IndecisionApp that clears the selectedOption state
//Pass that into OptionModal 
//Call it on button click 