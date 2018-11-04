let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;


// もしデータが保存されていれば
if (lacalStorage.getItem('todoList')) {
  data = JSON.parse(lacalStorage.getItem('todoList'));

// データを取り出す
  renderTodoList();
  
} else {
  // データの保存先を作成
  data = {
    li: [],
    done: []
  };
}

// Todoを画面に追加
 // 追加ボタンがクリックされたら
let add = document.getElementById('add');
add.addEventListener('click', function() {
  let taskName = document.getElementById('task').value;
  // console.log(taskName);

  function addTaskToDOM(text, isDone) {
    let list;
    if (isDone) {
      list = document.getElementById('done');
    } else {
      list = document.getElementById('not-yet');
    }


  }


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
  remove.addEventListener('click', function() {
    task = this.parentNode.parentNode;
    task.remove();
  })  

  //完了ボタンを作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;

  //Not yetで完了ボタンが押されたら
  done.addEventListener('click', function(){
    let task = this.parentNode.parentNode;

    document.getElementById('done').appendChild(task);
  })

  //ユーザーが入力した内容をnot yet一覧に追加
  buttons.appendChild(remove);
  buttons.appendChild(done);
  li.appendChild(buttons);
// document.getElementById('not-yet').appendChild(li);

  document.getElementById('task').value = '';


  
})

 




