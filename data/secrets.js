var dbuser = process.env.MONGODB_USER || 'admin';
var dbpass = process.env.MONGODB_PASS || '123456';
var dbhost = process.env.MONGODB_HOST || 'ds030500.mlab.com';
var dbport = process.env.MONGODB_PORT || '30500';
var dbname = process.env.MONGODB_NAME || 'agasalhe';

module.exports = {

  db: 'mongodb://' + dbuser + ':' + dbpass + '@' + dbhost + ':' + dbport + '/' + dbname,
  //db: 'mongodb://localhost/local',

  //sessionSecret: process.env.SESSION_SECRET || 'spicecsesssa',
};