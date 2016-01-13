Mongo.Cursor.prototype.sum = function (field) {
	var self = this
	if (self.reactive) {
		self._depend({added: true, removed: true}, true)
	}

	var sum = 0
	self.forEach(function (doc) {
		sum += doc[field]
	})

	return sum
}


Mongo.Cursor.prototype.min = function (field) {
	var self = this
	if (self.reactive) {
		self._depend({added: true, removed: true}, true)
	}

	var min = 0
	self.forEach(function (doc) {
		if(min>doc[field]) {
			min = doc[field]
		}
	})

	return min
}

Mongo.Cursor.prototype.max = function (field) {
	var self = this
	if (self.reactive) {
		self._depend({added: true, removed: true}, true)
	}

	var max = 0
	self.forEach(function (doc) {
		if(max<doc[field]) {
			max = doc[field]
		}
	})

	return max
}


Mongo.Cursor.prototype.avg = function (field) {
	var self = this
	if (self.reactive) {
		self._depend({added: true, removed: true}, true)
	}

	var sum = 0
	var n = 0

	self.forEach(function (doc) {
		sum += doc[field]
		n += 1;
	})

	return sum / n
}