import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../App';

const Note = ({notes,deleteNote,updateModel,ViewNote}) => {
  const { theme } = useContext(ThemeContext);


  return (
    <div>
      {notes.map(note => (
        <div key={note.id} className={`column ${theme}`}>
          <div className="related-articles__article purple">
            <h3 className="noteTitel">
              <p className="detail">{note.title}</p>
            </h3>
            
              <p className="detail">{note.content.slice(0, 60)} </p>
          
            <div className="related-articles__blog-container-max-read">
              <p className="related-articles__blog-text-max-read section-v2__text_main">
                <FontAwesomeIcon icon={faClock} /> {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>
            <div className='LDE'>
              <button onClick={() => ViewNote(note.id)} className='btn_card'>
                <FontAwesomeIcon icon={faEye} style={{ color: "#3687b0", width: "23px", height: "23px" }} />
              </button>
              <button onClick={() => updateModel(note.id)} className='btn_card'>
                <FontAwesomeIcon icon={faEdit} style={{ color: "#224bc3", width: "23px", height: "23px" }} />
              </button>
              <button className='btn_card' onClick={() => deleteNote(note.id)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#f60404", width: "23px", height: "23px" }} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Note;
