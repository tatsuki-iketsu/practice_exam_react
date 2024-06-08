import React from "react"

const PropsMessage = (props) => {
    console.log(props)
    const contentstyle = {
        color :'green' ,
        fontSize : '40px'
    };
    const contentRedStyel = {
        color :'green' ,
        fontSize : '40px'
    };
    return (
        <>
                <p style={contentRedStyel}>{props.children}</p>
               </>
        );
};

export default PropsMessage;