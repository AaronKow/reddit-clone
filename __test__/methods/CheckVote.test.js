/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Test Suite for CheckVote
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


// Global Scope
import $global from '../../src/$global';

// Data
import EntryList from '../../src/data/EntryList';

// Methods
import UpdateDOM from '../../src/methods/UpdateDOM';

// Plugins
import _ from 'underscore';


describe("Test Suite for CheckVote:", () => {
    // create a div.app in document body
    const app = document.createElement('div');
    app.setAttribute("id", "app");
    document.body.appendChild(app);

    // lay out the DOM initially
    UpdateDOM();

    // get all node elements for upvote & downvote
    var upvote = document.querySelectorAll(".voting > .upvote");
    upvote = Array.from(upvote);
    var downvote = document.querySelectorAll(".voting > .downvote");
    downvote = Array.from(downvote);


    it("should have all upvotes number according list available in EntryList", () => {
        // if there is 20 list entries, there should have 20 upvotes
        expect(upvote.length).toBe(EntryList.length);
    });

    it("should have all downvotes number according list available in EntryList", () => {
        // if there is 20 list entries, there should have 20 downvotes
        expect(downvote.length).toBe(EntryList.length);
    });


    describe("each upvote", () => {
        it("should increment when clicked accordingly to its own value", () => {
            let randomIndex = _.random(0, EntryList.length),
                arrayIndex = _.findIndex(EntryList, obj => obj.id === upvote[randomIndex].childNodes[1].innerHTML),
                originalCount = EntryList[arrayIndex].voteCount;


            // simulate 10 increment
            for (let j = 1; j <= 10; j++) {
                originalCount++;

                // simulate click
                upvote[randomIndex].childNodes[1].click();

                // the list in entries should be incremented accordingly
                expect(EntryList[arrayIndex].voteCount).toBe(originalCount);
            }
        });
    });


    describe("each downvote", () => {
        it("should decrement when clicked accordingly to its own value", () => {
            let randomIndex = _.random(0, EntryList.length),
                arrayIndex = _.findIndex(EntryList, obj => obj.id === downvote[randomIndex].childNodes[1].innerHTML),
                originalCount = EntryList[arrayIndex].voteCount;


            // simulate 10 decrement
            for (let j = 1; j <= 10; j++) {
                originalCount--;

                // simulate click
                downvote[randomIndex].childNodes[1].click();

                // the list in entries should be incremented accordingly
                expect(EntryList[arrayIndex].voteCount).toBe(originalCount);
            }
        });
    });

});
