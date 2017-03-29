var VO = require('./valueObjects').VALUE_OBJECT_METADATA;
var _ =require('lodash');

let metadata = _.find(VO, ['name', _.upperFirst('string')]);

console.log(metadata);