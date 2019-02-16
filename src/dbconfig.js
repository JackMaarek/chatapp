import  PouchDB   from '../node_modules/pouchdb';

var db = new PouchDB('chatapp');
var remotedb = new PouchDB('http://chatApp:ryzlathluli24@localhost:5984/chatapp');
db.info().then(function (info) {
    console.log(info);
  })

remotedb.info().then(function (info) {
    console.log(info);
  })
 

export { db, remotedb }