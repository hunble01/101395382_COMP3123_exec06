const mongoose = require('mongoose');

// Create Note Schema
const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
    },
    noteDescription: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'], // Enum for priority values
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now, // Automatically set the date when the note is created
    },
    dateUpdated: {
        type: Date,
        default: Date.now, // Automatically set the date when the note is updated
    },
});

// Create a Note model from the schema
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
