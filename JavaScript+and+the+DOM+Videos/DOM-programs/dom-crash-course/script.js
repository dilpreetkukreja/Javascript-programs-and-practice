/*let input = document.querySelectorAll('input[type="text"]');
let list = document.querySelector('ul');
let submitButton = document.querySelector('input[type="submit"]');
let deleteButton = document.querySelectorAll('.delete');
let output = document.querySelector('#output');
input[0].addEventListener('keyup',searchEvent);
//console.log(input[1]);
input[1].addEventListener('change', runEvent);
submitButton.addEventListener('click', buttonClickEvent);
let li = document.querySelectorAll('li');
let button;
for(let i=0;i<deleteButton.length;i++){
	deleteButton[i].addEventListener('click', deleteClickEvent);
}


let newListItem;
 function runEvent(e){
 	//console.log(e.type);
 	let itemContent = e.target.value;
 	newListItem = document.createElement('li');
 	newListItem.className = 'list-group-item';
 	newListItem.innerText = itemContent;
 	button = document.createElement('button');
 	button.classList.add('btn','btn-danger','btn-sm','float-right','delete');
 	button.innerText = "X";
 	button.addEventListener('click', deleteClickEvent);
 	newListItem.appendChild(button);

 	//list.appendChild(newListItem);
 	//list.innerHTML = '<li class="list-group-item">'+ itemAdded+ '<button class="btn btn-danger btn-sm float-right delete">X</button></li>';
 }

 function buttonClickEvent(e){
 	e.preventDefault();
 	//console.log(newListItem);
 	list.appendChild(newListItem);
 	li = document.querySelectorAll('li');//update li
 	deleteButton = document.querySelectorAll('.delete');//update delete button
 }

function deleteClickEvent(e){
	//console.log(e.target);
  	e.target.parentElement.remove();
  	deleteButton = document.querySelectorAll('.delete');//update
 }
let searchValue;

function searchEvent(e){
	//console.log('hello');
	searchValue = e.target.value;
	//let liNew= document.querySelectorAll('li');

	if(e.keyCode==13){
		//console.log(searchValue);
		for(let i=0;i<li.length;i++){
			if(!(((li[i].innerText).toUpperCase()).indexOf(searchValue.toUpperCase())>-1))
              //console.log(li[i].innerText+ " "+searchValue);
          	  li[i].style.display="none";
          	else
          	  li[i].style.display="";
			
		}
	}

}
*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
















