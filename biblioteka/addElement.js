function CreateText(id,text) {
	newTodo = document.createElement("div");
	newTodo.innerHTML = text;
	newTodo.setAttribute("id",id);
	document.body.appendChild(newTodo);
}
function CreateButton(id,text,func) {
	newButton = document.createElement('button');
	newButton.innerHTML = text;
	newButton.setAttribute("id",id);
	newButton.setAttribute("onclick",func);
	document.body.appendChild(newButton);
}
function CreateInput(id) { 
	newInput = document.createElement("input");
	newInput.setAttribute("id",id);
	document.body.appendChild(newInput);
}
function findkey(Text,Key) {
	var KeyLength = Key.length;
	for(m = 0 ; m < Text.length ; m++) {
		var j = m - 1 + KeyLength;
		if(j < Text.length) {
			var Str = '';
			for(k = m ; k <= j ; k++)
				Str = Str + Text[k];
			if(Str == Key)
				return 1;
		}
	}
	return 0;
}