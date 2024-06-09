import Link from 'next/link';
import Button from './Button';

function Feed() {
    return (
        <div>
            <h2 className=' text-center desc'>Meanwhile you can still reach us out here!</h2>
            <Button href='/contact'>Contact us</Button>
        </div>
    );
}

export default Feed;
