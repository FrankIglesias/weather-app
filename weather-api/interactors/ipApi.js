var apisauce = require('apisauce');

const api = apisauce.create({});

module.exports.getLocation = ip => api.get('http://ip-api.com/json/' + ip);
