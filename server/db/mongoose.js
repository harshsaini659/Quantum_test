const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL+"quantumIT", {
useNewUrlParser: true,
})