UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.active = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (object) {
	var id = this.data.length
	this.data[id] = {name : object , isActive : false};
	this.emit('addedToStore',id);
};
UAM.Store.prototype.activate = function (id) {
	this.data[id]['isActive'] = !this.data[id]['isActive']; 
	if (this.data[id]['isActive'] == true) {
		this.active +=1;
		}
	else{
		this.active -=1;
		};
	this.emit('updated',id);
};
