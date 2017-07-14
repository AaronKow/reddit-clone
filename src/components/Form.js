// Global
import $global from '../$global';

// Method
import UpdateDOM from '../methods/UpdateDOM';

// Component
import LinkSubmit from './LinkSubmit';
import TextSubmit from './TextSubmit';


const Form = () => {
    // set listener after the html is injected into DOM
    setTimeout(() => {
        checkTab();
    }, 300);

    return `
    <div class="submit-form">
        <h1>submit to reddit</h1>

        <div class="toggle-submit">
            <a href="#" class="link ${ $global.newSubmit === 'link' ? 'active' : '' }">
                link
            </a>

            <a href="#" class="text ${ $global.newSubmit === 'text' ? 'active' : '' }">
                text
            </a>
        </div>

        <div class="form">
            ${ $global.newSubmit === 'link' ? LinkSubmit : TextSubmit }
        </div>

        <div class="form-footer">
            <p class="policy-notice">
                please be mindful of reddit's <a href="#">content policy</a> and practice <a href="#">good reddiquette</a>.
            </p>
            <p class="required-text">
                *required
            </p>
            <button class="btn-submit" type="button" name="button">submit</button>
        </div>
    </div>
    `;
};

function checkTab() {
    var content  = document.querySelector(".content"),
    submitLinkTab = content.querySelector(".submit-form .toggle-submit > .link"),
    submitTextTab = content.querySelector(".submit-form .toggle-submit > .text");
    submitLinkTab.onclick = () => {
        $global.currentPage = 'newLink';
        $global.newSubmit = "link";
        UpdateDOM();
    };
    submitTextTab.onclick = () => {
        $global.currentPage = 'newText';
        $global.newSubmit = "text";
        UpdateDOM();
    };
}

export default Form;
