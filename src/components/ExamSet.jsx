import React from "react";

// const [selectedItem, setselectedItem] = useState(['A', 'B', 'C'])

const ExamDisplay = () =>{
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
    const setExam = {
        setItem : '問題1',
        question : '問題内容',
        multipleAnswers : true,
        selectAnswers : {selectAnswer}

    }
    // const element = document.getElementById('mycheckbox');
    
    const onClickAnser = (selectAnswer)=> alert(`aa選択した回答：テスト`);
    const selectedAnserGet = (a) => {
      alert(`${a}`);
      const abc = []

      {a.forEach((answer) => (
        abc.push(answer.value)
            ))}    
            // alert(array);
return abc; 
 
    };
    const selectedCheck = ()=> {    
        let checks = document.querySelectorAll(
            'input[name="ccc"]:checked'
          );
          alert(`${checks}`);
            console.log(selectedAnserGet(checks));
            // const selectAnsers = a.map(ans => {
            //     return ans.value + ",";
            //   });    
            // selectedAnserGet(checks);
          alert(`選択した回答：${selectedAnserGet(checks)}`);
            // console.log(event);    
        // このあたりでチェックボックスを受けとる
        // element.checked
        // https://www.javadrive.jp/javascript/form/index3.html
        // if(e){
        //     alert(`true`);
        // }else{
        //     alert(`false`);
        // }
        // array.push(selectAnswer)

        // array.push(e)
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
      {/* <input
        type="checkbox"
        name = 'ccc'
        id = {selectAnswer[0].item}
        value ={selectAnswer[0].item}
      />
      <label htmlFor={selectAnswer[0].item}>{selectAnswer[0].content}</label> */}

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
      <button onClick={()=>selectedCheck()}>確認</button>
    </div>

    </>
);
};
export default ExamDisplay;