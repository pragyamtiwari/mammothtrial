let triggered_once = false;

document.addEventListener('DOMContentLoaded', function() {
    // Show the initial content
    showContent('video');
    
  launchConfetti();
});

var e = document.getElementById('heading');
e.addEventListener('click', reset);

function reset () {
    showContent('video');
}

function applyStyles() {
  var element = document.getElementById('content');
  if (element) {
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.alignItems = 'center';
      element.style.height = '100%';
  } else {
      console.error('Element with ID "content" not found.');
  }
}

function clearStyles() {
  var element = document.getElementById('content');
  element.style.display = 'revert';
  element.style.justifyContent = 'revert';
      element.style.alignItems = 'revert';
      element.style.height = 'revert';
}







function showContent(page) {
    let content = document.getElementById('content');
    content.style.opacity = 0; // Start with fade-out

    setTimeout(function() {
        content.innerHTML = ''; // Clear previous content

        let items = document.querySelectorAll('.selected');
        items.forEach(function(item) {
            item.classList.remove('selected');
        });

        if (page === 'video') {
          document.getElementById('content').style.opacity = 1;
     
     
            applyStyles();
            document.getElementById("1").classList.add("selected");
           
            // document.getElementById("content").style.overflowY = "hidden";
            // document.getElementById("play-button").style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
            content.innerHTML = `<iframe frameborder="0" allowfullscreen="" scrolling="no" allow="autoplay;fullscreen" src="https://streamable.com/e/av4jg3?" style="width: 100%; width: 100%; aspect-ratio: 1920 / 1080; box-shadow: rgb(51, 51, 51) 10px 10px 35px -10px;"></iframe>`;
        } else if (page === 'grammar') {
     
     
          clearStyles();
            document.getElementById("2").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     
     
            content.innerHTML = `
            <div class="title-button-container">
                <h2 class="title"><a href="https://grammarally.github.io/" target="_blank">Grammar Ally</a></h2>
                <a href="https://grammarally.github.io/" target="_blank"><button>PLAY</button></a>
            </div>
            <p class="description">
                In internet speak, “grammar nazis” are people who constantly
                point out grammatical errors people may make typing on the internet.
                This is particularly prevalent on Reddit.<br><br>
               
                This basic HTML, CSS, and JS game is based on the premise of the foil
                to the grammar nazi, the grammar ally, quickly finding and correcting
                small mistakes innocent Reddit commenters made. <br><br>
               
                Though initially just started as a fun project, Grammar Ally has received
                over 10,000 plays and I have received comments that it has actually helped
                students and English language learners better their grammar.<br><br>
               
                Click the play button at the top or visit <a class="linkproper" href="https://grammarally.github.io/" target="_blank">GrammarAlly.com</a> to play.
            </p>
        `;
                      } else if (page === 'elections') {
          clearStyles()
            document.getElementById("3").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com" >Election Tracker</a></h2>
        <a href="electiontracker.com"><button>VIEW</button></a>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>`;
        }
        else if (page === 'tweeter') {
          clearStyles()
            document.getElementById("4").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">Tweet-é-Mon</a></h2>
        <a href="electiontracker.com"><button>PLAY</button></a>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>
     `;
        } else if (page === 'ikwyaf') {
          clearStyles()
            document.getElementById("5").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">I Know Where You Are From</a></h2>
        <a href="electiontracker.com"><button>PLAY</button></a>
      </div>
      <iframe class="custom" 
      src="https://pragyamtiwari.github.io/dinotemp/" 
      width="1000" 
      height="300" 
      frameborder="0" 
      scrolling="no">
  </iframe>
     `;
        } else if (page === 'sentiment') {
          clearStyles()
            document.getElementById("6").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">Sentiment Analyzer</a></h2>
        <a href="electiontracker.com"><button>VIEW</button></a>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>
     `;
        } else if (page === 'rjb') {
          clearStyles()
            document.getElementById("7").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">RJB Values</a></h2>
        <a href="electiontracker.com"><button>VIEW</button></a>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>
     `;
        } else if (page === 'clock') {
          clearStyles()
            document.getElementById("8").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">Counting Clock</a></h2>
        <a href="electiontracker.com"><button>VIEW</button></a>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>
     `;
        } else if (page === 'meet') {
          clearStyles()
            document.getElementById("9").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">Meet CCNY</a></h2>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>
     `;
        } else if (page === 'essays') {
          clearStyles()
            document.getElementById("10").classList.add("selected");
            document.getElementById("content").style.overflowY = "auto";
     
     
     content.innerHTML = `
      <div class="title-button-container">
        <h2 class="title"><a href="electiontracker.com">Essays</a></h2>
        <a href="electiontracker.com"><button>VIEW</button></a>
      </div>
      <p class="description">
        In political discourse, “election watchdogs” are individuals or organizations that closely monitor election processes and outcomes, often highlighting irregularities or concerns about transparency. This is especially common during heated election cycles.
        <br><br>
        This basic HTML, CSS, and JS tool is designed to serve as an election tracker, quickly providing users with up-to-date information on ongoing elections and any emerging trends.
        <br><br>
        Though initially just started as a side project, Election Tracker has been accessed by over 10,000 users, and I’ve received feedback that it has actually helped people stay informed during election periods.
        <br><br>
        Click the track button at the top or visit <a class="linkproper" href="electiontracker.com">ElectionTracker.com</a> to start tracking.
      </p>
     `;
        }
     
     

        content.style.opacity = 1; // Trigger fade-in after content is updated
    }, 300); // This delay should match the transition duration (0.5s)
}

function launchConfetti() {
    var duration = 2.5 * 1000; // 5 seconds
    var end = Date.now() + duration;

    (function frame() {
        // Adjust the speed, shapes, and number of confetti pieces
        confetti({
            particleCount: 4,
            startVelocity: 20,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2 // Randomize the y-axis for a 'rainfall' effect
            }
        });

        // Continue until the duration ends
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mobile-nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('hidden');
    });

    showContent('video'); // Show initial content
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mobile-nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('hidden');
    });

    showContent('video'); // Show initial content
});

document.addEventListener('DOMContentLoaded', function() {
  function checkScreenWidth() {
      const mobileWarning = document.getElementById('mobile-warning');

      // If screen width is below 750px, show the warning
      if (window.innerWidth < 750) {
          mobileWarning.style.display = 'block';
      } else {
          mobileWarning.style.display = 'none';
      }
  }

  // Initial check when the page loads
  checkScreenWidth();

  // Re-check when the window is resized
  window.addEventListener('resize', checkScreenWidth);

  // Redirect to mobile version when the link is clicked
  const mobileLink = document.getElementById('mobile-link');
  mobileLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'https://example.com/mobile'; // Update this with the mobile version URL
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function checkScreenWidth() {
      const mobileWarning = document.getElementById('mobile-warning');

      // If screen width is below 750px, show the warning
      if (window.innerWidth < 750 && !triggered_once) {
          mobileWarning.style.display = 'visible';
      } else {
          mobileWarning.style.display = 'none';
      }
  }

  // Initial check when the page loads
  checkScreenWidth();

  // Re-check when the window is resized
  window.addEventListener('resize', checkScreenWidth);

  // Proceed anyway function
  window.proceedAnyway = function() {
      const mobileWarning = document.getElementById('mobile-warning');
      triggered_once = true;
      mobileWarning.style.display = 'none';
  };
});
