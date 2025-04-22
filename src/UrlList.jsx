import compileAnrRun from "./components/explanationPage/CompileAnrRun";
import collection from "./components/explanationPage/Collection";
import overrideOfMethod from "./components/explanationPage/OverrideOfMethod";

  const ExplanationData =() =>{
    const explanationData = [
        { pageID: 1, url: `${process.env.REACT_APP_BASENAME}/compileandrun` ,component:compileAnrRun,pageName:"コンパイル、実行"},
        { pageID: 2, url: `${process.env.REACT_APP_BASENAME}/collection` ,component:collection,pageName:"コレクション"},
        { pageID: 3, url: `${process.env.REACT_APP_BASENAME}/overrideofmethod` ,component:overrideOfMethod,pageName:"メソッドのオーバーライド"},
      ];

      return explanationData;
  };
  
  export default ExplanationData;
  
  