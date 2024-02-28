const mongoose = require('mongoose'); 
 const URI = 'mongodb://localhost/empleados'; 
 mongoose.connect(mongodb+srv://mauricioErazo:12752494@cluster0.ycondsd.mongodb.net/
 )
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 