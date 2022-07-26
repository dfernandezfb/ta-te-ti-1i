import { useState } from 'react';
import './RegisterForm.css'

const RegisterForm = () => {
  const [values, setValues] = useState({
    name:'',
    email:'',
    pass:''
  })
  const handleChange = (e)=>{
    console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }
  // {
  //   name:'Diego',
  //   email:'',
  //   pass:''
  // }
  const handleSubmit = (e)=>{
    //! HACER UN CONTROL DE VALIDACIONES ANTES DE ENVIAR
    e.preventDefault();
    // setDataToBackend();
    console.log(values);
  }
  
  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id='name' name='name' onChange={handleChange}/>
      <label htmlFor="email">Email:</label>
      <input type="email" id='email' name='email' onChange={handleChange}/>
      <label htmlFor="pass">Contraseña:</label>
      <input type="password" id='pass' name='pass' onChange={handleChange}/>
      <button type='submit'>Subir</button>
    </form>
    );
  }
  
  export default RegisterForm;
  
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
{/* <form>
<label htmlFor='name'> Nombre: </label>
<input type="text" id='name' onChange={e=> setName(e.target.value)}onKeyUp={handleKeyUp} value={name}/>
<label htmlFor="email"> Dirección de correo: </label>
<input type="email" id='email' onKeyUp={e=> setEmail(e.target.value)}/>
</form> */}