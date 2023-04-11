import {useState} from 'react';

function List({contacts}) {

    const [filterText,setFilterText] = useState("");

  return (
    <div>
        <input 
        placeholder='Filter Contact'
        value={filterText}
        onChange={(e)=> setFilterText(e.target.value)}
         />
        <ul>
            {contacts.map((contact, i) =>(
                <li key={i}>{contact.fullName}</li>
                // key is important for object (map)!
            ))}
        </ul>
    </div>
  );
}

export default List;