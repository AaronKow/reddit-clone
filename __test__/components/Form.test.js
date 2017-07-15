/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Test Suite for Component-Form
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


// Global Scope
import $global from '../../src/$global';

// Components
import Form from '../../src/components/Form';

// Methods
import UpdateDOM from '../../src/methods/UpdateDOM';



describe("Test Suite for Component-Form:", () => {
    // create a div.app in document body
    const app = document.createElement('div');
    app.setAttribute("id", "app");
    document.body.appendChild(app);

    // lay out the DOM initially
    UpdateDOM();

    // variables
    var submitLink = document.querySelector(".btn-entry.link"),
        submitText = document.querySelector(".btn-entry.post"),
        content, submitLinkTab, submitTextTab;

    // use Jest Fake Timer
    jest.useFakeTimers();


    describe("Initiate the form", () => {
        beforeAll(() => {
            Form.init();
        });

        it("should trigger the asyncrhonous method in checkTab()", () => {
            // set spy on Form.checkTab() method
            const mockFn = jest.spyOn(Form, 'checkTab');

            // lay out the form elements in DOM
            submitLink.click();

            expect(mockFn).not.toBeCalled();
            jest.runAllTimers(); // fast-forward the test time
            expect(mockFn).toHaveBeenCalled();
            jest.clearAllTimers();
        });
    });

    describe("checking the Form.checkTab() method", () => {
        beforeAll(() => {
            content = document.querySelector(".content");
            submitLinkTab = content.querySelector(".submit-form .toggle-submit > .link");
            submitTextTab = content.querySelector(".submit-form .toggle-submit > .text");
        });

        describe("when 'submitLinkTab' is clicked", () => {
            beforeAll(() => {
                submitLinkTab.click();
            });

            it("$global.currentPage should equal to 'newLink'", () => {
                expect($global.currentPage).toBe('newLink');
            });

            it("$global.newSubmit should equal to 'link'", () => {
                expect($global.newSubmit).toBe('link');
            });
        });

        describe("when 'submitTextTab' is clicked", () => {
            beforeAll(() => {
                submitTextTab.click();
            });

            it("$global.currentPage should equal to 'newText'", () => {
                expect($global.currentPage).toBe('newText');
            });

            it("$global.newSubmit should equal to 'text'", () => {
                expect($global.newSubmit).toBe('text');
            });
        });
    });
});
