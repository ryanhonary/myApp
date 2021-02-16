import {useState} from 'react';
import Header from './Header';

const HeaderContainer = () => {
    const [count, setCount] = useState(0);
    const [potatoPicker, setPotatos] = useState(0);

    const incrementClickCount = () => {
        setCount(count + 1);
    }

    const potatoCounter = () => {
       setPotatos(potatoPicker + 2);
    }
    

    return (
        <Header
            count={count}
            incrementClickCount={incrementClickCount}
            potatoPicker={potatoPicker}
            potatoCounter={potatoCounter}
        />
    )
}

export default HeaderContainer;



//1. Make a potato counter function
	//2. useState to make a potatoCount variable
	//3. Every click is +2 potatoes
//When 12 potatoes are ready, create a Material UI <Snackbar> that pops up saying "12 Potatoes Read"