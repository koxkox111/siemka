function show() {
	var Added = 0;
	SearchFor = document.getElementById('Input1').value;
	resetid();
	for(i = 0; i < BookList.length ; i++) {
		if(findkey(BookList[i].name,SearchFor) == 1 || findkey(BookList[i].author,SearchFor) == 1 || findkey(BookList[i].isbn1,SearchFor) == 1) {
			var leftBooks = BookList[i].amount - BookList[i].taken;
			var NewBook = 'Tytuł: ' + BookList[i].name + ' Autor: ' + BookList[i].author + ' ISBN: ' +  BookList[i].isbn1 + ' pozostało: ' + leftBooks;
			CreateText(BookList[i].id,NewBook);
			CreateButton(BookList[i].id,'EDYTUJ','Edit(this.id)');
			if(leftBooks > 0)
				CreateButton(BookList[i].id,'WYPOZYCZ','Take(this.id)');
		}
	}
}
		
		
		
function resetid() {
	for(i = 0 ; i < BookList.length ; i++){
		BookList[i].id = i;
	}
	Clr(BookList.length);
}
function Edit(id) {
	localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	var link = "EditBook.html?id="
	link = link + id;
	location.href = link;
}	
function Take(id) {
	localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	var link = "TakeBook.html?id="
	link = link + id;
	location.href = link;
}