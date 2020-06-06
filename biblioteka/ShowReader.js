function draw() {
	Clr(ListofReaders.length);
	var key = document.getElementById('readername').value;
	for(i = 0 ; i < ListofReaders.length ; i++) {
		if(findkey(ListofReaders[i].FirstName,key) == 1 || findkey(ListofReaders[i].LastName,key) == 1 || findkey(ListofReaders[i].Pesel,key) == 1)	{
			var reader = ListofReaders[i].FirstName + ' ' + ListofReaders[i].LastName + ' ' + ListofReaders[i].Pesel;
			CreateText(i,reader);
			CreateButton(i,'POKAZ CZYTELNIKA','Show(this.id)');
		}
	}	
}
		

function Show(id) {
	Clr(ListofReaders.length);
	var str = 'Ksiazki wyporzyczone przez ';
	var imie = ListofReaders[id].FirstName + ' ' + ListofReaders[id].LastName + ' ' + ListofReaders[id].Pesel + ' :';
	str = str + imie;
	for (i = 0 ; i < ListofReaders[id].books.length ; i++){
		str = str + ' ' + ListofReaders[id].books[i];
	}		
	CreateText(0,str);
}