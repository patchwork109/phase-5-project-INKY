import React from "react";
import Form from "./Form";

function CustomTattoo ({addNewTattooToState}) {


    return (
        <div>
            <Form addNewTattooToState={addNewTattooToState}/>
        </div>
    )
}

export default CustomTattoo;