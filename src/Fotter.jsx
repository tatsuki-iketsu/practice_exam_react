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
        <Link to='/CompileAnrRun'>BCompileAnrRunテスト</Link>
    <br/>
    <div className="fotter">`{explanationData[0].url}``{process.env.REACT_APP_BASENAME}`
            <div>▼JavaSilver17試験対策問題　解説ページ</div>
            {explanationData.map((Data) => {
                const urlPass = `https://prokuma.net/practiceexam/Java17silverDev/${ Data.url }`
            return (
                <>
                <p>◆<Link to={urlPass}>{ Data.pageName }</Link></p>
                </>
                )
            })}
        </div>

    ◆<Link to='/'>{explanationData[0].url}</Link>
    ◆<Link to='/'>name:{process.env.REACT_APP_BASENAME}</Link>
    ◆<Link to='/'>link:{process.env.REACT_APP_BASELINK}</Link>

        </>
        );
};

export default Fotter;

