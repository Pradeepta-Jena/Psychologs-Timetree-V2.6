// ... [ALL EXISTING DATA & LOGIC AT THE START] ...

// ORIGINAL TIMELINE DATA
const timelineData = [
  {
    "id": 1,
    "date": "2023-01-13",
    "title": "Zero Point",
    "description": "Greetings, Human. I am the Narrator, your guide & light to this Sacred Timeline from the Universe 696. Here we'll observe some fascinating memories from the Department of Psychology.",
    "imageUrl": "B22/13 January ‎2023, ‏‎122912.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 2,
    "date": "2023-01-13",
    "title": "Heart Warming Welcome",
    "description": "BA21 students welcomed the new freshers, with beginning of a new bond.",
    "imageUrl": "B22/‎13 ‎January ‎2023, ‏‎185828.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 3,
    "date": "2023-01-13",
    "title": "Seminar & Freshers' Party Combo",
    "description": "The Department also conducted a seminar the very same day.",
    "imageUrl": "B22/‎13 ‎January ‎2023, ‏‎195912.jpg",
    "aspectRatio": "landscape"
  },
  {
    "id": 5,
    "date": "2023-01-13",
    "title": "Meet the ladies",
    "description": "Students & Freshers of BA22.",
    "imageUrl": "B22/13 ‎January ‎2023, ‏‎220430.JPG",
    "aspectRatio": "square"
  }
];

// NEW DATA FOR SENIORS TAB
const seniorsData = [
  {
    "id": 101,
    "date": "2022-08-15",
    "title": "Meet the Mentors",
    "description": "The BA20 batch that laid the foundation for our current departmental culture.",
    "imageUrl": "B22/13 January 2023, 122912.jpg", // Placeholder - replace with actual senior photo
    "aspectRatio": "landscape"
  },
  {
    "id": 102,
    "date": "2022-12-20",
    "title": "Farewell Gathering",
    "description": "A throwback to the heartfelt goodbye for our previous graduates.",
    "imageUrl": "B22/‎13 ‎January ‎2023, ‏‎185828.jpg", // Placeholder
    "aspectRatio": "landscape"
  }
];

// ... [EXISTING GLOBAL VARIABLES] ...
let currentSlideIndex = 0;
let slideshowInterval;
let currentTrackIndex = 0;
const trackNames = ["M1 - Morning Mist", "M2 - Soulful Strums", "M3 - Evening Echo"];
let isPlaying = false;
let isMuted = false;

// NEW VARIABLES FOR SENIORS
let currentSeniorsSlideIndex = 0;
let seniorsSlideshowInterval;

// Calendar Global Variables
const MIN_CALENDAR_YEAR = 2023;
const MAX_CALENDAR_YEAR = 2030;
let currentCalendarDisplayDate = new Date(); // Tracks the month and year currently displayed in the calendar UI
let selectedCalendarDate = null; // Tracks the specific date clicked/selected by the user in the calendar
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Touch/Swipe variables
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // Minimum pixel distance for a swipe

// Audio tracks
const audioTracks = [
  document.getElementById('backgroundAudio'),
  document.getElementById('track2'),
  document.getElementById('track3')
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const muteBtn = document.getElementById('muteBtn');
const timelineContainer = document.getElementById('timelineContainer');
const slideshowWrapper = document.getElementById('slideshowWrapper');
const slideshowIndicators = document.getElementById('slideshowIndicators');
const currentSlideElement = document.getElementById('currentSlide'); // Reference to the slide div itself

// New Calendar DOM Elements
const dateSearchToggle = document.getElementById('dateSearchToggle');
const dateSearchCalendar = document.getElementById('dateSearchCalendar');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const calendarDisplayMonth = document.getElementById('calendarDisplayMonth');
const calendarYearSelect = document.getElementById('calendarYearSelect');
const calendarMonthSelect = document.getElementById('calendarMonthSelect');
const calendarDays = document.getElementById('calendarDays');
const goToSelectedDateBtn = document.getElementById('goToSelectedDateBtn');
const closeCalendarBtn = document.getElementById('closeCalendarBtn');

// New Scroll Buttons
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');


// APP INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
  timelineData.sort((a, b) => new Date(a.date) - new Date(b.date));
  seniorsData.sort((a, b) => new Date(a.date) - new Date(b.date));

  initializeTheme();
  initializeTimeline(); // Original
  initializeSeniorsTimeline(); // New
  initializeSlideshow(); // Original
  initializeSeniorsSlideshow(); // New
  initializeMusicPlayer();
  initializeIntersectionObserver();
  initializeDateSearchCalendar();
  
  // Add event listeners
  themeToggle.addEventListener('click', toggleTheme);
  playPauseBtn.addEventListener('click', togglePlayPause);
  prevBtn.addEventListener('click', previousTrack);
  nextBtn.addEventListener('click', nextTrack);
  muteBtn.addEventListener('click', toggleMute);

  // Music Playlist logic
const playlistToggleBtn = document.getElementById('playlistToggleBtn');
const musicPlaylist = document.getElementById('musicPlaylist');
const trackItems = document.querySelectorAll('.track-item');

playlistToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    musicPlaylist.classList.toggle('visible');
});

trackItems.forEach(item => {
    item.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        playSpecificTrack(index);
        musicPlaylist.classList.remove('visible');
    });
});

// Close playlist when clicking outside
document.addEventListener('click', () => musicPlaylist.classList.remove('visible'));

  // Calendar related event listeners
  dateSearchToggle.addEventListener('click', toggleCalendar);
  closeCalendarBtn.addEventListener('click', toggleCalendar);
  goToSelectedDateBtn.addEventListener('click', () => scrollToDateFromCalendar(selectedCalendarDate));
  
  calendarYearSelect.addEventListener('change', updateCalendar);
  calendarMonthSelect.addEventListener('change', updateCalendar);
  calendarDays.addEventListener('click', handleDayClick); // Use event delegation for day clicks
  prevMonthBtn.addEventListener('click', prevMonth);
  nextMonthBtn.addEventListener('click', nextMonth);
  
  // Close calendar if clicking outside
  document.addEventListener('click', closeCalendarOnClickOutside);
  // Close calendar on escape key
  document.addEventListener('keydown', closeCalendarOnEscape);

  // Auto-start music (with user interaction fallback)
  document.addEventListener('click', autoStartMusic, { once: true });

  // New features:
  // Slideshow tap to go to timeline
  currentSlideElement.addEventListener('click', tapToTimelineEvent);

  // Slideshow swipe gestures
  slideshowWrapper.addEventListener('touchstart', handleTouchStart);
  slideshowWrapper.addEventListener('touchmove', handleTouchMove);
  slideshowWrapper.addEventListener('touchend', handleTouchEnd);
  
  // Scroll to Top/Bottom buttons
  scrollToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  scrollToBottomBtn.addEventListener('click', () => { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); });
  
  // Show/hide scroll buttons on scroll
  window.addEventListener('scroll', toggleScrollButtonsVisibility);
  // Initial check for button visibility on load
  toggleScrollButtonsVisibility();
});

// NEW FUNCTION: Tab Switcher Logic
function openTab(evt, tabName) {
    var i, tabpane, tablinks;
    tabpane = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabpane.length; i++) {
        tabpane[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Scroll to top of tab when switching
    window.scrollTo({ top: document.querySelector('.tabs-nav').offsetTop - 100, behavior: 'smooth' });
}

// NEW FUNCTIONS FOR SENIORS TIMELINE & SLIDESHOW
function initializeSeniorsTimeline() {
    const seniorsContainer = document.getElementById('timelineContainerSeniors');
    seniorsContainer.innerHTML = '';
    seniorsData.forEach((item, index) => {
        const itemEl = createTimelineItem(item, index);
        seniorsContainer.appendChild(itemEl);
    });
}

function initializeSeniorsSlideshow() {
    createSeniorsIndicators();
    updateSeniorsSlideshow();
    startSeniorsSlideshowAutoplay();
}

function createSeniorsIndicators() {
    const indicatorsContainer = document.getElementById('slideshowIndicatorsSeniors');
    indicatorsContainer.innerHTML = '';
    seniorsData.forEach((_, index) => {
        const ind = document.createElement('div');
        ind.className = `indicator ${index === 0 ? 'active' : ''}`;
        ind.onclick = () => { currentSeniorsSlideIndex = index; updateSeniorsSlideshow(); restartSeniorsSlideshowAutoplay(); };
        indicatorsContainer.appendChild(ind);
    });
}

function updateSeniorsSlideshow() {
    if (seniorsData.length === 0) return;
    const currentItem = seniorsData[currentSeniorsSlideIndex];
    document.getElementById('slideImageSeniors').src = currentItem.imageUrl;
    document.getElementById('slideTitleSeniors').textContent = currentItem.title;
    document.getElementById('slideDateSeniors').textContent = formatDate(currentItem.date);
    document.getElementById('slideDescriptionSeniors').textContent = currentItem.description;

    const inds = document.querySelectorAll('#slideshowIndicatorsSeniors .indicator');
    inds.forEach((ind, i) => ind.classList.toggle('active', i === currentSeniorsSlideIndex));
}

function startSeniorsSlideshowAutoplay() {
    seniorsSlideshowInterval = setInterval(() => {
        currentSeniorsSlideIndex = (currentSeniorsSlideIndex + 1) % seniorsData.length;
        updateSeniorsSlideshow();
    }, 6000);
}

function restartSeniorsSlideshowAutoplay() {
    clearInterval(seniorsSlideshowInterval);
    startSeniorsSlideshowAutoplay();
}

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Add smooth transition effect
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

// Timeline Generation
function initializeTimeline() {
  timelineContainer.innerHTML = ''; // Clear existing timeline items
  
  timelineData.forEach((item, index) => {
    const timelineItem = createTimelineItem(item, index);
    timelineContainer.appendChild(timelineItem);
  });
}

function createTimelineItem(item, index) {
  const timelineItem = document.createElement('div');
  timelineItem.className = 'timeline-item';
  timelineItem.setAttribute('data-date', item.date); // Add data attribute for easier lookup by date
  timelineItem.setAttribute('data-id', item.id); // Add data attribute for lookup by id
  timelineItem.style.animationDelay = `${index * 0.1}s`;
  
  const formattedDate = formatDate(item.date);
  
  timelineItem.innerHTML = `
    <div class="timeline-card">
      <div class="timeline-image-container ${item.aspectRatio}">
        <img src="${item.imageUrl}" alt="${item.title}" class="timeline-image" loading="lazy" onerror="handleImageError(this)">
      </div>
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-date">${formattedDate}</p>
        <p class="timeline-description">${item.description}</p>
      </div>
    </div>
  `;
  
  return timelineItem;
}

// Slideshow Management
function initializeSlideshow() {
  if (timelineData.length === 0) {
    document.getElementById('currentSlide').style.display = 'none';
    slideshowIndicators.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No memories available.</p>';
    return;
  }
  createSlideshowIndicators();
  updateSlideshow();
  startSlideshowAutoplay();
}

function createSlideshowIndicators() {
  slideshowIndicators.innerHTML = '';
  
  timelineData.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    slideshowIndicators.appendChild(indicator);
  });
}

function updateSlideshow() {
  // If no data, the initializeSlideshow handles displaying a message.
  if (timelineData.length === 0) return; 

  const currentItem = timelineData[currentSlideIndex];
  const slideImage = document.getElementById('slideImage');
  const slideTitle = document.getElementById('slideTitle');
  const slideDate = document.getElementById('slideDate');
  const slideDescription = document.getElementById('slideDescription');
  
  const currentSlideElement = document.getElementById('currentSlide');
  currentSlideElement.classList.remove('active');
  // Store the ID of the current item for tap-to-scroll functionality
  currentSlideElement.dataset.timelineItemId = currentItem.id;

  // Use a tiny transparent GIF to prevent flickering during image loading transition
  slideImage.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; 
  slideImage.alt = ''; // Clear alt text while image is temporary
  slideTitle.textContent = ''; // Clear text content during transition
  slideDate.textContent = '';
  slideDescription.textContent = '';

  setTimeout(() => {
    slideImage.src = currentItem.imageUrl;
    slideImage.alt = currentItem.title;
    slideTitle.textContent = currentItem.title;
    slideDate.textContent = formatDate(currentItem.date);
    slideDescription.textContent = currentItem.description;

    const imageContainer = document.querySelector('.slide-image-container');
    imageContainer.className = `slide-image-container ${currentItem.aspectRatio}`;
    
    currentSlideElement.classList.add('active');
  }, 100); 
  
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlideIndex);
  });
}

function goToSlide(index) {
  // Ensure index is within bounds
  if (index < 0) index = timelineData.length - 1;
  if (index >= timelineData.length) index = 0;
  
  currentSlideIndex = index;
  updateSlideshow();
  restartSlideshowAutoplay();
}

function startSlideshowAutoplay() {
  clearInterval(slideshowInterval); // Clear any existing interval
  if (timelineData.length > 1) { // Only start if there's more than one slide
      slideshowInterval = setInterval(() => {
          // This ensures a random slide that isn't the current one,
          // or sequential if only one other option.
          const randomIndex = Math.floor(Math.random() * timelineData.length);
          if (randomIndex !== currentSlideIndex) {
            currentSlideIndex = randomIndex;
          } else {
            // If random picked current index, go to next sequentially to ensure a change
            currentSlideIndex = (currentSlideIndex + 1) % timelineData.length;
          }
          updateSlideshow();
      }, 6000); // 6 seconds interval
  }
}

function restartSlideshowAutoplay() {
  clearInterval(slideshowInterval);
  startSlideshowAutoplay();
}

// New: Slideshow Tap Functionality
function tapToTimelineEvent() {
    const itemId = parseInt(currentSlideElement.dataset.timelineItemId);
    if (!isNaN(itemId)) {
        const itemToScroll = timelineData.find(item => item.id === itemId);
        if (itemToScroll) {
            // Scroll to the specific timeline item using its data-id attribute
            const targetElement = document.querySelector(`.timeline-item[data-id="${itemToScroll.id}"]`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Apply a temporary highlight
                const timelineCard = targetElement.querySelector('.timeline-card');
                if (timelineCard) {
                    const originalBackgroundColor = timelineCard.style.backgroundColor || '';
                    const originalColor = timelineCard.style.color || '';
                    const originalBoxShadow = timelineCard.style.boxShadow || '';

                    timelineCard.style.transition = 'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease';
                    timelineCard.style.backgroundColor = 'var(--accent-secondary)';
                    timelineCard.style.color = 'white';
                    timelineCard.style.boxShadow = `0 0 0 5px var(--accent-secondary), ${originalBoxShadow}`;

                    setTimeout(() => {
                        timelineCard.style.backgroundColor = originalBackgroundColor;
                        timelineCard.style.color = originalColor;
                        timelineCard.style.boxShadow = originalBoxShadow;
                    }, 2000);
                    setTimeout(() => {
                        timelineCard.style.transition = '';
                    }, 2300);
                }
            } else {
                console.warn(`Timeline item DOM element not found for ID: ${itemId}`);
            }
        }
    }
}


// New: Slideshow Swipe Functionality
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  // This is important to prevent vertical scrolling if user means to swipe horizontally
  // but be careful not to block all scrolling, often better to do it only on touchmove
  // when swipe direction is confirmed horizontal enough.
}

function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
    // Prevent default scroll only if a significant horizontal drag is detected
    // This helps avoid interfering with normal vertical scrolling
    if (Math.abs(touchEndX - touchStartX) > 10 && e.cancelable) { // Only if more than tiny movement and browser allows
        e.preventDefault(); 
    }
}

function handleTouchEnd() {
  const diffX = touchEndX - touchStartX;
  
  if (Math.abs(diffX) > swipeThreshold) {
    if (diffX > 0) { // Swiped right (show previous chronological)
        goToSlide(currentSlideIndex - 1);
    } else { // Swiped left (show next chronological)
        goToSlide(currentSlideIndex + 1);
    }
  }
  // Reset touch coordinates
  touchStartX = 0;
  touchEndX = 0;
}


// Music Player Management
function initializeMusicPlayer() {
  audioTracks.forEach(track => {
    track.volume = 0.3; // 30% volume
  });
  
  audioTracks.forEach((track, index) => {
    track.addEventListener('ended', () => {
      nextTrack();
    });
    
    track.addEventListener('error', (e) => {
      console.warn(`Audio track ${index + 1} failed to load:`, e.message || e);
    });
  });
}

function autoStartMusic() {
  if (!isPlaying && audioTracks.length > 0) {
    audioTracks[currentTrackIndex].play().then(() => {
      isPlaying = true;
      playPauseBtn.textContent = '⏸️';
    }).catch(error => {
      console.info('Auto-playback prevented by browser, click play to start:', error);
      playPauseBtn.textContent = '▶️';
    });
  }
}

function togglePlayPause() {
  if (audioTracks.length === 0) return;
  const currentTrack = audioTracks[currentTrackIndex];
  
  if (isPlaying) {
    currentTrack.pause();
    playPauseBtn.textContent = '▶️';
    isPlaying = false;
  } else {
    audioTracks.forEach((track, index) => { // Pause other tracks
        if (index !== currentTrackIndex) track.pause();
    });
    
    currentTrack.play().then(() => {
      playPauseBtn.textContent = '⏸️';
      isPlaying = true;
    }).catch(error => {
      console.warn('Audio playback failed (user interaction needed to resume):', error);
      playPauseBtn.textContent = '▶️';
    });
  }
}

function previousTrack() {
  if (audioTracks.length === 0) return;
  audioTracks[currentTrackIndex].pause();
  currentTrackIndex = (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
  document.querySelectorAll('.track-item').forEach((li, i) => li.classList.toggle('active', i === currentTrackIndex));
  const trackToPlay = audioTracks[currentTrackIndex];
  trackToPlay.currentTime = 0; // Reset track to start

  if (isPlaying) {
    trackToPlay.play().catch(error => {
      console.warn('Audio playback failed for previous track:', error);
    });
  }
}

function nextTrack() {
  if (audioTracks.length === 0) return;
  audioTracks[currentTrackIndex].pause();
  currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
  document.querySelectorAll('.track-item').forEach((li, i) => li.classList.toggle('active', i === currentTrackIndex));
  const trackToPlay = audioTracks[currentTrackIndex];
  trackToPlay.currentTime = 0; // Reset track to start

  if (isPlaying) {
    trackToPlay.play().catch(error => {
      console.warn('Audio playback failed for next track:', error);
    });
  }
}

function playSpecificTrack(index) {
  if (audioTracks.length === 0) return;
  
  // Stop currently playing track
  audioTracks[currentTrackIndex].pause();
  audioTracks[currentTrackIndex].currentTime = 0;
  
  // Set new track
  currentTrackIndex = index;
  
  // Update UI indicators in the list
  document.querySelectorAll('.track-item').forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
  
  // Play
  const trackToPlay = audioTracks[currentTrackIndex];
  isPlaying = true;
  playPauseBtn.textContent = '⏸️';
  trackToPlay.play().catch(e => console.warn("Playback failed", e));
}

function toggleMute() {
  isMuted = !isMuted;
  
  audioTracks.forEach(track => {
    track.muted = isMuted;
  });
  
  muteBtn.textContent = isMuted ? '🔇' : '🔊';
}

// Date Search Calendar Management
function initializeDateSearchCalendar() {
    // Set current calendar display to the month of the earliest event or today
    if (timelineData.length > 0) {
        const firstEventDate = new Date(timelineData[0].date);
        currentCalendarDisplayDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), 1);
        selectedCalendarDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), firstEventDate.getDate());
    } else {
        const today = new Date();
        currentCalendarDisplayDate = new Date(today.getFullYear(), today.getMonth(), 1);
        selectedCalendarDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }
    
    populateYearSelect();
    populateMonthSelect();
    // Set initial select values
    calendarYearSelect.value = currentCalendarDisplayDate.getFullYear();
    calendarMonthSelect.value = currentCalendarDisplayDate.getMonth();
    renderCalendar();
}

function populateYearSelect() {
    calendarYearSelect.innerHTML = '';
    for (let year = MIN_CALENDAR_YEAR; year <= MAX_CALENDAR_YEAR; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        calendarYearSelect.appendChild(option);
    }
}

function populateMonthSelect() {
    calendarMonthSelect.innerHTML = '';
    MONTH_NAMES.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index; // Month index (0-11)
        option.textContent = month;
        calendarMonthSelect.appendChild(option);
    });
}

function renderCalendar() {
    const year = parseInt(calendarYearSelect.value);
    const month = parseInt(calendarMonthSelect.value);

    // Update the internal display date tracker
    currentCalendarDisplayDate = new Date(year, month, 1);
    calendarDisplayMonth.textContent = `${MONTH_NAMES[month]} ${year}`;

    calendarDays.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay(); // 0 for Sunday, 6 for Saturday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Prepare a set of event dates for quick lookup
    const timelineEventDates = new Set(timelineData.map(item => new Date(item.date).toDateString()));

    // Fill preceding empty days
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day-cell empty';
        calendarDays.appendChild(emptyCell);
    }

    // Populate days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day-cell';
        dayCell.textContent = day;
        dayCell.dataset.date = new Date(year, month, day).toDateString(); // Store full date string
        dayCell.tabIndex = 0; // Make day cells focusable

        const cellDate = new Date(year, month, day);

        if (selectedCalendarDate && cellDate.toDateString() === selectedCalendarDate.toDateString()) {
            dayCell.classList.add('selected');
        }

        if (timelineEventDates.has(cellDate.toDateString())) {
            dayCell.classList.add('event-day');
        }

        calendarDays.appendChild(dayCell);
    }
}

function updateCalendar() {
    // This function is called when year or month dropdown changes
    const selectedYear = parseInt(calendarYearSelect.value);
    const selectedMonth = parseInt(calendarMonthSelect.value);
    
    // Attempt to maintain the previously selected day, but cap it to the new month's last day
    let dayToSet = selectedCalendarDate ? selectedCalendarDate.getDate() : 1;
    const lastDayOfNewMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    if (dayToSet > lastDayOfNewMonth) {
        dayToSet = lastDayOfNewMonth;
    }
    
    // Update the selectedCalendarDate based on the new month/year and adjusted day
    selectedCalendarDate = new Date(selectedYear, selectedMonth, dayToSet);
    
    renderCalendar();
}

function handleDayClick(event) {
    // Only respond to clicks on day cells that are not empty fillers
    const dayCell = event.target.closest('.calendar-day-cell:not(.empty)');
    if (dayCell) {
        // Remove 'selected' from all previously selected cells
        document.querySelectorAll('.calendar-day-cell.selected').forEach(cell => {
            cell.classList.remove('selected');
        });

        // Add 'selected' to the clicked cell
        dayCell.classList.add('selected');
        // Update the globally tracked selected date object
        selectedCalendarDate = new Date(dayCell.dataset.date); 
    }
}

function prevMonth() {
    let year = parseInt(calendarYearSelect.value);
    let month = parseInt(calendarMonthSelect.value);
    
    if (month === 0) { // If January, go to previous year's December
        month = 11;
        year--;
    } else {
        month--;
    }

    // Ensure we don't go below the minimum year
    if (year < MIN_CALENDAR_YEAR) {
        year = MIN_CALENDAR_YEAR;
        month = 0; // Force to January of min year
    }
    
    calendarYearSelect.value = year;
    calendarMonthSelect.value = month;
    updateCalendar(); // Re-render the calendar for the new month/year
}

function nextMonth() {
    let year = parseInt(calendarYearSelect.value);
    let month = parseInt(calendarMonthSelect.value);

    if (month === 11) { // If December, go to next year's January
        month = 0;
        year++;
    } else {
        month++;
    }
    
    // Ensure we don't go above the maximum year
    if (year > MAX_CALENDAR_YEAR) {
        year = MAX_CALENDAR_YEAR;
        month = 11; // Force to December of max year
    }

    calendarYearSelect.value = year;
    calendarMonthSelect.value = month;
    updateCalendar(); // Re-render the calendar for the new month/year
}

function toggleCalendar() {
    const isVisible = dateSearchCalendar.classList.contains('visible');
    if (isVisible) {
        dateSearchCalendar.classList.remove('visible');
        dateSearchToggle.setAttribute('aria-expanded', 'false');
    } else {
        // When opening, ensure calendar state reflects the last selected date or a sensible default
        if (selectedCalendarDate) {
            calendarYearSelect.value = selectedCalendarDate.getFullYear();
            calendarMonthSelect.value = selectedCalendarDate.getMonth();
        } else if (timelineData.length > 0) {
            // If no date selected yet, default to the first timeline event date
            const firstEventDate = new Date(timelineData[0].date);
            selectedCalendarDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), firstEventDate.getDate());
            calendarYearSelect.value = firstEventDate.getFullYear();
            calendarMonthSelect.value = firstEventDate.getMonth();
        } else {
             // Fallback to current date if no timeline data at all
            const today = new Date();
            selectedCalendarDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            calendarYearSelect.value = today.getFullYear();
            calendarMonthSelect.value = today.getMonth();
        }
        
        renderCalendar(); // Re-render to ensure display is current
        dateSearchCalendar.classList.add('visible');
        dateSearchToggle.setAttribute('aria-expanded', 'true');
        dateSearchCalendar.focus(); // Set focus to calendar for accessibility
    }
}

function closeCalendarOnClickOutside(event) {
    if (dateSearchCalendar.classList.contains('visible') &&
        !dateSearchCalendar.contains(event.target) &&
        event.target !== dateSearchToggle) {
        toggleCalendar();
    }
}

function closeCalendarOnEscape(event) {
    if (event.key === 'Escape' && dateSearchCalendar.classList.contains('visible')) {
        toggleCalendar();
    }
}

function scrollToDateFromCalendar(targetDateObj) {
  if (!targetDateObj) {
    alert("Please select a date on the calendar.");
    return;
  }

  toggleCalendar(); // Close calendar once date is selected

  const targetTime = targetDateObj.getTime();
  let closestItem = null;
  let minDifference = Infinity;

  // Find the closest event in the timeline based on date
  timelineData.forEach(item => {
    const eventTime = new Date(item.date).getTime();
    const difference = Math.abs(targetTime - eventTime);

    if (difference < minDifference) {
      minDifference = difference;
      closestItem = item;
    }
  });

  if (closestItem) {
    // Find the corresponding DOM element. Prefer exact ID if available for same-date items, else first by date.
    const targetElement = document.querySelector(`.timeline-item[data-date="${closestItem.date}"]`) ||
                          document.querySelector(`.timeline-item[data-id="${closestItem.id}"]`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Add a temporary highlight effect for the card within the timeline item
      const timelineCard = targetElement.querySelector('.timeline-card');
      if (timelineCard) {
          // Store original styles to revert smoothly
          const originalBackgroundColor = timelineCard.style.backgroundColor || '';
          const originalColor = timelineCard.style.color || '';
          const originalBoxShadow = timelineCard.style.boxShadow || '';

          // Apply new styles
          timelineCard.style.transition = 'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease';
          timelineCard.style.backgroundColor = 'var(--accent-secondary)';
          timelineCard.style.color = 'white'; // Adjust text color for contrast
          timelineCard.style.boxShadow = '0 0 0 5px var(--accent-secondary), ' + originalBoxShadow;

          // Revert styles after a delay
          setTimeout(() => {
              timelineCard.style.backgroundColor = originalBackgroundColor;
              timelineCard.style.color = originalColor;
              // Remove our added box-shadow part while keeping any original ones if they exist
              timelineCard.style.boxShadow = originalBoxShadow;
          }, 2000); 

          // Optionally, remove transition style after animation if not used elsewhere for card
          setTimeout(() => {
              timelineCard.style.transition = '';
          }, 2300); // Slightly longer than animation duration
      }
    } else {
      console.warn("Corresponding timeline item DOM element not found for date:", closestItem.date);
    }
  } else {
    // This case should ideally not happen if timelineData is not empty,
    // as there will always be a "closest" item.
    alert("No timeline events available to scroll to.");
  }
}

// New: Scroll To Top/Bottom button visibility
function toggleScrollButtonsVisibility() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;

    // Show scroll to top button after scrolling down a bit
    if (scrollPosition > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }

    // Show scroll to bottom button if not near the bottom
    // We check if current scroll position + viewport height is less than document height minus a threshold
    if ((scrollPosition + viewportHeight + 100) < documentHeight) { // 100px buffer from bottom
        scrollToBottomBtn.classList.add('show');
    } else {
        scrollToBottomBtn.classList.remove('show');
    }
}

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

// Intersection Observer for Timeline Animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);
  
  // Observe timeline items after they are added to the DOM
  setTimeout(() => {
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
  }, 100);
}

// Image Loading Error Handling
function handleImageError(img) {
  // Prevent infinite loops if fallback also fails or image is already marked
  if (img.dataset.hasError) return; 

  img.src = 'https://via.placeholder.com/600x400/cccccc/666666?text=Image+Not+Found';
  img.alt = 'Image not available';
  img.dataset.hasError = 'true'; // Mark as error handled
  console.warn("Failed to load image:", img.src);
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
  // If calendar is open, prioritize calendar keyboard navigation
  if (dateSearchCalendar.classList.contains('visible')) {
    switch(e.key) {
        case 'Escape':
            closeCalendarOnEscape(e);
            break;
        case 'ArrowLeft':
            prevMonth();
            break;
        case 'ArrowRight':
            nextMonth();
            break;
        case 'Enter': // Optionally trigger Go to Date on Enter when a date is selected/focused
            if (selectedCalendarDate) {
                const focusedElement = document.activeElement;
                if (focusedElement && focusedElement.classList.contains('calendar-day-cell') && !focusedElement.classList.contains('empty')) {
                    // Trigger handleDayClick if a day is focused and Enter is pressed
                    handleDayClick({ target: focusedElement }); 
                    scrollToDateFromCalendar(selectedCalendarDate);
                } else if (focusedElement === goToSelectedDateBtn) {
                     scrollToDateFromCalendar(selectedCalendarDate);
                }
            }
            break;
    }
    // Prevent default behavior for arrows and enter to avoid page scrolling while calendar is open
    if (['Escape', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) {
        e.preventDefault();
    }
    return; // Exit if calendar is handled
  }

  // General keyboard shortcuts when calendar is not open
  switch(e.key) {
    case ' ':
      e.preventDefault(); // Prevent page scroll
      togglePlayPause();
      break;
    case 'ArrowLeft':
      // For slideshow manual navigation
      goToSlide(currentSlideIndex - 1);
      break;
    case 'ArrowRight':
      // For slideshow manual navigation
      goToSlide(currentSlideIndex + 1);
      break;
    case 'm':
    case 'M':
      toggleMute();
      break;
    case 't':
    case 'T':
      toggleTheme();
      break;
    case 'd':
    case 'D': // Shortcut to open date search calendar
      toggleCalendar();
      break;
  }
});

// Performance Optimization utility (not explicitly used with new feature yet but good to have)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scrolling for timeline section (Existing utility)
function scrollToTimeline() {
  document.querySelector('.timeline-section').scrollIntoView({
    behavior: 'smooth'
  });
}

// Export functions for potential external use
window.PsychologyTimeline = {
  goToSlide,
  toggleTheme,
  togglePlayPause,
  scrollToTimeline,
  toggleCalendar,
  handleImageError // Export handleImageError if used inline in HTML
};

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}