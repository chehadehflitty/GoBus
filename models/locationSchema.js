const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    busId: {
        type: Schema.Types.ObjectId,
        ref: 'Bus',
        unique: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
},
{timestamps:true}
);

module.exports = mongoose.model('Location', locationSchema);