import React from "react"

const ColorfulMessage = (props) => {
    console.log(props)
    // 分割代入　※分割代入していない場合はprops.childrenで指定する
    const {children} =props
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
                <h2 style={contentstyle}>受け取ったもの</h2>
                <p style={contentRedStyel}>{children}</p>
               </>
        );
};

export default ColorfulMessage;