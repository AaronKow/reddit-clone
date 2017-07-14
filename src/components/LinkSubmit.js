const LinkSubmit = `
<div class="notice">
    You are submitting a link. The key to a successful submission is interesting content and a descriptive title.
</div>

<div class="form-block">
    <p>url</p>
    <input class="url" type="text" name="url" value="" maxlength="100" />
</div>

<div class="form-block">
    <p class="title-label">*title (must not exceed 255 characters)</p>
    <textarea class="title" name="title" rows="2" cols="80" maxlength="255" ></textarea>
</div>

<div class="form-block">
    <p class="subreddit-label">*choose a subreddit</p>
    <input class="subreddit" type="text" name="subreddit" value="" maxlength="100" />
</div>

<div class="form-block">
    <p>options</p>
    <input class="subscribe" type="checkbox" name="subscribe" value="" />
    <span class="send-reply">send replies to my inbox</span>
</div>
`;

export default LinkSubmit;
