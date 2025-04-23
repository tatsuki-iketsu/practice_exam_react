import React,{useState} from "react"
import urlList from "./UrlList"; // URLリストのimport

// 解説用URLを格納する二次元Objcet
const explanationData = urlList();
const Fotter =() =>{
    return (
        <>   
        <div className="fotter">`{explanationData[0].url}``{process.env.REACT_APP_BASENAME}`
            <div>▼JavaSilver17試験対策問題　解説ページ</div>
            {explanationData.map((Data) => {
                const urlPass = `${process.env.REACT_APP_BASELINK}${ Data.url }`
            return (
                <>
                <a href ={urlPass}>{ Data.pageName }</a> / 
                </>
                )
            })}
        </div>
        </>
        );
};

export default Fotter;

