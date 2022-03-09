import './Body.css';
import home_img from './img/home.png';
import post_img from './img/post-img.png';

function Body() {
    return(
        <>
            <div className='contents-body'>
                <div className='page-links'>
                    <p><a href='#' id='home-nav'><img src={home_img}></img>Home</a> / <a href="#" id='users-nav'>Users</a></p>
                </div>
                <div className='contents-wrapper'>
                    <div className='post-wrapper'>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                            <   p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                            <   p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className='post-card'>
                            <div className='post-img'><img src={post_img} alt='thumbnail'></img></div>
                            <div>
                                <p className='card-title'>Card Title</p>
                                <p className='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Body;