let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

//追加ボタンをクリック
let add = document.getElementById('add');
add.addEventListener('click', function() {
  console.log('aaa');

//ユーザーが入力した内容を取得
  let taskName = document.getElementById('task').value;
  console.log(taskName);

//追加する要素を作成
  let li = document.createElement('li');
  let task = document.createTextNode(taskName);
  console.log(li);

//ユーザーが入力した内容を未完了一覧に追加
  document.getElementById('not-yet').appendChild(li).appendChild(task);


})  