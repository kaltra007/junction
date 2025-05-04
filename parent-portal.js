document.addEventListener('DOMContentLoaded', function() {
    const resources = [
        {
            id: 1,
            title: "Understanding University Admissions in Albania",
            type: "Guide",
            duration: "15 min read",
            description: "A comprehensive guide to the university application process, deadlines, and requirements for Albanian universities.",
            image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "Financial Aid and Scholarship Opportunities",
            type: "Article",
            duration: "10 min read",
            description: "Learn about available financial support options for students in private universities.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "How to Support Your Child's Career Decision",
            type: "Video",
            duration: "8 min watch",
            description: "Expert advice on helping your child choose the right academic path based on their strengths.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Comparing Private Universities in Albania",
            type: "Comparison Tool",
            duration: "Interactive",
            description: "Use our interactive tool to compare programs, fees, and facilities across universities.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];
    const faqs = [
        {
            question: "What are the advantages of private universities in Albania?",
            answer: "Private universities in Albania often offer more specialized programs, smaller class sizes, modern facilities, and international partnerships. They may also provide more flexible schedules and additional student support services compared to public institutions."
        },
        {
            question: "How much does tuition cost at private universities?",
            answer: "Tuition fees vary by university and program, typically ranging from €1,500 to €4,000 per year. Some specialized programs like Medicine may cost more. Many universities offer scholarships and payment plans to help manage costs."
        },
        {
            question: "What is the application process like?",
            answer: "The application process usually involves submitting academic records, completing an application form, and sometimes an entrance exam or interview. Requirements vary by university, so it's important to check each institution's specific deadlines and procedures."
        },
        {
            question: "Can students work while studying?",
            answer: "Yes, many students work part-time while studying. Albanian law allows international students to work up to 20 hours per week during term time. Universities often have career centers that help students find suitable part-time jobs or internships."
        },
        {
            question: "What housing options are available for students?",
            answer: "Options include university dormitories, private student residences, and rented apartments. Many universities assist students in finding accommodation, and some have partnerships with nearby housing providers."
        }
    ];
    const resourcesGrid = document.getElementById('resourcesGrid');
    const faqAccordion = document.getElementById('faqAccordion');
    function displayResources() {
        resourcesGrid.innerHTML = '';
        
        resources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            
            resourceCard.innerHTML = `
                <div class="resource-image">
                    <img src="${resource.image}" alt="${resource.title}">
                </div>
                <div class="resource-content">
                    <div class="resource-meta">
                        <span>${resource.type}</span>
                        <span>${resource.duration}</span>
                    </div>
                    <h3>${resource.title}</h3>
                    <p>${resource.description}</p>
                    <a href="#" class="resource-link">View ${resource.type === 'Video' ? 'Video' : 'Resource'} <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            resourcesGrid.appendChild(resourceCard);
        });
    }
    function displayFAQs() {
        faqAccordion.innerHTML = '';
        
        faqs.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            
            faqItem.innerHTML = `
                <div class="faq-question">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            `;
            
            faqAccordion.appendChild(faqItem);
            const question = faqItem.querySelector('.faq-question');
            question.addEventListener('click', function() {
                faqItem.classList.toggle('active');
            });
        });
    }
    displayResources();
    displayFAQs();
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our parent newsletter! You will receive updates and resources to help guide your child\'s academic journey.');
            this.reset();
        });
    }
});