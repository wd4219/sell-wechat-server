const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let UserSchema = new Schema({
  username: {
    unique: true,
    type: String
  },
  address:[{type: ObjectId, ref: 'Address'}],
  password: String,
  name: String,
  phonenumber:String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});


UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }

  // bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
  //   if (err) return next(err);

  //   bcrypt.hash(user.password, salt, function (err, hash) {
  //     if (err) return next(err);

  //     user.password = hash;
  //     next();
  //   });
  // });
  next();
});

module.exports = UserSchema;