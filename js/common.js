// common.js - 只保留特定功能

// Contact functions
function openWhatsApp() {
    const phoneNumber = "+8613537885828";
    const message = "Hello LODARK, I'm interested in your automotive entertainment systems. Could you please provide more information?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function copyWeChat() {
    const wechatId = "+86 13537885828";
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(wechatId).then(() => {
            alert(`WeChat ID "${wechatId}" has been copied to clipboard. Please add us on WeChat.`);
        }).catch(err => {
            console.error('Failed to copy WeChat ID: ', err);
            alert(`Please manually copy the WeChat ID: ${wechatId}`);
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = wechatId;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert(`WeChat ID "${wechatId}" has been copied to clipboard. Please add us on WeChat.`);
        } catch (err) {
            console.error('Fallback: Failed to copy WeChat ID: ', err);
            alert(`Please manually copy the WeChat ID: ${wechatId}`);
        }
        document.body.removeChild(textArea);
    }
}

function sendEmail() {
    const email = "lodark999@gmail.com";
    const subject = "Inquiry about LODARK Automotive Entertainment Systems";
    const body = "Dear LODARK Team,\n\nI am interested in your automotive entertainment systems. Could you please provide more information about your products and pricing?\n\nThank you.";
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoURL;
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close other open FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ state
                item.classList.toggle('active');
            });
        }
    });
}