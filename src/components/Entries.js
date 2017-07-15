// Entries (Contain all the list of topics)

// Data
import EntryList from '../data/EntryList';

// Methods
import UpdateDOM from '../methods/UpdateDOM';

// Plugins
import _ from 'underscore';


const Entries = () => {
    return `
    <!-- List of Entry -->
    <div class="entries">

        <!-- Entry (Looping) -->
        ${ EntryLoop() }
    </div>
    `;
};

function EntryLoop() {
    var entries = '',
        sortedEntryList = _.sortBy(EntryList, num => -num.voteCount); // sort the list in descending order according to the voteCount

    for (var i = 0; i < sortedEntryList.length; i++) {
        entries += `
        <div class="entry">
            <!-- Numbering -->
            <p class="numbering">${ i + 1 }</p>

            <!-- voting -->
            <div class="voting">
                <a href="#" class="upvote">
                    <span style="display:none;">${ sortedEntryList[i].id }</span>
                    <i class="fa fa-arrow-up"></i>
                </a>

                <p class="count">${ sortedEntryList[i].voteCount }</p>

                <a href="#" class="downvote">
                    <span style="display:none;">${ sortedEntryList[i].id }</span>
                    <i class="fa fa-arrow-down"></i>
                </a>
            </div>

            <!-- thumbnail -->
            <a href="#" class="thumbnail ${ sortedEntryList[i].type }"></a>

            <!-- topic -->
            <div class="topic">
                <div class="title">
                    <a href="#" class="link">
                        ${ sortedEntryList[i].topic }
                    </a>

                    <a href="#" class="domain">
                        ${ sortedEntryList[i].link }
                    </a>
                </div>

                <div class="details">
                    <a href="#" class="btn-expand ${ sortedEntryList[i].type }"></a>

                    <div class="inner-details">
                        <div class="submit-detail">
                            <p class="submitted">
                                submitted 10 hours ago by
                            </p>

                            <a href="#" class="user">
                                ${ sortedEntryList[i].postedBy }
                            </a>

                            <p>
                                to
                            </p>

                            <a href="#" class="subscribe" title="subscribe to">
                                <i class="fa fa-plus-circle"></i>
                            </a>

                            <a href="#" class="subreddit-link">
                                ${ sortedEntryList[i].subreddit }
                            </a>
                        </div>

                        <div class="action-detail">
                            <a href="#" class="comments">
                                ${ sortedEntryList[i].commentsCount } comments
                            </a>
                            <a href="#" class="share">
                                share
                            </a>
                            <a href="#" class="save">
                                save
                            </a>
                            <a href="#" class="hide">
                                hide
                            </a>
                            <a href="#" class="report">
                                report
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    return entries;
}

export default Entries;
