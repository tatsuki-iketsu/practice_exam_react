import React from "react";
const NO_SELECTED = "回答が選択されていません"
const ExamDisplay = () =>{

    // 問題問い合わせセット
    const examData = {
      setExam:[{
        setItem : '問題1',
        question : '問題内容',
        multipleAnswers : true,
        selectAnswers : [
          {
              item :'A',
              content : '選択肢1',
              correctAnswer:true
          },
          {
              item :'B',
              content : '選択肢2',
              correctAnswer:true
          },
          {
              item :'C',
              content : '選択肢3',
              correctAnswer:false
          },
          {
              item :'D',
              content : '選択肢4',
              correctAnswer:false
          }
      ]
    },{
      setItem : '問題1',
      question : '問題内容',
      multipleAnswers : true,
      selectAnswers : [
        {
            item :'A',
            content : '選択肢1',
            correctAnswer:true
        },
        {
            item :'B',
            content : '選択肢2',
            correctAnswer:true
        },
        {
            item :'C',
            content : '選択肢3',
            correctAnswer:false
        },
        {
            item :'D',
            content : '選択肢4',
            correctAnswer:false
        }
    ]
  }]

    }
    // 回答取得
    const correctAnswerSetCreate = (selectAnswer)=> {
      // 確認用
      alert(`aa選択した回答：テスト`);
    }
    
    // 単一回答の表示
    const onClickAnser = (setExam)=> {

      return "aa";
    };

    // 複数回答の表示
    const selectedAnserGet = (selectedChecks) => {
      // 選択した回答を格納する配列
      const selectedAns = []

      // querySelectorAllから選択した回答の文字列連結し配列に格納
      if(selectedChecks.length == 0 ){
        // 回答なし
        return NO_SELECTED;   
      }
        // 回答あり、複数数制限なし
        {selectedChecks.forEach((check) => (
          selectedAns.push(check.value)
              ))}    
        return `選択した回答：${selectedAns}`;   
 
    };

    // 複数選択ボタン押下時アクション
    const selectedCheck = (examData,name)=> {    
        let checks = document.querySelectorAll(
            `input[name=${name}]:checked`
          );
          alert(`${selectedAnserGet(checks)}`);
          // 回答取得確認用
          alert(`${correctAnswerSetCreate(checks)}`);
    };
 
    return (
    <>
    <p>ここに問題文を記述します。</p>

    <div>
    <input type="radio" id="a" name="drone" value="huey" />
    <label htmlFor={examData.setExam[0].selectAnswers[0].item}><span>{examData.setExam[0].selectAnswers[0].item}:{examData.setExam[0].selectAnswers[0].content}</span></label>
    <button onClick={()=>onClickAnser(examData.setExam[0].selectAnswers[0])}>回答を確認する</button>
  </div>

  <div>
  <form name= {examData.setExam[0].setItem}>
    <p>問題：{examData.setExam[0].question}</p>
      {examData.setExam[0].selectAnswers.map((Answer) => (
        <>
        <p>
     <input
        type="checkbox"
        name = {examData.setExam[0].setItem}
        id = {Answer.item}
        value ={Answer.item}
      />
      <label htmlFor={Answer.item}>{Answer.item}：{Answer.content}</label>
      </p>
        </>
 
        ))}
      
      </form>
      <button onClick={()=>selectedCheck(examData,examData.setExam[0].setItem)}>確認</button>
    </div>

    </>
);
};
export default ExamDisplay;