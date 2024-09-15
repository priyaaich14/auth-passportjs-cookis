import Note from "../models/note-model.js";
const notesCltr = {}

/// list alll notes of  the user

notesCltr.list = async (req,res) => {
    try{
        const notes = await Note.find ({ user : req.userId})
        res.json(notes)
       // console.log(notes)
    }catch (err){
        res.json(err)
    }
}

/// create a note for the user

notesCltr.create = async (req,res) => {
    const { title, body } = req.body
    try {
        const note = new Note ({title,body})
        note.user = req.userId
        await note.save()
        res.status(201).json(note)
    }catch (err){
        res.json(err)
    }
}
// show a note of the user

notesCltr.show = async(req,res) =>{
    const id = req.params.id
    try {
        const note = await Note.findOne ({ _id : id, user : req.userId})
        if(!note) {
            return res.status(404).json({ })
        }
        res.json(note)
    }catch (err){
        res.json(err)
    }
}

// update
 notesCltr.update = async (req,res) => {
    const id = req.params.id
    const body = req.body
    try {
        const note = await Note.findOneAndUpdate({ _id : id, user : req.userId} , body, { new : true })
        if (!note) {
            return res.status(404) . json({ })
        }
        res.json(note)
    } catch (err) {
        res.json(err)
    }
 }

 // delete

 notesCltr.delete = async (req,res) =>{
    try {
    const id = req.params.id
    const note = await Note.findOneAndDelete ({ _id : id ,user : req.userId})
    if (!note){
        return res.status(404).json({ })
    }
    res.json(note)
    } catch (err){
        res.json(err)
    }
}

export default notesCltr