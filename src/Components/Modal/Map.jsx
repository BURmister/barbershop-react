import React from "react";
import './Modal.css'

function Map(props) {
    return(
        <div className="modal__map"> 
            <div className="map__p"><p><img src="../барбершоп/imgs/ChB.jpg" width="560" height="560" alt="" /></p></div> 
            <button className="modal__close" type="button" onClick={props.clickOnCloseMap}></button> 
        </div>
    )
}

export default Map;