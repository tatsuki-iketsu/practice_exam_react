import React from "react";
import Data from '../exam/exam.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';

const NO_SELECTED = "回答が選択されていません"
let SelectTipsNumber = 9999 // Modalに表示される回答の問題No 初期値は存在しない数値

const ExamDisplay = () =>{
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
    setIsOpen(false);
  }

  // モーダルのCSS
  const customStyles = {
    content: {
      outerWidth:'50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明の黒
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  //////////////////
  //////////////////


  // 初回シャッフル　削除
  useEffect(() => {
    shuffleExam1(examData);
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
const shuffleExam1=(examData,name)=> {

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
    alert(`問題をシャッフルします。問題数${examData.setExams.length}`);
  
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
    
    // 単一回答の表示
    const onClickAnser = (setExams)=> {

      return "aa";
    };

    ////// 複数回答の表示関数 //////
    const selectedAnserGet = (selectedChecks,setExam,index) => {
      // 回答表示場所に問題Noをセット
      SelectTipsNumber = index;
      // 選択した回答を格納する配列
      const selectedAns = [];
      // 正しい回答を格納する配列
      const answers = [];

      // querySelectorAllから選択した回答の文字列連結し配列に格納
      if(selectedChecks.length == 0 ){
        // 回答なし
        alert('回答が選択されていません');
        return NO_SELECTED;   
      }
      // 回答あり、複数数制限なし
      {selectedChecks.forEach((check) => (
          selectedAns.push(check.value)
        ))
      }

      setExam.selectAnswers.map((selectAnswer) => { 
        if(selectAnswer.correctAnswer){
          answers.push(selectAnswer.item);
        }
      } );
      
      // displayにセット
      setAnsDisplay(ansDisplay.map((ans, i) => (i == index ? `正しい回答：${answers}/選択した回答：${selectedAns}` : ans)));
      if(answers.toString() == selectedAns.toString()){
          settrueOrFalseDisplay(trueOrFalseDisplay.map((trueOrFalse, i) => (i == index ? "正解！！" : trueOrFalse)));
          setallTrue(allTrue+1);
        }else{
          settrueOrFalseDisplay(trueOrFalseDisplay.map((trueOrFalse, i) => (i == index ? "残念…" : trueOrFalse)));
          setallFalse(allFalse+1);
        }
      // ボタン非活性化と解説セット
      setExamDisabled(examDisabled.map((disabled, i) => (i == index ? true : disabled)));
      setTipDisplay(tipDisplay.map((tip, i) => (i == index ? MultiLineBody(setExam.tip) : tip)));
      // Modalオープン
      openModal()
    };

    // 複数選択ボタン押下時アクション
    const selectedCheck = (setExam,name,index)=> {    
        let checks = document.querySelectorAll(
            `input[name=${name}]:checked`
          );
          selectedAnserGet(checks,setExam,index);
    };
    console.log(examData);
    console.log(examData.setExams[0].setitem);

   // 選択肢ごとの解説表示　TODO:色
  const selectTipsDisplay = (AnswerSelecttips,examDisabledIndex) =>{
    if(examDisabledIndex){
      return <span>{AnswerSelecttips}</span>
    } else {
      return null
    }

  }


    // 改行変換
    const MultiLineBody = ( body ) => {
      const texts = body.split('\n').map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>        
        );
      });
      console.log({texts});

      return <>{texts}</>;
    };

    return (
    <>
    <h1 id="h1">Java SE silver17 練習問題</h1>
    <input type="button" onClick={() => shuffleExam1(examData)} value="リセット" />
  {examData.setExams.map((setExam,index) => (
    <>
  <div>
  <form name= {setExam.setItem}>
    <h2>練習問題{index+1}</h2>
    <p white-space="nowrap">問題内容：{MultiLineBody(setExam.question)}</p>
      {setExam.selectAnswers.map((Answer) => (
        <>
          <div><nobr>
           <input
              type="checkbox"
              name = {setExam.setItem}
              id = {setExam.setItem + Answer.item}
              value ={Answer.item}
            />
            <label htmlFor={setExam.setItem + Answer.item}>{Answer.item}：{MultiLineBody(Answer.content)}</label></nobr>
            {selectTipsDisplay(Answer.selecttips,examDisabled[index])}
            </div>
        </>
      ))}
        
        </form>
        <button disabled={examDisabled[index]} onClick={()=>selectedCheck(setExam,setExam.setItem,index)} >回答を確認</button>
      </div>
      <div><a href="#h1">一番上に戻る</a> / <a href="#bottom">一番下に行く</a></div>
      {/* 削除する
      <div>{ansDisplay[index]}</div>
      <div>{trueOrFalseDisplay[index]}</div>
      <div>{tipDisplay[index]}</div>
       */}
      </>
    ))}
      <p id="bottom">残問題数：{allExam-allTrue-allFalse}</p>
      <p>正解数：{allTrue}</p>
      <p>不正解数：{allFalse}</p>
      <p>正解率：{allTrue/(allTrue+allFalse)*100}%</p>      
      <input type="button" onClick={() => shuffleExam1(examData)} value="リセット" />

          {/* Modal内容 */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_modalTitle) => (modalTitle = _modalTitle)}><div>問題{SelectTipsNumber}の結果 ：{trueOrFalseDisplay[SelectTipsNumber]}</div></h2>
            <h2 ref={(_modalTitle) => (modalTitle = _modalTitle)}>{ansDisplay[SelectTipsNumber]}</h2>            
            <div>{tipDisplay[SelectTipsNumber]}</div>
            <button onClick={closeModal}>閉じる</button>

          </Modal>
          {/* Modal内容 */}

          </>
      
);
};
export default ExamDisplay;