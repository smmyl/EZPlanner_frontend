import {useState} from 'react'

const Notes = (props) => {

    return (
        <>
        <div class='container mx-auto my-10 flex flex-col' id='notecont'>
            <h1 class='text-2xl'>Notes</h1>
            <br/>
            <ul class='max-w-md space-y-1 list-disc list-inside'>
            {props.notesInfo.map((note) => {
                return (
                    <>
                    <div class='flex'>
                        <li>
                            {note.notes}
                        </li>
                        <button onClick={props.handleDeleteNotesInfo} value={note.id}>
                        <img class='mx-20 mb-10 cursor-pointer' width='20' height='20' src='https://img.icons8.com/?size=512&id=14237&format=png'/>
                        </button>
                    </div>
                    </>
                )
            })}
            </ul>
        </div>
        </>
    )
}

export default Notes;
