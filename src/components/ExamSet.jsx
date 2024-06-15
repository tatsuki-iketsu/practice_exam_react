import React from "react";
const NO_SELECTED = "回答が選択されていません"
const ExamDisplay = () =>{
    // 問題回答セット
    const selectAnswer = [
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
        }
    ]

    // 問題問い合わせセット
    const setExam = {
        setItem : '問題1',
        question : '問題内容',
        multipleAnswers : true,
        selectAnswers : {selectAnswer}

    }
    
    // 単一回答の表示
    const onClickAnser = (selectAnswer)=> alert(`aa選択した回答：テスト`);

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
        return selectedAns;   
 
    };

    // 複数選択ボタン押下時アクション
    const selectedCheck = (name)=> {    
        let checks = document.querySelectorAll(
            `input[name=${name}]:checked`
          );
          alert(`選択した回答：${selectedAnserGet(checks)}`);
    };
 
    return (
    <>
    <p>ここに問題文を記述します。</p>

    <div>
    <input type="radio" id="a" name="drone" value="huey" />
    <label htmlFor={selectAnswer[0].item}><span>{selectAnswer[0].item}:{selectAnswer[0].content}</span></label>
    <button onClick={()=>onClickAnser(selectAnswer[0])}>回答を確認する</button>
  </div>

  <div>
  <form name="aaa">

      {selectAnswer.map((Answer) => (
        <>
        <p>
     <input
        type="checkbox"
        name = 'ccc'
        id = {Answer.item}
        value ={Answer.item}
      />
      <label htmlFor={Answer.item}>{Answer.item}:：{Answer.content}</label>
      </p>
        </>
 
        ))}
      

      </form>
      <button onClick={()=>selectedCheck('ccc')}>確認</button>
    </div>

    </>
);
};
export default ExamDisplay;