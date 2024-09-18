import NotesContext from "../context/NotesContext";
import axios from '../config/axios'
import { useContext } from "react";
export default function NotesList(){
    const { notes, notesDispatch } = useContext(NotesContext)
    const handleRemove = async (id) => {
        const userInput = window.confirm("Are you sure?")
        if (userInput){
            try{
                const response = await axios.delete(`/api/notes/${id}`, {headers : {
                    'Authorization':localStorage.getItem('token')
                }})
                notesDispatch({ type : 'REMOVE_NOTE',payload : response.data._id})
            }catch (err){
                alert(err.message)
            }
        }
    }

    const handleEdit = ( id ) => {
        notesDispatch ({ type : 'SET_EDIT_ID', payload : id })
    }
    return (
        <ul>
            { notes.data.map ((ele) => {
                return <li key={ele._id}>{ ele.title}
                <button onClick = {() =>{
                handleEdit(ele._id)}}>
                edit
                </button>
                <button onClick = {() =>{
                handleRemove(ele._id)}}>
                remove
                </button>
                </li>
            })}
        </ul>
    )
}