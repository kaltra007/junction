document.addEventListener('DOMContentLoaded', function() {

    const ADMIN_EMAIL = 'info@kaltradev.com';
    const EMAILJS_CONFIG = {
        serviceID: 'your_emailjs_service_id',
        templateID: 'your_emailjs_template_id',
        userID: 'your_emailjs_user_id'
    };

    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.userID);
    }


    const elements = {
        studentList: document.getElementById('studentList'),
        chatMessages: document.getElementById('chatMessages'),
        userInput: document.getElementById('userInput'),
        sendButton: document.getElementById('sendButton'),
        chatTitle: document.getElementById('chatTitle'),
        loadingIndicator: document.createElement('div')
    };

    
    elements.loadingIndicator.className = 'loading-indicator';
    elements.loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Student is typing...';
    

    const students = [
        {
            id: 1,
            name: "Endrit",
            major: "Computer Science",
            email: "endrit.cs@university.edu",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            responseTime: "Usually responds within 1 hour",
            status: "online",
            bio: "Senior CS student specializing in AI. Happy to answer questions about the program!",
            responsePatterns: [
                "In my experience with AI courses, I've found that...",
                "The CS department has excellent resources for...",
                "When I was choosing my specialization, I considered..."
            ]
        },
        {
            id: 2,
            name: "Era",
            major: "Architecture",
            email: "era.arch@university.edu",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            responseTime: "Usually responds within 2 hours",
            status: "online",
            bio: "3rd year Architecture student. Ask me about design studios and campus life!",
            responsePatterns: [
                "The design studio culture here is wonderful because...",
                "For portfolio preparation, I recommend...",
                "What I love about our architecture program is..."
            ]
        },
        {
            id: 3,
            name: "Mark",
            major: "Business Administration",
            email: "mark.mba@university.edu",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            responseTime: "Usually responds within 4 hours",
            status: "offline",
            bio: "MBA student with focus on entrepreneurship. Can advise on business programs.",
            responsePatterns: [
                "The entrepreneurship track offers...",
                "For networking opportunities, you should...",
                "What sets our business program apart is..."
            ]
        }
    ];
    
 
    let currentStudent = null;
    let conversations = {};
    let isWaitingForResponse = false;
    

    function init() {
        renderStudentList();
        setupEventListeners();
        checkAvailabilities();
    }
    

    function renderStudentList() {
        elements.studentList.innerHTML = students.map(student => `
            <div class="student-card ${student.status}" data-id="${student.id}">
                <img src="${student.avatar}" alt="${student.name}" onerror="this.src='https://via.placeholder.com/150'">
                <div class="student-info">
                    <h4>${student.name} - ${student.major}</h4>
                    <p>${student.bio}</p>
                    <div class="student-meta">
                        <span>${student.responseTime}</span>
                        <span class="status-indicator ${student.status}">
                            <i class="fas fa-circle"></i> ${student.status}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    function renderConversation(studentId) {
        elements.chatMessages.innerHTML = conversations[studentId].map(msg => 
            msg.sender === 'user' 
                ? createUserMessage(msg.text) 
                : createBotMessage(msg.text, studentId))
            .join('');
            
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }
    

    function createUserMessage(text) {
        return `
            <div class="message user">
                <div class="message-content">${text}</div>
                <div class="message-time">${formatTime(new Date())}</div>
            </div>
        `;
    }
    
    function createBotMessage(text, studentId) {
        const student = getStudentById(studentId);
        return `
            <div class="message bot">
                <div class="message-header">
                    <img src="${student.avatar}" alt="${student.name}" class="student-avatar" onerror="this.src='https://via.placeholder.com/150'">
                    <span class="student-name">${student.name}</span>
                    <span class="message-time">${formatTime(new Date())}</span>
                </div>
                <div class="message-content">${text}</div>
            </div>
        `;
    }
    

    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    function getStudentById(id) {
        return students.find(s => s.id === id);
    }
    
    function setActiveStudentCard(studentId) {
        document.querySelectorAll('.student-card').forEach(card => {
            card.classList.toggle('active', parseInt(card.dataset.id) === studentId);
        });
    }
    
    function enableChatInterface() {
        elements.userInput.disabled = false;
        elements.sendButton.disabled = false;
    }
    
    function showLoadingIndicator() {
        elements.chatMessages.appendChild(elements.loadingIndicator);
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }
    
    function hideLoadingIndicator() {
        const indicator = elements.chatMessages.querySelector('.loading-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    

    function selectStudent(studentId) {
        currentStudent = getStudentById(studentId);
        
        setActiveStudentCard(studentId);
        
        elements.chatTitle.innerHTML = `
            <i class="fas fa-comments"></i> Chat with ${currentStudent.name}
            <span class="status-indicator ${currentStudent.status}">
                <i class="fas fa-circle"></i> ${currentStudent.status}
            </span>
        `;
        elements.userInput.placeholder = `Message ${currentStudent.name}...`;
        enableChatInterface();
        
        if (!conversations[studentId]) {
            conversations[studentId] = [
                { 
                    sender: 'bot', 
                    text: `Hello! I'm ${currentStudent.name}, a ${currentStudent.major} student. I'm happy to answer any questions you have about our program.` 
                }
            ];
        }
        
        renderConversation(studentId);
    }
    
    function sendMessage() {
        const message = elements.userInput.value.trim();
        if (!message || !currentStudent || isWaitingForResponse) return;
        
  
        const messageObj = { 
            sender: 'user', 
            text: message,
            timestamp: new Date()
        };
        conversations[currentStudent.id].push(messageObj);
        elements.chatMessages.innerHTML += createUserMessage(message);
        elements.userInput.value = '';
        

        sendEmailNotification(currentStudent, message);
        
      
        isWaitingForResponse = true;
        showLoadingIndicator();
        
        const delay = 1500 + Math.random() * 4000;
        setTimeout(() => {
            generateStudentResponse(currentStudent.id);
            isWaitingForResponse = false;
            hideLoadingIndicator();
        }, delay);
    }
    
    function sendEmailNotification(student, message) {
        
        if (typeof emailjs !== 'undefined') {
            emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, {
                to_email: ADMIN_EMAIL,
                from_name: student.name,
                from_email: student.email,
                message: message,
                reply_to: student.email
            }).then(
                response => console.log('Email successfully sent!', response),
                error => console.error('Failed to send email:', error)
            );
        } else {
            console.warn('EmailJS not loaded - would have sent:', {
                to: ADMIN_EMAIL,
                subject: `New message from ${student.name}`,
                body: `Message: ${message}\n\nFrom: ${student.name} (${student.email})`
            });
        }
    }
    
    function generateStudentResponse(studentId) {
        const student = getStudentById(studentId);
        const randomResponse = student.responsePatterns[Math.floor(Math.random() * student.responsePatterns.length)];
        
        const responseObj = { 
            sender: 'bot', 
            text: randomResponse,
            timestamp: new Date()
        };
        
        conversations[studentId].push(responseObj);
        elements.chatMessages.innerHTML += createBotMessage(randomResponse, studentId);
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }
    
    function checkAvailabilities() {
        setInterval(() => {
            students.forEach(student => {
            
                if (student.status === 'online' && Math.random() < 0.2) {
                    student.status = 'offline';
                } 
            
                else if (student.status === 'offline' && Math.random() < 0.3) {
                    student.status = 'online';
                }
            });
            renderStudentList();
        }, 30000); 

    function setupEventListeners() {
        elements.studentList.addEventListener('click', function(e) {
            const card = e.target.closest('.student-card');
            if (card) {
                selectStudent(parseInt(card.dataset.id));
            }
        });
        elements.sendButton.addEventListener('click', sendMessage);
        elements.userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }

    init();
});