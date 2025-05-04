document.addEventListener('DOMContentLoaded', function() {
    const tours = [
        {
            id: 1,
            title: "EPOKA University Campus Tour",
            university: "EPOKA University",
            type: "campus",
            duration: "8:32",
            views: "1,245",
            description: "Explore the beautiful campus of EPOKA University with our student guide, showcasing academic buildings, green spaces, and student facilities.",
            thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "epoka-campus"
        },
        {
            id: 2,
            title: "POLIS University Architecture Studios",
            university: "POLIS University",
            type: "facilities",
            duration: "6:15",
            views: "892",
            description: "Take a look inside the state-of-the-art architecture studios where students bring their creative visions to life.",
            thumbnail: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "polis-studios"
        },
        {
            id: 3,
            title: "UET Medical Laboratories",
            university: "UET",
            type: "facilities",
            duration: "5:47",
            views: "1,532",
            description: "Discover the advanced medical laboratories where future doctors and healthcare professionals train.",
            thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "uet-labs"
        },
        {
            id: 4,
            title: "BEDER University Dormitories",
            university: "BEDER University",
            type: "dormitories",
            duration: "7:21",
            views: "756",
            description: "See where students live and get a feel for the dormitory life at BEDER University.",
            thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "beder-dorms"
        },
        {
            id: 5,
            title: "European University Library",
            university: "European University",
            type: "library",
            duration: "4:56",
            views: "1,089",
            description: "Tour the extensive library resources available to students at European University of Tirana.",
            thumbnail: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "eu-library"
        },
        {
            id: 6,
            title: "MARUBI Academy Art Studios",
            university: "MARUBI Academy",
            type: "facilities",
            duration: "9:12",
            views: "623",
            description: "Step inside the creative spaces where art and design students develop their skills and showcase their work.",
            thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "marubi-art"
        }
    ];

    const testimonials = [
        {
            id: 1,
            title: "My Computer Science Journey at EPOKA",
            student: "Anisa K.",
            program: "Computer Science",
            university: "EPOKA University",
            duration: "3:45",
            views: "1,542",
            thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "epoka-cs"
        },
        {
            id: 2,
            title: "Studying Architecture at POLIS",
            student: "Endrit L.",
            program: "Architecture",
            university: "POLIS University",
            duration: "4:22",
            views: "987",
            thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "polis-arch"
        },
        {
            id: 3,
            title: "International Relations Experience",
            student: "Era M.",
            program: "International Relations",
            university: "BEDER University",
            duration: "5:18",
            views: "1,209",
            thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            videoId: "beder-ir"
        }
    ];

    const toursContainer = document.getElementById('toursContainer');
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const universityTourFilter = document.getElementById('universityTourFilter');
    const tourTypeFilter = document.getElementById('tourTypeFilter');
    
    function displayTours(toursToDisplay) {
        toursContainer.innerHTML = '';
        
        if (toursToDisplay.length === 0) {
            toursContainer.innerHTML = '<div class="no-tours">No tours match your selected filters.</div>';
            return;
        }
        
        toursToDisplay.forEach(tour => {
            const tourCard = document.createElement('div');
            tourCard.className = 'tour-card';
            
            tourCard.innerHTML = `
                <div class="tour-thumbnail">
                    <img src="${tour.thumbnail}" alt="${tour.title}">
                    <div class="play-button" data-video="${tour.videoId}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="tour-info">
                    <h3>${tour.title}</h3>
                    <div class="tour-meta">
                        <span><i class="fas fa-university"></i> ${tour.university}</span>
                        <span><i class="fas fa-clock"></i> ${tour.duration}</span>
                    </div>
                    <p class="tour-description">${tour.description}</p>
                    <div class="tour-actions">
                        <button class="btn btn-primary" data-video="${tour.videoId}">Watch Tour</button>
                        <button class="btn btn-secondary">Schedule Visit</button>
                    </div>
                </div>
            `;
            
            toursContainer.appendChild(tourCard);
        });
        
        document.querySelectorAll('.play-button, .btn-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                const videoId = this.dataset.video;
                showVideoModal(videoId);
            });
        });
    }

 
    function displayTestimonials() {
        testimonialsGrid.innerHTML = '';
        
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-video';
            
            testimonialCard.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${testimonial.thumbnail}" alt="${testimonial.title}">
                    <div class="video-play" data-video="${testimonial.videoId}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h4>${testimonial.title}</h4>
                    <p>${testimonial.program} Student</p>
                    <div class="video-meta">
                        <img src="https://via.placeholder.com/30" alt="${testimonial.student}">
                        <div>
                            <div>${testimonial.student}</div>
                            <div><i class="fas fa-clock"></i> ${testimonial.duration} • <i class="fas fa-eye"></i> ${testimonial.views}</div>
                        </div>
                    </div>
                </div>
            `;
            
            testimonialsGrid.appendChild(testimonialCard);
        });
    
        document.querySelectorAll('.video-play').forEach(btn => {
            btn.addEventListener('click', function() {
                const videoId = this.dataset.video;
                showVideoModal(videoId);
            });
        });
    }
    function filterTours() {
        const universityValue = universityTourFilter.value;
        const typeValue = tourTypeFilter.value;
        
        const filtered = tours.filter(tour => {
            const matchesUniversity = universityValue === '' || 
                                    (universityValue === 'epoka' && tour.university.includes('EPOKA')) ||
                                    (universityValue === 'uet' && tour.university.includes('UET')) ||
                                    (universityValue === 'polis' && tour.university.includes('POLIS')) ||
                                    (universityValue === 'eu' && tour.university.includes('European')) ||
                                    (universityValue === 'beder' && tour.university.includes('BEDER')) ||
                                    (universityValue === 'marubi' && tour.university.includes('MARUBI'));
            
            const matchesType = typeValue === '' || tour.type === typeValue;
            
            return matchesUniversity && matchesType;
        });
        
        displayTours(filtered);
    }

    universityTourFilter.addEventListener('change', filterTours);
    tourTypeFilter.addEventListener('change', filterTours);
    displayTours(tours);
    displayTestimonials();
});