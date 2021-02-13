import react, {useState} from 'react';
import Header from './Header';

const HeaderContainer = () => {
    const [count, setCount] = useState(0);

    const incrementClickCount = () => {
        setCount(count + 1);
    }

    return (
        <Header
            count={count}
            incrementClickCount={incrementClickCount}
        />
    )
}

export default HeaderContainer;