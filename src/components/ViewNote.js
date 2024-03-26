import React from 'react';
import './AddNew.css';
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function SetNote({ isOpen, onClose ,selectedNote}) {
    const { theme } = useContext(ThemeContext);   
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className={`modal ${theme}`}>
        <div className="modal__header detail">{selectedNote.title}</div>
          <p className='detail'>{selectedNote.content}</p>
          <div className="btns">
                <button className="button" onClick={onClose}>Close</button>
         </div>
        </div>
      </div>
    );
}


export default SetNote;

