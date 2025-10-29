// product-details.js - 产品详情页公共功能

// 初始化产品详情页功能
function initProductDetails() {
    initGalleryModal();
    initMobileResponsive();
}

// 初始化图库模态框
function initGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMainImg = document.getElementById('modal-main-img');
    const modalThumbnails = document.getElementById('modal-thumbnails');
    const closeModalBtn = document.getElementById('close-modal');
    const modalPrevBtn = document.querySelector('.modal-prev-btn');
    const modalNextBtn = document.querySelector('.modal-next-btn');

    if (!modal) return;

    let currentModalIndex = 0;
    let currentModalImages = [];

    // 屏幕类型卡片点击事件
    document.querySelectorAll('.screen-type-card').forEach(card => {
        card.addEventListener('click', function() {
            const screenType = this.getAttribute('data-screen-type');
            const screenName = this.querySelector('.screen-type-name').textContent;
            
            // 设置弹窗标题
            modalTitle.textContent = `${screenName} - Product Gallery`;
            
            // 获取对应图片集
            currentModalImages = window.productImageSets[screenType] || [];
            
            // 重置轮播图状态
            currentModalIndex = 0;
            
            // 更新弹窗中的图片
            if (currentModalImages.length > 0) {
                modalMainImg.src = currentModalImages[0];
                modalMainImg.alt = `${screenName} - Image 1`;
                
                // 生成缩略图
                updateModalThumbnails(currentModalImages, screenName);
            }
            
            // 显示弹窗
            modal.style.display = 'flex';
        });
    });

    // 更新弹窗缩略图
    function updateModalThumbnails(images, screenName) {
        modalThumbnails.innerHTML = '';
        
        images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'modal-thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            thumbnail.setAttribute('data-index', index);
            
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${screenName} - Thumbnail ${index + 1}`;
            
            thumbnail.appendChild(img);
            modalThumbnails.appendChild(thumbnail);
            
            // 缩略图点击事件
            thumbnail.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                updateModalGallery(index);
            });
        });
    }

    // 更新弹窗主图和激活的缩略图
    function updateModalGallery(index) {
        modalMainImg.src = currentModalImages[index];
        modalMainImg.alt = `${modalTitle.textContent} - Image ${index + 1}`;
        
        // 更新激活的缩略图
        const modalThumbs = document.querySelectorAll('.modal-thumbnail');
        modalThumbs.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        currentModalIndex = index;
    }

    // 弹窗下一张图片
    function modalNextImage() {
        let nextIndex = currentModalIndex + 1;
        if (nextIndex >= currentModalImages.length) {
            nextIndex = 0;
        }
        updateModalGallery(nextIndex);
    }

    // 弹窗上一张图片
    function modalPrevImage() {
        let prevIndex = currentModalIndex - 1;
        if (prevIndex < 0) {
            prevIndex = currentModalImages.length - 1;
        }
        updateModalGallery(prevIndex);
    }

    // 添加弹窗事件监听器
    if (modalNextBtn) modalNextBtn.addEventListener('click', modalNextImage);
    if (modalPrevBtn) modalPrevBtn.addEventListener('click', modalPrevImage);

    // 关闭弹窗
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // 点击弹窗外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 移动端响应式初始化
function initMobileResponsive() {
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initProductDetails();
});