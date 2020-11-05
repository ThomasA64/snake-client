const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

  conn.setEncoding('utf8'); 

  return conn.on('Successfully connected to the game server');
}
conn.on('data', (data) => {
  console.log('Server says: Name: TGA', data);
});
