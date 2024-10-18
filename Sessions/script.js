document.getElementById('mentorshipBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mentorName = document.querySelector('input[name="mentor"]:checked').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;
    const selectedTimeSlot = document.querySelector('.time-slot.selected').textContent;

    if (!selectedTimeSlot) {
        alert('Please select a time slot');
        return;
    }

    // Add new booked session to the display
    const bookedSessionsDiv = document.querySelector('.booked-sessions');
    const newSession = document.createElement('div');
    newSession.classList.add('booked-session');
    newSession.innerHTML = `<span>Mentor: ${mentorName}, Duration: ${duration} minutes, Date: ${date}, Time: ${selectedTimeSlot}</span>`;
    bookedSessionsDiv.appendChild(newSession);

    // Show success modal
    document.getElementById('mentor-name').textContent = mentorName;
    document.getElementById('session-duration').textContent = `${duration} minutes`;
    document.getElementById('session-date').textContent = date;
    document.getElementById('session-time').textContent = selectedTimeSlot;
    document.getElementById('success-modal').style.display = 'block';
});

document.getElementById('success-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        document.getElementById('success-modal').style.display = 'none';
    });
});

document.querySelectorAll('.time-slot').forEach(function(timeSlot) {
    timeSlot.addEventListener('click', function() {
        document.querySelectorAll('.time-slot').forEach(function(slot) {
            slot.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

// Function to generate random session details
function generateRandomSession() {
    const mentors = ['Mentor 1: Dr. Birmohan Singh', 'Mentor 2: Dr. Damanpreet Singh', 'Mentor 3: Dr. Major Singh Goraya', 'Mentor 4: Dr. Manoj Sachan', 'Mentor 5: Dr. Gurjinder Kaur'];
    const durations = ['30 minutes', '60 minutes', '90 minutes'];
    const dates = ['2023-02-20', '2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24'];
    const timeSlots = ['9:00 AM - 9:30 AM', '9:30 AM - 10:00 AM', '10:00 AM - 10:30 AM', '10:30 AM - 11:00 AM', '11:00 AM - 11:30 AM', '11:30 AM - 12: 00 PM'];

    const randomMentor = mentors[Math.floor(Math.random() * mentors.length)];
    const randomDuration = durations[Math.floor(Math.random() * durations.length)];
    const randomDate = dates[Math.floor(Math.random() * dates.length)];
    const randomTimeSlot = timeSlots[Math.floor(Math.random() * timeSlots.length)];

    return `Mentor: ${randomMentor}, Duration: ${randomDuration}, Date: ${randomDate}, Time: ${randomTimeSlot}`;
}

// Display random booked sessions
const bookedSessionsDiv = document.querySelector('.booked-sessions');
for (let i = 0; i < 5; i++) {
    const newSession = document.createElement('div');
    newSession.classList.add('booked-session');
    newSession.innerHTML = `<span>${generateRandomSession()}</span>`;
    bookedSessionsDiv.appendChild(newSession);
}