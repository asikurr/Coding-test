import React, { useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container } from 'react-bootstrap';
import Modal from 'react-modal';
import './DragAndDrop.css'


const DragAndDropText = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const [dragItem, setDragItem] = useState([])

    const [inputeText, setInputeText] = useState("")
   
    //save drag Item
    const handleOnDragEnd = (result) => {
        // console.log(result)
        if (!result.destination) return;
        const items = Array.from(dragItem);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        setDragItem(items);

    }

    Modal.setAppElement('body')
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const saveTextHandler = e => {
        e.preventDefault();
        setDragItem([
            ...dragItem,
            {
                name: inputeText,
                id: Math.floor(1000 + Math.random() * 9000).toString()
            }
        ])
        setInputeText("")

    }
    const textHandler = e => {

        setInputeText(e.target.value)
        // console.log(oldText)
    }
    console.log(dragItem)
    return (
        <Container>
            <div className="main-container">
                {dragItem &&
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        dragItem.map(({ id, name }, index) =>
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => (
                                                    <li className="dragItem" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                                        <p className="text">
                                                            {name}
                                                        </p>
                                                    </li>
                                                )}
                                            </Draggable>
                                        )
                                    }
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                }

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button className="btn btn-danger ml-0" onClick={closeModal}>close</button>
                    <h6>Please Input Text</h6>
                    <form className="form-group" onSubmit={saveTextHandler}>
                        {/* <input onBlur={textHandler} type="hidden"  name={Math.floor(1000 + Math.random() * 9000)} /> */}
                        <input className="form-control my-2" value={inputeText} onChange={textHandler} type="text" name="name" />
                        <button className="btn btn-success  ml-0">Save</button>
                    </form>
                </Modal>

                <button className="btn btn btn-primary" onClick={openModal}>Add Text</button>
            </div>
        </Container>
    );
};

export default DragAndDropText;