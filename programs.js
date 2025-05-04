document.addEventListener('DOMContentLoaded', function() {
    const universities = {
        "Tirana University": {
            type: "public",
            logo: "https://via.placeholder.com/100/343a40/ffffff?text=UT",
            location: "Tirana",
            tuition: "€500 - €1,500/year",
            website: "https://unitir.edu.al",
            description: "The largest and oldest public university in Albania."
        },
        "EPOKA University": {
            type: "private",
            logo: "https://via.placeholder.com/100/0066cc/ffffff?text=EPOKA",
            location: "Tirana",
            tuition: "€3,000 - €4,000/year",
            website: "https://epoka.edu.al",
            description: "International university with English-taught programs.",
            sponsor: true
        },
        "Tirana Business University": {
            type: "private",
            logo: "https://via.placeholder.com/100/4a6bff/ffffff?text=TBU",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year",
            website: "https://tbu.edu.al",
            sponsor: true
        },
        "POLIS University": {
            type: "private",
            logo: "https://via.placeholder.com/100/990000/ffffff?text=POLIS",
            location: "Tirana",
            tuition: "€2,500 - €3,500/year",
            website: "https://universitetipolis.edu.al",
            description: "Specialized in architecture and urban planning."
        },
        "MARUBI Academy": {
            type: "private",
            logo: "https://via.placeholder.com/100/cc0099/ffffff?text=MARUBI",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year",
            website: "https://marubi.edu.al",
            description: "Leading academy for film and multimedia arts."
        },
        "BEDER University": {
            type: "private",
            logo: "https://via.placeholder.com/100/009933/ffffff?text=BEDER",
            location: "Tirana",
            tuition: "€2,500 - €3,000/year",
            website: "https://beder.edu.al"
        },
        "European University of Tirana": {
            type: "private",
            logo: "https://via.placeholder.com/100/003366/ffffff?text=EUT",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year",
            website: "https://uet.edu.al"
        },
        "University of Economics Tirana": {
            type: "private",
            logo: "https://via.placeholder.com/100/990000/ffffff?text=UET",
            location: "Tirana",
            tuition: "€1,100 - €1,600/year",
            website: "https://uet.edu.al",
            description: "Specialized in economics and business studies."
        },
        "Aleksander Xhuvani University": {
            type: "public",
            logo: "https://via.placeholder.com/100/006699/ffffff?text=AXU",
            location: "Elbasan",
            tuition: "€800 - €1,200/year",
            website: "https://uniel.edu.al",
            description: "Public university in Elbasan with diverse programs."
        }
    };
    const programs = [
        {
            id: 0,
            name: "Software Engineering",
            university: "Tirana University",
            field: "engineering",
            duration: 4,
            degree: "Bachelor",
            description: "This program focuses on the principles of software development, including design, implementation, and testing.",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€3,000/year",
            requirements: "High school diploma, Math proficiency",
            courses: ["Programming", "Data Structures", "Software Design", "Web Development"],
            saved: false
        },
        {
            id: 1,
            name: "Computer Science",
            university: "EPOKA University",
            field: "engineering",
            duration: 4,
            degree: "Bachelor",
            description: "This program provides students with a solid foundation in computer science principles and practical skills in software development, algorithms, and system design.",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€3,200/year",
            requirements: "High school diploma, Math proficiency",
            courses: ["Programming Fundamentals", "Data Structures", "Algorithms", "Database Systems"],
            saved: false
        },
        {
            id: 2,
            name: "Business Administration",
            university: "Tirana Business University",
            field: "business",
            duration: 3,
            degree: "Bachelor",
            description: "Gain comprehensive knowledge of business operations, management principles, and strategic decision-making in a global context.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€2,800/year",
            requirements: "High school diploma",
            courses: ["Principles of Management", "Marketing", "Financial Accounting", "Business Ethics"],
            saved: false
        },
        {
            id: 3,
            name: "Architecture",
            university: "POLIS University",
            field: "engineering",
            duration: 5,
            degree: "Bachelor",
            description: "Combine creativity with technical skills to design sustainable and functional spaces that meet societal needs.",
            image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€3,500/year",
            requirements: "High school diploma, Portfolio review",
            courses: ["Architectural Design", "Building Technology", "Urban Planning", "History of Architecture"],
            saved: false
        },
        {
            id: 4,
            name: "Graphic Design",
            university: "MARUBI Academy",
            field: "arts",
            duration: 3,
            degree: "Bachelor",
            description: "Develop visual communication skills and learn to create compelling designs across various media platforms.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€2,500/year",
            requirements: "High school diploma, Artistic portfolio",
            courses: ["Typography", "Digital Illustration", "Brand Identity", "User Experience Design"],
            saved: false
        },
        {
            id: 5,
            name: "International Relations",
            university: "BEDER University",
            field: "social",
            duration: 4,
            degree: "Bachelor",
            description: "Explore global politics, diplomacy, and cross-cultural communication in an increasingly interconnected world.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€2,700/year",
            requirements: "High school diploma",
            courses: ["International Politics", "Diplomacy", "Global Economics", "Foreign Policy Analysis"],
            saved: false
        },
        {
            id: 6,
            name: "Civil Engineering",
            university: "EPOKA University",
            field: "engineering",
            duration: 4,
            degree: "Bachelor",
            description: "Learn to design, construct, and maintain infrastructure projects that serve communities and improve quality of life.",
            image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€3,300/year",
            requirements: "High school diploma, Math and Physics proficiency",
            courses: ["Structural Analysis", "Geotechnical Engineering", "Transportation Engineering", "Construction Management"],
            saved: false
        },
        {
            id: 7,
            name: "Psychology",
            university: "European University of Tirana",
            field: "social",
            duration: 4,
            degree: "Bachelor",
            description: "Study human behavior and mental processes to understand individuals and help improve their well-being.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€2,800/year",
            requirements: "High school diploma",
            courses: ["Cognitive Psychology", "Developmental Psychology", "Clinical Psychology", "Social Psychology"],
            saved: false
        },
        {
            id: 8,
            name: "Medicine",
            university: "University of Medicine Tirana",
            field: "health",
            duration: 6,
            degree: "MD",
            description: "Train to become a medical professional with comprehensive knowledge of human health and disease management.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€4,500/year",
            requirements: "High school diploma, Biology and Chemistry proficiency",
            courses: ["Anatomy", "Physiology", "Pathology", "Clinical Medicine"],
            saved: false
        },
        {
            id: 9,
            name: "Economics",
            university: "University of Economics Tirana",
            field: "business",
            duration: 4,
            degree: "Bachelor",
            description: "Study economic theories and their practical applications in business and policy making.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€2,200/year",
            requirements: "High school diploma",
            courses: ["Microeconomics", "Macroeconomics", "Econometrics", "Financial Markets"],
            saved: false
        },
        {
            id: 10,
            name: "English Language and Literature",
            university: "Aleksander Xhuvani University",
            field: "humanities",
            duration: 4,
            degree: "Bachelor",
            description: "Study English language, literature, and linguistics with a focus on critical analysis and communication skills.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tuition: "€1,200/year",
            requirements: "High school diploma",
            courses: ["British Literature", "American Literature", "Linguistics", "Academic Writing"],
            saved: false
        }
    ];

    const programsContainer = document.getElementById('programsContainer');
    const programSearch = document.getElementById('programSearch');
    const fieldFilter = document.getElementById('fieldFilter');
    const universityFilter = document.getElementById('universityFilter');
    const durationFilter = document.getElementById('durationFilter');
    const resetFilters = document.getElementById('resetFilters');

    function displayPrograms(programsToDisplay) {
        programsContainer.innerHTML = '';
        
        if (programsToDisplay.length === 0) {
            programsContainer.innerHTML = `
                <div class="no-results">
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="No results">
                    <h3>No programs match your search</h3>
                    <p>Try adjusting your filters or search for something different</p>
                    <button class="btn btn-primary" id="resetFiltersBtn">Reset Filters</button>
                </div>
            `;
            
            document.getElementById('resetFiltersBtn').addEventListener('click', resetAllFilters);
            return;
        }
        
        programsToDisplay.forEach(program => {
            const universityInfo = universities[program.university] || {};
            const programCard = document.createElement('div');
            programCard.className = 'program-card';
            
            programCard.innerHTML = `
                <div class="program-image" style="background-image: url('${program.image}')">
                    <div class="university-badge">
                        <img src="${universityInfo.logo || 'https://via.placeholder.com/50/4a6bff/ffffff?text=UNI'}" alt="${program.university}">
                    </div>
                </div>
                <div class="program-content">
                    <h3>${program.name}</h3>
                    <div class="program-university">
                        <span>${program.university}</span>
                        <span class="program-degree">${program.degree}</span>
                    </div>
                    <div class="program-details">
                        <div class="program-detail">
                            <i class="fas fa-clock"></i>
                            <span>${program.duration} Years</span>
                        </div>
                        <div class="program-detail">
                            <i class="fas fa-euro-sign"></i>
                            <span>${program.tuition}</span>
                        </div>
                        <div class="program-detail">
                            <i class="fas fa-layer-group"></i>
                            <span>${program.field.charAt(0).toUpperCase() + program.field.slice(1)}</span>
                        </div>
                    </div>
                    <p class="program-description">${program.description}</p>
                    <div class="program-actions">
                        <button class="btn btn-primary view-details" data-id="${program.id}">View Details</button>
                        <button class="btn save-btn ${program.saved ? 'saved' : ''}" data-id="${program.id}">
                            <i class="far ${program.saved ? 'fa-check' : 'fa-bookmark'}"></i>
                            ${program.saved ? 'Saved' : 'Save'}
                        </button>
                    </div>
                </div>
            `;
            
            programsContainer.appendChild(programCard);
        });
        
        
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', function() {
                const programId = parseInt(this.dataset.id);
                showProgramDetails(programId);
            });
        });
        
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const programId = parseInt(this.dataset.id);
                toggleSaveProgram(programId);
            });
        });
    }


    function showProgramDetails(programId) {
        const program = programs.find(p => p.id === programId);
        if (!program) return;
        
        const universityInfo = universities[program.university] || {};
        
        const modal = document.createElement('div');
        modal.className = 'program-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>${program.name}</h2>
                    <p>${program.university} • ${program.degree} • ${program.duration} Years</p>
                </div>
                <div class="modal-body">
                    <div class="modal-section">
                        <h3>Overview</h3>
                        <p>${program.description}</p>
                    </div>
                    <div class="modal-columns">
                        <div class="modal-column">
                            <div class="modal-section">
                                <h3>Key Information</h3>
                                <ul class="program-info">
                                    <li><strong>Tuition:</strong> ${program.tuition}</li>
                                    <li><strong>Field:</strong> ${program.field.charAt(0).toUpperCase() + program.field.slice(1)}</li>
                                    <li><strong>Degree:</strong> ${program.degree}</li>
                                    <li><strong>Duration:</strong> ${program.duration} Years</li>
                                </ul>
                            </div>
                            <div class="modal-section">
                                <h3>Requirements</h3>
                                <p>${program.requirements}</p>
                            </div>
                            <div class="modal-section university-info">
                                <h3>University Details</h3>
                                <div class="university-details">
                                    <img src="${universityInfo.logo || 'https://via.placeholder.com/100/4a6bff/ffffff?text=UNI'}" 
                                         alt="${program.university}" class="university-logo">
                                    <div>
                                        <p><strong>Type:</strong> ${universityInfo.type || 'Not specified'}</p>
                                        <p><strong>Location:</strong> ${universityInfo.location || 'Not specified'}</p>
                                        ${universityInfo.website ? 
                                            `<p><strong>Website:</strong> <a href="${universityInfo.website}" target="_blank">${universityInfo.website}</a></p>` : ''}
                                        ${universityInfo.description ? 
                                            `<p class="university-description">${universityInfo.description}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-column">
                            <div class="modal-section">
                                <h3>Sample Courses</h3>
                                <ul class="course-list">
                                    ${program.courses.map(course => `<li>${course}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    ${universityInfo.website ? 
                        `<a href="${universityInfo.website}" target="_blank" class="btn btn-primary">Visit University Website</a>` : 
                        '<button class="btn btn-primary">Apply Now</button>'}
                    <button class="btn btn-secondary save-btn-modal ${program.saved ? 'saved' : ''}" data-id="${program.id}">
                        <i class="far ${program.saved ? 'fa-check' : 'fa-bookmark'}"></i>
                        ${program.saved ? 'Saved' : 'Save Program'}
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
    
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelector('.save-btn-modal').addEventListener('click', function() {
            const programId = parseInt(this.dataset.id);
            toggleSaveProgram(programId);
            document.body.removeChild(modal);
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    
    function toggleSaveProgram(programId) {
        const programIndex = programs.findIndex(p => p.id === programId);
        if (programIndex === -1) return;
        
        // Toggle saved status
        programs[programIndex].saved = !programs[programIndex].saved;
        
        // Update current user's saved programs
        const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
        if (currentUser) {
            if (!currentUser.savedPrograms) {
                currentUser.savedPrograms = [];
            }
            
            if (programs[programIndex].saved) {
                // Add to saved if not already there
                if (!currentUser.savedPrograms.some(p => p.id === programId)) {
                    currentUser.savedPrograms.push(programs[programIndex]);
                }
            } else {
                // Remove from saved
                currentUser.savedPrograms = currentUser.savedPrograms.filter(p => p.id !== programId);
            }
            
            localStorage.setItem('uniexplora_currentUser', JSON.stringify(currentUser));
        }
        
        filterPrograms();
    }
    function displaySavedPrograms() {
        const savedProgramsContainer = document.getElementById('savedProgramsContainer');
        if (!savedProgramsContainer) return;
        
        const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
        if (!currentUser || !currentUser.savedPrograms || currentUser.savedPrograms.length === 0) {
            savedProgramsContainer.innerHTML = `
                <div class="no-saved-programs">
                    <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="No saved programs">
                    <h3>No saved programs yet</h3>
                    <p>Browse programs and click the save button to add them here</p>
                    <a href="programs.html" class="btn btn-primary">Browse Programs</a>
                </div>
            `;
            return;
        }
        
        savedProgramsContainer.innerHTML = '';
        currentUser.savedPrograms.forEach(program => {
            const universityInfo = universities[program.university] || {};
            const programCard = document.createElement('div');
            programCard.className = 'program-card';
            
            programCard.innerHTML = `
                <div class="program-image" style="background-image: url('${program.image}')">
                    <div class="university-badge">
                        <img src="${universityInfo.logo || 'https://via.placeholder.com/50/4a6bff/ffffff?text=UNI'}" alt="${program.university}">
                    </div>
                </div>
                <div class="program-content">
                    <h3>${program.name}</h3>
                    <div class="program-university">
                        <span>${program.university}</span>
                        <span class="program-degree">${program.degree}</span>
                    </div>
                    <div class="program-details">
                        <div class="program-detail">
                            <i class="fas fa-clock"></i>
                            <span>${program.duration} Years</span>
                        </div>
                        <div class="program-detail">
                            <i class="fas fa-euro-sign"></i>
                            <span>${program.tuition}</span>
                        </div>
                    </div>
                    <div class="program-actions">
                        <button class="btn btn-primary view-details" data-id="${program.id}">View Details</button>
                        <button class="btn btn-danger remove-saved" data-id="${program.id}">
                            <i class="far fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
            `;
            
            savedProgramsContainer.appendChild(programCard);
        });
        
        // Add event listeners for the buttons
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', function() {
                const programId = parseInt(this.dataset.id);
                showProgramDetails(programId);
            });
        });
        
        document.querySelectorAll('.remove-saved').forEach(btn => {
            btn.addEventListener('click', function() {
                const programId = parseInt(this.dataset.id);
                toggleSaveProgram(programId);
                displaySavedPrograms(); // Refresh the display
            });
        });
    }
    function filterPrograms() {
        const searchTerm = programSearch.value.toLowerCase();
        const fieldValue = fieldFilter.value;
        const universityValue = universityFilter.value;
        const durationValue = durationFilter.value;
        
        const filtered = programs.filter(program => {
            const matchesSearch = program.name.toLowerCase().includes(searchTerm) || 
                                program.description.toLowerCase().includes(searchTerm) ||
                                program.university.toLowerCase().includes(searchTerm);
            
            const matchesField = fieldValue === '' || program.field === fieldValue;
            const matchesUniversity = universityValue === '' || 
                                    program.university.toLowerCase().includes(universityValue.toLowerCase());
            
            const matchesDuration = durationValue === '' || program.duration === parseInt(durationValue);
            
            return matchesSearch && matchesField && matchesUniversity && matchesDuration;
        });
        
        displayPrograms(filtered);
    }
    function resetAllFilters() {
        programSearch.value = '';
        fieldFilter.value = '';
        universityFilter.value = '';
        durationFilter.value = '';
        filterPrograms();
    }
    function initializeFilters() {
     
        const fields = [...new Set(programs.map(p => p.field))];
        fieldFilter.innerHTML = '<option value="">All Fields</option>';
        fields.forEach(field => {
            const option = document.createElement('option');
            option.value = field;
            option.textContent = field.charAt(0).toUpperCase() + field.slice(1);
            fieldFilter.appendChild(option);
        });
        
      
        const unis = [...new Set(programs.map(p => p.university))];
        universityFilter.innerHTML = '<option value="">All Universities</option>';
        unis.forEach(uni => {
            const option = document.createElement('option');
            option.value = uni;
            option.textContent = uni;
            universityFilter.appendChild(option);
        });
        
    
        const durations = [...new Set(programs.map(p => p.duration))].sort();
        durationFilter.innerHTML = '<option value="">Any Duration</option>';
        durations.forEach(duration => {
            const option = document.createElement('option');
            option.value = duration;
            option.textContent = `${duration} Year${duration > 1 ? 's' : ''}`;
            durationFilter.appendChild(option);
        });
    }


    programSearch.addEventListener('input', filterPrograms);
    fieldFilter.addEventListener('change', filterPrograms);
    universityFilter.addEventListener('change', filterPrograms);
    durationFilter.addEventListener('change', filterPrograms);
    resetFilters.addEventListener('click', resetAllFilters);


    initializeFilters();
    displayPrograms(programs);
});