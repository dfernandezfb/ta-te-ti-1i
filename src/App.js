import Board from "./components/Board/Board";
import ComplainceModal from "./components/ComplainceModal/ComplainceModal";

function App() {
  // console.log(process.env.USER_EMAIL);
  // console.log(process.env.DB_URI);
  return (
    <>
    <Board/>
    <ComplainceModal/>
    </>
  );
}

export default App;
