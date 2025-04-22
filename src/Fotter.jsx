import React,{useState} from "react"
import urlList from "./UrlList"; // URLリストのimport

// 解説用URLを格納する二次元Objcet
const explanationData = urlList();
const Fotter =() =>{
    return (
        <>   
        <div className="fotter">
            <div>▼JavaSilver17試験対策問題　解説ページ</div>
            {explanationData.map((Data) => {
                const urlPass = `..${ Data.url }`
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

