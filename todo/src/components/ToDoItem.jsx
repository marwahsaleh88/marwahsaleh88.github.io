import React, {useId} from 'react';

export default function ToDoItem() {
   const id = useId();
   
  return (
    <li>
      <div>
         <input id={id} type="checkbox" name="checkbox" />
         <label htmlFor={id}></label>
      </div>
      <button>Löschen</button>
    </li>
  )
}
