
import {useState} from 'react'
import noteContext from "./noteContext";

const NoteState = (props) => {
const host = "http://localhost:5000"

  const [notes, setNotes] = useState([])

const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
   setNotes(json)
 
  }


  return (
    <noteContext.Provider value={{notes,getNotes}}>
        {props.children}
    </noteContext.Provider>
  )
}


export default NoteState;