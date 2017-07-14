// Entries (Contain all the list of topics)

import EntryList from '../data/EntryList';


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
    var entries = '';
    for (var i = 0; i < EntryList.length; i++) {
        console.log(EntryList[i].topic);
        entries += `
        <div class="entry">
            <!-- Numbering -->
            <p class="numbering">${ i + 1 }</p>

            <!-- voting -->
            <div class="voting">
                <a href="#">
                    <i class="fa fa-arrow-up"></i>
                </a>

                <p class="count">${ EntryList[i].voteCount }</p>

                <a href="#">
                    <i class="fa fa-arrow-down"></i>
                </a>
            </div>

            <!-- thumbnail -->
            <a href="#" class="thumbnail ${ EntryList[i].type }"></a>

            <!-- topic -->
            <div class="topic">
                <div class="title">
                    <a href="#" class="link">
                        ${ EntryList[i].topic }
                    </a>

                    <a href="#" class="domain">
                        ${ EntryList[i].link }
                    </a>
                </div>

                <div class="details">
                    <a href="#" class="btn-expand ${ EntryList[i].type }"></a>

                    <div class="inner-details">
                        <div class="submit-detail">
                            <p class="submitted">
                                submitted 10 hours ago by
                            </p>

                            <a href="#" class="user">
                                ${ EntryList[i].postedBy }
                            </a>

                            <p>
                                to
                            </p>

                            <a href="#" class="subscribe" title="subscribe to">
                                <i class="fa fa-plus-circle"></i>
                            </a>

                            <a href="#" class="subreddit-link">
                                ${ EntryList[i].subreddit }
                            </a>
                        </div>

                        <div class="action-detail">
                            <a href="#" class="comments">
                                ${ EntryList[i].commentsCount } comments
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
