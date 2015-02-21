UAM.FooterView = function () {
	UAM.EventEmitter.call(this);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.changeNumber = function (number) {
	document.querySelector('#numberOfItems').innerHTML = number;
}

UAM.FooterView.prototype.changeActiveNumber = function (number) {
	document.querySelector('#numberOfActive').innerHTML = number;
}
