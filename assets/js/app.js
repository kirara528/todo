let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;
  // let data = {
  //   li: [],
  //   done: []
  // };

// もしデータが保存されていれば
if (localStorage.getItem('todoList')) {
  // データを取り出す
  data = JSON.parse(localStorage.getItem('todoList'));
 
  renderTodoList();

} else {　// そうでなければ
  　// データの保存先を作成
  data = {
    li: [],
    done: []
  };
}

// データが保存されていないときにデータを取ろうとするとNullになる
// データを保存するために変数dataは↑みたいな形にしたい
// データがあるときはgetItemで取得すると上と同じ形になる
// 上と同じ形になるのはsetItemの時に変数dataを保存してるから

// 追加ボタンをクリック
let add = document.getElementById('add');
add.addEventListener('click', function() {
  // console.log('aaa');

  let taskName = document.getElementById('task').value;
  addTaskToDOM(taskName);

// ユーザーが入力した内容を消す処理
  document.getElementById('task').value = '';


// データ保存
// 配列にデータを追加
// taskName
// 連想配列dataのliに追加したい
// 末尾に追加するときのメソッド push
  data.li.push(taskName);

// 配列をDBに保存
  dataObjectUpdated();
})  


//　関数名 addTaskToDOM
//　引数にユーザーが入力したtaskを入れる
//　仮引数の名前はtaskName


//----------------関数-----------------

// function + 関数名 + (仮引数) {}
function addTaskToDOM(taskName, isDone) {

  let list;
  if (isDone) {
    list = document.getElementById('done');
  } else {
    list = document.getElementById('not-yet');
  }



// 追加する要素を作成
  let li = document.createElement('li');
  let task = document.createTextNode(taskName);
  // console.log(li);

// ボタンを表示する場所
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

// 削除ボタン作成
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;

// 削除ボタンをクリック
  remove.addEventListener('click', removeTask);

// 完了ボタン作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;


// 完了一覧に追加し、未完了一覧から削除
  done.addEventListener('click', doneTask);


  document.getElementById('done').appendChild(task);

// ユーザーが入力した内容を未完了一覧に追加
  buttons.appendChild(remove);
  buttons.appendChild(done);
  li.appendChild(buttons);
  list.appendChild(li).appendChild(task);
  }

  function removeTask() {
    let task = this.parentNode.parentNode;
    let id = task.parentNode.id;
    console.log(id);
// ゴミ箱を押してリロードしても出てこないようにする
    let value = task.textContent;
    // console.log(task.textContent);

    task.remove();

// DBから削除
  if (id === 'not-yet') {
    data.li.splice(data.li.indexOf(value), 1);
  } else {
    data.done.splice(data.done.indexOf(value), 1);
  }
  dataObjectUpdated();

    let hoge = data.li.indexOf(value);
// 文字列の中の一番最初の値を呼び戻す
// data.li(配列)の中で1番目にvalueが出てきたところを返す
    // console.log(hoge);
    // console.log(value);
    // console.log(data.li);

//ユーザーがクリックしたtodoを配列から削除
    data.li.splice(hoge, 1);
// date.liの中のhoge番目を消す
    // data.li.splice(data.li.indexOf(value), 1);

// 配列をDBに保存している
    dataObjectUpdated();
  }

  function doneTask() {
    let task = this.parentNode.parentNode;
    let id = task.parentNode.id;
    if (id === 'done') {
      return;
    }
    
    let value = task.textContent;

    let target = document.getElementById('done');
    target.appendChild(task);

// DBを更新
    /* DB更新の流れ
       1．画面を更新する
       2．配列を更新する
       3．DBを更新する

       DBの中身を画面に表示するとき
       DBからデータを取得する　getItem
       データを配列に格納する
       画面に表示する
    */ 
  data.li.splice(data.li.indexOf(value), 1);
  data.done.push(value);
  dataObjectUpdated();
  console.log(data);
}

function dataObjectUpdated () {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function renderTodoList() {
    // 取得したデータを画面に表示する
  for (let taskName of data.li) {
    addTaskToDOM(taskName, false);
  }

  for (let taskName of data.done) {
    addTaskToDOM(taskName, true);
  }
}

// ↓この書き方でもOK
// let addTaskToDOM = function(taskName) {
// }
// addTaskToDOM('hoge');



// 画面をリロードしても消えないようにする処理‼
/*
　-データを保存
　-保存したデータを画面に表示する処理
  登録 → 一覧 → 削除 → 更新
*/ 


/* 
   let = functionName = function() {}
       → 変数の時　reference error;
   funtion functionName() {}
       → 関数のとき　OK

ー変数は定義した行より下じゃないと使えない
ー関数は定義した行より上でも使える
*/

// 関数を作るとき
//   1．同じ処理が2回出ていた時
//   2．単一責任の原則
//   3．処理だけ見ても何を意味しているのかよくわからない。名前つけたくなった時
//   4．外の動きは変えずに中のコードを変えることをリファクタリングという。


