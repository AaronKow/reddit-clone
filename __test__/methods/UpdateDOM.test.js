/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Test Suite for UpdateDOM
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


// Global Scope
import $global from '../../src/$global';

// Methods
import UpdateDOM from '../../src/methods/UpdateDOM';
import CheckPage from '../../src/methods/CheckPage';
import CheckVote from '../../src/methods/CheckVote';
import CheckNewPost from '../../src/methods/CheckNewPost';


describe("Test Suite for UpdateDOM():", () => {
    // create a div.app in document body
    const app = document.createElement('div');
    app.setAttribute("id", "app");
    document.body.appendChild(app);

    // mock the function of UpdateDOM()
    const mainFn = jest.fn(UpdateDOM);


    it("DOM should be empty before invoke", () => {
        expect(app.innerHTML).toBe('');
    });

    it("should have been invoked", () => {
        mainFn();
        expect(mainFn).toHaveBeenCalled();
    });

    it("DOM should have elements after invoked", () => {
        expect(app.innerHTML).not.toBe('');
    });

    it("function, CheckPage() should been called", () => {
        const mockFn = jest.spyOn(CheckPage, 'init');
        mainFn();
        expect(mockFn).toHaveBeenCalled();
    });

    it("function, CheckVote() should been called", () => {
        const mockFn = jest.spyOn(CheckVote, 'init');
        mainFn();
        expect(mockFn).toHaveBeenCalled();
    });


    describe("When $global.currenPage === 'newLink'", () => {
        beforeEach(() => {
            $global.currentPage = 'newLink';
            var submitLink = document.querySelector(".btn-entry.link");
            submitLink.click(); // simulate page click
        });

        it("function, CheckNewPost() should been called", () => {
            const mockFn = jest.spyOn(CheckNewPost, 'init');
            mainFn();
            expect(mockFn).toHaveBeenCalled();
        });
    });
});
