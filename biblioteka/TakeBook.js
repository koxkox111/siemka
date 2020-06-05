function init() {
	var str  = BookList[Bookid].name + ' ' + BookList[Bookid].author;
	newText = document.createElement('div');
	newText.innerHTML = str;
	document.body.appendChild(newText);
	var str1 = 'WYPOZYCZONYCH: ' + BookList[Bookid].taken + ' WSZYTSKICH: ' + BookList[Bookid].amount;
	newText1 = document.createElement('div');
	newText1.innerHTML = str1;
	document.body.appendChild(newText1);
	draw();
}	
function draw() {
	Clr(ListofReaders.length);
	var key = document.getElementById('Readername').value;
	for(i = 0 ; i < ListofReaders.length ; i++) {
		if(findkey(ListofReaders[i].FirstName,key) == 1 || findkey(ListofReaders[i].LastName,key) == 1 || findkey(ListofReaders[i].Pesel,key) == 1)	{
			var reader = ListofReaders[i].FirstName + ' ' + ListofReaders[i].LastName + ' ' + ListofReaders[i].Pesel;
			CreateText(i,reader);
			CreateButton(i,'DODAJ','Addto(this.id)');
		}
	}	
}
function Addto(id) {
	ListofReaders[id].books.push(Bookid);
	BookList[Bookid].taken = BookList[Bookid].taken + 1;
	localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	localStorage.setItem('ListofReaders',JSON.stringify(ListofReaders));
	location.href = "Bibliothek.html";
}