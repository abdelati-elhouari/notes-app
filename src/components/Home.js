import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddNew from './AddNew';
import Note from './Note';
import SetNote from './SetNote';
import ViewNote from './ViewNote'

const initialNotes = [
  { id: 1, title: 'Note 1', content: 'content 1', createdAt: new Date() },
  { id: 2, title: 'Note 2', content: 'content 2', createdAt: new Date() },
  { id: 3, title: 'Note 3', content: 'content 3', createdAt: new Date() }
];

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [ViewSelNote, setViewSelNote] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setViewSelNote(null)
    setSelectedNote(null)
  };

  const addNote = (newNote) => {
    const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    const noteWithId = {  id, ...newNote };
    setNotes([...notes, noteWithId]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setSelectedNote(null)
  };

  const deleteNote = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this note?");
    if (shouldDelete) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const ViewNoteSel = (id) => {
    const selNote = notes.find(note => note.id === id);
    setViewSelNote(selNote); 
    openModal()
    
  };
  const updateModel = (id) => {
    
    const selectedNote = notes.find(note => note.id === id);
    setSelectedNote(selectedNote); 
    openModal()

  };

  return (
    <div className="row">
      <Note  notes={notes} deleteNote={deleteNote}  updateModel={updateModel} ViewNote={ViewNoteSel}  />
      <div className="column">
        <div className="related-articles__article purple addNew">
          <FontAwesomeIcon icon={faPlus} />
          <div>
            <button onClick={openModal}>Add new</button>
          </div>
        </div>
      </div>
      {!ViewSelNote && !selectedNote && <AddNew isOpen={isOpen} onClose={closeModal} addNote={addNote}  />}
      {!ViewSelNote && selectedNote && <SetNote isOpen={isOpen} onClose={closeModal} selectedNote={selectedNote} updateNote={updateNote} />}
      {!selectedNote && ViewSelNote && <ViewNote isOpen={isOpen} onClose={closeModal} selectedNote={ViewSelNote}  />}
    </div>
  );
}

export default Home;
