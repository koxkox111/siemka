function draw() {
	Clr(ListofReaders.length);
	var key = document.getElementById('readername').value;
	for(i = 0 ; i < ListofReaders.length ; i++) {
		if(findkey(ListofReaders[i].FirstName,key) == 1 || findkey(ListofReaders[i].LastName,key) == 1 || findkey(ListofReaders[i].Pesel,key) == 1)	{
			var reader = ListofReaders[i].FirstName + ' ' + ListofReaders[i].LastName + ' ' + ListofReaders[i].Pesel;
			CreateText(i,reader);
			CreateButton(i,'EDYTUJ CZYTELNIKA','Show(this.id)');
		}
	}	
}
function Show(id) {
	Clr(ListofReaders.length);
	var str = 'Edycja czytelnika : ' +  ListofReaders[id].FirstName + ' ' + ListofReaders[id].LastName + ' ' + ListofReaders[id].Pesel + ' :';
	//
	CreateText(0,str);
	CreateText(-1,'imie:');
	CreateInput(-2);
	CreateText(-3,'nazwisko:');
	CreateInput(-4);
	CreateText(-5,'pesel:');
	CreateInput(-6);
	//
	CreateButton(id,'AKCEPTUJ','Confirm(id)');
	CreateButton(-2,'ANULUJ','draw()');
}
function Confirm(id) {
	alert(id);
	var newname = document.getElementById(-2).value;
	var newlastname = document.getElementById(-4).value;
	var newpesel = document.getElementById(-6).value;
	ListofReaders[id].FirstName = newname;
	ListofReaders[id].LastName= newlastname;
	ListofReaders[id].Pesel = newpesel;
	localStorage.setItem('ListofReaders', JSON.stringify(ListofReaders));
	location.href = "Readers.html";
}