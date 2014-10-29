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
		me = this; 
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

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
