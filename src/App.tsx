import Button from '@mui/material/Button';
import Header from './header.tsx';


const App = () => {
  let count = 0;
  return (
    <>
    <Header />
      <p>hello world</p>
      <Button variant='contained' onClick={()=>{
        count++;
        console.log(count);
      }}>button</Button>
    </>
  )
}
export default App
