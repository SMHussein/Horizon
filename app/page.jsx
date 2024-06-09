import Construction from '@components/Construction';
import Feed from '@components/Feed';
import Title from '@components/Title';

function Home() {
    return (
        <section className='flex-center flex-col'>
            <Title />
            <Construction />
            <Feed />
        </section>
    );
}

export default Home;
