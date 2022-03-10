import './Body.css';
import home_img from '../img/home.png';
import post_img from '../img/card-image.png';

function Body() {
    return (
        <>
            <div class='components-body'>
                <div class='page-links'>
                    <p><a href='#' id='home-nav'><img src={home_img}></img>Home</a> / <a href="#" id='users-nav'>Users</a></p>
                </div>
                <div class='components-wrapper'>
                    <table border='1'>
                        <tr>
                            <th><input type="checkbox" name="level" value="ok"></input></th>
                            <th align='left'>Title</th>
                            <th align='left'>User Name</th>
                            <th align='left'>Email</th>
                            <th align='left'>Status</th>
                            <th align='left'>Actions</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Un Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="level" value="ok"></input></td>
                            <td></td>
                            <td>Text line</td>
                            <td>Text line</td>
                            <td>Active</td>
                            <td><p align='center'><a href='#'>Publish</a> <a href="#" >Edit</a> <a href="#">Delete</a></p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Body;
