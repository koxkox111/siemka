function accept() {
	var newname =  document.getElementById("newnameinput").value;
	var newauthor =  document.getElementById("newauthorinput").value;
	var newamount =  document.getElementById("newamountinput").value;
	if(newname == '' || newauthor == '' || newamount=='')
		alert('Wypelnij wszystkie pola');
	else {
		BookList[id].name = newname;
		BookList[id].author = newauthor;
		BookList[id].amount = newamount;
		localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	}
}
function back() {
	location.href = "Bibliothek.html";
}