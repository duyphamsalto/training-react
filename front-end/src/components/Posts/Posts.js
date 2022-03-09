import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


function Posts() {
    return(
        <div className='posts-body'>
            <>
                <Header />
                <main>
                    <Sidebar />
                    <Body />
                </main>
                <Footer />
            </>
        </div>
    );
}

export default Posts;