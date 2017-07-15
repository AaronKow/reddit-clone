/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Test Suite for CheckPage
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


// Global Scope
import $global from '../../src/$global';

// Methods
import UpdateDOM from '../../src/methods/UpdateDOM';
import CheckPage from '../../src/methods/CheckPage';


describe("Test Suite for CheckPage:", () => {
    // create a div.app in document body
    const app = document.createElement('div');
    app.setAttribute("id", "app");
    document.body.appendChild(app);

    // lay out the DOM initially
    UpdateDOM();

    // variables
    var headerLink = document.querySelector("header > .title"),
        submitLink = document.querySelector(".btn-entry.link"),
        submitText = document.querySelector(".btn-entry.post");



    describe("when headerLink is clicked:", () => {
        beforeEach(() => {
            headerLink.click();
        });

        it("$global.currentPage should be 'home'", () => {
            expect($global.currentPage).toBe('home');
        });

        it("$global.newSubmit should be false", () => {
            expect($global.newSubmit).toBe(false);
        });
    });

    describe("when submitLink is clicked:", () => {
        beforeAll(() => {
            submitLink.click();
        });

        it("$global.currentPage should be 'newLink'", () => {
            expect($global.currentPage).toBe('newLink');
        });

        it("$global.newSubmit should be 'link'", () => {
            expect($global.newSubmit).toBe('link');
        });
    });

    describe("when submitText is clicked:", () => {
        beforeAll(() => {
            submitText.click();
        });

        it("$global.currentPage should be 'newText'", () => {
            expect($global.currentPage).toBe('newText');
        });

        it("$global.newSubmit should be 'text'", () => {
            expect($global.newSubmit).toBe('text');
        });
    });
});
