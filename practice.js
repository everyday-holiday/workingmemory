"use strict"
//---------------------------↓↓関数定義部分↓↓-------------------------
  //ランダムなn桁の数を生成
  let min_kazu = 10000000;
  let max_kazu = 99999999;

const random_kazu_func = () => {
  let random_kazu = Math.floor(Math.random() * (max_kazu + 1 - min_kazu)) + min_kazu ;
  //HTMLの表示を生成したランダムな数にする
  document.getElementById('random_kazu_hyouzi').textContent = random_kazu;
};

//文字を逆向き（リバース）にする関数
const reverse_mozi = (s) => {
  let reverseString = "";
  for(let i = s.length - 1; i >= 0; i --) {
    reverseString += s[i];
  }
  return reverseString;
};

//正常な向きに変換された文字を入れるためのinput_text変数
let input_text = ""

//inputの値を取得
const func1 = () => {
  let input_message = document.getElementById('input_text').value;
  //inputされた文字を正常な向きに変換
  input_text = reverse_mozi(input_message);
  return input_text;
};

//5秒のカウントダウンタイマー
let sec_counter = 5;
const count_down_5sec = () => {
  
  console.log(sec_counter--);
  let id = setTimeout(count_down, 1000);
  if(sec_counter === 0){
    clearTimeout(id);
  }
};


//正解数をカウントするグローバル変数
let seikaisuu_counter = 0;



//---------------------------↑↑関数定義部分↑↑-------------------------

//--------------------↓↓ここからプログラム実行部分↓↓--------------------

document.getElementById("btn1").onclick = () => {
  max_kazu = 100000;
  min_kazu = 999999;
  document.querySelector(".start_message").style.display = "none";
  document.querySelector(".center_contents2").style.display = "block";
}

document.getElementById("btn2").onclick = () => {
  max_kazu = 1000000;
  min_kazu = 9999999;
  document.querySelector(".start_message").style.display = "none";
  document.querySelector(".center_contents2").style.display = "block";
}

document.getElementById("btn3").onclick = () => {
  max_kazu = 10000000;
  min_kazu = 99999999;
  document.querySelector(".start_message").style.display = "none";
  document.querySelector(".center_contents2").style.display = "block";
}

document.getElementById("btn4").onclick = () => {
  max_kazu = 100000000;
  min_kazu = 999999999;
  document.querySelector(".start_message").style.display = "none";
  document.querySelector(".center_contents2").style.display = "block";
}

document.getElementById("btn5").onclick = () => {
  max_kazu = 1000000000;
  min_kazu = 9999999999;
  document.querySelector(".start_message").style.display = "none";
  document.querySelector(".center_contents2").style.display = "block";
}



//ボタンをクリックするとゲームスタート ゲームスタートの文字を表示
document.getElementById("btn").onclick = () => {
  document.querySelector(".center_contents2").style.display = "none";
  document.querySelector("#game_start_text").style.display = "block";

  function promise1() {
    return new Promise((resolve) =>  {
      setTimeout(() => {
        document.querySelector("#game_start_text").style.display = "none";
        resolve("promise1成功");
      }, 3000);
    })
  }
  
  promise1().then((value) => {
    console.log(value);
    
  }).then((value) => {
      document.querySelector(".center_contents").style.display = "block";
      //HTMLにランダムな数字を生成して表示
      random_kazu_func();
      setTimeout(() => {
        document.querySelector("#random_kazu_hyouzi").style.display = "none";
      }, 4000);
  }).then((value) => {
      setTimeout(() => {
        //テキストボックスを表示
        document.querySelector("#input_text").style.display = "block";
        //テキストボックスに最初からカーソルを表示 focusメソッドを使用。
        document.getElementById("input_text").focus();
      }, 4000);
  });
};


/*
//テキストボックスを表示
document.querySelector(".input_text").style.display = "block";

//テキストボックスに最初からカーソルを表示 focusメソッドを使用。
document.getElementById("input_text").focus();
*/

//実行部分のエンターイベントで使うためにテキストエリアを取得してtext_form変数にぶち込む
let text_form = document.getElementById("input_text");

//問題数をカウントする変数
let counter = 1;

//問題数をカウントするmondai_count_func()関数
const mondai_count_func = () => {
  let mondai_count = document.getElementById("mondai_count");
  if(counter !== 1){
    mondai_count.textContent = `--第${counter}問--`;
  }
};

const otsukare_text = () => {
  if(counter === 6){
    document.querySelector(".center_contents").style.display = "none";
    document.querySelector("#otsukare").style.display = "block";
    document.querySelector("#seikaisuu").style.display = "block";
    document.getElementById("seikaisuu").textContent = `正解数は「${seikaisuu_counter}」です！`;
  }  
};

//テキストボックス内でエンターキーを押すとイベント発生
text_form.addEventListener('keypress', (event) => {
  if(event.keyCode === 13){
    let text = document.getElementById("random_kazu_hyouzi").textContent;
    console.log(text);
    func1();
    if(text === input_text){
      //問題数表示とテキストボックスを非表示に
      document.querySelector("#input_text").style.display = "none";
      document.querySelector("#mondai_count").style.display = "none";

      let hantei_text = document.getElementById("hantei_text");
      document.querySelector("#hantei_text").style.display = "block";
      hantei_text.textContent = "正解です！";
      console.log("正解です！");
      seikaisuu_counter += 1;

      //2秒後に正誤判定の文字を消す
      const promise2 = function() {
        return new Promise((resolve) => {
          setTimeout(() => {
            document.querySelector("#hantei_text").style.display = "none";
            resolve("promise2成功");
          },2000);
        });
      }
      //問題数と問題を表示する
      promise2().then((value) => {
        console.log(value);
        counter += 1;
        otsukare_text();
        mondai_count_func();
        document.querySelector("#mondai_count").style.display = "block";
        document.querySelector("#random_kazu_hyouzi").style.display = "block";
        random_kazu_func();
      });

      const promise3 = function () {
        return new Promise((resolve) => {
          setTimeout(() => {
            document.querySelector("#random_kazu_hyouzi").style.display = "none";
            document.querySelector("#input_text").style.display = "block";
            text_form.value = "";
            text_form.focus();
            resolve("promise3成功");
          },6000);
        });
      };

      promise3().then((value) => {
        console.log(value);
      });
      
      /*random_kazu_func();
      counter += 1;
      mondai_count_func();*/

    }else {
      //問題数表示とテキストボックスを非表示に
      document.querySelector("#input_text").style.display = "none";
      document.querySelector("#mondai_count").style.display = "none";
      
      document.querySelector("#hantei_text").style.display = "block";
      hantei_text.textContent = "不正解です！";
      console.log("不正解です！");

      const promise2 = function() {
        return new Promise((resolve) => {
          setTimeout(() => {
            document.querySelector("#hantei_text").style.display = "none";
            resolve("promise2成功");
          },2000);
        });
      }

      promise2().then((value) => {
        console.log(value);
        counter += 1;
        otsukare_text();
        mondai_count_func();
        //
        document.querySelector("#mondai_count").style.display = "block";
        document.querySelector("#random_kazu_hyouzi").style.display = "block";
        random_kazu_func();
      });

      const promise3 = function () {
        return new Promise((resolve) => {
          setTimeout(() => {
            document.querySelector("#random_kazu_hyouzi").style.display = "none";
            document.querySelector("#input_text").style.display = "block";
            text_form.value = "";
            text_form.focus();
            resolve("promise3成功");
          },6000);
        });
      };

      promise3().then((value) => {
        console.log(value);
      });
    
      /*random_kazu_func();
      counter += 1;
      mondai_count_func();*/
    }
  }
});


//----------↓　予備の関数　↓-------------------------------------------------------------------

/*エンターキーを押すとイベントが発生するenter_ivent関数
const enter_ivent = (e) => {
  if(e.keyCode === 13){
    let text = document.getElementById("random_kazu_hyouzi").textContent;
    console.log(text);
    func1();
    if(text === input_text){
      console.log("正解です！");
    }else {
      console.log("不正解です！");
    }
  random_kazu_func();
  document.getElementById("input_text").value = "";
  }
  return false;
};
*/


/*テキストボックス内でマウスクリックを押すとイベントが発生するクリック関数
document.getElementById("input_text").onclick = () => {
  let text = document.getElementById("random_kazu_hyouzi").textContent;
  console.log(text);
  func1();
  if(text === input_text){
    console.log("正解です！");
  }else {
    console.log("不正解です！");
  }
  random_kazu_func();
  document.getElementById("input_text").value = "";
};
*/
