UAM.InputView = function (view) {
	UAM.EventEmitter.call(this);
	var addButton = document.querySelector('button');
	addButton.addEventListener("click", this.addToStore.bind(this));
}

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


UAM.InputView.prototype.addToStore = function () {
	var tekst =  document.querySelector('input').value;
	document.querySelector('input').value = "";
	if (tekst != "") {
		this.emit("addToStore", tekst);
	}
}
