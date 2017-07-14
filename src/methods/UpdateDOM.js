// Global Scope
import $global from '../$global';

// Html
import Nav from '../components/Nav';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

// methods
import CheckNewPost from './CheckNewPost';


const UpdateDOM = () => {
    var app = document.getElementById('app');
    app.innerHTML = Nav + Header + Content() + Footer;

    // check if user wanted to create a new Post
    CheckNewPost();
};

export default UpdateDOM;
