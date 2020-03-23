<h1>Bootstrap Styled Javascript Quiz</h1>
<img src="https://lh3.googleusercontent.com/WufUD3nvvos5kyI3NE0gMfUryg7qbiejpop7obtK-QYNgIWofWzWlwC9Ym2XI3tbwm6fbWgCPrmUMjNX7gQ_C_DJAo-KwNkfbq4lmV-wjneoMB3PUKBNrTk0F3Row_elUTrQwLkAWwZHOqWqwlSvWMwjNfZvNnWJG8Tz3393uX8JRAyCH7KxN7lLxvbyVbPQyVS86wnsLwzsUR82ss1p19xkgrxORPc0UOFvMkAW7wsYXQpqcNW5OMwmFn0uXwqYDueie61J0C0GFHZCPuq_lL1lHSPAR24AGEfr2HUhnnBA_kPYzrkb3kuHtyEVIzU9bouFfUMCHU3A0yT5jxnSsl7AlSYWly7wNCzyLoQiVZE1Pem90isr66lC3akZMJJxnUAqn7uMZijctwukPW6TRTiIJD-7qQfueaHem3lHCuV3CPrShxwAnGq-_hdGoJrKEdXI-OMShucsQMhCRP14RhFIIzC7ainG7xNXozYCYORQ-lD_39jCq1APrGicbs0eJ9QLW91k7Y94pNbkrM_ZiH-upT50KBtUZhvYFCXuuD39XXC2RKCzL1RkjEDAhvAertVnvQvWLM98saIsXJmR9tWjOobIqDCZRriSOaG9le_P2B2WkVqfHZE7wl3i-osxs8RQMvA6xRrRC_BmJG1-EJ3SoYt0d3qHtgkIxZwu-8hmTzD88DRnjCqkyEOM-eNN-KPnberzjKB2jsYj1BwwNwvzed5v6x13dRxjFIgGlNXZpudU=w2276-h732-no"
    alt="">

<h2>The Quiz</h2>
<p><a href="https://uxhawk.github.io/class-activities/week-04_web-apis/homework/index.html?">Start quiz</a></p>
<p>This quiz demonstrates DOM manipulation and dynamic styling of HTML/CSS with Javascript. Bootstrap components like <a
        href="https://getbootstrap.com/docs/4.0/components/modal/">Modals</a>, <a
        href="https://getbootstrap.com/docs/4.0/components/card/">Cards</a>, <a
        href="https://getbootstrap.com/docs/4.0/components/forms/#default-stacked">Radio Buttons</a>, and <a
        href="https://getbootstrap.com/docs/4.0/components/buttons/">Buttons</a> are the UI elements that deliver
    interactive quiz questions to the end user.</p>

<h2>How to Use</h2>
<p>To set the length of the quiz, edit <code>var secondsLeft</code> on line 8 of quiz.js</p>
<p>Target the following to update the DOM:
    <ul>
        <li><code>var quesTest</code> to display the current question.</li>
        <li><code>var radioContainer</code> to display the response options</li>
        <li><code>var questionNumber</code> to display progress (x out of y questions)</li>
        <li><code>var questionIterator</code> to set the index at which the quiz questions start</li>
    </ul>
</p>

<h2>Code Challenges</h2>
<p>The primary challenge this quiz presented arose from the various states the quiz takes:</p>
<ul>
    <li>Inactive & local storage = <code>false</code></li>
    <li>Inactive & local storage = <code>true</code></li>
    <li>Active & local storage = <code>false</code></li>
    <li>Active & local storage = <code>true</code></li>
</ul>
<p>DOM manipulation for these states required the use of ID values on large number of HTML tags, which proved to be a
    time consuming process. Future updates to this quiz, and future projects, will involve a more strategic use of
    selectors to reduce code bulkiness.
</p>


<h3>Future Iterations - Custom Quiz Selection</h3>
<p>Presently, the only quiz topic is Javascript. With some slight alterations to the code, it would be possible to
    create variables that point to a variety of quiz array objects and iteration through questions on any topic, not
    just Javascript.</p>