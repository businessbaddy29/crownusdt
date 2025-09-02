// डेमो डेटा
const demoUsers = [
    { id: 'USER001', name: 'राजेश कुमार', email: 'rajesh@example.com', phone: '9876543210', joinDate: '2023-01-15', status: 'active', wallet: 5000, directIncome: 2000, levelIncome: 1500, royaltyIncome: 1000, bonusIncome: 500 },
    { id: 'USER002', name: 'सीमा सिंह', email: 'seema@example.com', phone: '9876543211', joinDate: '2023-02-20', status: 'active', wallet: 3000, directIncome: 1000, levelIncome: 800, royaltyIncome: 600, bonusIncome: 300 },
    { id: 'USER003', name: 'अमित शर्मा', email: 'amit@example.com', phone: '9876543212', joinDate: '2023-03-10', status: 'inactive', wallet: 2000, directIncome: 500, levelIncome: 400, royaltyIncome: 300, bonusIncome: 200 },
    { id: 'USER004', name: 'प्रिया गुप्ता', email: 'priya@example.com', phone: '9876543213', joinDate: '2023-04-05', status: 'blocked', wallet: 1000, directIncome: 300, levelIncome: 200, royaltyIncome: 100, bonusIncome: 50 },
    { id: 'USER005', name: 'विकास पटेल', email: 'vikas@example.com', phone: '9876543214', joinDate: '2023-05-12', status: 'active', wallet: 4000, directIncome: 1500, levelIncome: 1000, royaltyIncome: 800, bonusIncome: 400 }
];

const demoIncome = [
    { id: 1, userId: 'USER001', date: '2023-10-01', description: 'डायरेक्ट इनकम', type: 'direct', amount: 500, status: 'approved' },
    { id: 2, userId: 'USER001', date: '2023-10-02', description: 'लेवल इनकम', type: 'level', amount: 300, status: 'approved' },
    { id: 3, userId: 'USER002', date: '2023-10-03', description: 'रॉयल्टी इनकम', type: 'royalty', amount: 200, status: 'approved' },
    { id: 4, userId: 'USER003', date: '2023-10-04', description: 'बोनस इनकम', type: 'bonus', amount: 100, status: 'pending' },
    { id: 5, userId: 'USER004', date: '2023-10-05', description: 'डायरेक्ट इनकम', type: 'direct', amount: 400, status: 'rejected' }
];

const demoDeposits = [
    { id: 1, userId: 'USER001', date: '2023-10-01', amount: 1000, method: 'bank', transactionId: 'TXN123456', status: 'approved' },
    { id: 2, userId: 'USER002', date: '2023-10-02', amount: 2000, method: 'upi', transactionId: 'TXN123457', status: 'approved' },
    { id: 3, userId: 'USER003', date: '2023-10-03', amount: 1500, method: 'bank', transactionId: 'TXN123458', status: 'pending' },
    { id: 4, userId: 'USER004', date: '2023-10-04', amount: 500, method: 'upi', transactionId: 'TXN123459', status: 'approved' },
    { id: 5, userId: 'USER005', date: '2023-10-05', amount: 3000, method: 'bank', transactionId: 'TXN123460', status: 'pending' }
];

const demoWithdrawals = [
    { id: 1, userId: 'USER001', date: '2023-10-01', amount: 500, method: 'bank', account: '1234567890', status: 'approved' },
    { id: 2, userId: 'USER002', date: '2023-10-02', amount: 1000, method: 'upi', account: 'user@upi', status: 'pending' },
    { id: 3, userId: 'USER003', date: '2023-10-03', amount: 800, method: 'bank', account: '0987654321', status: 'approved' },
    { id: 4, userId: 'USER004', date: '2023-10-04', amount: 300, method: 'upi', account: 'user2@upi', status: 'rejected' },
    { id: 5, userId: 'USER005', date: '2023-10-05', amount: 1500, method: 'bank', account: '1122334455', status: 'pending' }
];

const demoTransfers = [
    { id: 1, fromUserId: 'USER001', toUserId: 'USER002', date: '2023-10-01', amount: 500, description: 'ट्रांसफर', status: 'approved' },
    { id: 2, fromUserId: 'USER002', toUserId: 'USER003', date: '2023-10-02', amount: 300, description: 'ट्रांसफर', status: 'approved' },
    { id: 3, fromUserId: 'USER003', toUserId: 'USER004', date: '2023-10-03', amount: 200, description: 'ट्रांसफर', status: 'pending' },
    { id: 4, fromUserId: 'USER004', toUserId: 'USER005', date: '2023-10-04', amount: 100, description: 'ट्रांसफर', status: 'approved' },
    { id: 5, fromUserId: 'USER005', toUserId: 'USER001', date: '2023-10-05', amount: 400, description: 'ट्रांसफर', status: 'pending' }
];

// ग्लोबल वेरिएबल्स
let currentUser = null;
let isAdmin = false;

// DOM एलिमेंट्स
const loginPage = document.getElementById('loginPage');
const userPanel = document.getElementById('userPanel');
const adminPanel = document.getElementById('adminPanel');

const loginBtn = document.getElementById('loginBtn');
const registerLink = document.getElementById('registerLink');
const adminCheck = document.getElementById('adminCheck');
const logoutUser = document.getElementById('logoutUser');
const logoutAdmin = document.getElementById('logoutAdmin');

// यूजर पैनल नेविगेशन
const userNavLinks = document.querySelectorAll('#userPanel .nav-link');
const userPageContents = document.querySelectorAll('#userPanel .page-content');

// एडमिन पैनल नेविगेशन
const adminNavLinks = document.querySelectorAll('#adminPanel .nav-link');
const adminPageContents = document.querySelectorAll('#adminPanel .page-content');

// इवेंट लिस्टनर्स
loginBtn.addEventListener('click', handleLogin);
registerLink.addEventListener('click', handleRegister);
logoutUser.addEventListener('click', handleLogout);
logoutAdmin.addEventListener('click', handleLogout);

// यूजर पैनल नेविगेशन
userNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        showUserPage(page);
    });
});

// एडमिन पैनल नेविगेशन
adminNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        showAdminPage(page);
    });
});

// फंक्शन्स
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showNotification('कृपया यूजरनेम और पासवर्ड दर्ज करें', 'error');
        return;
    }
    
    isAdmin = adminCheck.checked;
    
    if (isAdmin) {
        // एडमिन लॉगिन
        if (username === 'admin' && password === 'admin123') {
            currentUser = { id: 'ADMIN', name: 'एडमिन', username: 'admin', email: 'admin@mlmsoftware.com' };
            showAdminPanel();
        } else {
            showNotification('गलत एडमिन यूजरनेम या पासवर्ड', 'error');
        }
    } else {
        // यूजर लॉगिन
        const user = demoUsers.find(u => u.email === username || u.phone === username);
        if (user && password === 'password') {
            currentUser = user;
            showUserPanel();
        } else {
            showNotification('गलत यूजरनेम या पासवर्ड', 'error');
        }
    }
}

function handleRegister() {
    showNotification('रजिस्ट्रेशन पेज विकासाधीन है', 'info');
}

function handleLogout() {
    currentUser = null;
    isAdmin = false;
    loginPage.classList.remove('hidden');
    userPanel.classList.add('hidden');
    adminPanel.classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('adminCheck').checked = false;
}

function showUserPanel() {
    loginPage.classList.add('hidden');
    adminPanel.classList.add('hidden');
    userPanel.classList.remove('hidden');
    loadUserDashboard();
    showUserPage('dashboard');
}

function showAdminPanel() {
    loginPage.classList.add('hidden');
    userPanel.classList.add('hidden');
    adminPanel.classList.remove('hidden');
    loadAdminDashboard();
    showAdminPage('dashboard');
}

function showUserPage(page) {
    userPageContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    userNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(`user${page.charAt(0).toUpperCase() + page.slice(1)}Page`).classList.remove('hidden');
    
    const activeLink = Array.from(userNavLinks).find(link => link.getAttribute('data-page') === page);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function showAdminPage(page) {
    adminPageContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    adminNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(`admin${page.charAt(0).toUpperCase() + page.slice(1)}Page`).classList.remove('hidden');
    
    const activeLink = Array.from(adminNavLinks).find(link => link.getAttribute('data-page') === page);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function loadUserDashboard() {
    if (!currentUser) return;
    
    // डैशबोर्ड स्टैट्स लोड करें
    const totalIncome = currentUser.directIncome + currentUser.levelIncome + currentUser.royaltyIncome + currentUser.bonusIncome;
    document.getElementById('totalIncome').textContent = `₹${totalIncome}`;
    document.getElementById('directIncome').textContent = `₹${currentUser.directIncome}`;
    document.getElementById('teamIncome').textContent = `₹${currentUser.levelIncome + currentUser.royaltyIncome}`;
    document.getElementById('walletBalance').textContent = `₹${currentUser.wallet}`;
    
    // टीम स्टैट्स लोड करें
    const directTeam = demoUsers.filter(u => u.id !== currentUser.id).length;
    const activeTeam = demoUsers.filter(u => u.status === 'active').length;
    const inactiveTeam = demoUsers.filter(u => u.status === 'inactive').length;
    
    document.getElementById('directTeam').textContent = directTeam;
    document.getElementById('totalTeam').textContent = demoUsers.length - 1;
    document.getElementById('activeTeam').textContent = activeTeam;
    document.getElementById('inactiveTeam').textContent = inactiveTeam;
    
    // हालिया इनकम लोड करें
    const recentIncomeTable = document.getElementById('recentIncomeTable');
    recentIncomeTable.innerHTML = '';
    
    const userIncome = demoIncome.filter(i => i.userId === currentUser.id).slice(0, 5);
    if (userIncome.length > 0) {
        userIncome.forEach(income => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${income.date}</td>
                <td>${income.description}</td>
                <td>₹${income.amount}</td>
            `;
            recentIncomeTable.appendChild(row);
        });
    } else {
        recentIncomeTable.innerHTML = '<tr><td colspan="3" class="text-center">कोई डेटा नहीं</td></tr>';
    }
    
    // प्रोफाइल पेज लोड करें
    loadUserProfile();
}

function loadUserProfile() {
    if (!currentUser) return;
    
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileUsername').textContent = currentUser.username;
    document.getElementById('fullName').value = currentUser.name;
    document.getElementById('email').value = currentUser.email;
    document.getElementById('phone').value = currentUser.phone;
}

function loadAdminDashboard() {
    // एडमिन डैशबोर्ड स्टैट्स लोड करें
    document.getElementById('totalUsersAdmin').textContent = demoUsers.length;
    document.getElementById('activeUsersAdmin').textContent = demoUsers.filter(u => u.status === 'active').length;
    
    const todayIncome = demoIncome
        .filter(i => i.date === new Date().toISOString().split('T')[0] && i.status === 'approved')
        .reduce((sum, i) => sum + i.amount, 0);
    document.getElementById('todayIncomeAdmin').textContent = `₹${todayIncome}`;
    
    const totalIncome = demoIncome
        .filter(i => i.status === 'approved')
        .reduce((sum, i) => sum + i.amount, 0);
    document.getElementById('totalIncomeAdmin').textContent = `₹${totalIncome}`;
    
    // हालिया गतिविधियां लोड करें
    document.getElementById('newRegistrations').textContent = '5';
    document.getElementById('newDeposits').textContent = '3';
    document.getElementById('newWithdrawals').textContent = '2';
    document.getElementById('pendingWithdrawals').textContent = '1';
    
    // यूजर्स टेबल लोड करें
    loadUsersTable();
}

function loadUsersTable() {
    const usersTable = document.getElementById('usersTable');
    usersTable.innerHTML = '';
    
    demoUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.joinDate}</td>
            <td><span class="status-${user.status}">${user.status === 'active' ? 'एक्टिव' : user.status === 'inactive' ? 'इनएक्टिव' : 'ब्लॉक्ड'}</span></td>
            <td>₹${user.wallet}</td>
            <td>
                <button class="btn btn-sm btn-primary edit-user-btn" data-user-id="${user.id}">एडिट</button>
            </td>
        `;
        usersTable.appendChild(row);
    });
    
    // एडिट यूजर बटन इवेंट लिस्टनर
    document.querySelectorAll('.edit-user-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userId = e.target.getAttribute('data-user-id');
            editUser(userId);
        });
    });
}

function editUser(userId) {
    const user = demoUsers.find(u => u.id === userId);
    if (!user) return;
    
    // एडिट यूजर मॉडल फील करें
    document.getElementById('editUserId').value = user.id;
    document.getElementById('editUserName').value = user.name;
    document.getElementById('editUserEmail').value = user.email;
    document.getElementById('editUserPhone').value = user.phone;
    document.getElementById('editUserStatus').value = user.status;
    document.getElementById('editUserWallet').value = user.wallet;
    document.getElementById('editUserDirectIncome').value = user.directIncome;
    document.getElementById('editUserLevelIncome').value = user.levelIncome;
    document.getElementById('editUserRoyaltyIncome').value = user.royaltyIncome;
    document.getElementById('editUserBonusIncome').value = user.bonusIncome;
    
    // मॉडल दिखाएं
    const editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));
    editUserModal.show();
}

// नोटिफिकेशन फंक्शन
function showNotification(message, type = 'success') {
    // नोटिफिकेशन एलिमेंट बनाएं
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // बॉडी में जोड़ें
    document.body.appendChild(notification);
    
    // दिखाएं
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // 3 सेकंड बाद हटाएं
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// इनकम जोड़ें बटन
document.getElementById('addIncomeBtn')?.addEventListener('click', () => {
    const addIncomeModal = new bootstrap.Modal(document.getElementById('addIncomeModal'));
    addIncomeModal.show();
});

// इनकम काटें बटन
document.getElementById('deductIncomeBtn')?.addEventListener('click', () => {
    const deductIncomeModal = new bootstrap.Modal(document.getElementById('deductIncomeModal'));
    deductIncomeModal.show();
});

// यूजर ब्लॉक बटन
document.getElementById('blockUserBtn')?.addEventListener('click', () => {
    const blockUserModal = new bootstrap.Modal(document.getElementById('blockUserModal'));
    blockUserModal.show();
});

// यूजर अनब्लॉक बटन
document.getElementById('unblockUserBtn')?.addEventListener('click', () => {
    const unblockUserModal = new bootstrap.Modal(document.getElementById('unblockUserModal'));
    unblockUserModal.show();
});

// विड्रॉवल स्वीकृत बटन
document.getElementById('approveWithdrawalBtn')?.addEventListener('click', () => {
    const approveWithdrawalModal = new bootstrap.Modal(document.getElementById('approveWithdrawalModal'));
    approveWithdrawalModal.show();
});

// सेव इनकम बटन
document.getElementById('saveIncomeBtn')?.addEventListener('click', () => {
    const userId = document.getElementById('incomeUserId').value;
    const amount = document.getElementById('incomeAmount').value;
    const type = document.getElementById('incomeType').value;
    const description = document.getElementById('incomeDescription').value;
    
    if (!userId || !amount) {
        showNotification('कृपया सभी फील्ड भरें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`₹${amount} इनकम ${userId} को जोड़ी गई`);
    
    // मॉडल बंद करें
    const addIncomeModal = bootstrap.Modal.getInstance(document.getElementById('addIncomeModal'));
    addIncomeModal.hide();
});

// डेडक्ट इनकम बटन
document.getElementById('deductIncomeBtn')?.addEventListener('click', () => {
    const userId = document.getElementById('deductIncomeUserId').value;
    const amount = document.getElementById('deductIncomeAmount').value;
    const type = document.getElementById('deductIncomeType').value;
    const description = document.getElementById('deductIncomeDescription').value;
    
    if (!userId || !amount) {
        showNotification('कृपया सभी फील्ड भरें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`₹${amount} इनकम ${userId} से काटी गई`);
    
    // मॉडल बंद करें
    const deductIncomeModal = bootstrap.Modal.getInstance(document.getElementById('deductIncomeModal'));
    deductIncomeModal.hide();
});

// ब्लॉक यूजर बटन
document.getElementById('blockUserBtn')?.addEventListener('click', () => {
    const userId = document.getElementById('blockUserId').value;
    const reason = document.getElementById('blockReason').value;
    
    if (!userId || !reason) {
        showNotification('कृपया सभी फील्ड भरें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`यूजर ${userId} ब्लॉक कर दिया गया`);
    
    // मॉडल बंद करें
    const blockUserModal = bootstrap.Modal.getInstance(document.getElementById('blockUserModal'));
    blockUserModal.hide();
});

// अनब्लॉक यूजर बटन
document.getElementById('unblockUserBtn')?.addEventListener('click', () => {
    const userId = document.getElementById('unblockUserId').value;
    const reason = document.getElementById('unblockReason').value;
    
    if (!userId || !reason) {
        showNotification('कृपया सभी फील्ड भरें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`यूजर ${userId} अनब्लॉक कर दिया गया`);
    
    // मॉडल बंद करें
    const unblockUserModal = bootstrap.Modal.getInstance(document.getElementById('unblockUserModal'));
    unblockUserModal.hide();
});

// अप्रूव विड्रॉवल बटन
document.getElementById('approveWithdrawalBtn')?.addEventListener('click', () => {
    const withdrawalId = document.getElementById('approveWithdrawalId').value;
    const transactionId = document.getElementById('approveTransactionId').value;
    const remark = document.getElementById('approveRemark').value;
    
    if (!withdrawalId || !transactionId) {
        showNotification('कृपया सभी फील्ड भरें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`विड्रॉवल ${withdrawalId} स्वीकृत कर दिया गया`);
    
    // मॉडल बंद करें
    const approveWithdrawalModal = bootstrap.Modal.getInstance(document.getElementById('approveWithdrawalModal'));
    approveWithdrawalModal.hide();
});

// सेव यूजर बटन
document.getElementById('saveUserBtn')?.addEventListener('click', () => {
    const userId = document.getElementById('editUserId').value;
    const name = document.getElementById('editUserName').value;
    const email = document.getElementById('editUserEmail').value;
    const phone = document.getElementById('editUserPhone').value;
    const status = document.getElementById('editUserStatus').value;
    const wallet = document.getElementById('editUserWallet').value;
    const directIncome = document.getElementById('editUserDirectIncome').value;
    const levelIncome = document.getElementById('editUserLevelIncome').value;
    const royaltyIncome = document.getElementById('editUserRoyaltyIncome').value;
    const bonusIncome = document.getElementById('editUserBonusIncome').value;
    
    if (!userId || !name || !email || !phone) {
        showNotification('कृपया सभी आवश्यक फील्ड भरें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`यूजर ${userId} की जानकारी अपडेट कर दी गई`);
    
    // मॉडल बंद करें
    const editUserModal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
    editUserModal.hide();
    
    // यूजर्स टेबल रीलोड करें
    loadUsersTable();
});

// जनरेट रिपोर्ट बटन
document.getElementById('generateReportBtn')?.addEventListener('click', () => {
    const reportType = document.getElementById('reportType').value;
    const reportFormat = document.getElementById('reportFormat').value;
    const fromDate = document.getElementById('reportFromDate').value;
    const toDate = document.getElementById('reportToDate').value;
    
    if (!fromDate || !toDate) {
        showNotification('कृपया तारीख चुनें', 'error');
        return;
    }
    
    // डेमो के लिए नोटिफिकेशन दिखाएं
    showNotification(`${reportType} रिपोर्ट ${reportFormat} फॉर्मेट में जनरेट हो रही है`);
    
    // मॉडल बंद करें
    const reportGenerateModal = bootstrap.Modal.getInstance(document.getElementById('reportGenerateModal'));
    reportGenerateModal.hide();
});

// रिपोर्ट बटन इवेंट लिस्टनर्स
document.getElementById('allUsersReport')?.addEventListener('click', () => {
    openReportModal('सभी यूजर्स रिपोर्ट');
});

document.getElementById('activeUsersReport')?.addEventListener('click', () => {
    openReportModal('एक्टिव यूजर्स रिपोर्ट');
});

document.getElementById('inactiveUsersReport')?.addEventListener('click', () => {
    openReportModal('इनएक्टिव यूजर्स रिपोर्ट');
});

document.getElementById('blockedUsersReport')?.addEventListener('click', () => {
    openReportModal('ब्लॉक्ड यूजर्स रिपोर्ट');
});

document.getElementById('dailyIncomeReport')?.addEventListener('click', () => {
    openReportModal('दैनिक इनकम रिपोर्ट');
});

document.getElementById('weeklyIncomeReport')?.addEventListener('click', () => {
    openReportModal('साप्ताहिक इनकम रिपोर्ट');
});

document.getElementById('monthlyIncomeReport')?.addEventListener('click', () => {
    openReportModal('मासिक इनकम रिपोर्ट');
});

document.getElementById('yearlyIncomeReport')?.addEventListener('click', () => {
    openReportModal('वार्षिक इनकम रिपोर्ट');
});

document.getElementById('depositReport')?.addEventListener('click', () => {
    openReportModal('डिपॉजिट रिपोर्ट');
});

document.getElementById('withdrawalReport')?.addEventListener('click', () => {
    openReportModal('विड्रॉवल रिपोर्ट');
});

document.getElementById('transferReport')?.addEventListener('click', () => {
    openReportModal('ट्रांसफर रिपोर्ट');
});

document.getElementById('balanceSheetReport')?.addEventListener('click', () => {
    openReportModal('बैलेंस शीट रिपोर्ट');
});

document.getElementById('teamSizeReport')?.addEventListener('click', () => {
    openReportModal('टीम साइज रिपोर्ट');
});

document.getElementById('teamPerformanceReport')?.addEventListener('click', () => {
    openReportModal('टीम परफॉर्मेंस रिपोर्ट');
});

document.getElementById('levelWiseReport')?.addEventListener('click', () => {
    openReportModal('लेवल वाइज रिपोर्ट');
});

document.getElementById('topEarnersReport')?.addEventListener('click', () => {
    openReportModal('टॉप अर्नर्स रिपोर्ट');
});

function openReportModal(reportType) {
    document.getElementById('reportType').value = reportType;
    const reportGenerateModal = new bootstrap.Modal(document.getElementById('reportGenerateModal'));
    reportGenerateModal.show();
}

// फॉर्म सबमिशन इवेंट लिस्टनर्स
document.getElementById('profileForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('प्रोफाइल अपडेट किया गया');
});

document.getElementById('activateForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('ID एक्टिवेट करने का अनुरोध प्राप्त हुआ');
});

document.getElementById('depositForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('डिपॉजिट अनुरोध प्राप्त हुआ');
});

document.getElementById('withdrawalForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('विड्रॉवल अनुरोध प्राप्त हुआ');
});

document.getElementById('generalSettingsForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('सामान्य सेटिंग्स अपडेट की गईं');
});

document.getElementById('mlmSettingsForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('MLM सेटिंग्स अपडेट की गईं');
});

// डाउनलोड बटन इवेंट लिस्टनर्स
document.getElementById('downloadIncome')?.addEventListener('click', () => {
    showNotification('इनकम रिपोर्ट डाउनलोड हो रही है');
});

document.getElementById('downloadTeam')?.addEventListener('click', () => {
    showNotification('टीम रिपोर्ट डाउनलोड हो रही है');
});

document.getElementById('downloadUsers')?.addEventListener('click', () => {
    showNotification('यूजर्स रिपोर्ट डाउनलोड हो रही है');
});

document.getElementById('downloadIncomeAdmin')?.addEventListener('click', () => {
    showNotification('इनकम रिपोर्ट डाउनलोड हो रही है');
});

document.getElementById('downloadDeposits')?.addEventListener('click', () => {
    showNotification('डिपॉजिट रिपोर्ट डाउनलोड हो रही है');
});

document.getElementById('downloadWithdrawals')?.addEventListener('click', () => {
    showNotification('विड्रॉवल रिपोर्ट डाउनलोड हो रही है');
});

document.getElementById('downloadTransfers')?.addEventListener('click', () => {
    showNotification('ट्रांसफर रिपोर्ट डाउनलोड हो रही है');
});

// फिल्टर बटन इवेंट लिस्टनर्स
document.getElementById('filterIncome')?.addEventListener('click', () => {
    showNotification('इनकम फिल्टर विकल्प विकासाधीन है', 'info');
});

document.getElementById('filterTeam')?.addEventListener('click', () => {
    showNotification('टीम फिल्टर विकल्प विकासाधीन है', 'info');
});

document.getElementById('filterUsers')?.addEventListener('click', () => {
    showNotification('यूजर्स फिल्टर विकल्प विकासाधीन है', 'info');
});

document.getElementById('filterIncomeAdmin')?.addEventListener('click', () => {
    showNotification('इनकम फिल्टर विकल्प विकासाधीन है', 'info');
});

document.getElementById('filterDeposits')?.addEventListener('click', () => {
    showNotification('डिपॉजिट फिल्टर विकल्प विकासाधीन है', 'info');
});

document.getElementById('filterWithdrawals')?.addEventListener('click', () => {
    showNotification('विड्रॉवल फिल्टर विकल्प विकासाधीन है', 'info');
});

document.getElementById('filterTransfers')?.addEventListener('click', () => {
    showNotification('ट्रांसफर फिल्टर विकल्प विकासाधीन है', 'info');
});

// सर्च इनपुट इवेंट लिस्टनर्स
document.getElementById('searchTeam')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable('teamTable', searchTerm);
});

document.getElementById('searchUsers')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable('usersTable', searchTerm);
});

document.getElementById('searchDeposits')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable('depositsTableAdmin', searchTerm);
});

document.getElementById('searchWithdrawals')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable('withdrawalsTableAdmin', searchTerm);
});

document.getElementById('searchTransfers')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable('transfersTableAdmin', searchTerm);
});

function filterTable(tableId, searchTerm) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        let found = false;
        
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(searchTerm)) {
                found = true;
                break;
            }
        }
        
        row.style.display = found ? '' : 'none';
    }
}

// जीनियोलॉजी लोड बटन
document.getElementById('loadGenealogy')?.addEventListener('click', () => {
    const level = document.getElementById('genealogyLevel').value;
    showNotification(`लेवल ${level} जीनियोलॉजी लोड हो रही है`, 'info');
});

// चेंज प्रोफाइल इमेज बटन
document.getElementById('changeProfileImage')?.addEventListener('click', () => {
    showNotification('प्रोफाइल इमेज बदलने की सुविधा विकासाधीन है', 'info');
});

// चेंज पासवर्ड लिंक
document.getElementById('changePassword')?.addEventListener('click', () => {
    showNotification('पासवर्ड बदलने की सुविधा विकासाधीन है', 'info');
});

document.getElementById('adminChangePassword')?.addEventListener('click', () => {
    showNotification('पासवर्ड बदलने की सुविधा विकासाधीन है', 'info');
});

// यूजर प्रोफाइल लिंक
document.getElementById('userProfile')?.addEventListener('click', (e) => {
    e.preventDefault();
    showUserPage('profile');
});

// एडमिन प्रोफाइल लिंक
document.getElementById('adminProfile')?.addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('एडमिन प्रोफाइल पेज विकासाधीन है', 'info');
});

// एड यूजर बटन
document.getElementById('addUserBtn')?.addEventListener('click', () => {
    showNotification('नया यूजर जोड़ने की सुविधा विकासाधीन है', 'info');
});

// इनकम टेबल लोड करें
function loadIncomeTable() {
    const incomeTable = document.getElementById('incomeTable');
    incomeTable.innerHTML = '';
    
    demoIncome.forEach(income => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${income.date}</td>
            <td>${income.description}</td>
            <td>${income.type === 'direct' ? 'डायरेक्ट' : income.type === 'level' ? 'लेवल' : income.type === 'royalty' ? 'रॉयल्टी' : 'बोनस'}</td>
            <td>₹${income.amount}</td>
            <td><span class="status-${income.status}">${income.status === 'approved' ? 'स्वीकृत' : income.status === 'pending' ? 'पेंडिंग' : 'अस्वीकृत'}</span></td>
        `;
        incomeTable.appendChild(row);
    });
}

// इनकम एडमिन टेबल लोड करें
function loadIncomeTableAdmin() {
    const incomeTableAdmin = document.getElementById('incomeTableAdmin');
    incomeTableAdmin.innerHTML = '';
    
    demoIncome.forEach(income => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${income.date}</td>
            <td>${income.userId}</td>
            <td>${income.description}</td>
            <td>${income.type === 'direct' ? 'डायरेक्ट' : income.type === 'level' ? 'लेवल' : income.type === 'royalty' ? 'रॉयल्टी' : 'बोनस'}</td>
            <td>₹${income.amount}</td>
            <td><span class="status-${income.status}">${income.status === 'approved' ? 'स्वीकृत' : income.status === 'pending' ? 'पेंडिंग' : 'अस्वीकृत'}</span></td>
            <td>
                <button class="btn btn-sm btn-primary">एडिट</button>
            </td>
        `;
        incomeTableAdmin.appendChild(row);
    });
}

// डिपॉजिट टेबल लोड करें
function loadDepositsTableAdmin() {
    const depositsTableAdmin = document.getElementById('depositsTableAdmin');
    depositsTableAdmin.innerHTML = '';
    
    demoDeposits.forEach(deposit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${deposit.date}</td>
            <td>${deposit.userId}</td>
            <td>₹${deposit.amount}</td>
            <td>${deposit.method === 'bank' ? 'बैंक' : 'UPI'}</td>
            <td>${deposit.transactionId}</td>
            <td><span class="status-${deposit.status}">${deposit.status === 'approved' ? 'स्वीकृत' : 'पेंडिंग'}</span></td>
            <td>
                <button class="btn btn-sm btn-primary">एडिट</button>
            </td>
        `;
        depositsTableAdmin.appendChild(row);
    });
}

// विड्रॉवल टेबल लोड करें
function loadWithdrawalsTableAdmin() {
    const withdrawalsTableAdmin = document.getElementById('withdrawalsTableAdmin');
    withdrawalsTableAdmin.innerHTML = '';
    
    demoWithdrawals.forEach(withdrawal => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${withdrawal.date}</td>
            <td>${withdrawal.userId}</td>
            <td>₹${withdrawal.amount}</td>
            <td>${withdrawal.method === 'bank' ? 'बैंक' : 'UPI'}</td>
            <td>${withdrawal.account}</td>
            <td><span class="status-${withdrawal.status}">${withdrawal.status === 'approved' ? 'स्वीकृत' : withdrawal.status === 'pending' ? 'पेंडिंग' : 'अस्वीकृत'}</span></td>
            <td>
                <button class="btn btn-sm btn-primary">एडिट</button>
            </td>
        `;
        withdrawalsTableAdmin.appendChild(row);
    });
}

// ट्रांसफर टेबल लोड करें
function loadTransfersTableAdmin() {
    const transfersTableAdmin = document.getElementById('transfersTableAdmin');
    transfersTableAdmin.innerHTML = '';
    
    demoTransfers.forEach(transfer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transfer.date}</td>
            <td>${transfer.fromUserId}</td>
            <td>${transfer.toUserId}</td>
            <td>₹${transfer.amount}</td>
            <td>${transfer.description}</td>
            <td><span class="status-${transfer.status}">${transfer.status === 'approved' ? 'स्वीकृत' : 'पेंडिंग'}</span></td>
            <td>
                <button class="btn btn-sm btn-primary">एडिट</button>
            </td>
        `;
        transfersTableAdmin.appendChild(row);
    });
}

// टीम टेबल लोड करें
function loadTeamTable() {
    const teamTable = document.getElementById('teamTable');
    teamTable.innerHTML = '';
    
    demoUsers.forEach(user => {
        if (user.id === currentUser.id) return;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.joinDate}</td>
            <td><span class="status-${user.status}">${user.status === 'active' ? 'एक्टिव' : user.status === 'inactive' ? 'इनएक्टिव' : 'ब्लॉक्ड'}</span></td>
            <td>0</td>
            <td>₹${user.directIncome + user.levelIncome + user.royaltyIncome + user.bonusIncome}</td>
            <td>
                <button class="btn btn-sm btn-primary">व्यू</button>
            </td>
        `;
        teamTable.appendChild(row);
    });
}

// एक्टिवेशन हिस्ट्री टेबल लोड करें
function loadActivationHistoryTable() {
    const activationHistoryTable = document.getElementById('activationHistoryTable');
    activationHistoryTable.innerHTML = '';
    
    // डेमो डेटा
    const demoActivations = [
        { date: '2023-10-01', userId: 'USER002', amount: 1000 },
        { date: '2023-10-02', userId: 'USER003', amount: 1000 },
        { date: '2023-10-03', userId: 'USER004', amount: 1000 }
    ];
    
    demoActivations.forEach(activation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activation.date}</td>
            <td>${activation.userId}</td>
            <td>₹${activation.amount}</td>
        `;
        activationHistoryTable.appendChild(row);
    });
}

// डिपॉजिट हिस्ट्री टेबल लोड करें
function loadDepositHistoryTable() {
    const depositHistoryTable = document.getElementById('depositHistoryTable');
    depositHistoryTable.innerHTML = '';
    
    demoDeposits.forEach(deposit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${deposit.date}</td>
            <td>₹${deposit.amount}</td>
            <td><span class="status-${deposit.status}">${deposit.status === 'approved' ? 'स्वीकृत' : 'पेंडिंग'}</span></td>
        `;
        depositHistoryTable.appendChild(row);
    });
}

// विड्रॉवल हिस्ट्री टेबल लोड करें
function loadWithdrawalHistoryTable() {
    const withdrawalHistoryTable = document.getElementById('withdrawalHistoryTable');
    withdrawalHistoryTable.innerHTML = '';
    
    demoWithdrawals.forEach(withdrawal => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${withdrawal.date}</td>
            <td>₹${withdrawal.amount}</td>
            <td><span class="status-${withdrawal.status}">${withdrawal.status === 'approved' ? 'स्वीकृत' : withdrawal.status === 'pending' ? 'पेंडिंग' : 'अस्वीकृत'}</span></td>
        `;
        withdrawalHistoryTable.appendChild(row);
    });
}

// पेज लोड होने पर टेबल्स लोड करें
document.addEventListener('DOMContentLoaded', () => {
    // इनकम टेबल लोड करें
    if (document.getElementById('incomeTable')) {
        loadIncomeTable();
    }
    
    // इनकम एडमिन टेबल लोड करें
    if (document.getElementById('incomeTableAdmin')) {
        loadIncomeTableAdmin();
    }
    
    // डिपॉजिट एडमिन टेबल लोड करें
    if (document.getElementById('depositsTableAdmin')) {
        loadDepositsTableAdmin();
    }
    
    // विड्रॉवल एडमिन टेबल लोड करें
    if (document.getElementById('withdrawalsTableAdmin')) {
        loadWithdrawalsTableAdmin();
    }
    
    // ट्रांसफर एडमिन टेबल लोड करें
    if (document.getElementById('transfersTableAdmin')) {
        loadTransfersTableAdmin();
    }
    
    // टीम टेबल लोड करें
    if (document.getElementById('teamTable')) {
        loadTeamTable();
    }
    
    // एक्टिवेशन हिस्ट्री टेबल लोड करें
    if (document.getElementById('activationHistoryTable')) {
        loadActivationHistoryTable();
    }
    
    // डिपॉजिट हिस्ट्री टेबल लोड करें
    if (document.getElementById('depositHistoryTable')) {
        loadDepositHistoryTable();
    }
    
    // विड्रॉवल हिस्ट्री टेबल लोड करें
    if (document.getElementById('withdrawalHistoryTable')) {
        loadWithdrawalHistoryTable();
    }
});
