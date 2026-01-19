const links = document.querySelectorAll('nav a');
const tabs = document.querySelectorAll('.tab');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = link.dataset.tab;

        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');

    setTimeout(() => {
        loader.classList.add('hidden');
        content.classList.add('show');
    }, 1100);
})

const phone = "5593991830384";
const message = "Olá! Vim pelo seu site.";
  
const encodedMessage = encodeURIComponent(message);
const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

document.getElementById("whatsapp-link").href = whatsappLink;

// LANGUAGES

const translations = {
    pt: {
        description: 'Desenvolvedor de Software & UX/UI Designer',
        about: 'Sobre',
        skills: 'Conhecimentos',
        projects: 'Projetos',
        services: 'Serviços',
        contact: 'Contato',
        descriptionAbout: 'Graduando em Sistemas de Informação pela UFOPA e atuo no desenvolvimento de sistemas web, com foco em UX/UI e front-end. Gosto de transformar ideias em interfaces simples, funcionais e centradas no usuário. Também trabalho com desenvolvimento full stack, envolvendo análise de requisitos, integração com bancos de dados e automação de processos.',
        servicesTitleDev: 'Desenvolvimento de Software',
        servicesDescDev: 'Desenvolvo desde aplicações web até sistemas corporativos, unindo desempenho técnico com a escalabilidade necessária para o seu projeto decolar, sem complicações.',
        servicesTitleUI: 'UX/UI Design',
        servicesDescUI: 'Crio interfaces que não são apenas bonitas, mas que fazem sentido para quem as usa. Meu trabalho é garantir que a tecnologia seja um caminho fácil entre o seu produto e o seu cliente.'
    },

    en: {
        description: 'Software Developer & UX/UI Designer',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        services: 'Services',
        contact: 'Contact',
        descriptionAbout: 'Undergraduate student in Information Systems at UFOPA, working in web systems development with a focus on UX/UI and front-end. I enjoy turning ideas into simple, functional, user-centered interfaces. I also work with full-stack development, including requirements analysis, database integration, and process automation.',
        servicesTitleDev: 'Software Development',
        servicesDescDev: 'I develop everything from web applications to enterprise systems, combining technical performance with the scalability needed to make your project take off smoothly.',
        servicesTitleUI: 'UX/UI Design',
        servicesDescUI: 'I design interfaces that are not only visually appealing but also meaningful for the users. My work ensures that technology becomes an easy bridge between your product and your customer.'
    },

    fr: {
        description: 'Développeur logiciel & Designer UX/UI',
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        services: 'Services',
        contact: 'Contact',
        descriptionAbout: "Étudiant en Systèmes d’Information à l’UFOPA, je travaille dans le développement de systèmes web, avec un accent sur l’UX/UI et le front-end. J’aime transformer des idées en interfaces simples, fonctionnelles et centrées sur l’utilisateur. Je travaille également en développement full stack, incluant l’analyse des besoins, l’intégration de bases de données et l’automatisation des processus.",
        servicesTitleDev: 'Développement de logiciels',
        servicesDescDev: 'Je développe tout, des applications web aux systèmes d’entreprise, en combinant performance technique et évolutivité nécessaires pour que votre projet décolle sans complications',
        servicesTitleUI: 'UX/UI Design',
        servicesDescUI: 'Je conçois des interfaces qui ne sont pas seulement esthétiques, mais qui ont du sens pour ceux qui les utilisent. Mon travail consiste à faire de la technologie un pont simple entre votre produit et vos clients.'
    },

    sp: {
        description: 'Desarrollador de software & Diseñador UI',
        about: 'Sobre',
        skills: 'Conocimientos',
        projects: 'Proyectos',
        services: 'Servicios',
        contact: 'Contacto',
        descriptionAbout: "Estudiante de Sistemas de Información en la UFOPA, trabajo en el desarrollo de sistemas web, con enfoque en UX/UI y front-end. Me gusta transformar ideas en interfaces simples, funcionales y centradas en el usuario. También trabajo con desarrollo full stack, incluyendo análisis de requisitos, integración con bases de datos y automatización de procesos.",
        servicesTitleDev: 'Desarrollo de Software',
        servicesDescDev: 'Desarrollo desde aplicaciones web hasta sistemas empresariales, combinando rendimiento técnico con la escalabilidad necesaria para que tu proyecto despegue sin complicaciones.',
        servicesTitleUI: 'UX/UI Design',
        servicesDescUI: 'Creo interfaces que no solo son atractivas visualmente, sino que también tienen sentido para quienes las usan. Mi trabajo es garantizar que la tecnología sea un camino sencillo entre tu producto y tu cliente.'
    }
};

let currentLang = localStorage.getItem('lang') || 'pt';

const langLabels = {
    pt: 'Português',
    en: 'English',
    fr: 'Français',
    sp: 'Español'
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;

        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById('current-lang').textContent = langLabels[lang];

    localStorage.setItem('lang', lang);
    currentLang = lang;

    updateMenu();
}

function updateMenu() {
    const menu = document.getElementById('language-menu');
    menu.innerHTML = '';

    Object.keys(langLabels).forEach(lang => {
        if (lang !== currentLang) {
            const li = document.createElement('li');
            li.textContent = langLabels[lang];
            li.dataset.lang = lang;
            li.onclick = () => setLanguage(lang);
            menu.appendChild(li);
        }
    });
}

setLanguage(currentLang);