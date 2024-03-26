import React from 'react';
import './AddNew.css';
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
function SetNote({ isOpen, onClose ,updateNote,selectedNote}) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [title, setTitle] = useState(selectedNote.title); 
    const [content, setContent] = useState(selectedNote.content);

   
   
    const handleSubmit = () => {
        const updatedNote = {
          id: selectedNote.id,
          title: title,
          content: content,
          createdAt: selectedNote.createdAt
        };
        updateNote(updatedNote);
        onClose();
      };
    
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className={`modal ${theme}`}>
        <div className="modal__header">Update Note</div>
          <h2 className='title'>Title :</h2>
          <input  maxlength="255"  type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <h2 className='title'>Content : </h2>
          <textarea id="z_miscellaneous_1_value"  rows="2"  className="mktoField mktoHasWidth mktoValid"  value={content}  onChange={(e) => setContent(e.target.value)} ></textarea>
          <div className="btns">
            
                <button className="button" onClick={onClose}>Close</button>
                <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
            
         </div>
        </div>
      </div>
    );
}


export default SetNote;

