import './StyledTest.css'
import styled from 'styled-components'

const ParrafoIlegible = styled.p`
background-color : ${props=> props.bgColor === 'oscuro'? 'black': 'white'};
color: red;
font-size:25px;
`
const ParrafoIlegibleGrande = styled(ParrafoIlegible)`
height:200px
`

const StyledTest = () => {
  return (
    <>
      <ParrafoIlegible bgColor="no-oscuro"> Hola, a que no me leen</ParrafoIlegible>
      <ParrafoIlegibleGrande>Hola, a que no me leen x2 y grande</ParrafoIlegibleGrande>
    </> 
   );
}
 
export default StyledTest;