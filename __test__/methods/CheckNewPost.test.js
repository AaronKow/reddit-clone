/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Test Suite for CheckNewPost
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


// Global Scope
import $global from '../../src/$global';

// Data
import EntryList from '../../src/data/EntryList';

// Methods
import UpdateDOM from '../../src/methods/UpdateDOM';


describe("Test Suite for CheckNewPost:", () => {
    // create a div.app in document body
    const app = document.createElement('div');
    app.setAttribute("id", "app");
    document.body.appendChild(app);

    // lay out the DOM initially
    UpdateDOM();

    // variables
    var submitLink = document.querySelector(".btn-entry.link"),
        submitText = document.querySelector(".btn-entry.post"),
        form, btnSubmit, title, titleLabel, subreddit, subredditLabel, url, text;



    describe("when Submit a New Link Post:", () => {
        beforeAll(() => {
            // simulate click
            submitLink.click();

            // define all the elements
            form = document.querySelector(".submit-form");
            btnSubmit = form.querySelector(".btn-submit");
            title = form.querySelector(".title");
            titleLabel = form.querySelector(".title-label");
            subreddit = form.querySelector(".subreddit");
            subredditLabel = form.querySelector(".subreddit-label");
            url = form.querySelector(".url");
            text = form.querySelector(".title");
        });

        describe("when the form is empty", () => {
            beforeAll(() => {
                // ensure all input value are empty
                title.value = '';
                subreddit.value = '';

                // simulate click
                btnSubmit.click();
            });

            it("element title should contain 'alert' class", () => {
                expect(title.classList.contains('alert')).toBe(true);
            });

            it("element titleLabel should contain 'alert' class", () => {
                expect(titleLabel.classList.contains('alert')).toBe(true);
            });

            it("element subreddit should contain 'alert' class", () => {
                expect(subreddit.classList.contains('alert')).toBe(true);
            });

            it("element subredditLabel should contain 'alert' class", () => {
                expect(subredditLabel.classList.contains('alert')).toBe(true);
            });
        });


        describe("when the form required fields are filled and submitted", () => {
            beforeAll(() => {
                // ensure all input value are filled
                title.value = randomString(300); // input a random string more than 255 characters
                subreddit.value = randomString(50);
                url.value = randomString(50);

                // set $global current page at 'newLink'
                $global.currentPage = 'newLink';

                // simulate click
                btnSubmit.click();
            });

            it("should have inserted topic with no more than 255 characters", () => {
                let userInputTopic = EntryList[EntryList.length - 1].topic;
                expect(userInputTopic.length <= 255).toEqual(true);
            });

            describe("in database", () => {
                it("inserted topic should be the same in database topic", () => {
                    let insertedTopic = (title.value).slice(0, 255);
                    let dbTopic = EntryList[EntryList.length - 1].topic;
                    expect(insertedTopic).toBe(dbTopic);
                });

                it("inserted subreddit should be the same in database subreddit", () => {
                    let insertedSubreddit = subreddit.value;
                    let dbSubreddit = EntryList[EntryList.length - 1].subreddit;
                    expect(insertedSubreddit).toBe(dbSubreddit);
                });

                it("inserted link should be the same in database link", () => {
                    let insertedLink = url.value;
                    let dbLink = EntryList[EntryList.length - 1].link;
                    expect(insertedLink).toBe(dbLink);
                });
            });

            it("should have empty string if inserted link is empty", () => {
                // set empty string
                url.value = '';

                // set $global current page at 'newLink'
                $global.currentPage = 'newLink';

                // simulate click
                btnSubmit.click();

                // get result
                let userInputLink = EntryList[EntryList.length - 1].link;
                expect(userInputLink).toBe('');
            });
        });

    });



    describe("when Submit a New Text Post:", () => {
        beforeAll(() => {
            // simulate click
            submitText.click();

            // define all the elements
            form = document.querySelector(".submit-form");
            btnSubmit = form.querySelector(".btn-submit");
            title = form.querySelector(".title");
            titleLabel = form.querySelector(".title-label");
            subreddit = form.querySelector(".subreddit");
            subredditLabel = form.querySelector(".subreddit-label");
            url = form.querySelector(".url");
            text = form.querySelector(".title");
        });

        describe("when the form is empty", () => {
            beforeAll(() => {
                // ensure all input value are empty
                title.value = '';
                subreddit.value = '';

                // simulate click
                btnSubmit.click();
            });

            it("element title should contain 'alert' class", () => {
                expect(title.classList.contains('alert')).toBe(true);
            });

            it("element titleLabel should contain 'alert' class", () => {
                expect(titleLabel.classList.contains('alert')).toBe(true);
            });

            it("element subreddit should contain 'alert' class", () => {
                expect(subreddit.classList.contains('alert')).toBe(true);
            });

            it("element subredditLabel should contain 'alert' class", () => {
                expect(subredditLabel.classList.contains('alert')).toBe(true);
            });
        });


        describe("when the form required fields are filled and submitted", () => {
            beforeAll(() => {
                // ensure all input value are filled
                title.value = randomString(300); // input a random string more than 255 characters
                subreddit.value = randomString(50);

                // set $global current page at 'newText'
                $global.currentPage = 'newText';

                // simulate click
                btnSubmit.click();
            });

            it("should have inserted topic with no more than 255 characters", () => {
                let userInputTopic = EntryList[EntryList.length - 1].topic;
                expect(userInputTopic.length <= 255).toEqual(true);
            });

            describe("in database", () => {
                it("inserted topic should be the same in database topic", () => {
                    let insertedTopic = (title.value).slice(0, 255);
                    let dbTopic = EntryList[EntryList.length - 1].topic;
                    expect(insertedTopic).toBe(dbTopic);
                });

                it("inserted subreddit should be the same in database subreddit", () => {
                    let insertedSubreddit = subreddit.value;
                    let dbSubreddit = EntryList[EntryList.length - 1].subreddit;
                    expect(insertedSubreddit).toBe(dbSubreddit);
                });

                it("inserted link should be the same in database link", () => {
                    let insertedLink = '(i.redd.it)';
                    let dbLink = EntryList[EntryList.length - 1].link;
                    expect(insertedLink).toBe(dbLink);
                });
            });
        });
    });
});

function randomString(number) {
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ',
        result = '';
    for (let i = 0; i < number; i++) {
        result += string[Math.round((Math.random() * string.length))];
    }
    return result;
}
