const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  workoutName: {
    type: String,
    required: "Please enter a workout name.",
    trim: true,
  },
  workoutTime: {
    type: Number,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
