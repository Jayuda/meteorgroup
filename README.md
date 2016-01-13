group-sum
=================

This package adds a property called `sum` to `Mongo.Cursor.prototype` on
the client. It can be used to reactively calculate sums in a collection.
Example:

```javascript
Data = new Mogno.Collection()
Data.insert({nilai:   10})
Data.insert({nilai:  100})
Data.insert({nilai: 1000})

var sumData = Data.find({}).sum('nilai'));
var minData = Data.find({}).min('nilai'));
var maxData = Data.find({}).max('nilai'));
var avgData = Data.find({}).avg('nilai'));
