// Show the form when user click either the "submit a new link" of "submit a new post"

import $global from '../$global';
import UpdateDOM from './UpdateDOM';

const CheckNewPost = function() {
    var headerLink = document.querySelector("header > .title"),
        content = document.querySelector(".content"),
        submitLink = content.querySelector(".btn-entry.link"),
        submitText = content.querySelector(".btn-entry.post");


    headerLink.onclick = () => {
        $global.newSubmit = false;
        UpdateDOM();
        CheckNewPost();
    }

    submitLink.onclick = () => {
        $global.newSubmit = "link";
        UpdateDOM();
        CheckNewPost();
    }

    submitText.onclick = () => {
        $global.newSubmit = "text";
        UpdateDOM();
        CheckNewPost();
    }
}

export default CheckNewPost;