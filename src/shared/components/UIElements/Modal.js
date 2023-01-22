import React from "react"
import Backdrop from "./Backdrop";

const ModalOverlay = props =>{
  
};
const Modal = props =>{
  return(
    <React.Fragment>
      {props.show && <Backdrop/>}
      {props.show && <ModalOverlay/>}
    </React.Fragment>
  )
};