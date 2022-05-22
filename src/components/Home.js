import { useState } from 'react';
import BlogList from './BlogList';

const Home = () =>  {
        const [blogs, setBlogs] = useState([
          { title: 'The Ngorongoro Crator', body: 'lorem ipsum...', author: 'Emmanuel', id: 1 },
          { title: 'The Mighty Serengeti!', body: 'lorem ipsum...', author: 'Lyimo', id: 2 },
          { title: 'Mount Kilimanjaro', body: 'lorem ipsum...', author: 'Emmanuel', id: 3 }
        ])

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
            <BlogList blogs={blogs} title='All Blogs'/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='Emmanuel')} title='Emmanuel Blogs'/>
            <h2>Homepage</h2>
            <p>{ name } is { number } National Park in the World!!</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('matata',e)}>Click me Again</button> */}
        </div>
    );
}
 
export default Home;