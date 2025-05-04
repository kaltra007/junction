document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            id: 1,
            title: "EPOKA University Open Day",
            description: "Campus tour and program presentations",
            date: "2023-10-15",
            time: "10:00",
            location: "EPOKA University, Tirana",
            googleCalendarLink: generateGoogleCalendarLink({
                title: "EPOKA University Open Day",
                start: "20231015T100000",
                end: "20231015T140000",
                location: "EPOKA University, Tirana",
                details: "Campus tour and program presentations"
            })
        },
        {
            id: 2,
            title: "Computer Science Webinar",
            description: "Learn about career opportunities in tech",
            date: "2023-10-22",
            time: "16:00",
            location: "Online",
            googleCalendarLink: generateGoogleCalendarLink({
                title: "Computer Science Webinar",
                start: "20231022T160000",
                end: "20231022T180000",
                location: "Online",
                details: "Learn about career opportunities in tech"
            })
        },
        {
            id: 3,
            title: "Application Deadline",
            description: "Early admission for EPOKA University",
            date: "2023-11-05",
            time: "23:59",
            location: "EPOKA University, Tirana",
            googleCalendarLink: generateGoogleCalendarLink({
                title: "Application Deadline",
                start: "20231105T235900",
                end: "20231105T235900",
                location: "EPOKA University, Tirana",
                details: "Early admission for EPOKA University"
            })
        }
    ];

    function generateGoogleCalendarLink(event) {
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    }

    function renderEvents() {
        const container = document.getElementById('upcomingEvents');
        if (!container) return;

        container.innerHTML = '';
        
        events.forEach(event => {
            const eventDate = new Date(event.date);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            
            const eventElement = document.createElement('div');
            eventElement.className = 'event-item';
            eventElement.innerHTML = `
                <div class="event-date">
                    <span class="day">${eventDate.getDate()}</span>
                    <span class="month">${monthNames[eventDate.getMonth()]}</span>
                </div>
                <div class="event-info">
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                    <p><i class="fas fa-clock"></i> ${event.time}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <div class="event-actions">
                        <button class="btn btn-primary register-btn" data-id="${event.id}">Register</button>
                        <a href="${event.googleCalendarLink}" target="_blank" class="btn btn-secondary">Add to Calendar</a>
                    </div>
                </div>
            `;
            
            container.appendChild(eventElement);
        });

        
        document.querySelectorAll('.register-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = parseInt(this.dataset.id);
                registerForEvent(eventId);
            });
        });
    }

    function registerForEvent(eventId) {
        const event = events.find(e => e.id === eventId);
        if (!event) return;

        const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
        if (!currentUser) {
            alert('Please login to register for events');
            return;
        }

        
        if (!currentUser.registeredEvents) {
            currentUser.registeredEvents = [];
        }
        
        if (!currentUser.registeredEvents.includes(eventId)) {
            currentUser.registeredEvents.push(eventId);
            localStorage.setItem('uniexplora_currentUser', JSON.stringify(currentUser));
            alert(`Successfully registered for ${event.title}`);
        } else {
            alert(`You're already registered for ${event.title}`);
        }
    }

    renderEvents();
});