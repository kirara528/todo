let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;


// もしデータが保存されていれば
if (localStorage.getItem('todoList')) {
  data = JSON.parse(localStorage.getItem('todoList'));

// データを取り出す
  renderTodoList();

} else {//もしデータが保存されていなければ
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
  addTaskToDOM(taskName);
  document.getElementById('task').value = '';
  data.li.push(taskName);
  dataObjectUpdated();

});  


  // ------------関数--------------

function addTaskToDOM(taskName, isDone) {
  let list;
  if (isDone) {
    list = document.getElementById('done');
  } else {
    list = document.getElementById('not-yet');
  }

  //追加する要素を作成
  let li = document.createElement('li');
  let text = document.createTextNode(taskName);
  li.appendChild(text);
  // let text = document.createTextNode(taskName);
  
  // li.textContent = taskName;

  //ボタンを表示する場所
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  //削除ボタン作成
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;
 
  //削除ボタンをクリックした時の動作を追加
  remove.addEventListener('click', removeTask);  

  //完了ボタンを作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;

  //Not yetで完了ボタンが押されたら
  done.addEventListener('click', doneTask);

  //ユーザーが入力した内容をnot yet一覧に追加
  buttons.appendChild(remove);
  buttons.appendChild(done);
  li.appendChild(buttons);
  list.appendChild(li);
// document.getElementById('not-yet').appendChild(li);
}

// 削除ボタンを押したとき
function removeTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  let value = task.textContent;

  task.remove();

  if (id === 'not-yet') {
    data.li.splice(data.li.indexOf(value), 1);
  } else {
    data.done.splice(data.done.indexOf(value), 1);
  }
  dataObjectUpdated();
} 

// 完了ボタンを押したとき
function doneTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  if (id === 'done') {
    return;
  }

  let value = task.textContent;

// 完了一覧に追加
  let target = document.getElementById('done');
  target.appendChild(task);

//ストレージも更新
  data.li.splice(data.li.indexOf(value), 1);
  data.done.push(value);
  dataObjectUpdated();
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}
 
function renderTodoList() {
  // 取得したデータを画面に表示する
  for (let taskName of data.li) {
    addTaskToDOM(taskName,false);
  }

  for (let taskName of data.done) {
    addTaskToDOM(taskName,true);
  }
}

