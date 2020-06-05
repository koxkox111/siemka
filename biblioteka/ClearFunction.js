function Clr(sizeofarray) {
	for(i = -6 ; i <= sizeofarray ; i++) {
		for ( j = 0 ; j < 3 ; j++) {
			var element1 = document.getElementById(i);
			if(element1 != null)
				element1.remove();
		}
	}
}