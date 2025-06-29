// Admin Panel JavaScript

// Global variables
let currentData = {
  profile: {},
  education: [],
  experience: [],
  projects: [],
  skills: [],
  messages: []
};

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
  initializeAdmin();
  loadData();
  setupEventListeners();
});

// Initialize admin panel
function initializeAdmin() {
  // Load initial data
  loadProfileData();
  loadEducationData();
  loadExperienceData();
  loadProjectsData();
  loadSkillsData();
  loadMessagesData();
}

// Setup event listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const tab = this.getAttribute('data-tab');
      showTab(tab);
    });
  });

  // Sidebar toggle
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // Modal close
  const modal = document.getElementById('modal');
  const modalClose = document.querySelector('.modal-close');
  
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Form submissions
  setupFormSubmissions();
}

// Show tab content
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  // Show selected tab
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Add active class to nav item
  const activeNavItem = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }

  // Update page title
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    const titles = {
      dashboard: 'Dashboard',
      profile: 'Profil Bilgileri',
      education: 'Eğitim',
      experience: 'Deneyim',
      projects: 'Projeler',
      skills: 'Yetenekler',
      messages: 'Mesajlar',
      settings: 'Ayarlar'
    };
    pageTitle.textContent = titles[tabName] || 'Dashboard';
  }
}

// Load data functions
function loadProfileData() {
  // Load profile data from localStorage or API
  const profileData = localStorage.getItem('profileData');
  if (profileData) {
    currentData.profile = JSON.parse(profileData);
    populateProfileForm();
  }
}

function loadEducationData() {
  const educationData = localStorage.getItem('educationData');
  if (educationData) {
    currentData.education = JSON.parse(educationData);
    renderEducationList();
  } else {
    // Default education data
    currentData.education = [
      {
        id: 1,
        title: 'Yönetim Bilişim Sistemleri',
        institution: 'Bartın Üniversitesi',
        period: '2020 - Devam Ediyor',
        description: 'İş dünyası ile bilişim sistemlerini birleştiren disiplinler arası eğitim.'
      },
      {
        id: 2,
        title: 'Frontend Geliştirme (Bootcamp)',
        institution: 'Patika.dev - Fullstack Bootcamp',
        period: '2024',
        description: 'HTML, CSS, JavaScript ve React tabanlı uygulamalı web geliştirme eğitimi.'
      }
    ];
    renderEducationList();
  }
}

function loadExperienceData() {
  const experienceData = localStorage.getItem('experienceData');
  if (experienceData) {
    currentData.experience = JSON.parse(experienceData);
    renderExperienceList();
  } else {
    // Default experience data
    currentData.experience = [
      {
        id: 1,
        title: 'Bilgi Teknolojileri Stajyeri',
        company: 'Social Office',
        period: 'Haziran - Temmuz 2025',
        description: 'İç sistemlerin test edilmesi, raporlama ve temel teknik destek görevleri.'
      }
    ];
    renderExperienceList();
  }
}

function loadProjectsData() {
  const projectsData = localStorage.getItem('projectsData');
  if (projectsData) {
    currentData.projects = JSON.parse(projectsData);
    renderProjectsList();
  } else {
    // Default projects data
    currentData.projects = [
      {
        id: 1,
        title: 'Giriş Formu Test Projesi',
        description: 'Geçerli/geçersiz girişler için test senaryoları yazımı',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: [
          'Geçerli/geçersiz girişler için test senaryoları yazımı',
          'Hata mesajı kontrolleri',
          'Form butonu testleri'
        ]
      },
      {
        id: 2,
        title: 'To-Do List Uygulaması',
        description: 'JavaScript ile görev yönetimi',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: [
          'JavaScript ile görev ekleme, silme, filtreleme',
          'Local Storage kullanarak veri kaydetme',
          'Responsive tasarım'
        ]
      }
    ];
    renderProjectsList();
  }
}

function loadSkillsData() {
  const skillsData = localStorage.getItem('skillsData');
  if (skillsData) {
    currentData.skills = JSON.parse(skillsData);
    renderSkillsList();
  } else {
    // Default skills data
    currentData.skills = [
      { id: 1, name: 'HTML & CSS', percentage: 95 },
      { id: 2, name: 'JavaScript', percentage: 80 },
      { id: 3, name: 'Web Development', percentage: 95 },
      { id: 4, name: 'C Programming', percentage: 90 },
      { id: 5, name: 'MySQL', percentage: 70 },
      { id: 6, name: 'Google Analytics', percentage: 75 }
    ];
    renderSkillsList();
  }
}

function loadMessagesData() {
  const messagesData = localStorage.getItem('messagesData');
  if (messagesData) {
    currentData.messages = JSON.parse(messagesData);
    renderMessagesList();
  } else {
    // Default messages data
    currentData.messages = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Projenizle ilgili görüşmek istiyorum...',
        date: new Date().toISOString(),
        read: false
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'Harika bir portfolio! İletişime geçelim...',
        date: new Date().toISOString(),
        read: false
      }
    ];
    renderMessagesList();
  }
}

// Render functions
function renderEducationList() {
  const container = document.getElementById('educationList');
  if (!container) return;

  container.innerHTML = currentData.education.map(edu => `
    <div class="list-item">
      <div class="list-item-header">
        <div class="list-item-title">${edu.title}</div>
        <div class="list-item-actions">
          <button class="edit-btn" onclick="editEducation(${edu.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick="deleteEducation(${edu.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="list-item-content">
        <p><strong>Kurum:</strong> ${edu.institution}</p>
        <p><strong>Dönem:</strong> ${edu.period}</p>
        <p>${edu.description}</p>
      </div>
    </div>
  `).join('');
}

function renderExperienceList() {
  const container = document.getElementById('experienceList');
  if (!container) return;

  container.innerHTML = currentData.experience.map(exp => `
    <div class="list-item">
      <div class="list-item-header">
        <div class="list-item-title">${exp.title}</div>
        <div class="list-item-actions">
          <button class="edit-btn" onclick="editExperience(${exp.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick="deleteExperience(${exp.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="list-item-content">
        <p><strong>Şirket:</strong> ${exp.company}</p>
        <p><strong>Dönem:</strong> ${exp.period}</p>
        <p>${exp.description}</p>
      </div>
    </div>
  `).join('');
}

function renderProjectsList() {
  const container = document.getElementById('projectsList');
  if (!container) return;

  container.innerHTML = currentData.projects.map(project => `
    <div class="list-item">
      <div class="list-item-header">
        <div class="list-item-title">${project.title}</div>
        <div class="list-item-actions">
          <button class="edit-btn" onclick="editProject(${project.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick="deleteProject(${project.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="list-item-content">
        <p><strong>Teknolojiler:</strong> ${project.technologies.join(', ')}</p>
        <p>${project.description}</p>
        <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderSkillsList() {
  const container = document.getElementById('skillsList');
  if (!container) return;

  container.innerHTML = currentData.skills.map(skill => `
    <div class="list-item">
      <div class="list-item-header">
        <div class="list-item-title">${skill.name}</div>
        <div class="list-item-actions">
          <button class="edit-btn" onclick="editSkill(${skill.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick="deleteSkill(${skill.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="list-item-content">
        <div class="skill-bar">
          <div class="skill-progress" style="width: ${skill.percentage}%"></div>
        </div>
        <p style="margin-top: 0.5rem;"><strong>Seviye:</strong> ${skill.percentage}%</p>
      </div>
    </div>
  `).join('');
}

function renderMessagesList() {
  const container = document.getElementById('messagesList');
  if (!container) return;

  container.innerHTML = currentData.messages.map(message => `
    <div class="list-item ${message.read ? '' : 'unread'}">
      <div class="list-item-header">
        <div class="list-item-title">${message.name}</div>
        <div class="list-item-actions">
          <button class="edit-btn" onclick="viewMessage(${message.id})">
            <i class="fas fa-eye"></i>
          </button>
          <button class="delete-btn" onclick="deleteMessage(${message.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="list-item-content">
        <p><strong>E-posta:</strong> ${message.email}</p>
        <p><strong>Tarih:</strong> ${new Date(message.date).toLocaleDateString('tr-TR')}</p>
        <p>${message.message.substring(0, 100)}${message.message.length > 100 ? '...' : ''}</p>
      </div>
    </div>
  `).join('');
}

// Add functions
function addEducation() {
  showModal('Yeni Eğitim Ekle', `
    <form id="educationForm" class="admin-form">
      <div class="form-group">
        <label>Eğitim Adı</label>
        <input type="text" id="eduTitle" required>
      </div>
      <div class="form-group">
        <label>Kurum</label>
        <input type="text" id="eduInstitution" required>
      </div>
      <div class="form-group">
        <label>Dönem</label>
        <input type="text" id="eduPeriod" required>
      </div>
      <div class="form-group">
        <label>Açıklama</label>
        <textarea id="eduDescription" rows="3" required></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Ekle</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">İptal</button>
      </div>
    </form>
  `);

  document.getElementById('educationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newEducation = {
      id: Date.now(),
      title: document.getElementById('eduTitle').value,
      institution: document.getElementById('eduInstitution').value,
      period: document.getElementById('eduPeriod').value,
      description: document.getElementById('eduDescription').value
    };
    
    currentData.education.push(newEducation);
    localStorage.setItem('educationData', JSON.stringify(currentData.education));
    renderEducationList();
    closeModal();
  });
}

function addExperience() {
  showModal('Yeni Deneyim Ekle', `
    <form id="experienceForm" class="admin-form">
      <div class="form-group">
        <label>Pozisyon</label>
        <input type="text" id="expTitle" required>
      </div>
      <div class="form-group">
        <label>Şirket</label>
        <input type="text" id="expCompany" required>
      </div>
      <div class="form-group">
        <label>Dönem</label>
        <input type="text" id="expPeriod" required>
      </div>
      <div class="form-group">
        <label>Açıklama</label>
        <textarea id="expDescription" rows="3" required></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Ekle</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">İptal</button>
      </div>
    </form>
  `);

  document.getElementById('experienceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newExperience = {
      id: Date.now(),
      title: document.getElementById('expTitle').value,
      company: document.getElementById('expCompany').value,
      period: document.getElementById('expPeriod').value,
      description: document.getElementById('expDescription').value
    };
    
    currentData.experience.push(newExperience);
    localStorage.setItem('experienceData', JSON.stringify(currentData.experience));
    renderExperienceList();
    closeModal();
  });
}

function addProject() {
  showModal('Yeni Proje Ekle', `
    <form id="projectForm" class="admin-form">
      <div class="form-group">
        <label>Proje Adı</label>
        <input type="text" id="projTitle" required>
      </div>
      <div class="form-group">
        <label>Açıklama</label>
        <textarea id="projDescription" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label>Teknolojiler (virgülle ayırın)</label>
        <input type="text" id="projTechnologies" placeholder="HTML, CSS, JavaScript" required>
      </div>
      <div class="form-group">
        <label>Özellikler (her satıra bir özellik)</label>
        <textarea id="projFeatures" rows="4" placeholder="Özellik 1&#10;Özellik 2&#10;Özellik 3" required></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Ekle</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">İptal</button>
      </div>
    </form>
  `);

  document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      title: document.getElementById('projTitle').value,
      description: document.getElementById('projDescription').value,
      technologies: document.getElementById('projTechnologies').value.split(',').map(t => t.trim()),
      features: document.getElementById('projFeatures').value.split('\n').filter(f => f.trim())
    };
    
    currentData.projects.push(newProject);
    localStorage.setItem('projectsData', JSON.stringify(currentData.projects));
    renderProjectsList();
    closeModal();
  });
}

function addSkill() {
  showModal('Yeni Yetenek Ekle', `
    <form id="skillForm" class="admin-form">
      <div class="form-group">
        <label>Yetenek Adı</label>
        <input type="text" id="skillName" required>
      </div>
      <div class="form-group">
        <label>Seviye (%)</label>
        <input type="number" id="skillPercentage" min="0" max="100" required>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Ekle</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">İptal</button>
      </div>
    </form>
  `);

  document.getElementById('skillForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newSkill = {
      id: Date.now(),
      name: document.getElementById('skillName').value,
      percentage: parseInt(document.getElementById('skillPercentage').value)
    };
    
    currentData.skills.push(newSkill);
    localStorage.setItem('skillsData', JSON.stringify(currentData.skills));
    renderSkillsList();
    closeModal();
  });
}

// Modal functions
function showModal(title, content) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

// Setup form submissions
function setupFormSubmissions() {
  // Profile form
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveProfileData();
    });
  }

  // Settings form
  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveSettings();
    });
  }
}

// Save functions
function saveProfileData() {
  const profileData = {
    fullName: document.getElementById('fullName').value,
    title: document.getElementById('title').value,
    about: document.getElementById('about').value,
    linkedin: document.getElementById('linkedin').value,
    github: document.getElementById('github').value,
    instagram: document.getElementById('instagram').value
  };
  
  currentData.profile = profileData;
  localStorage.setItem('profileData', JSON.stringify(profileData));
  
  showNotification('Profil bilgileri kaydedildi!', 'success');
}

function saveSettings() {
  const settings = {
    siteTitle: document.getElementById('siteTitle').value,
    siteDescription: document.getElementById('siteDescription').value,
    primaryColor: document.getElementById('primaryColor').value,
    secondaryColor: document.getElementById('secondaryColor').value
  };
  
  localStorage.setItem('siteSettings', JSON.stringify(settings));
  showNotification('Ayarlar kaydedildi!', 'success');
}

// Utility functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function refreshMessages() {
  loadMessagesData();
  showNotification('Mesajlar yenilendi!', 'success');
}

// Load data function
function loadData() {
  // This function can be used to load data from an API
  console.log('Loading data...');
}

// Export data function (for backup)
function exportData() {
  const data = {
    profile: currentData.profile,
    education: currentData.education,
    experience: currentData.experience,
    projects: currentData.projects,
    skills: currentData.skills
  };
  
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'portfolio-data.json';
  link.click();
  
  URL.revokeObjectURL(url);
}

// Import data function
function importData(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      
      if (data.profile) currentData.profile = data.profile;
      if (data.education) currentData.education = data.education;
      if (data.experience) currentData.experience = data.experience;
      if (data.projects) currentData.projects = data.projects;
      if (data.skills) currentData.skills = data.skills;
      
      // Save to localStorage
      localStorage.setItem('profileData', JSON.stringify(currentData.profile));
      localStorage.setItem('educationData', JSON.stringify(currentData.education));
      localStorage.setItem('experienceData', JSON.stringify(currentData.experience));
      localStorage.setItem('projectsData', JSON.stringify(currentData.projects));
      localStorage.setItem('skillsData', JSON.stringify(currentData.skills));
      
      // Re-render all lists
      renderEducationList();
      renderExperienceList();
      renderProjectsList();
      renderSkillsList();
      
      showNotification('Veriler başarıyla içe aktarıldı!', 'success');
    } catch (error) {
      showNotification('Dosya okunamadı!', 'error');
    }
  };
  reader.readAsText(file);
} 