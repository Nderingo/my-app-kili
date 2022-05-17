import { useState } from 'react';

const Home = () => {

const [name,setName] = useState('Ngorongoro');
const [number,setNumber] = useState(1)
    const handleClick = ()=> {
        console.log('Hakuna, matata');
        setName('The Serengeti')
        setNumber(2)
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hakuna ' +name, e.target);
    //   }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { number } National Park in the World!!</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('matata',e)}>Click me Again</button> */}
        </div>
    );
}
 
export default Home;