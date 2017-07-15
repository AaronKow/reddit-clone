// Show the form when user click either the "submit a new link" of "submit a new post"

import $global from '../$global';
import UpdateDOM from './UpdateDOM';

const CheckPage = {
    init: function() {
        var headerLink = document.querySelector("header > .title"),
            content = document.querySelector(".content"),
            submitLink = content.querySelector(".btn-entry.link"),
            submitText = content.querySelector(".btn-entry.post");


        headerLink.onclick = () => {
            $global.currentPage = 'home';
            $global.newSubmit = false;
            UpdateDOM();
        }

        submitLink.onclick = () => {
            $global.currentPage = 'newLink';
            $global.newSubmit = "link";
            UpdateDOM();
        }

        submitText.onclick = () => {
            $global.currentPage = 'newText';
            $global.newSubmit = "text";
            UpdateDOM();
        }
    }
}

export default CheckPage;
