InputCtrl = function (inputView, store){
	inputView.on('addToStore',function (tekst) {
		store.add(tekst);
	 });
}