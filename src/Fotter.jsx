import React,{useState} from "react"
import urlList from "./UrlList"; // URLリストのimport
// router系のimport
import { BrowserRouter, Route, Routes, Link ,element,Navigate} from 'react-router-dom';

// 解説用URLを格納する二次元Objcet
const explanationData = urlList();
const Fotter =() =>{
    return (
        <>   
        <div className="fotter">`{explanationData[0].url}``{process.env.REACT_APP_BASENAME}`
            <div>▼JavaSilver17試験対策問題　解説ページ</div>
            <Link to='/'>Top</Link> / 
            {explanationData.map((page) => {
                const urlPass = `${process.env.REACT_APP_BASELINK}${ page.url }`
            return (
                <>
                    <Link to ={page.url}>{ page.pageName }</Link> / 
                </>
                )
            })}
        </div>
        </>
        );
};

export default Fotter;

