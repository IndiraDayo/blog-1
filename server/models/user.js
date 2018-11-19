const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      hash = require('bycjwt')


let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'First Name must be filled']
    },
    last_name: {
        type: String,
        required: [true, 'Last Name must be filled']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email must be filled'],
        validate: [validateEmail, 'Email is not written in email format'] 
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is not written in email format']
    },
    password: {
        type: String,
        required: [true, 'Password must be filled'],
        validate: {
            validator() {
                if(this.password.length < 6) {
                    throw new Error('Password must be at least 6 characters')
                }
            }
        }
    },
    image: {
        type: String,
        default: 'https://us.123rf.com/450wm/triken/triken1608/triken160800028/61320729-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6'
    },
    role: {
        type: String,
        default: 'user'
    },
    article_list: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }],
}, {
    timestamps: true
})


userSchema.post('validate', function() {
    this.password = hash.bcencode(this.password, Number(process.env.SECRET_SALT))
});


const User = mongoose.model('User', userSchema)
module.exports = User