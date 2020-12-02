const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {

    console.log('Successfully connected to the Server')
  })
  conn.on('data', (message) => {

    console.log(message)
  })
  
  return conn;
}

module.exports = {connect} 
//* Using curly braces and making it an object allows for adding more items for export. 