// Basketball Scoreboard Script //
let homescore = 0;
let guestscore = 0;
const homeScoreDiv = document.getElementById('score-points-home');
const guestScoreDiv = document.getElementById('score-points-guest');
const homeHeader = document.getElementById('home-header');
const guestHeader = document.getElementById('guest-header');
let Period = 0;
let TeamFoulsHome = 0;
let TimeOutsHome = 0;
let TeamFoulsGuest = 0;
let TimeOutsGuest = 0;
const maxTeamFouls = 4;
const maxPeriod = 4;
const maxTimeOuts = 7;
const timerDisplay = document.getElementById('timer-el');
const pauseResumeBtn = document.getElementById('pause-resume-btn');
let totalSeconds = 12*60;
let isPaused = true;
let timerInterval = null;

// Adding Points to the Home Team
function homeplusone() {
    homescore += 1;
    homeScoreDiv.textContent = homescore;

    // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');

    // Compare and set classes
    if(homescore>guestscore) {
        homeScoreDiv.classList.add('green')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('green')
        guestHeader.classList.add('white')
    } else if (homescore<guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('green')
        homeHeader.classList.add('white')
        guestHeader.classList.add('green')
    } else if (homescore=guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('white')
        guestHeader.classList.add('white')
    }

    console.log("1 point for Home !")
}

function homeplustwo() {
    homescore += 2;
    homeScoreDiv.textContent = homescore;
    
    // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');

    // Compare and set classes
    if(homescore>guestscore) {
        homeScoreDiv.classList.add('green')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('green')
        guestHeader.classList.add('white')
    } else if (homescore<guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('green')
        homeHeader.classList.add('white')
        guestHeader.classList.add('green')
    } else if (homescore=guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('white')
        guestHeader.classList.add('white')
    }

    console.log("2 points for Home !")
}

function homeplusthree() {
    homescore += 3;
    homeScoreDiv.textContent = homescore;
    
    // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');

    // Compare and set classes
    if(homescore>guestscore) {
        homeScoreDiv.classList.add('green')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('green')
        guestHeader.classList.add('white')
    } else if (homescore<guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('green')
        homeHeader.classList.add('white')
        guestHeader.classList.add('green')
    } else if (homescore=guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('white')
        guestHeader.classList.add('white')
    }

    console.log("3 points for Home !")
}

// Adding Points to the Guest Team
function guestplusone() {
    guestscore += 1;
    guestScoreDiv.textContent = guestscore;
    
    // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');

    // Compare and set classes
    if(homescore>guestscore) {
        homeScoreDiv.classList.add('green')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('green')
        guestHeader.classList.add('white')
    } else if (homescore<guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('green')
        homeHeader.classList.add('white')
        guestHeader.classList.add('green')
    } else if (homescore=guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('white')
        guestHeader.classList.add('white')
    }

    console.log("1 point for Guest !")
}

function guestplustwo() {
    guestscore += 2;
    guestScoreDiv.textContent = guestscore;
    
    // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');

    // Compare and set classes
    if(homescore>guestscore) {
        homeScoreDiv.classList.add('green')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('green')
        guestHeader.classList.add('white')
    } else if (homescore<guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('green')
        homeHeader.classList.add('white')
        guestHeader.classList.add('green')
    } else if (homescore=guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('white')
        guestHeader.classList.add('white')
    }

    console.log("2 points for Guest !")
}

function guestplusthree() {
    guestscore += 3;
    guestScoreDiv.textContent = guestscore;
    
    // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');

    // Compare and set classes
    if(homescore>guestscore) {
        homeScoreDiv.classList.add('green')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('green')
        guestHeader.classList.add('white')
    } else if (homescore<guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('green')
        homeHeader.classList.add('white')
        guestHeader.classList.add('green')
    } else if (homescore=guestscore) {
        homeScoreDiv.classList.add('red')
        guestScoreDiv.classList.add('red')
        homeHeader.classList.add('white')
        guestHeader.classList.add('white')
    }

    console.log("3 points for Guest !")
}

// New Game Function
function reset() {
    homescore = 0;
    guestscore = 0;
    Period = 0;
    TeamFoulsHome = 0;
    TeamFoulsGuest = 0;
    TimeOutsHome = 0;
    TimeOutsGuest = 0;
    document.getElementById('score-points-home').textContent=0;
    document.getElementById('score-points-guest').textContent=0;
    document.getElementById('period-el').textContent=0;
    document.getElementById('fouls-home-counter-el').textContent=0;
    document.getElementById('timeouts-home-counter-el').textContent=0;
    document.getElementById('fouls-guest-counter-el').textContent=0;
    document.getElementById('timeouts-guest-counter-el').textContent=0;

     // Remove all coloring
    homeScoreDiv.classList.remove('red', 'green');
    guestScoreDiv.classList.remove('red', 'green');
    homeHeader.classList.remove('green','white');
    guestHeader.classList.remove('green','white');
    // Add the default
    homeScoreDiv.classList.add('red');
    guestScoreDiv.classList.add('red');

    isPaused = true;
    totalSeconds=12*60;
    updateDisplay(); // display the 12:00 in the timer
    pauseResumeBtn.textContent = 'START'; // Show 'START' initially
    console.log("---------- NEW GAME! ----------")
}

// +1 Period
function periodplusone() {
    if (Period < maxPeriod) {
        Period+=1;
        TeamFoulsHome=0;
        TeamFoulsGuest=0;
        isPaused = true;
        totalSeconds=12*60;
        updateDisplay(); // display the 12:00 in the timer
        pauseResumeBtn.textContent = 'START'; // Show 'START' initially
        console.log("Period: ", Period);
    }
    document.getElementById('fouls-home-counter-el').textContent=TeamFoulsHome;
    document.getElementById('fouls-guest-counter-el').textContent=TeamFoulsGuest;
    document.getElementById('period-el').textContent=Period;
}

// +1 Team Fouls for Home
function AddTeamFoulsHome() {
    if (TeamFoulsHome<maxTeamFouls) {
        TeamFoulsHome+=1;
        console.log("Team Fouls Home: ", TeamFoulsHome)
    }
    document.getElementById('fouls-home-counter-el').textContent = TeamFoulsHome;
}

// +1 Time Outs for Home
function AddTimeOutsHome() {
    if (TimeOutsHome<maxTimeOuts) {
        TimeOutsHome+=1;
        console.log("Time Outs Home: ", TimeOutsHome)
    }
    document.getElementById('timeouts-home-counter-el').textContent = TimeOutsHome;
}

// +1 Team Fouls for Guest
function AddTeamFoulsGuest() {
    if (TeamFoulsGuest<maxTeamFouls) {
        TeamFoulsGuest+=1;
        console.log("Team Fouls Guest: ", TeamFoulsGuest)
    }
    document.getElementById('fouls-guest-counter-el').textContent = TeamFoulsGuest;
}

// +1 Time Outs for Guest
function AddTimeOutsGuest() {
    if (TimeOutsGuest<maxTimeOuts) {
        TimeOutsGuest+=1;
        console.log("Time Outs Guest: ", TimeOutsGuest)
    }
    document.getElementById('timeouts-guest-counter-el').textContent = TimeOutsGuest;
}

// Update the timer text

function updateDisplay() {
    const minutes = Math.floor(totalSeconds/60); // for the MM format
    const seconds = totalSeconds%60; // for the SS format
    timerDisplay.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startTimer() {
    timerInterval = setInterval(() => { // setInterval to execute the following function repeatedly 
        if(!isPaused && totalSeconds > 0) {
            totalSeconds--; // reduces the time by 1 second
            updateDisplay(); // and then updates the time after the reduction
            if(totalSeconds === 0) {
                clearInterval(timerInterval); // stops the timer when it hits zero
                pauseResumeBtn.disabled = true; // disabling the button
            }
        }
    }, 1000); // the code will run again after 1000ms=1s (repeats every second)
}

// Button click event
pauseResumeBtn.addEventListener('click', () => {
    isPaused = !isPaused; // toggling if it is paused or not
    pauseResumeBtn.textContent = isPaused ? 'RESUME' : 'PAUSE'; // if it is paused - it shows 'RESUME' & if it is resumed - it shows 'PAUSE'
});

// Set initial state
updateDisplay(); // display the 12:00 in the timer
pauseResumeBtn.textContent = 'START'; // Show 'START' initially
startTimer();