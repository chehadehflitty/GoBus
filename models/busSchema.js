const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
    busNumber: {
        type: Number,
        required: true,
        unique: true
    },
    routeId: {
        type: Schema.Types.ObjectId,
        ref: 'Route'
    }
},
{timestamps:true}
);

module.exports = mongoose.model('Bus', busSchema);
