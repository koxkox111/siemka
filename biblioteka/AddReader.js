function check() {
	var ReaderFirstName = document.getElementById('readerfirstname1').value;
	var ReaderLastName = document.getElementById('readerlastname1').value;
	var PeselCode = document.getElementById('pesel').value;
	if(ReaderFirstName == '' || ReaderLastName == '' || PeselCode == '')
		alert('WSZYTSKIE POLA MAJA BYC WYPELNIONE');
	else {
		add(ReaderFirstName,ReaderLastName,PeselCode);
	}
}
function add(ReaderFirstName,ReaderLastName,PeselCode) {
	var zero = 0;
	var Reader = {FirstName:ReaderFirstName,LastName:ReaderLastName,Pesel:PeselCode,id:zero,books:TakenBooks};
	if (JSON.parse(localStorage.getItem('ListofReaders')) === null) {
		ReaderList.push(Reader);
		localStorage.setItem('ListofReaders', JSON.stringify(ReaderList));
	}
	else {	
		ReaderList = JSON.parse(localStorage.getItem('ListofReaders'));
		ReaderList.push(Reader);
		localStorage.setItem('ListofReaders', JSON.stringify(ReaderList));
	}
}