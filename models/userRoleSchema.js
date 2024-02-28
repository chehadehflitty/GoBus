const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userType: {
        type: String,
        enum: ['passenger', 'driver'],
        required: true
    }
},
{timestamps:true}
);

module.exports = mongoose.model('UserRole', userRoleSchema);
