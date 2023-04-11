import {useState, useEffect} from 'react';

import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName:"Fatmanur",
            phone_number:12345,
        },
        {
            fullName:"Jane",
            phone_number:9876,
        },
        {
            fullName:"Mehmet",
            phone_number:63465873,
        },
    ]);

    useEffect(() =>{
        console.log(contacts);
    },[contacts]);
  return (
    <div>
        <List contacts={contacts}/>
        <Form addContacts = {setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;