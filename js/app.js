const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "cta-quote": "Request a Quote",
        "hero-h1": "Powering Your Home and Your Journey.",
        "hero-p": "Professional residential electrical works and cutting-edge EV charging solutions by Easy Charge Power Solutions.",
        "btn-quote": "Request a Quote",
        "btn-contact": "Contact Us",
        "about-title": "About Us",
        "vision-title": "Our Vision",
        "vision-p": "To be the most trusted name in electrical and EV charging solutions, empowering a greener and more connected future.",
        "mission-title": "Our Mission",
        "mission-p": "Providing safe, reliable, and innovative electrical services that enhance life quality and accelerate electric mobility.",
        "services-title": "Our Services",
        "service1-title": "Home Electrical Works",
        "service1-p": "Comprehensive wiring, renovations, and safety upgrades for modern living.",
        "service2-title": "EV Charging Solutions",
        "service2-p": "Professional installation and maintenance of electric vehicle chargers for homes and businesses.",
        "projects-title": "Featured Projects",
        "project1-title": "Luxury Villa Full Wiring",
        "project1-p": "Complete electrical infrastructure for a 5-bedroom luxury villa.",
        "project2-title": "Community EV Charging Hub",
        "project2-p": "Installation of 5 EV charging stations in a residential complex.",
        "project3-title": "Historic Home Renovation",
        "project3-p": "Modernizing the electrical system of a 1950s home.",
        "products-title": "Featured Products",
        "product1-title": "Home Charger Pro",
        "product1-p": "Sleek, 7kW wall-box for overnight charging. Compact and weatherproof.",
        "product2-title": "Commercial Fast-Charge",
        "product2-p": "Dual-port pedestal units for businesses and parking areas.",
        "contact-title": "Contact Us",
        "contact-h3": "Ready to power up?",
        "contact-p": "Our team is standing by to help you with your next electrical or EV project.",
        "form-name": "Your Name",
        "form-email": "Your Email",
        "form-submit": "Send Message",
        "footer-copy": "© 2024 Easy Charge Power Solutions – All rights reserved."
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-about": "من نحن",
        "nav-services": "خدماتنا",
        "nav-projects": "مشاريعنا",
        "nav-contact": "اتصل بنا",
        "cta-quote": "اطلب عرض سعر",
        "hero-h1": "طاقة لمنزلك.. وقوة لرحلتك.",
        "hero-p": "أعمال كهربائية منزلية احترافية وحلول شحن المركبات الكهربائية المتطورة من Easy Charge Power Solutions.",
        "btn-quote": "اطلب عرض سعر",
        "btn-contact": "اتصل بنا",
        "about-title": "من نحن",
        "vision-title": "رؤيتنا",
        "vision-p": "أن نكون الاسم الأكثر ثقة في حلول الكهرباء وشحن السيارات الكهربائية، لتمكين مستقبل أكثر استدامة وترابطاً.",
        "mission-title": "مهمتنا",
        "mission-p": "تقديم خدمات كهربائية آمنة وموثوقة ومبتكرة تعزز جودة الحياة وتسرع التحول للتنقل الكهربائي.",
        "services-title": "خدماتنا",
        "service1-title": "الأعمال الكهربائية المنزلية",
        "service1-p": "تمديدات شاملة، تجديدات، وتحديثات لأنظمة الأمان للمعيشة الحديثة.",
        "service2-title": "حلول شحن المركبات الكهربائية",
        "service2-p": "تركيب وصيانة احترافية لشواحن السيارات الكهربائية للمنازل والشركات.",
        "projects-title": "مشاريعنا المميزة",
        "project1-title": "تمديدات فيلا فاخرة",
        "project1-p": "بنية تحتية كهربائية كاملة لفيلا فاخرة مكونة من 5 غرف نوم.",
        "project2-title": "مركز شحن سيارات كهربائية سكني",
        "project2-p": "تركيب 5 محطات شحن سيارات كهربائية في مجمع سكني.",
        "project3-title": "تجديد منزل تاريخي",
        "project3-p": "تحديث النظام الكهربائي لمنزل يعود لفترة الخمسينيات.",
        "products-title": "منتجاتنا المميزة",
        "product1-title": "Home Charger Pro",
        "product1-p": "شاحن حائطي أنيق بقدرة 7 كيلوواط للشحن الليلي، مدمج ومقاوم للعوامل الجوية.",
        "product2-title": "شاحن تجاري سريع",
        "product2-p": "وحدات قائمة مزدوجة المنافذ للشركات ومناطق مواقف السيارات.",
        "contact-title": "اتصل بنا",
        "contact-h3": "هل أنت مستعد للبدء؟",
        "contact-p": "فريقنا جاهز لمساعدتك في مشروعك الكهربائي القادم أو تركيب شاحن سيارتك.",
        "form-name": "الاسم",
        "form-email": "البريد الإلكتروني",
        "form-submit": "إرسال الرسالة",
        "footer-copy": "© 2024 Easy Charge Power Solutions – جميع الحقوق محفوظة."
    }
};

const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang][key]) {
            if (elem.tagName === 'INPUT') {
                elem.placeholder = translations[lang][key];
            } else {
                elem.innerText = translations[lang][key];
            }
        }
    });

    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    langToggle.innerText = lang === 'en' ? 'العربية' : 'English';
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateContent(currentLang);
});

// Animation on scroll (Simple Fade In)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Dynamic Header Visibility
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});
