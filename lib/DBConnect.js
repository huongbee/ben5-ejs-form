const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ben5_singer',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .catch(err => console.log(err.message))

mongoose.connect('mongodb+srv://admin:0CIVpBkDfxJrLj55@cluster0.wsurg8t.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => console.log(err.message))