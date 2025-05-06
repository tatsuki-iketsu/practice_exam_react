import CompileAnrRun from "./components/explanationPage/CompileAnrRun";
import Collection from "./components/explanationPage/Collection";
import OverrideOfMethod from "./components/explanationPage/OverrideOfMethod";
import ClassAndInstance from "./components/explanationPage/ClassAndInstance";

  const ExplanationData =() =>{
    const explanationData = [
        { pageID: 1, url: `/CompileAnrRun` ,component:<CompileAnrRun />,pageName:"コンパイル、実行"},
        { pageID: 2, url: `/ClassAndInstance` ,component:<ClassAndInstance />,pageName:"クラスの定義とインスタンス"},
        { pageID: 3, url: `/Collection` ,component:<Collection />,pageName:"コレクション"},
        { pageID: 4, url: `/Overrideofmethod` ,component:<OverrideOfMethod />,pageName:"メソッドのオーバーライド"},
      ];
      return explanationData;
  };
  
  export default ExplanationData;
  
  