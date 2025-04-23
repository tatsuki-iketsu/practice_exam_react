import compileAnrRun from "./components/explanationPage/CompileAnrRun";
import collection from "./components/explanationPage/Collection";
import overrideOfMethod from "./components/explanationPage/OverrideOfMethod";

  const ExplanationData =() =>{
    const explanationData = [
        { pageID: 1, url: `/compileandrun` ,component:compileAnrRun,pageName:"コンパイル、実行"},
        { pageID: 2, url: `/collection` ,component:collection,pageName:"コレクション"},
        { pageID: 3, url: `/overrideofmethod` ,component:overrideOfMethod,pageName:"メソッドのオーバーライド"},
      ];
      return explanationData;
  };
  
  export default ExplanationData;
  
  