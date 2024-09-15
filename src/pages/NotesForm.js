import axios from '../config/axios'
import NotesContext from '../context/NotesContext';
import {  useContext, useState, useEffect } from 'react';

export default function NotesForm (){
const { notes, notesDispatch } = useContext(NotesContext)
const [title, setTitle ]= useState([])
const [ body, setBody ] = useState([])

useEffect(() => {
    if( notes.editId) {
        const note = notes.data.find ( ele => ele._id === notes.editId)
        setTitle( note.title )
        setBody( note.body )
    }
}, [ notes,notes.editId ])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = { 
            title, body 
        }
        if(notes.editId){
            try {
                const response = await axios.put (`/api/notes/${notes.editId}`, formData,{
                    headers : { 'Authorization ' : localStorage.getItem('token')}
                })
                notesDispatch ({ type : 'UPDATE_NOTE', payload : response.data })
                setTitle('')
                setBody('')
            } catch (err) {
                console.log (err.message)
            }
        } else {
         try{
            const response = await axios.post('/api/notes',formData, {headers : {
                'Authorization': localStorage.getItem('token')
            }})
            notesDispatch({ type : 'ADD_NOTES', payload : response.data})
            setTitle('')
            setBody('')
         } catch (err){
            alert(err.message)
         }  
        }
    
    }

    return (
        <div>
            <h2>Note Form</h2>
        <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter title' 
                    value={title} 
                    onChange={e=>setTitle(e.target.value)} 
                /> <br />
                
                <textarea
                    placeholder='Enter body' 
                    value={body} 
                    onChange={e=>setBody(e.target.value)} 
                /> <br /> 
                <input type="submit" />
                </form>
                </div>
    )
}