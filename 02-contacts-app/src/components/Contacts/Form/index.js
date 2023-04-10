import {useState} from 'react';

function Form() {
    const [form, setForm] = useState({fullName: '', phone_number:'' });

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
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
        <input 
        name='fullName' 
        placeholder='Full Name'
        onChange={onChangeInput}
         />
        </div>
        <div>
        <input 
        name='phone_number' 
        placeholder='Phone Number'
        onChange={onChangeInput}
         />
        </div>


        <button>ADD CONTACT</button>
    </form>
  );
}

export default Form;