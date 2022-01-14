const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema(
  {
    email:{
      type:String,
      required:true,    
    },
    name:String,
    age:{
      type:Number,
      min:18,
      max:50
    },
    enrolled:{
      type:Date,
      default:Date.now
    }
  },
  {
    // 시간정보를 기록하게 해줌
    timestamps: true
  }
);

module.exports = mongoose.model('USer',userSchema)