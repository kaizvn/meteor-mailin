class Mailin {
	constructor(options) {
		this.mailin = Npm.require('mailin');
		this.options = options || {};
		this.eventMappingObj = {};
	}

	setEventHandler(event, callback) {
		let eventObj = {};

		if (typeof event === 'object') {
			eventObj = event;
		} else
			eventObj[event] = callback;

		_.each(eventObj, (cb, eventName)=> {
			this.eventMappingObj[eventName] = cb;
		})
	}

	startServer() {
		try {
			this.mailin.start(this.options);
			// add event handler
			_.each(this.eventMappingObj, (callback, eventName)=> {
				this.mailin.on(eventName, Meteor.bindEnvironment(callback));
			});
		} catch (e) {
			throw e;
		}
	}
}

MeteorMailin = Mailin;
