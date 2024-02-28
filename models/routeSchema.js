const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    startPoint: {
        type: String,
        required: true
    },
    endPoint: {
        type: String,
        required: true
    }
},
{timestamps:true}
);

module.exports = mongoose.model('Route', routeSchema);
