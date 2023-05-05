import React from "react";
import Form from "./Form";

function CustomTattoo ({addNewTattooToState}) {


    return (
        <div>
            I'm the custom tattoo page!
            <Form addNewTattooToState={addNewTattooToState}/>
        </div>
    )
}

export default CustomTattoo;