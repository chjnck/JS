ListCtrl = function(listView, store){

	 store.on("addedToStore",function(id){
	 	tekst = store.data[id]['name'];
	 	listView.add(id,tekst);
	 });
	
	listView.on('clicked',function(id){
		store.activate(id);
	 });
};
