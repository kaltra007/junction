document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    document.getElementById('studentName').textContent = currentUser.name;
    const initials = currentUser.name.split(' ').map(n => n[0]).join('');
    document.getElementById('profileImage').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=4a6bff&color=fff`;
    if (currentUser.userType === 'parent') {
        document.getElementById('dashboardSubtitle').textContent = "Here's your parent dashboard to support your child's academic journey.";
    }
    loadSavedPrograms();
    loadQuizResults();
    loadUpcomingEvents();
    document.getElementById('startNewChat').addEventListener('click', function() {
        window.location.href = 'chat.html';
    });

    function loadSavedPrograms() {
        const savedProgramsContainer = document.getElementById('savedPrograms');
        
        if (!currentUser.savedPrograms || currentUser.savedPrograms.length === 0) {
            savedProgramsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-bookmark"></i>
                    <h4>No saved programs yet</h4>
                    <p>Browse programs and save your favorites to compare them later</p>
                    <a href="programs.html" class="btn btn-primary">Explore Programs</a>
                </div>
            `;
            return;
        }
        
        savedProgramsContainer.innerHTML = '';
        
        currentUser.savedPrograms.forEach(program => {
            const programElement = document.createElement('div');
            programElement.className = 'saved-program';
            
            programElement.innerHTML = `
                <img src="${program.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'}" alt="${program.name}">
                <div class="saved-program-info">
                    <h4>${program.name}</h4>
                    <p>${program.university}</p>
                    <p class="field">${program.field.charAt(0).toUpperCase() + program.field.slice(1)}</p>
                    <div class="saved-program-actions">
                        <button class="btn btn-primary view-btn" data-id="${program.id}">View</button>
                        <button class="btn btn-secondary remove-btn" data-id="${program.id}">Remove</button>
                    </div>
                </div>
            `;
            
            savedProgramsContainer.appendChild(programElement);
        });
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const programId = this.dataset.id;
                alert(`Would show details for program ID: ${programId}`);
            });
        });
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const programId = this.dataset.id;
                removeSavedProgram(programId);
            });
        });
    }

    function removeSavedProgram(programId) {
        if (confirm('Are you sure you want to remove this program from your saved list?')) {
            currentUser.savedPrograms = currentUser.savedPrograms.filter(p => p.id != programId);
            localStorage.setItem('uniexplora_currentUser', JSON.stringify(currentUser));
            loadSavedPrograms();
        }
    }

    function loadQuizResults() {
        const quizResultsContainer = document.getElementById('quizResultsContainer');
        
        if (!currentUser.quizResults || !currentUser.quizResults.primaryField) {
            quizResultsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-question-circle"></i>
                    <h4>No quiz results yet</h4>
                    <p>Take our career quiz to get personalized program recommendations</p>
                    <a href="quiz.html" class="btn btn-primary">Take Career Quiz</a>
                </div>
            `;
            return;
        }
        
        quizResultsContainer.innerHTML = `
            <div class="result-category">
                <div class="category-icon">🧮</div>
                <div class="category-info">
                    <h3>${currentUser.quizResults.primaryField || 'Not specified'}</h3>
                    <p>${currentUser.quizResults.primaryDescription || 'No description available'}</p>
                    <div class="match-score">${currentUser.quizResults.primaryScore || '0'}% Match</div>
                </div>
            </div>
            <div class="result-category">
                <div class="category-icon">🎨</div>
                <div class="category-info">
                    <h3>${currentUser.quizResults.secondaryField || 'Not specified'}</h3>
                    <p>${currentUser.quizResults.secondaryDescription || 'No description available'}</p>
                    <div class="match-score">${currentUser.quizResults.secondaryScore || '0'}% Match</div>
                </div>
            </div>
            <div class="section-actions">
                <button class="btn btn-primary" onclick="location.href='quiz.html'">Retake Quiz</button>
                <button class="btn btn-secondary" onclick="location.href='programs.html'">Explore Programs</button>
            </div>
        `;
    }

    function loadUpcomingEvents() {
        const eventsContainer = document.getElementById('upcomingEvents');
        const events = [
            {
                id: 1,
                day: "15",
                month: "Oct",
                title: "EPOKA Open Day",
                description: "Campus tour and program presentations",
                time: "10:00 AM",
                university: "EPOKA University"
            },
            {
                id: 2,
                day: "22",
                month: "Oct",
                title: "Computer Science Webinar",
                description: "Learn about career opportunities in tech",
                time: "4:00 PM",
                university: "Tirana University"
            },
            {
                id: 3,
                day: "05",
                month: "Nov",
                title: "Application Deadline",
                description: "Early admission for EPOKA University",
                time: "11:59 PM",
                university: "EPOKA University"
            }
        ];
        
        eventsContainer.innerHTML = '';
        
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event-item';
            
            eventElement.innerHTML = `
                <div class="event-date">
                    <span class="day">${event.day}</span>
                    <span class="month">${event.month}</span>
                </div>
                <div class="event-info">
                    <h4>${event.title}</h4>
                    <p class="event-university">${event.university}</p>
                    <p class="event-description">${event.description}</p>
                    <p class="event-time"><i class="fas fa-clock"></i> ${event.time}</p>
                    <div class="event-actions">
                        <button class="btn btn-primary register-btn" data-id="${event.id}">Register</button>
                        <button class="btn btn-secondary calendar-btn" data-id="${event.id}">
                            <i class="far fa-calendar-plus"></i> Add to Calendar
                        </button>
                    </div>
                </div>
            `;
            
            eventsContainer.appendChild(eventElement);
        });

        document.querySelectorAll('.register-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = this.dataset.id;
                alert(`Would register user for event ID: ${eventId}`);
            });
        });

        document.querySelectorAll('.calendar-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = this.dataset.id;
                alert(`Would add event ID: ${eventId} to calendar`);
            });
        });
    }
});