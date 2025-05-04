document.addEventListener('DOMContentLoaded', function() {
  const navLinksContainer = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const loginBtn = document.querySelector('.btn-login');
  const signupBtn = document.querySelector('.btn-signup');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const closeModals = document.querySelectorAll('.close-modal');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  if (!localStorage.getItem('uniexplora_users')) {
      localStorage.setItem('uniexplora_users', JSON.stringify([]));
  }
  function setupMobileNavigation() {
    if (hamburger && navLinks) { 
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');  
        });

        document.addEventListener('click', function(e) {
            if (e.target.matches('.nav-links a')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active'); 
            }
        });
    }
}
  function setupStickyNavbar() {
      if (navbar) {
          window.addEventListener('scroll', function() {
              navbar.classList.toggle('scrolled', window.scrollY > 50);
          });
      }
  }
  function setupScrollIndicator() {
      if (scrollIndicator) {
          scrollIndicator.addEventListener('click', function() {
              const featuresSection = document.querySelector('#features');
              if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
              }
          });
      }
  }
  function setupModals() {
      function openModal(modal) {
          if (modal) {
              modal.style.display = 'flex';
              document.body.style.overflow = 'hidden';
          }
      }

      function closeAllModals() {
          if (loginModal) loginModal.style.display = 'none';
          if (signupModal) signupModal.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
      if (loginBtn) loginBtn.addEventListener('click', () => openModal(loginModal));
      if (signupBtn) signupBtn.addEventListener('click', () => openModal(signupModal));
      
      closeModals.forEach(btn => btn.addEventListener('click', closeAllModals));
      
      if (switchToSignup) {
          switchToSignup.addEventListener('click', function(e) {
              e.preventDefault();
              closeAllModals();
              openModal(signupModal);
          });
      }
      
      if (switchToLogin) {
          switchToLogin.addEventListener('click', function(e) {
              e.preventDefault();
              closeAllModals();
              openModal(loginModal);
          });
      }
      window.addEventListener('click', function(e) {
          if (e.target === loginModal || e.target === signupModal) {
              closeAllModals();
          }
      });
  }
  function setupForms() {
      if (loginForm) {
          loginForm.addEventListener('submit', function(e) {
              e.preventDefault();
              
              const email = loginForm.querySelector('input[type="email"]');
              const password = loginForm.querySelector('input[type="password"]');
              
              if (!email.value || !password.value) {
                  alert('Please fill in all fields');
                  return;
              }
              const users = JSON.parse(localStorage.getItem('uniexplora_users'));
              const user = users.find(u => u.email === email.value && u.password === password.value);
              
              if (user) {
                  localStorage.setItem('uniexplora_currentUser', JSON.stringify(user));
                  alert('Login successful!');
                  loginModal.style.display = 'none';
                  document.body.style.overflow = 'auto';
                  loginForm.reset();
                  updateAuthUI();
                  const redirects = {
                      'student': 'dashboard.html',
                      'parent': 'parent-portal.html'
                  };
                  
                  if (redirects[user.userType]) {
                      setTimeout(() => {
                          window.location.href = redirects[user.userType];
                      }, 1000);
                  }
              } else {
                  alert('Invalid credentials. Please try again.');
              }
          });
      }

 
      if (signupForm) {
          signupForm.addEventListener('submit', function(e) {
              e.preventDefault();
              
              const email = signupForm.querySelector('input[type="email"]');
              const password = signupForm.querySelector('input[type="password"]');
              const name = signupForm.querySelector('input[type="text"]');
              const userType = document.getElementById('userType');
              
              if (!email.value || !password.value || !name.value || !userType.value) {
                  alert('Please fill in all fields');
                  return;
              }
              
          
              const users = JSON.parse(localStorage.getItem('uniexplora_users'));
              if (users.some(u => u.email === email.value)) {
                  alert('Email already registered. Please login instead.');
                  return;
              }
              
        
              const newUser = {
                  email: email.value,
                  password: password.value,
                  name: name.value,
                  userType: userType.value
              };
              
              users.push(newUser);
              localStorage.setItem('uniexplora_users', JSON.stringify(users));
              localStorage.setItem('uniexplora_currentUser', JSON.stringify(newUser));
              
              alert("Account created successfully!");
              signupModal.style.display = 'none';
              document.body.style.overflow = 'auto';
              signupForm.reset();
              updateAuthUI();
              
     
              const redirects = {
                  'student': 'dashboard.html',
                  'parent': 'parent-portal.html'
              };
              
              if (redirects[userType.value]) {
                  setTimeout(() => {
                      window.location.href = redirects[userType.value];
                  }, 1000);
              }
          });
      }
  }

  function logout() {
      localStorage.removeItem('uniexplora_currentUser');
      updateAuthUI();
      alert("You've been logged out.");
  }

  function setupScrollAnimations() {
      const animateOnScroll = function() {
          const elements = document.querySelectorAll('.feature-card, .testimonial-card, .logo-item');
          
          elements.forEach(element => {
              const elementPosition = element.getBoundingClientRect().top;
              const screenPosition = window.innerHeight / 1.2;
              
              if (elementPosition < screenPosition) {
                  element.style.opacity = '1';
                  element.style.transform = 'translateY(0)';
              }
          });
      };

      document.querySelectorAll('.feature-card, .testimonial-card, .logo-item').forEach(element => {
          element.style.opacity = '0';
          element.style.transform = 'translateY(20px)';
          element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      window.addEventListener('scroll', animateOnScroll);
      animateOnScroll();
  }

  function setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              if (targetId === '#') return;
              
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
              }
          });
      });
  }

 
  function setupLoadMoreContent() {
      function loadMoreContent(containerId, items, itemsPerLoad) {
          const container = document.getElementById(containerId);
          if (!container) return;
          
          let visibleItems = itemsPerLoad;
          
      
          items.slice(0, visibleItems).forEach(item => {
              container.appendChild(item);
          });
          
          const loadMoreBtn = document.createElement('button');
          loadMoreBtn.className = 'btn btn-secondary';
          loadMoreBtn.textContent = 'Load More';
          loadMoreBtn.style.margin = '20px auto';
          loadMoreBtn.style.display = 'block';
          
          loadMoreBtn.addEventListener('click', function() {
              const nextItems = items.slice(visibleItems, visibleItems + itemsPerLoad);
              nextItems.forEach(item => {
                  container.appendChild(item);
              });
              visibleItems += nextItems.length;
              
              if (visibleItems >= items.length) {
                  loadMoreBtn.style.display = 'none';
              }
          });
          
          if (visibleItems < items.length) {
              container.after(loadMoreBtn);
          } else {
              loadMoreBtn.style.display = 'none';
          }
      }
  
  }


function updateAuthUI() {
  const authButtons = document.querySelector('.auth-buttons');
  const navLinksContainer = document.getElementById('navLinks');
  const currentUser = JSON.parse(localStorage.getItem('uniexplora_currentUser'));
  
  if (authButtons) {
      if (currentUser) {
          authButtons.innerHTML = `
              <div class="user-profile">
                  <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=4a6bff&color=fff" alt="${currentUser.name}">
                  <span>${currentUser.name}</span>
                  <button class="btn btn-logout">Logout</button>
              </div>
          `;
          
          document.querySelector('.btn-logout').addEventListener('click', logout);
          

          if (navLinksContainer) {
              if (currentUser.userType === 'student') {
                  navLinksContainer.innerHTML = `
                      <li><a href="#features">Features</a></li>
                      <li><a href="quiz.html">Career quiz</a></li>
                      <li><a href="programs.html">Programs</a></li>
                      <li><a href="tours.html">Virtual tours</a></li>
                      <li><a href="dashboard.html">Dashboard</a></li>
                      <li><a href="ai.html">AI</a></li>
                  `;
              } else if (currentUser.userType === 'parent') {
                  navLinksContainer.innerHTML = `
                      <li><a href="parent-portal.html">Parent Portal</a></li>
                  `;
              }
          }
      } else {
          authButtons.innerHTML = `
              <button class="btn btn-login">Login</button>
              <button class="btn btn-signup">Sign Up</button>
          `;
        
          if (navLinksContainer) {
              navLinksContainer.innerHTML = `
                  <li><a href="#features">Features</a></li>
                  <li><a href="quiz.html">Career quiz</a></li>
                  <li><a href="programs.html">Programs</a></li>
                  <li><a href="tours.html">Virtual tours</a></li>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="parent-portal.html">Parents</a></li>
                  <li><a href="ai.html">AI</a></li>
              `;
          }
          
          document.querySelector('.btn-login').addEventListener('click', () => {
              if (loginModal) loginModal.style.display = 'flex';
              document.body.style.overflow = 'hidden';
          });
          
          document.querySelector('.btn-signup').addEventListener('click', () => {
              if (signupModal) signupModal.style.display = 'flex';
              document.body.style.overflow = 'hidden';
          });
      }
  }
}


  setupMobileNavigation();
  setupStickyNavbar();
  setupScrollIndicator();
  setupModals();
  setupForms();
  updateAuthUI();
  setupScrollAnimations();
  setupSmoothScrolling();
  setupLoadMoreContent();
});