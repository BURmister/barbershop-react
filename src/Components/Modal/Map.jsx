import React from "react";
import './Modal.css'

function Map(props) {

    const onClickClose = () => {
        props.normalOverflow();
        props.clickOnClose();
    }

    return (
        <div>
            <div onClick={onClickClose} className="modal__shadow"></div>
            <div className="modal">
                <div className="modal modal__login">
                    <h3>как проехать</h3>  
                </div> 
            </div>
        </div>
    )
}

export default Map;