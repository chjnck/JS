FooterCtrl = function(footerView, store){
	 store.on("addedToStore",function(id){
		number = store.data.length;
		footerView.changeNumber(number);
	 });
	 
	 store.on("updated",function(id){
		number = store.active;
		footerView.changeActiveNumber(number);
	 });
};
