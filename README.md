meteorgroup
=================

This package adds some property called `min`, `max`, `avg`, `sum` to `Mongo.Cursor.prototype` on
the client.

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
