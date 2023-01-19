const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

/****************************  Validation with schema  **************************/
// To validate with the help of schema, the property of the doc is made an object and extra key-value's are added.

// {<property>:{
// type: String,
// required: [true, "must provide name"],
// trim: true,(removes any whitespace)
// maxLength: [20, "name must not exceed 20 characters"]
// minLength: [5, "name must not be below 5 characters"],
// default: true or any other value
//  }
//  }

// Models are representation for the collections.
// In mongoose a model is a wrapper for the schema. So if the schema defines the structure for the document, like the type,validation etc, a mongoose model provides an interface for the database. So using the model we will be able to create, update, query and delete docs.

// Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from underlying MongoDB database.

module.exports = mongoose.model("Task", TaskSchema);
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercase version of your model name. Thus, for the example above, the model "Task" is for the "tasks" collection in the database.
