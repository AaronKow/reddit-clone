// CheckVote check if user start to trigger the voting

// Global
import $global from '../$global';

// Data
import EntryList from '../data/EntryList';

// Methods
import UpdateDOM from './UpdateDOM';

// Plugins
import _ from 'underscore';


const CheckVote = {
    init: () => {
        var upvote = document.querySelectorAll(".voting > .upvote");
        var downvote = document.querySelectorAll(".voting > .downvote");

        upvote = Array.from(upvote); // ensure this is proper array before proceed
        upvote.forEach((each) => {
            each.onclick = (e) => {
                e.preventDefault();
                var index = _.findIndex(EntryList, obj => obj.id === each.childNodes[1].innerHTML);
                EntryList[index].voteCount++;
                UpdateDOM();
            };
        });

        downvote = Array.from(downvote);
        downvote.forEach((each) => {
            each.onclick = (e) => {
                e.preventDefault();
                var index = _.findIndex(EntryList, obj => obj.id === each.childNodes[1].innerHTML);
                EntryList[index].voteCount--;
                UpdateDOM();
            };
        });
    }
};

export default CheckVote;
