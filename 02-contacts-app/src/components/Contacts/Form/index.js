import {useState, useEffect} from 'react';


const formStyle = {fullName: '', phone_number:'' };
function Form({addContacts, contacts}) {
    // console.log(addContacts);
    const [form, setForm] = useState(formStyle);

    useEffect(()=>{
        setForm(formStyle);
    },[contacts]);
    // With useEffect, the moment the contacts content changes is captured and the content is emptied.

    const onChangeInput = (arr) =>{
        setForm({...form,[arr.target.name]:arr.target.value});
    };

    const onSubmit = (e) => {
    //console.log(form);
       e.preventDefault();
       if(form.fullName === '' || form.phone_number === ''){
        // console.log('do not work');
        return false;
       }
    //    console.log(form);
        addContacts([...contacts,form]);
    };

  return (
    <form onSubmit={onSubmit}>
        <div>
        <input 
        name='fullName' 
        placeholder='Full Name'
        value={form.fullName}
        onChange={onChangeInput}
         />
        </div>
        <div>
        <input 
        name='phone_number' 
        placeholder='Phone Number'
        value={form.phone_number}
        onChange={onChangeInput}
         />
        </div>

     <div className='btn'> 
        <button>Add Contacts</button>
    </div>
    </form>

  );
}

export default Form;