
UAM.ListView = function () {
	UAM.EventEmitter.call(this);

};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.add = function (id,tekst) {
		var me = this;
		var task = document.createElement('div');
		var name = document.createElement('p');
		name.textContent = tekst;
		task.appendChild(name);
		task.setAttribute("id",id)
		task.setAttribute("active",0)
		task.addEventListener("click", function () {
			this.setAttribute("active",(parseInt(this.getAttribute("active"))+1) % 2);
			me.emit('clicked',id);
		});
		document.querySelector("#listview").appendChild(task);
	
};
