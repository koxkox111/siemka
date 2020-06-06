function check() {
	var BookName = document.getElementById('bookname').value;
	var AuthorName = document.getElementById('author').value;
	var ISBNCode = document.getElementById('ISBN').value;
	var AmountValue = document.getElementById('amount').value;
	if(BookName == '' || AuthorName == '' || ISBNCode == '' || AmountValue == '')
		alert('Wypelnij wszystkie pola');
	else
		add(BookName,AuthorName,ISBNCode,AmountValue)
}	
function add(BookName,AuthorName,ISBNCode,AmountValue) {
	var Takenbooks = 0;
	if (JSON.parse(localStorage.getItem('ListofBooks')) === null) {
		var zero = 0;
		var Books = {name:BookName,author:AuthorName,isbn1:ISBNCode,amount:AmountValue,taken:Takenbooks,id:zero};
		BookList.push(Books);
		localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	}
	else {
		BookList = JSON.parse(localStorage.getItem('ListofBooks'));
		var zero = BookList.length;
		var Books = {name:BookName,author:AuthorName,isbn1:ISBNCode,amount:AmountValue,taken:Takenbooks,id:zero};
		BookList.push(Books);
		localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	}
}