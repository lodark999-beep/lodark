// components.js

// 定义所有公共组件的模板字符串
const components = {
    header: `
        <header>
            <div class="container header-content">
                <div class="logo">LOD<span>ARK</span></div>
                <nav>
                    <ul>
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="products.html" class="nav-link">Products</a></li>
                        <li><a href="accessories.html" class="nav-link">Accessories</a></li>
                        <li><a href="oem.html" class="nav-link">OEM/ODM</a></li>
                        <li class="dropdown">
                            <a href="Technology Portal.html" class="nav-link">
                                Technology Portal
                                <i class="fas fa-chevron-down dropdown-arrow"></i>
                            </a>
                            <div class="dropdown-menu">
                                <a href="guzhang.html">
                                    <i class="fas fa-tools"></i>
                                    Faults & Solutions
                                </a>
                                <a href="RFQ.html">
                                    <i class="fas fa-question-circle"></i>
                                    FAQ
                                </a>
                                <a href="How To's.html">
                                    <i class="fas fa-book"></i>
                                    How To's
                                </a>
                                <a href="3603.html">
                                    <i class="fas fa-camera-retro"></i>
                                    360 Camera Guide
                                </a>
                            </div>
                        </li>
                        <li><a href="Contact.html" class="nav-link">Contact</a></li>
                    </ul>
                </nav>
                <button class="mobile-menu-btn">☰</button>
            </div>
        </header>
    `,
    
    footer: `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <p>LODARK is a leading manufacturer of automotive navigation systems, committed to providing high-quality products and services to global customers.</p>
                        <div class="social-media">
                            <a href="https://www.youtube.com/@Lodark18" class="social-icon" target="_blank" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61573217336403" class="social-icon" target="_blank" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/lodark_car_player/" class="social-icon" target="_blank" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Product Series</h3>
                        <ul class="footer-links">
                            <li><a href="products.html#e-series">E-Series (Entry-Level)</a></li>
                            <li><a href="products.html#s-series">S-Series (Mid-Range)</a></li>
                            <li><a href="products.html#p-series">P-Series (Flagship)</a></li>
                            <li><a href="products.html#specialty">Specialty Series</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="accessories.html">Accessories</a></li>
                            <li><a href="oem.html">OEM/ODM</a></li>
                            <li><a href="Technology Portal.html">Technology Portal</a></li>
                            <li><a href="Contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="copyright">
                    <p>&copy; 2025 LODARK. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `
};

// 加载组件的主函数
function loadComponents() {
    // 插入 header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = components.header;
    }
    
    // 插入 footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = components.footer;
    }
    
    // 初始化相关功能
    setActiveNavLink();
    initMobileMenu();
}

// 设置活动导航链接
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 移动菜单功能
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isDisplayed = nav.style.display === 'flex';
            nav.style.display = isDisplayed ? 'none' : 'flex';
        });
    }
}

// 响应式导航调整
function initResponsiveNav() {
    window.addEventListener('resize', function() {
        const nav = document.querySelector('nav ul');
        if (nav) {
            if (window.innerWidth > 992) {
                nav.style.display = 'flex';
            } else {
                nav.style.display = 'none';
            }
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    initResponsiveNav();
});