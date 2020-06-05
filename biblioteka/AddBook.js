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
	var zero = -1;
	var Tbooks = 0;
	var Books = {name:BookName,author:AuthorName,isbn1:ISBNCode,amount:AmountValue,taken:Tbooks,id:zero};
	if (JSON.parse(localStorage.getItem('ListofBooks')) === null) {	
		BookList.push(Books);
		localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	}
	else {	
		BookList = JSON.parse(localStorage.getItem('ListofBooks'));
		BookList.push(Books);
		localStorage.setItem('ListofBooks', JSON.stringify(BookList));
	}
}
		