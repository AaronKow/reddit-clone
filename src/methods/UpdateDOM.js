// Global Scope
import $global from '../$global';

// Html
import Nav from '../components/Nav';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

// methods
import CheckPage from './CheckPage';
import CheckVote from './CheckVote';
import CheckNewPost from './CheckNewPost';


const UpdateDOM = () => {
    var app = document.getElementById('app');
    app.innerHTML = Nav + Header + Content() + Footer;

    // check which page user wanted navigate to
    CheckPage();

    // check if user click vote
    if ($global.currentPage === 'home')
        CheckVote();

    // check if user add new Post
    if ($global.currentPage === 'newLink' || $global.currentPage === 'newText')
        CheckNewPost();
};

export default UpdateDOM;
