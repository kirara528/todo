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
 
  // 取得したデータを画面に表示する
  for (let taskName of data.li) {
   addTaskToDOM(taskName);
  }
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
  localStorage.setItem('todoList', JSON.stringify(data));
  
})  


//　関数名 addTaskToDOM
//　引数にユーザーが入力したtaskを入れる
//　仮引数の名前はtaskName

// function + 関数名 + (仮引数) {}
function addTaskToDOM(taskName) {
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
  remove.addEventListener('click', function() {
    let task = this.parentNode.parentNode;
    task.remove();
  })

// 完了ボタン作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;


// 完了一覧に追加し、未完了一覧から削除
  done.addEventListener('click', function() {
    let task = this.parentNode.parentNode;
    document.getElementById('done').appendChild(task);
  })


// ユーザーが入力した内容を未完了一覧に追加
  buttons.appendChild(remove);
  buttons.appendChild(done);
  li.appendChild(buttons);
  document.getElementById('not-yet').appendChild(li).appendChild(task);

};

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



