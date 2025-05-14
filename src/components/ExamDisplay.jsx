import React from "react";
import Data from '../exam/exam.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { toBeEnabled } from "@testing-library/jest-dom/matchers";

const NO_SELECTED = "回答が選択されていません"
let SelectTipsNumber = 9999 // Modalに表示される回答の問題No 初期値は存在しない数値
let SelectExamId = 0        // Modalに表示される回答の問題No 初期値は存在しない数値
let TipURI = <></>          //　解説ページのリンクURI
let c_ansCheck = [];              // 一度正誤を確認したか格納

const ExamDisplay = (props) =>{
  const [examData,setExamData] = useState(Data);                     // 問題を格納
  const [examDisabled,setExamDisabled] = useState([]);               // 問題の回答ボタン表示非表示を格納
  const [ansDisplay,setAnsDisplay] = useState([]);                   // 正解と選択肢を格納
  const [trueOrFalseDisplay,settrueOrFalseDisplay] = useState([]);   // 正解か不正解かを格納
  const [tipDisplay,setTipDisplay] = useState([]);                   // 解説を格納
  const [allExam,setallExam] = useState(0);                          // 合計数
  const [allTrue,setallTrue] = useState(0);                          // 正解数
  const [allFalse,setallFalse] = useState(0);                        // 不正解数

  //////////////////
  // Modal用
  //////////////////
  let modalTitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Modalを開く
  function openModal() {
    setIsOpen(true);
  }

  // Modaiのタイトル
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    modalTitle.style.color = '#f00';
  }

  function closeModal() {
    // Modalを閉じている部分をfalseにする
    setExamDisabled(examDisabled.map((disabled) => (disabled = false)));
    // TODO ↑をセットする
    // setExamDisabled(examDisabled.map((disabled, i) => (i == index ? true : disabled)));
      
    setIsOpen(false);
  }

  // ModalのCSS
  const modalStyle = {
  '@media (max-width: 600px)': {
    content: {
      width: '95%', // 画面幅が600px未満の場合、幅を95%にする
      maxWidth: 'none', // 最大幅を解除
    },
  },
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明の黒
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 30
    }
  };

  // Modal内TipのCSS
  const tipStyle = {
    backgroundColor:'blue',
    overflow: "scroll"
  };
    
  //////////////////
  //////////////////

  //////////////////
  // 問題表示用
  //////////////////
  // 問題部分のCSS
  const examStyle = {
    overflow: "scroll"
  };
  //////////////////
  //////////////////

  // 初回シャッフル、シャッフルしたことは表示しない
  useEffect(() => {
    shuffleExam1(examData,true);
    props.countReset(examData.setExams.length);
  }, []);


// 内側シャッフル　TODO：外側に入れる
const abc = ["A","B","C","D","E","F","G","H","I"];
const shuffleExamAns =(selectAnswers,ansLock)=> {
  // lockがfalseならシャッフル
  if(!ansLock){
    for (let ia = selectAnswers.length - 1; ia > 0; ia--) {
      const jb = Math.floor(Math.random() * (ia + 1));
      [selectAnswers[ia], selectAnswers[jb]] = [selectAnswers[jb], selectAnswers[ia]];
    }
  }
  
  // 選択肢のアルファベットは必ず実施
  selectAnswers.map((selectAnswer,i)=>{
    selectAnswer.item = abc[i];
  })
}

// 外側シャッフル
const shuffleExam1=(examData,InitialDisplay)=> {

  // // チェックをすべて外す
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
          
  for (let i = examData.setExams.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [examData.setExams[i], examData.setExams[j]] = [examData.setExams[j], examData.setExams[i]];
    examData.setExams.map((exam,indexId) =>{
      exam.setItem  = ( "問題" + ('000' + (indexId+1) ).slice( -3 ));
    })
      
      shuffleExamAns(examData.setExams[i].selectAnswers,examData.setExams[i].ansLock);
  }

    const shuffleExamData = { ...examData};
    setExamData((examData) =>{return shuffleExamData});

    // 回答、正解不正解、解説の格納
    let c_examDisabled = [];
    let c_tipDisplay = [];
    let c_ansDisplay = [];
    let c_trueOrFalseDisplay = [];


    for(let i = 0; i < examData.setExams.length;i++){
      c_examDisabled = [,...c_examDisabled,false];
      c_ansDisplay = [...c_ansDisplay,`(問題${i+1}の回答がここに表示されます)`]
      c_trueOrFalseDisplay = [...c_trueOrFalseDisplay,`(問題${i+1}の正解/不正解がここに表示されます)`]
      c_tipDisplay = [...c_tipDisplay,`(問題${i+1}の解説がここに表示されます)`] 
      c_ansCheck = [...c_ansCheck,false];

      // c_tipDisplay = [...c_tipDisplay,examData.setExams[i].tip] 
    };

    setExamDisabled(c_examDisabled);
    setAnsDisplay(c_ansDisplay);
    settrueOrFalseDisplay(c_trueOrFalseDisplay);
    setTipDisplay(c_tipDisplay);
    // const [tipDisplay,setTipDisplay] = useState([]);  // 解説を格納

    // 正解率の初期化
    const all = examData.setExams.length;
    setallExam(all);
    setallTrue(0);
    setallFalse(0);

    // 初回以外はシャッフルしたことを表示
    if(!(InitialDisplay)){
      props.countReset(examData.setExams.length);
      alert(`問題をシャッフルします。問題数${examData.setExams.length}`);
    }
  
}
  // 問題と回答のセット
    // 回答取得
      // 回答を取得し配列に格納
      const correctAnswerSetCreate = (setExam)=> {
      // 回答を格納する配列
      const answers = []

      const ansArray = setExam.selectAnswers.map((selectAnswer) => { 
        if(selectAnswer.correctAnswer){
          answers.push(selectAnswer.item);
        }
      } );

    }
    
    // // 単一回答の表示 TODO削除予定
    // const onClickAnser = (setExams)=> {

    //   return "aa";
    // };

    ////// 複数回答の表示関数 //////
    const selectedAnserGet = (selectedChecks,setExam,index,examId,tipURI) => {
      // 回答表示場所に問題Noをセット
      SelectTipsNumber = index;
      // 回答表示場所に問題IDをセット(開発用)
      SelectExamId = examId;
      // リンク用にURIをセット
      if(tipURI === undefined) {
        TipURI = (
          <div className="paddingTop15">学習ページは準備中です…</div>
        )
      }else{
        tipURI = `./${tipURI}`
        TipURI = (
          <div className="paddingTop15"><a href={tipURI} target="_blank">学習ページを見る</a></div>
        )
      }
      // TipURI = "./" + tipURI; TODO:削除予定

      // 選択した回答を格納する配列
      const selectedAns = [];
      // 正しい回答を格納する配列
      const answers = [];
      // 選択してクリックしたかどうか
      const firstClick = false;

      // querySelectorAllから選択した回答の文字列連結し配列に格納
      if(selectedChecks.length === 0 ){
        // 回答なし
        alert('回答が選択されていません');
        return NO_SELECTED;   
      }
      // 回答あり、複数数制限なし
      {selectedChecks.forEach((check) => (
          selectedAns.push(check.value)
        ))
      }

      // 正しい解答をセット
      setExam.selectAnswers.map((selectAnswer) => { 
        if(selectAnswer.correctAnswer){
          answers.push(selectAnswer.item);
        }
      } );
      
      // Modal内に表示するdisplayにセット
      setAnsDisplay(ansDisplay.map((ans, i) => (i === index ? `正しい回答：${answers}<br>回答選択肢：${selectedAns}` : ans)));
      if(answers.toString() === selectedAns.toString()){
          settrueOrFalseDisplay(trueOrFalseDisplay.map((trueOrFalse, i) => (i === index ? "正解！！" : trueOrFalse)));
          if(!(c_ansCheck[index])){
            setallTrue(allTrue+1);
          // 最初のクリック時は正解数をカウント
          props.countUpdate(allExam,allTrue+1,allFalse);
          }
        }else{
          settrueOrFalseDisplay(trueOrFalseDisplay.map((trueOrFalse, i) => (i === index ? "残念…" : trueOrFalse)));
          if(!(c_ansCheck[index])){
            setallFalse(allFalse+1);
          // 最初のクリック時は誤数をカウント
          props.countUpdate(allExam,allTrue,allFalse+1);
          }
        }
      // ボタン非活性化と解説セット
      // Modalを閉じるまでボタンを無効化
      setExamDisabled(examDisabled.map((disabled, i) => (i === index ? true : disabled)));
      // 正誤確認済みをセット 
      c_ansCheck[index] = true;
      console.log(c_ansCheck);
      // 選択肢ごとの解説があればセット
      let selectTipsDisplay = ""
      setExam.selectAnswers.map((selectAnswers) => (selectAnswers.selecttips === "" ?  selectTipsDisplay = selectTipsDisplay : selectTipsDisplay = `${selectTipsDisplay}\n${selectAnswers.item}:${selectAnswers.selecttips}`))
      setTipDisplay(tipDisplay.map((tip, i) => (i === index ? LineHtmlConversion(setExam.tip + selectTipsDisplay) : tip)));
      // Modalオープン
      openModal()
    };

    // 複数選択ボタン押下時アクション
    const selectedCheck = (setExam,name,index,examId,tipURI)=> {    
        let checks = document.querySelectorAll(
            `input[name=${name}]:checked`
          );
          selectedAnserGet(checks,setExam,index,examId,tipURI);
    };

   // 選択肢ごとの解説表示　TODO:色
  const selectTipsDisplay = (AnswerSelecttips,examDisabledIndex) =>{
    if(examDisabledIndex){
      return <span>{AnswerSelecttips}</span>
    } else {
      return null
    }
  }

  // 改行変換
  const LineHtmlConversion = ( body ) => {
  const texts = body.split('\n').map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item}<br />
        </React.Fragment>        
      );
    });
    console.log({texts});
    return <>{texts}</>;
  };

  // コードブロック全般変換
  const codeConversion = ( body ) => {
    if(body === ""){
      // 空文字の場合は空のdivを返却
      return (
        <></>
      );    
    } else{
      // codeがあればcodehtmlとして返却
      const texts = body.split('\n').map((item, index) => {
        return (
          <React.Fragment key={index}>
            <span className="numberLow">{item}</span>
          </React.Fragment>        
        );
      });  
      return (
        <pre>
          <code>
            <div className="otherCode">
              <p white-space="nowrap" className="medium">{texts}</p>
            </div>
          </code>
        </pre>
      );  
    }
  };


    // 解答用コードブロック変換
    const answerCodeConversion = ( body ) => {
      if(body === ""){
        // 空文字の場合は空のdivを返却
        return (
          <></>
        );    
      } else{
        // codeがあればcodehtmlとして返却
        const texts = body.split('\n').map((item, index) => {
          return (
            <React.Fragment key={index}>
              <span className="numberLow">{item}</span>
            </React.Fragment>        
          );
        });  
        return (
          <pre className="topBottomMargin2">
            <code>
              <div className="Code">
                <p white-space="nowrap" className="medium">{texts}</p>
              </div>
            </code>
          </pre>
        );  
      }
    };

    
  // 問題を表示する部分
  return (
  <>
  <input type="button" onClick={() => shuffleExam1(examData,false)} value="リセット" />
  {examData.setExams.map((setExam,index) => (
  <>
  <div style={examStyle}>
  <form name= {setExam.setItem}>
  <h2>練習問題{index+1}<span> 問題ID：{setExam.examId}</span></h2>
  {/* <h2>練習問題{index+1}</h2> */}
  <p white-space="nowrap">問題内容：{LineHtmlConversion(setExam.question)}</p>
  {setExam.code.map((code,index) => (
    <>
    <div>問題コード 
    {index === 0 ? setExam.code.length === 1 ? <></> : <>{index + 1}</> : <>{index + 1}</>}
    {codeConversion(code)}
    </div>
    </>
  ))}
    {setExam.selectAnswers.map((Answer) => (
      
      <>
        <div className="marginTopBottom"><nobr>
          <input
            type="checkbox"
            name = {setExam.setItem}
            id = {setExam.setItem + Answer.item}
            value ={Answer.item}
          />
          <label htmlFor={setExam.setItem + Answer.item}>{Answer.item}：
            {setExam.answersCode ? answerCodeConversion(Answer.content) : LineHtmlConversion(Answer.content)}
          </label></nobr>
          {selectTipsDisplay(Answer.selecttips,examDisabled[index])}
          </div>

      </>
    ))}
      
      </form>
      <button disabled={examDisabled[index]} onClick={()=>selectedCheck(setExam,setExam.setItem,index,setExam.examId,setExam.TipURI)}  class="selectedCheck">回答を確認</button>
    </div>
    <div><a href="#h1">一番上に戻る</a> / <a href="#fotter">一番下に行く</a></div>
    {/* TODO:ヘッダーの正誤が問題ないなら削除する
    <div>{ansDisplay[index]}</div>
    <div>{trueOrFalseDisplay[index]}</div>
    <div>{tipDisplay[index]}</div>
      */}
    </>
  ))}
    <input type="button" onClick={() => shuffleExam1(examData,false)} value="リセット" />

        {/* Modal内容 */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalStyle}
          contentLabel="Example Modal"
        >
          <div>
            <h2 ref={(_modalTitle) => (modalTitle = _modalTitle)}><div>問題{SelectTipsNumber}の結果 ：{trueOrFalseDisplay[SelectTipsNumber]}</div></h2>
            <div ref={(_modalTitle) => (modalTitle = _modalTitle)}>
                <div dangerouslySetInnerHTML={{ __html: ansDisplay[SelectTipsNumber] }}></div>
            </div>            
            <div class={tipStyle}><nobr>{tipDisplay[SelectTipsNumber]}</nobr></div>
            {TipURI}
            <button onClick={closeModal} className="marginTop15">閉じる</button>
            <div className="paddingTop15">問題ID.{SelectExamId}</div>
          </div>
        </Modal>
        {/* Modal内容 */}

        </>
    
  );
};
export default ExamDisplay;