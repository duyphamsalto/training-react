import './Body.css';
import home_img from '../img/home.png';
import post_img from '../img/card-image.png';

function Body() {
  return(
      <>
          <div class='components-body'>
              <div class='page-links'>
                  <p><a href='#' id='home-nav'><img src={home_img}></img>Home</a> / <a href="#" id='users-nav'>Users</a></p>
              </div>
              <div class='components-wrapper'>
                  <div class='post-wrapper'>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                          <   p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                          <   p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                      <div class='post-card'>
                          <div class='post-img'><img src={post_img} alt='thumbnail'></img></div>
                          <div>
                              <p class='card-title'>Card Title</p>
                              <p class='card-contents'>This is longer card with supporting text below as a natural lead-in to additional content.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
export default Body;
