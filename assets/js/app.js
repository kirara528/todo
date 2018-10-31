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
  // console.log(li);

//ボタンを表示する場所
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

//削除ボタン作成
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;

  //削除ボタンをクリック
  remove.addEventListener('click', function() {
    let task = this.parentNode.parentNode;
    task.remove();
  })


//完了ボタン作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;

  done.addEventListener('click', function() {
    let task = this.parentNode.parentNode;
    document.getElementById('done').appendChild(task);
  })


//ユーザーが入力した内容を未完了一覧に追加
  buttons.appendChild(remove);
  buttons.appendChild(done);
  li.appendChild(buttons);
  document.getElementById('not-yet').appendChild(li).appendChild(task);



//ユーザーが入力した内容を消す処理
  document.getElementById('task').value = '';

})  




//未完了を完了にする処理
//完了ボタンをクリックする
//完了一覧に追加
//未完了一覧から削除




//未完了を削除する処理
//削除ボタンをクリック
//未完了一覧から削除