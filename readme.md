<h1>Bootstrap Styled Javascript Quiz</h1>
<img src="https://lh3.googleusercontent.com/3TM14nhD_JBQMUr7xBsKCPiOej18xJhW8o3FxI6pfPG33z5xQ9AtyyY17Dr55O2fGo5fPXyE2Zb9hsUiVmJRjLGtexbp0L2uurGotFEOViY2eiWJijXnI-ayld7CvWvUkL5QQ_I-yWPEwwNtfyWtF6ZjiMLJBP0LmUMILnKSUw2GlCOxi8bt5PzfdX9RTsx1CX3owXH6YKS4ZuRYp7KnuXK8ZJM-3EEM2t6spbDarHdE2ZvVfFMqvbjJntJA9dqn5JiKRbGouVXLq900pwSEJHPQ6BwVWPpTrvwguqmiBUxfIw_vUKOJULc77LQP7wumss_eq0RvnukgX02AH6Kx3xig5B1h2dHjCMoqO8-urmZVCGI4OcsfZr4d_3uoqpudta8dRdOY9OklEO79dsjyeWQsdsZS6VHJOpNVkes22fvasUEQrzioIzipukjPbLmIMy2P8tVr-O32p2ZwnRhrGn7JAY7qOJEr_ve4mBDcvrhYbXMHRPHPLJqGgLngufx6vgydBOgZBZqLDIzK_-ITP7cDZWGRkjmv4iKSt_pzPKNWqj7VNyqxLPLmqqOBKF-FhPsqc5KMjbzSmUkMhplPA3R4u6xyHw91ZwUhThWhupvukzOKc41hIrO1gVcvt7k6__0HmRH0CvF13ZaDQ6Ns37FgAR5DSYXEGJ-am95KxByCk234v_CZ_ljGv25FQHDaAWS-DOaZXFmW5LsDy0S80ocf_P6wieFDQvhKsdw4gmTCUxW2nbIvus0=w1920-h618-no"
    alt="">

<h2>The Quiz</h2>
<p><a href="https://uxhawk.github.io/gw-hmwk-04-js-quiz/">Start quiz</a></p>
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
