const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type require"], // validation message
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      required: [true, "blood quantity is require"],
    },
    email: {
      type: String,
      required: [true, "Donar email is required"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      // ref: "organisation",
      required: [true, "Organisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
