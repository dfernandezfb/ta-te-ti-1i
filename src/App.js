import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
// import ComplainceModal from "./components/ComplainceModal/ComplainceModal";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import StyledTest from "./components/StyledTest/StyledTest";
import styled from 'styled-components'
import axios from "axios";
import { instance } from "./config/axiosConfig";

function App() {
  const [clicks, setClicks] = useState(0);
  const [test, setTest] = useState('');
  // console.log(process.env.USER_EMAIL);
  // console.log(process.env.DB_URI);
  const handleClick = ()=>{
    setClicks(clicks+1)
  }
  const BigContainer = styled.div`
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-size:35px;
  `
  //! Cada vez que se monte el componente (esto quiere decir que va a suceder cada vez que cualquier estado se actualice)
  // useEffect(()=>{
  //   console.log('Hola mi banda');
  // })
  //! Escucha el cambio de los estados guardados en el input, solo se ejecuta cuando alguno de ellos cambia
  // useEffect(()=>{
  //   console.log('Hola mi banda');
  // },[test])
  //! Solo se ejecuta una vez cuando el componente se montó y nunca más
  // useEffect(()=>{
  //   console.log('Hola mi banda');
  // },[])
  //! Se ejecuta cada vez que el componente se desmonta
  // useEffect(()=>{
  //   return ()=> console.log('Componente desmontado');
  // },[])

  //?AXIOS
  const getData = async () =>{
    try {
      const data = await instance.get('/random.php');
      setValue(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <BigContainer>
    {/* <Board/> */}
    {/* <ComplainceModal/> */}
    {/* <RegisterForm/> */}
    {/* <StyledTest/> */}
    {clicks}
    <button onClick={handleClick}>+1</button>
    </BigContainer>
  );
}

export default App;
