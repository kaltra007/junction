document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "When working on a team project, you typically:",
            options: [
                { text: "Take leadership and organize tasks", value: "leadership", traits: ["extrovert", "enterprising"], clusters: ["business", "public_service"] },
                { text: "Focus on research and data analysis", value: "research", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Handle the creative design aspects", value: "design", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Ensure all technical components work", value: "technical", traits: ["practical"], clusters: ["stem", "trades"] }
            ],
            category: "work_style"
        },
        {
            question: "Which school subject do you enjoy the most?",
            options: [
                { text: "Mathematics", value: "math", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Literature/Languages", value: "literature", traits: ["creative"], clusters: ["arts", "public_service"] },
                { text: "Science (Biology, Chemistry, Physics)", value: "science", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Art/Music", value: "art", traits: ["creative"], clusters: ["arts"] }
            ],
            category: "academic_interests"
        },
        {
            question: "How do you prefer to solve problems?",
            options: [
                { text: "Analyze data and find logical solutions", value: "logical", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Brainstorm creative ideas", value: "creative", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Consult with others for input", value: "collaborative", traits: ["social"], clusters: ["public_service", "business"] },
                { text: "Try practical solutions until something works", value: "practical", traits: ["practical"], clusters: ["trades", "stem"] }
            ],
            category: "problem_solving"
        },
        {
            question: "What type of work environment do you prefer?",
            options: [
                { text: "Structured and organized", value: "structured", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Creative and flexible", value: "creative_env", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Fast-paced and challenging", value: "fast_paced", traits: ["enterprising"], clusters: ["business", "stem"] },
                { text: "Hands-on and practical", value: "hands_on", traits: ["practical"], clusters: ["trades", "health"] }
            ],
            category: "work_preferences"
        },
        {
            question: "Which of these activities appeals to you most?",
            options: [
                { text: "Starting a business", value: "business", traits: ["enterprising"], clusters: ["business"] },
                { text: "Scientific research", value: "research", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Creating art or music", value: "art", traits: ["creative"], clusters: ["arts"] },
                { text: "Helping people in need", value: "helping", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "career_interests"
        },
        {
            question: "What are your long-term career goals?",
            options: [
                { text: "Become an executive or entrepreneur", value: "executive", traits: ["enterprising"], clusters: ["business"] },
                { text: "Make an important scientific discovery", value: "scientist", traits: ["analytical"], clusters: ["stem"] },
                { text: "Create influential artwork or performances", value: "artist", traits: ["creative"], clusters: ["arts"] },
                { text: "Improve my community or society", value: "community", traits: ["social"], clusters: ["public_service"] }
            ],
            category: "career_goals"
        },
        {
            question: "When learning something new, you prefer to:",
            options: [
                { text: "Read detailed instructions", value: "instructions", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Experiment and try things out", value: "experiment", traits: ["practical"], clusters: ["stem", "trades"] },
                { text: "Discuss with others", value: "discuss", traits: ["social"], clusters: ["public_service", "health"] },
                { text: "Create your own approach", value: "create", traits: ["creative"], clusters: ["arts", "business"] }
            ],
            category: "learning_style"
        },
        {
            question: "Which of these skills comes most naturally to you?",
            options: [
                { text: "Numbers and calculations", value: "numbers", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Writing and storytelling", value: "writing", traits: ["creative"], clusters: ["arts", "public_service"] },
                { text: "Fixing and building things", value: "fixing", traits: ["practical"], clusters: ["trades", "stem"] },
                { text: "Motivating and leading people", value: "leading", traits: ["enterprising"], clusters: ["business", "public_service"] }
            ],
            category: "natural_skills"
        },
        {
            question: "How do you handle deadlines?",
            options: [
                { text: "Plan carefully to finish early", value: "plan", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Work best under pressure", value: "pressure", traits: ["enterprising"], clusters: ["business", "stem"] },
                { text: "Adjust as needed based on creativity", value: "adjust", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Focus on quality over speed", value: "quality", traits: ["practical"], clusters: ["trades", "health"] }
            ],
            category: "work_habits"
        },
        {
            question: "Which of these would you most enjoy reading about?",
            options: [
                { text: "New scientific discoveries", value: "science", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Profiles of successful entrepreneurs", value: "entrepreneurs", traits: ["enterprising"], clusters: ["business"] },
                { text: "Art exhibitions or music festivals", value: "arts", traits: ["creative"], clusters: ["arts"] },
                { text: "Community development projects", value: "community", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "reading_interests"
        },
        {
            question: "When faced with a difficult decision, you:",
            options: [
                { text: "Make lists of pros and cons", value: "lists", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Go with your gut feeling", value: "gut", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Ask for advice from trusted people", value: "advice", traits: ["social"], clusters: ["public_service", "health"] },
                { text: "Consider practical consequences", value: "practical", traits: ["practical"], clusters: ["trades", "stem"] }
            ],
            category: "decision_making"
        },
        {
            question: "Which of these work settings appeals to you most?",
            options: [
                { text: "Corporate office", value: "office", traits: ["conventional"], clusters: ["business"] },
                { text: "Research laboratory", value: "lab", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Art studio or theater", value: "studio", traits: ["creative"], clusters: ["arts"] },
                { text: "Construction site or workshop", value: "workshop", traits: ["practical"], clusters: ["trades"] }
            ],
            category: "work_settings"
        },
        {
            question: "What type of vacation would you prefer?",
            options: [
                { text: "Visiting famous landmarks", value: "landmarks", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Adventure and extreme sports", value: "adventure", traits: ["enterprising"], clusters: ["business", "stem"] },
                { text: "Art and cultural experiences", value: "culture", traits: ["creative"], clusters: ["arts"] },
                { text: "Volunteering for a good cause", value: "volunteer", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "leisure_preferences"
        },
        {
            question: "Which of these values is most important to you?",
            options: [
                { text: "Achievement and success", value: "achievement", traits: ["enterprising"], clusters: ["business"] },
                { text: "Knowledge and discovery", value: "knowledge", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Creativity and expression", value: "expression", traits: ["creative"], clusters: ["arts"] },
                { text: "Helping and serving others", value: "helping", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "core_values"
        },
        {
            question: "How would your friends describe you?",
            options: [
                { text: "Organized and reliable", value: "organized", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Innovative and original", value: "innovative", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Logical and precise", value: "logical", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Supportive and caring", value: "caring", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "personality_traits"
        },
        {
            question: "Which of these technologies interests you most?",
            options: [
                { text: "Artificial intelligence", value: "ai", traits: ["analytical"], clusters: ["stem"] },
                { text: "Virtual reality art tools", value: "vr", traits: ["creative"], clusters: ["arts", "stem"] },
                { text: "Renewable energy systems", value: "energy", traits: ["practical"], clusters: ["stem", "trades"] },
                { text: "Social media platforms", value: "social", traits: ["social"], clusters: ["business", "public_service"] }
            ],
            category: "technology_interests"
        },
        {
            question: "What's your approach to rules and procedures?",
            options: [
                { text: "Follow them carefully", value: "follow", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Find ways to improve them", value: "improve", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Adapt them to the situation", value: "adapt", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Challenge unnecessary ones", value: "challenge", traits: ["enterprising"], clusters: ["business"] }
            ],
            category: "rules_attitude"
        },
        {
            question: "Which of these hobbies appeals to you most?",
            options: [
                { text: "Chess or strategy games", value: "chess", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Painting or playing music", value: "arts", traits: ["creative"], clusters: ["arts"] },
                { text: "DIY home improvement", value: "diy", traits: ["practical"], clusters: ["trades"] },
                { text: "Community volunteering", value: "volunteer", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "hobbies"
        },
        {
            question: "When working on a task, you focus on:",
            options: [
                { text: "Getting it done efficiently", value: "efficient", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Understanding how it works", value: "understand", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Making it unique and special", value: "unique", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "How it helps people", value: "helpful", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "task_focus"
        },
        {
            question: "Which of these careers appeals to you most?",
            options: [
                { text: "Financial analyst", value: "finance", traits: ["conventional"], clusters: ["business"] },
                { text: "Software engineer", value: "software", traits: ["analytical"], clusters: ["stem"] },
                { text: "Graphic designer", value: "design", traits: ["creative"], clusters: ["arts"] },
                { text: "Physical therapist", value: "therapy", traits: ["social"], clusters: ["health"] }
            ],
            category: "career_preferences"
        },
        {
            question: "What motivates you at work?",
            options: [
                { text: "Recognition and advancement", value: "recognition", traits: ["enterprising"], clusters: ["business"] },
                { text: "Solving complex problems", value: "solving", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Expressing creativity", value: "expressing", traits: ["creative"], clusters: ["arts"] },
                { text: "Making a difference", value: "difference", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "motivation"
        },
        {
            question: "Which of these would you enjoy studying?",
            options: [
                { text: "Economics and markets", value: "economics", traits: ["enterprising"], clusters: ["business"] },
                { text: "Computer algorithms", value: "algorithms", traits: ["analytical"], clusters: ["stem"] },
                { text: "Art history", value: "art", traits: ["creative"], clusters: ["arts"] },
                { text: "Social psychology", value: "psychology", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "study_interests"
        },
        {
            question: "How do you prefer to communicate?",
            options: [
                { text: "Formal reports and presentations", value: "formal", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Data and charts", value: "data", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Creative storytelling", value: "storytelling", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Face-to-face conversations", value: "conversations", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "communication_style"
        },
        {
            question: "Which of these challenges excites you most?",
            options: [
                { text: "Starting a new business", value: "business", traits: ["enterprising"], clusters: ["business"] },
                { text: "Solving a complex equation", value: "equation", traits: ["analytical"], clusters: ["stem"] },
                { text: "Creating an original artwork", value: "artwork", traits: ["creative"], clusters: ["arts"] },
                { text: "Helping someone overcome difficulties", value: "helping", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "challenges"
        },
        {
            question: "What's your ideal weekend activity?",
            options: [
                { text: "Organizing your space", value: "organizing", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Learning a new technical skill", value: "technical", traits: ["analytical"], clusters: ["stem", "trades"] },
                { text: "Working on a creative project", value: "creative", traits: ["creative"], clusters: ["arts"] },
                { text: "Spending time with friends/family", value: "social", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "weekend_activities"
        },
        {
            question: "Which of these roles would you prefer?",
            options: [
                { text: "Manager", value: "manager", traits: ["enterprising"], clusters: ["business"] },
                { text: "Researcher", value: "researcher", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Designer", value: "designer", traits: ["creative"], clusters: ["arts"] },
                { text: "Counselor", value: "counselor", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "role_preferences"
        },
        {
            question: "What type of books do you enjoy?",
            options: [
                { text: "Business and finance", value: "business", traits: ["enterprising"], clusters: ["business"] },
                { text: "Science and technology", value: "science", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Fiction and poetry", value: "fiction", traits: ["creative"], clusters: ["arts"] },
                { text: "Biographies of inspiring people", value: "biographies", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "reading_preferences"
        },
        {
            question: "How do you approach new technology?",
            options: [
                { text: "Learn all its features systematically", value: "systematic", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Figure out how it works", value: "figure", traits: ["analytical"], clusters: ["stem"] },
                { text: "Explore creative uses for it", value: "explore", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "See how it can connect people", value: "connect", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "tech_approach"
        },
        {
            question: "Which of these achievements would make you proudest?",
            options: [
                { text: "Building a successful company", value: "company", traits: ["enterprising"], clusters: ["business"] },
                { text: "Making an important discovery", value: "discovery", traits: ["analytical"], clusters: ["stem", "health"] },
                { text: "Creating a beautiful artwork", value: "art", traits: ["creative"], clusters: ["arts"] },
                { text: "Improving lives in your community", value: "community", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "achievements"
        },
        {
            question: "When working in a group, your strength is:",
            options: [
                { text: "Keeping everyone organized", value: "organized", traits: ["conventional"], clusters: ["business", "public_service"] },
                { text: "Analyzing the problem", value: "analyzing", traits: ["analytical"], clusters: ["stem", "business"] },
                { text: "Coming up with new ideas", value: "ideas", traits: ["creative"], clusters: ["arts", "business"] },
                { text: "Helping everyone work together", value: "together", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "group_strengths"
        },
        {
            question: "Which of these tasks would you enjoy most?",
            options: [
                { text: "Developing a business plan", value: "business", traits: ["enterprising"], clusters: ["business"] },
                { text: "Programming a complex algorithm", value: "programming", traits: ["analytical"], clusters: ["stem"] },
                { text: "Designing a book cover", value: "design", traits: ["creative"], clusters: ["arts"] },
                { text: "Teaching someone a new skill", value: "teaching", traits: ["social"], clusters: ["public_service", "health"] }
            ],
            category: "enjoyable_tasks"
        }
    ];
    const programsData = {
        analytical: [
            {
                name: "Computer Science",
                description: "Learn programming, algorithms, and software development to solve complex problems.",
                university: "EPOKA University",
                match: 95,
                tuition: "€3,200/year",
                duration: "4 years"
            },
            {
                name: "Computer Science and Physics",
                description: "Master data analysis, statistics, and machine learning to extract insights from data.",
                university: "University of Tirana, Faculty of Natural Sciences",
                match: 92,
                tuition: "€1,500/year",
                duration: "4 years"
            },
            {
                name: "Engineering",
                description: "Apply scientific principles to design and build structures, machines, and systems.",
                university: "Polytechnic University of Tirana",
                match: 90,
                tuition: "€1,200/year",
                duration: "4 years"
            },
            {
                name: "Physics",
                description: "Study matter, energy, and their interactions to understand the universe.",
                university: "University of Shkodra",
                match: 88,
                tuition: "€1,000/year",
                duration: "4 years"
            },
            {
                name: "Engineering Physics",
                description: "Develop advanced problem-solving skills through abstract concepts and theories.",
                university: "University of Vlora",
                match: 93,
                tuition: "€1,100/year",
                duration: "3 years"
            }
        ],
        creative: [
            {
                name: "Bussines Administration",
                description: "Develop visual communication skills and create compelling designs across media.",
                university: "Tirana Business University",
                match: 94,
                tuition: "€2,800/year",
                duration: "3 years"
            },
            {
                name: "Fine Arts",
                description: "Explore various artistic mediums and develop your unique creative expression.",
                university: "University of Arts Tirana",
                match: 96,
                tuition: "€1,800/year",
                duration: "4 years"
            },
            {
                name: "Creative Writing",
                description: "Hone your storytelling skills across fiction, poetry, and non-fiction genres.",
                university: "University of Gjirokastra",
                match: 91,
                tuition: "€1,300/year",
                duration: "3 years"
            },
            {
                name: "Film Production",
                description: "Learn all aspects of filmmaking from scripting to post-production.",
                university: "Academy of Film and Multimedia",
                match: 89,
                tuition: "€2,500/year",
                duration: "4 years"
            },
            {
                name: "Music Performance",
                description: "Develop your musical talent through intensive training and performance.",
                university: "Conservatory of Tirana",
                match: 95,
                tuition: "€2,000/year",
                duration: "4 years"
            }
        ],
        practical: [
            {
                name: "Computer Engineering",
                description: "Learn to plan, design and oversee construction projects.",
                university: "Polytechnic University of Tirana",
                match: 93,
                tuition: "€1,200/year",
                duration: "4 years"
            },
            {
                name: "Automotive Technology",
                description: "Gain hands-on skills in vehicle maintenance and repair.",
                university: "Aleksander Moisiu University, Durres",
                match: 92,
                tuition: "€1,000/year",
                duration: "2 years"
            },
            {
                name: "Culinary Arts",
                description: "Master cooking techniques and kitchen management skills.",
                university: "Hospitality School of Tirana",
                match: 90,
                tuition: "€1,500/year",
                duration: "3 years"
            },
            {
                name: "Teknologji informacioni dhe komunikimi",
                description: "Learn to install and maintain electrical systems.",
                university: "Aleksander Xhuvani University, Elbasan",
                match: 91,
                tuition: "€900/year",
                duration: "2 years"
            },
            {
                name: "Agriculture Technology",
                description: "Study modern farming techniques and agribusiness.",
                university: "Agricultural University of Tirana",
                match: 89,
                tuition: "€800/year",
                duration: "3 years"
            }
        ],
        social: [
            {
                name: "Psychology",
                description: "Study human behavior and mental processes to help people improve their lives.",
                university: "University of Tirana",
                match: 95,
                tuition: "€1,500/year",
                duration: "4 years"
            },
            {
                name: "Social Work",
                description: "Learn to support individuals and communities facing challenges.",
                university: "University of Shkodra",
                match: 94,
                tuition: "€1,200/year",
                duration: "4 years"
            },
            {
                name: "Education",
                description: "Prepare for a rewarding career in teaching and educational leadership.",
                university: "Pedagogical University of Tirana",
                match: 93,
                tuition: "€1,000/year",
                duration: "4 years"
            },
            {
                name: "Nursing",
                description: "Develop skills to provide compassionate patient care.",
                university: "Medical University of Tirana",
                match: 92,
                tuition: "€1,800/year",
                duration: "4 years"
            },
            {
                name: "International Relations",
                description: "Study global affairs and prepare for diplomacy careers.",
                university: "European University of Tirana",
                match: 90,
                tuition: "€2,500/year",
                duration: "4 years"
            }
        ],
        enterprising: [
            {
                name: "Business Administration",
                description: "Develop skills in management, marketing, finance and entrepreneurship.",
                university: "Tirana Business University",
                match: 97,
                tuition: "€3,000/year",
                duration: "4 years"
            },
            {
                name: "Marketing",
                description: "Learn to create and implement effective marketing strategies.",
                university: "University of New York Tirana",
                match: 95,
                tuition: "€2,800/year",
                duration: "4 years"
            },
            {
                name: "Finance",
                description: "Master financial analysis, investment strategies and risk management.",
                university: "Aleksander Xhuvani University, Elbasan",
                match: 94,
                tuition: "€3,200/year",
                duration: "4 years"
            },
            {
                name: "Marketing",
                description: "Develop skills to launch and grow successful businesses.",
                university: "Faculty of Economics, University of Tirana",
                match: 96,
                tuition: "€2,500/year",
                duration: "4 years"
            },
            {
                name: "Finance",
                description: "Prepare for global business careers with cross-cultural understanding.",
                university: "Tirana Business University",
                match: 93,
                tuition: "€2,700/year",
                duration: "4 years"
            }
        ],
        conventional: [
            {
                name: "Accounting",
                description: "Learn financial reporting, auditing, taxation and business law.",
                university: "University of Tirana",
                match: 94,
                tuition: "€1,500/year",
                duration: "4 years"
            },
            {
                name: "Office Administration",
                description: "Develop skills for efficient business operations and management.",
                university: "Professional College of Tirana",
                match: 92,
                tuition: "€1,200/year",
                duration: "2 years"
            },
            {
                name: "Human Resources",
                description: "Learn to manage recruitment, training and employee relations.",
                university: "Tirana Business University",
                match: 93,
                tuition: "€2,500/year",
                duration: "4 years"
            },
            {
                name: "Public Administration",
                description: "Prepare for careers in government and public service organizations.",
                university: "Aleksander Xhuvani University, Elbasan",
                match: 91,
                tuition: "€1,300/year",
                duration: "4 years"
            },
            {
                name: "Legal Studies",
                description: "Gain knowledge of legal systems and procedures.",
                university: "Luigj Gurakuqi University",
                match: 90,
                tuition: "€1,400/year",
                duration: "4 years"
            }
        ]
    };

    
    const universities = {
        "Tirana Business University": {
            type: "private",
            logo: "https://via.placeholder.com/100/4a6bff/ffffff?text=TBU",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year",
            sponsor: true
        },
        "University of Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/343a40/ffffff?text=UT",
            location: "Tirana",
            tuition: "€500 - €1,500/year"
        },
        "EPOKA University": {
            type: "private",
            logo: "https://via.placeholder.com/100/0066cc/ffffff?text=EPOKA",
            location: "Tirana",
            tuition: "€3,000 - €4,000/year",
            sponsor: true
        },
        "Polytechnic University of Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/990000/ffffff?text=PUT",
            location: "Tirana",
            tuition: "€1,000 - €1,500/year"
        },
        "University of Arts Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/cc0099/ffffff?text=UART",
            location: "Tirana",
            tuition: "€1,500 - €2,000/year"
        },
        "University of Shkodra": {
            type: "public",
            logo: "https://via.placeholder.com/100/009933/ffffff?text=USHK",
            location: "Shkodra",
            tuition: "€800 - €1,200/year"
        },
        "University of Vlora": {
            type: "public",
            logo: "https://via.placeholder.com/100/006699/ffffff?text=UV",
            location: "Vlora",
            tuition: "€900 - €1,300/year"
        },
        "University of Gjirokastra": {
            type: "public",
            logo: "https://via.placeholder.com/100/663300/ffffff?text=UG",
            location: "Gjirokastra",
            tuition: "€700 - €1,100/year"
        },
        "Academy of Film and Multimedia": {
            type: "private",
            logo: "https://via.placeholder.com/100/ff6600/ffffff?text=AFM",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year"
        },
        "Conservatory of Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/990066/ffffff?text=CT",
            location: "Tirana",
            tuition: "€1,500 - €2,500/year"
        },
        "Professional College of Durres": {
            type: "public",
            logo: "https://via.placeholder.com/100/3366cc/ffffff?text=PCD",
            location: "Durres",
            tuition: "€800 - €1,200/year"
        },
        "Hospitality School of Tirana": {
            type: "private",
            logo: "https://via.placeholder.com/100/cc3300/ffffff?text=HST",
            location: "Tirana",
            tuition: "€1,200 - €1,800/year"
        },
        "Technical Institute of Elbasan": {
            type: "public",
            logo: "https://via.placeholder.com/100/009999/ffffff?text=TIE",
            location: "Elbasan",
            tuition: "€700 - €1,100/year"
        },
        "Agricultural University of Korça": {
            type: "public",
            logo: "https://via.placeholder.com/100/669900/ffffff?text=AUK",
            location: "Korça",
            tuition: "€600 - €1,000/year"
        },
        "Pedagogical University of Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/993366/ffffff?text=PUT",
            location: "Tirana",
            tuition: "€900 - €1,300/year"
        },
        "Medical University of Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/cc0000/ffffff?text=MUT",
            location: "Tirana",
            tuition: "€1,500 - €2,000/year"
        },
        "European University of Tirana": {
            type: "private",
            logo: "https://via.placeholder.com/100/003366/ffffff?text=EUT",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year"
        },
        "University of New York Tirana": {
            type: "private",
            logo: "https://via.placeholder.com/100/000066/ffffff?text=UNYT",
            location: "Tirana",
            tuition: "€2,500 - €3,500/year",
            sponsor: true
        },
        "Universum College": {
            type: "private",
            logo: "https://via.placeholder.com/100/660066/ffffff?text=UC",
            location: "Tirana",
            tuition: "€2,000 - €3,000/year"
        },
        "Canadian Institute of Technology": {
            type: "private",
            logo: "https://via.placeholder.com/100/cc0066/ffffff?text=CIT",
            location: "Tirana",
            tuition: "€2,500 - €3,200/year",
            sponsor: true
        },
        "Professional College of Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/006666/ffffff?text=PCT",
            location: "Tirana",
            tuition: "€1,000 - €1,500/year"
        },
        "University of Durres": {
            type: "public",
            logo: "https://via.placeholder.com/100/666600/ffffff?text=UD",
            location: "Durres",
            tuition: "€1,000 - €1,500/year"
        },
        "Luigj Gurakuqi University": {
            type: "public",
            logo: "https://via.placeholder.com/100/660000/ffffff?text=LGU",
            location: "Shkodra",
            tuition: "€900 - €1,400/year"
        },
        "University of Medicine Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/cc3333/ffffff?text=UMT",
            location: "Tirana",
            tuition: "€1,800 - €2,500/year"
        },
        "University of Architecture Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/996633/ffffff?text=UAT",
            location: "Tirana",
            tuition: "€1,200 - €1,800/year"
        },
        "University of Sports Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/003300/ffffff?text=UST",
            location: "Tirana",
            tuition: "€1,000 - €1,500/year"
        },
        "University of Tourism Vlora": {
            type: "public",
            logo: "https://via.placeholder.com/100/0066cc/ffffff?text=UTV",
            location: "Vlora",
            tuition: "€1,100 - €1,600/year"
        },
        "University of Agriculture Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/336600/ffffff?text=UAT",
            location: "Tirana",
            tuition: "€900 - €1,300/year"
        },
        "University of Law Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/330066/ffffff?text=ULT",
            location: "Tirana",
            tuition: "€1,200 - €1,700/year"
        },
        "University of Economics Tirana": {
            type: "public",
            logo: "https://via.placeholder.com/100/990000/ffffff?text=UET",
            location: "Tirana",
            tuition: "€1,100 - €1,600/year"
        }
    };
    const quizIntro = document.getElementById('quizIntro');
    const quizProgress = document.getElementById('quizProgress');
    const quizQuestions = document.getElementById('quizQuestions');
    const quizResults = document.getElementById('quizResults');
    const startQuizBtn = document.getElementById('startQuiz');
    const progressFill = document.getElementById('progressFill');
    const currentQuestionEl = document.getElementById('currentQuestion');
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const timeRemainingEl = document.getElementById('timeRemaining');
    const resultsContent = document.getElementById('resultsContent');
    const resultUserName = document.getElementById('resultUserName');
    const resultDate = document.getElementById('resultDate');

    let currentQuestion = 0;
    let answers = [];
    let personalityProfile = {
        traits: {
            analytical: 0,
            creative: 0,
            practical: 0,
            social: 0,
            enterprising: 0,
            conventional: 0
        },
        clusters: {
            business: 0,
            stem: 0,
            arts: 0,
            health: 0,
            public_service: 0,
            trades: 0
        }
    };

    totalQuestionsEl.textContent = quizData.length;
    const today = new Date();
    resultDate.textContent = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    startQuizBtn.addEventListener('click', function() {
        const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
        if (currentUser) {
            resultUserName.textContent = currentUser.name;
        }
        
        quizIntro.style.display = 'none';
        quizProgress.style.display = 'block';
        quizQuestions.style.display = 'block';
        showQuestion(currentQuestion);
        startTimer();
    });
    function startTimer() {
        let minutes = 10;
        let seconds = 0;
        
        const timer = setInterval(function() {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            
            timeRemainingEl.textContent = `About ${minutes} minute${minutes !== 1 ? 's' : ''} remaining`;
            
            if (document.getElementById('quizResults').style.display === 'block') {
                clearInterval(timer);
            }
        }, 1000);
    }
    function showQuestion(index) {
        quizQuestions.innerHTML = '';
        currentQuestionEl.textContent = index + 1;
        
        const question = quizData[index];
        const progressPercentage = ((index + 1) / quizData.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card active';
        
        const questionText = document.createElement('h3');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        questionCard.appendChild(questionText);
        
        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'options-grid';
        
        question.options.forEach((option, i) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            
            const optionNumber = document.createElement('div');
            optionNumber.className = 'option-number';
            optionNumber.textContent = i + 1;
            
            const optionText = document.createElement('div');
            optionText.className = 'option-text';
            optionText.textContent = option.text;
            
            optionBtn.appendChild(optionNumber);
            optionBtn.appendChild(optionText);
            optionBtn.dataset.value = option.value;
            optionBtn.dataset.traits = JSON.stringify(option.traits || []);
            optionBtn.dataset.clusters = JSON.stringify(option.clusters || []);
            
            optionBtn.addEventListener('click', function() {
                document.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
                this.classList.add('selected');
                answers[index] = {
                    question: question.question,
                    answer: option.text,
                    value: option.value,
                    traits: option.traits || [],
                    clusters: option.clusters || []
                };

                const nextBtn = document.querySelector('.quiz-navigation .btn-primary');
                if (nextBtn) {
                    nextBtn.disabled = false;
                }
            });
            
            optionsGrid.appendChild(optionBtn);
        });
        
        questionCard.appendChild(optionsGrid);
        
        const quizNavigation = document.createElement('div');
        quizNavigation.className = 'quiz-navigation';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn btn-secondary';
        prevBtn.textContent = 'Previous';
        prevBtn.disabled = index === 0;
        prevBtn.addEventListener('click', function() {
            showQuestion(currentQuestion - 1);
        });
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary';
        nextBtn.textContent = index === quizData.length - 1 ? 'See Results' : 'Next';
        nextBtn.disabled = true;
        nextBtn.addEventListener('click', function() {
            if (index === quizData.length - 1) {
                calculateResults();
            } else {
                showQuestion(currentQuestion + 1);
            }
        });
        
        quizNavigation.appendChild(prevBtn);
        quizNavigation.appendChild(nextBtn);
        questionCard.appendChild(quizNavigation);
        
        quizQuestions.appendChild(questionCard);
        currentQuestion = index;
    }
    function formatTrait(trait) {
        const traitNames = {
            analytical: "Analytical",
            creative: "Creative",
            practical: "Practical",
            social: "Social",
            enterprising: "Enterprising",
            conventional: "Conventional"
        };
        return traitNames[trait] || trait;
    }

    function getTraitDescription(trait) {
        const descriptions = {
            analytical: "You enjoy working with data, solving complex problems, and thinking logically.",
            creative: "You thrive on originality, imagination, and expressing innovative ideas.",
            practical: "You prefer hands-on work, tangible results, and real-world applications.",
            social: "You excel at helping, teaching, and interacting with people.",
            enterprising: "You're persuasive, energetic, and enjoy leadership roles.",
            conventional: "You prefer structured, orderly work with clear procedures."
        };
        return descriptions[trait] || "This trait describes an important aspect of your personality.";
    }

    function formatCluster(cluster) {
        const clusterNames = {
            business: "Business",
            stem: "STEM",
            arts: "Arts",
            health: "Health Sciences",
            public_service: "Public Service",
            trades: "Skilled Trades"
        };
        return clusterNames[cluster] || cluster;
    }

    function getClusterDescription(cluster) {
        const descriptions = {
            business: "Careers in management, finance, marketing, and entrepreneurship.",
            stem: "Science, Technology, Engineering, and Mathematics careers.",
            arts: "Creative fields like visual arts, performing arts, and design.",
            health: "Medical, dental, nursing, and healthcare professions.",
            public_service: "Education, government, law, and social services.",
            trades: "Construction, manufacturing, automotive, and technical trades."
        };
        return descriptions[cluster] || "This career cluster aligns well with your interests and skills.";
    }
    function calculateResults() {
        answers.forEach(answer => {
            answer.traits.forEach(trait => {
                personalityProfile.traits[trait] += 1;
            });
            answer.clusters.forEach(cluster => {
                personalityProfile.clusters[cluster] += 1;
            });
        });
        const maxTrait = Math.max(...Object.values(personalityProfile.traits));
        const maxCluster = Math.max(...Object.values(personalityProfile.clusters));
        
        Object.keys(personalityProfile.traits).forEach(trait => {
            personalityProfile.traits[trait] = Math.round((personalityProfile.traits[trait] / maxTrait) * 100);
        });
        
        Object.keys(personalityProfile.clusters).forEach(cluster => {
            personalityProfile.clusters[cluster] = Math.round((personalityProfile.clusters[cluster] / maxCluster) * 100);
        });
        const sortedTraits = Object.entries(personalityProfile.traits).sort((a, b) => b[1] - a[1]);
        const sortedClusters = Object.entries(personalityProfile.clusters).sort((a, b) => b[1] - a[1]);
        showResults(sortedTraits, sortedClusters);
    }
    function showResults(sortedTraits, sortedClusters) {
        quizProgress.style.display = 'none';
        quizQuestions.style.display = 'none';
        quizResults.style.display = 'block';
        resultsContent.innerHTML = '';
        const traitsSection = document.createElement('div');
        traitsSection.className = 'result-category';
         traitsSection.innerHTML = `
            <div class="category-title">
                <div class="category-icon">🧠</div>
                <h3>Your Personality Traits</h3>
            </div>
            <div class="traits-grid">
                <div class="trait-item">
                    <h4>${formatTrait(sortedTraits[0][0])}</h4>
                    <p>${getTraitDescription(sortedTraits[0][0])}</p>
                    <div class="trait-score">${sortedTraits[0][1]}% match</div>
                </div>
                <div class="trait-item">
                    <h4>${formatTrait(sortedTraits[1][0])}</h4>
                    <p>${getTraitDescription(sortedTraits[1][0])}</p>
                    <div class="trait-score">${sortedTraits[1][1]}% match</div>
                </div>
            </div>
        `;
        
        resultsContent.appendChild(traitsSection);
        const clustersSection = document.createElement('div');
        clustersSection.className = 'result-category';
        
        clustersSection.innerHTML = `
            <div class="category-title">
                <div class="category-icon">🎯</div>
                <h3>Your Career Clusters</h3>
            </div>
            <div class="clusters-grid">
                <div class="cluster-item">
                    <h4>${formatCluster(sortedClusters[0][0])}</h4>
                    <p>${getClusterDescription(sortedClusters[0][0])}</p>
                    <div class="cluster-score">${sortedClusters[0][1]}% match</div>
                </div>
                <div class="cluster-item">
                    <h4>${formatCluster(sortedClusters[1][0])}</h4>
                    <p>${getClusterDescription(sortedClusters[1][0])}</p>
                    <div class="cluster-score">${sortedClusters[1][1]}% match</div>
                </div>
            </div>
        `;
        
        resultsContent.appendChild(clustersSection);
        const primaryCluster = sortedClusters[0][0];
        const secondaryCluster = sortedClusters[1][0];
        
        if (programsData[primaryCluster] && programsData[primaryCluster].length > 0) {
            const programsSection = document.createElement('div');
            programsSection.className = 'result-category';
            
            programsSection.innerHTML = `
                <div class="category-title">
                    <div class="category-icon">🏛️</div>
                    <h3>Recommended Programs in ${formatCluster(primaryCluster)}</h3>
                </div>
                <div class="programs-grid" id="primaryPrograms"></div>
            `;
            
            resultsContent.appendChild(programsSection);
            
            const primaryProgramsContainer = document.getElementById('primaryPrograms');
            programsData[primaryCluster].slice(0, 4).forEach(program => {
                const universityInfo = universities[program.university] || {};
                
                const programCard = document.createElement('div');
                programCard.className = 'program-card';
                programCard.innerHTML = `
                    <h4>${program.name}</h4>
                    <div class="university-badge">
                        <img src="${universityInfo.logo}" alt="${program.university}">
                    </div>
                    <p>${program.description}</p>
                    <div class="program-meta">
                        <span>${program.university}</span>
                        <span>${program.tuition}</span>
                    </div>
                    <div class="program-meta">
                        <span>${program.duration}</span>
                        <span class="match-score">${program.match}% Match</span>
                    </div>
                `;
                
                primaryProgramsContainer.appendChild(programCard);
            });
        }
        if (secondaryCluster !== primaryCluster && programsData[secondaryCluster] && programsData[secondaryCluster].length > 0) {
            const secondaryProgramsSection = document.createElement('div');
            secondaryProgramsSection.className = 'result-category';
            
            secondaryProgramsSection.innerHTML = `
                <div class="category-title">
                    <div class="category-icon">📚</div>
                    <h3>Also Consider in ${formatCluster(secondaryCluster)}</h3>
                </div>
                <div class="programs-grid" id="secondaryPrograms"></div>
            `;
            
            resultsContent.appendChild(secondaryProgramsSection);
            
            const secondaryProgramsContainer = document.getElementById('secondaryPrograms');
            programsData[secondaryCluster].slice(0, 2).forEach(program => {
                const universityInfo = universities[program.university] || {};
                
                const programCard = document.createElement('div');
                programCard.className = 'program-card';
                programCard.innerHTML = `
                    <h4>${program.name}</h4>
                    <div class="university-badge">
                        <img src="${universityInfo.logo}" alt="${program.university}">
                    </div>
                    <p>${program.description}</p>
                    <div class="program-meta">
                        <span>${program.university}</span>
                        <span>${program.tuition}</span>
                    </div>
                    <div class="program-meta">
                        <span>${program.duration}</span>
                        <span class="match-score">${program.match}% Match</span>
                    </div>
                `;
                
                secondaryProgramsContainer.appendChild(programCard);
            });
        }
        const saveResultsSection = document.createElement('div');
        saveResultsSection.className = 'result-category';
        saveResultsSection.innerHTML = `
            <button id="saveResultsBtn" class="btn btn-primary">Save My Results</button>
        `;
        resultsContent.appendChild(saveResultsSection);
        
        document.getElementById('saveResultsBtn').addEventListener('click', function() {
            const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
            if (currentUser) {
                currentUser.quizResults = {
                    date: today.toISOString(),
                    traits: personalityProfile.traits,
                    clusters: personalityProfile.clusters,
                    answers: answers
                };
                localStorage.setItem('uniexplora_currentUser', JSON.stringify(currentUser));
                alert('Results saved to your profile!');
            } else {
                alert('Please log in to save your results.');
            }
        });
    }
});
function saveQuizResults(sortedClusters) {
    const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
    
    if (currentUser) {
        const recommendedPrograms = [];
        const primaryCluster = sortedClusters[0][0];
        const primaryPrograms = programsData[primaryCluster] || [];
        primaryPrograms.slice(0, 3).forEach(program => {
            recommendedPrograms.push({
                name: program.name,
                university: program.university,
                description: program.description,
                tuition: program.tuition,
                duration: program.duration,
                match: program.match
            });
        });
        currentUser.savedPrograms = recommendedPrograms;
        localStorage.setItem('uniexplora_currentUser', JSON.stringify(currentUser));
        alert('Programs saved successfully!');
    } else {
        alert('Please log in to save programs.');
    }
}