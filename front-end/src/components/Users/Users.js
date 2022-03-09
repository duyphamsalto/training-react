import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import UsersBody from '../Body/UsersBody';
import Footer from '../Footer/Footer';


function Users() {
    return(
        <div className='posts-body'>
            <>
                <Header />
                <main>
                    <Sidebar />
                    <UsersBody />
                </main>
                <Footer />
            </>
        </div>
    );
}

export default Users;