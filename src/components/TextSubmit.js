const TextSubmit = `
<div class="notice">
    You are submitting a text-based post. Speak your mind. A title is required, but expanding further in the text field is not. Beginning your title with "vote up if" is violation of intergalactic law.
</div>

<div class="form-block">
    <p>*title</p>
    <textarea class="title" name="title" rows="2" cols="80"></textarea>
</div>

<div class="form-block">
    <p>text (optional)</p>
    <textarea class="title" name="title" rows="4" cols="80"></textarea>
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

export default TextSubmit;
