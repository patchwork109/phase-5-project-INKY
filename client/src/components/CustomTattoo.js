import React from "react";
import Form from "./Form";

function CustomTattoo ({addNewTattooToState}) {


    return (
        <div>
            <h2 style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 50, textAlign: 'left', marginLeft: 48, marginTop: 50, marginBottom: 50}}>Add a Custom Tattoo</h2>
            <p style={{ color: '#f6f3d9', fontFamily: 'Roboto Mono', fontSize: 22, marginTop: -20, marginBottom: 9, paddingLeft: 275, paddingRight: 275  }}>Have an amazing design that's just waiting to be created into a tattoo? Share your artwork with the INKY community!</p>
            <Form addNewTattooToState={addNewTattooToState}/>
        </div>
    )
}

export default CustomTattoo;