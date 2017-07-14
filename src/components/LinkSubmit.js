const LinkSubmit = `
<div class="notice">
    You are submitting a link. The key to a successful submission is interesting content and a descriptive title.
</div>

<div class="form-block">
    <p>url</p>
    <input class="url" type="text" name="url" value="" />
</div>

<div class="form-block">
    <p>*title</p>
    <textarea class="title" name="title" rows="2" cols="80"></textarea>
</div>

<div class="form-block">
    <p>*choose a subreddit</p>
    <input class="subreddit" type="text" name="subreddit" value="" />
</div>

<div class="form-block">
    <p>options</p>
    <input class="subreddit" type="checkbox" name="subreddit" value="" />
    <span class="send-reply">send replies to my inbox</span>
</div>
`;

export default LinkSubmit;
