import React from 'react';
import './AddNew.css';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
function AddNew({ isOpen, onClose ,addNote}) {
    const { theme } = useContext(ThemeContext);
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');

   
   
      const handleSubmit = () => {
        const newNote = {
          title: title,
          content: content,
          createdAt: new Date().toISOString()
        };
        addNote(newNote);
        setTitle('');
        setContent('');
        onClose();
      };
    
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className={`modal ${theme}`}>
        <div className="modal__header">Add Note</div>
          <h2 className='title'>Title :</h2>
          <input  maxlength="40"  type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <h2 className='title'>Content : </h2>
          <textarea   rows="2"  className="mktoField mktoHasWidth mktoValid"  value={content}  onChange={(e) => setContent(e.target.value)} ></textarea>
          <div className="btns">
            
                <button className="button" onClick={onClose}>Close</button>
                <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
            
         </div>
        </div>
      </div>
    );
}


export default AddNew;

