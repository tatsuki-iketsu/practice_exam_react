import React from "react";

import styles from '../css/explanationPage.module.css'

const Explanation = () =>{

  return (
    <>
    <div className={styles.explanationBody}>
      <div className={styles.pageTitle}>
      <h2>JavaSilver17試験対策問題　解説ページ</h2>
      </div>

      <h3 className={styles.sectionTitle}>コンパイル、実行</h3>
        <h4 className={styles.paragraphTitle}>コンパイル</h4>
          <div className={styles.paragrapContents}>
          Javaのコンパイルと実行についてです。 
            <h5 className={styles.itemTitle}>-dオプション</h5>
            <div className={styles.itemContents}>
              コンパイルしたデータを保存するディレクトリを設定するオプション。<br />
              -dの直後にスペース、パスを記述する。<br />
              相対パス、絶対パスともに可能。<br />

              Main.javaのパス
              <pre>
                <code>
                  <span>samplefolder\Main.java</span>
                </code>
                </pre>              

                Main.javaの中身
              <pre>
                <code>
                  <span>package com.trigger</span>
                  <span>public class Main {'{'}</span>
                  <span>{'}'}</span>

                </code>
              </pre>              

              Print.javaのパス
              <pre>
                <code>
                  <span>samplefolder\Print.java</span>
                </code>
                </pre>              
              Main.javaの中身
              <pre>
                <code>
                  <span>package com.action</span>
                  <span>ここにコードを書く</span>
                  <span>ここにコードを書く</span>

                </code>
              </pre>              
            </div>


          </div>
  </div>
    </>
    
  );
};
export default Explanation
;