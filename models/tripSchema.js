const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    busId: {
        type: Schema.Types.ObjectId,
        ref: 'Bus'
    },
    routeId: {
        type: Schema.Types.ObjectId,
        ref: 'Route'
    }
},
{timestamps:true}
);

module.exports = mongoose.model('Trip', tripSchema);