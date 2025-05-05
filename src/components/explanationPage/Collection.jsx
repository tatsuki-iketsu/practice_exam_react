import React from "react";

import explanationPagestyles from '../css/explanationPage.module.css'
// import practiceExamReactStyles from '../css/practiceExamReact.module.css'

const Collection = () =>{

  return (
    <>
    <div className={explanationPagestyles.explanationBody}>
      <div className={explanationPagestyles.pageTitle}>
        <h2>JavaSilver17試験対策問題　解説ページ</h2>
      </div>

      <h3 className={explanationPagestyles.sectionTitle}>Collection</h3>
      <h4 className={explanationPagestyles.paragraphTitle}>ジェネリクス</h4>
      <div className={explanationPagestyles.paragrapContents}>
        ジェネリクスの型指定
        <h5 className={explanationPagestyles.itemTitle}>インスタンス化</h5>
        <div className={explanationPagestyles.itemContents}>
          型宣言でジェネリクスの型指定をしていれば、インスタンスの型指定は省略可能。<br />
        </div>
        <div class="sampleFile">
          （例）  
            <div class="marginLeft10">
              <div class="filename">エラーとならない例</div>
                <div class="block">
                型宣言、インスタンス可時のどちらも型指定した例
                    <pre>
                      <code>
                        <div className="otherCode">
                          <span>ArrayList{`<`}Integer{`>`} listIntger = new ArrayList{`<`}Integer{`>`}();</span>
                        </div>
                      </code>
                    </pre>              
                  インスタンス時の型指定を省略した例
                    <pre>
                      <code>
                        <div className="otherCode">
                          <span>ArrayList{`<`}String{`>`} listString = new ArrayList{`<`}{`>`}();</span>
                        </div>
                      </code>
                    </pre>              
                    宣言時に型指定しない例例
                    <pre>
                      <code>
                        <div className="otherCode">
                          <span>ArrayList listObj = new ArrayList;</span>
                        </div>
                      </code>
                    </pre>              
                  </div>
            </div>
        </div> 
      </div>
    </div>
    </>
    
  );
};
export default Collection
;