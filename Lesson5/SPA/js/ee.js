(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		this.listeners = {
		};
	};

	EE.prototype.on = function (eventName, listener, context) {
		var me = this; 
		if(typeof(this.listeners[eventName])==="undefined"){this.listeners[eventName]=[];}
		var list =  listener.bind(context);
		this.listeners[eventName].push(list);
		
		return function(){
		var poz = me.listeners[eventName].indexOf(list);
			if (poz > -1) {
			me.listeners[eventName].splice(poz,1);
			}
		};
			
	};

	EE.prototype.emit = function (eventName ) {
		var arg = Array.prototype.slice.call(arguments,1);
		this.listeners[eventName].forEach(function(list){
			list.apply(this,arg);
		});

	};

	global.UAM.EventEmitter = EE;

}(window));
