let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


// Todoを画面に追加

 // 追加ボタンがクリックされたら
let add = document.getElementById('add');
add.addEventListener('click', function() {
  let taskName = document.getElementById('task').value;
  // console.log(taskName);

  //追加する要素を作成
  let li = document.createElement('li');
  let text = document.createTextNode(taskName);
  li.appendChild(text);
  li.textContent = taskName;

  //ボタンを表示する場所
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  //削除ボタン作成
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;
 
  //削除ボタンをクリック

  //完了ボタンを作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;

  //Not yetで完了ボタンが押されたら
  done.addEventListener('click', function(){
    let task = this.parentNode.parentNode;
    console.log(task);

    let target = document.getElementById('done');
    target.appendChild(task);
  })

  //ユーザーが入力した内容をnot yet一覧に追加
  buttons.appendChild(remove);
  buttons.appendChild(done);
  li.appendChild(buttons);
  document.getElementById('not-yet').appendChild(li);

  
})

 




