/**
 * Site-wide translations (EN/PT). Persists language in localStorage.
 * Include this script on every page and call initLanguage('pageId') after DOM ready.
 */
(function () {
    const LANG_KEY = 'site_lang';

    window.getStoredLang = function () {
        return localStorage.getItem(LANG_KEY) || 'en';
    };

    window.setStoredLang = function (lang) {
        localStorage.setItem(LANG_KEY, lang);
    };

    window.currentLang = window.getStoredLang();

    const T = {
        index: {
            navDiscover: { en: 'Discover+', pt: 'Descobrir+' },
            navProducts: { en: 'Products', pt: 'Produtos' },
            heroSubtitle: { en: 'Programmer & Creative Developer', pt: 'Programador e Desenvolvedor Criativo' },
            heroLocation: { en: 'Based in Luanda, Angola', pt: 'Com sede em Luanda, Angola' },
            ctaViewWork: { en: 'View Work', pt: 'Ver Trabalhos' },
            ctaGetInTouch: { en: 'Get in Touch', pt: 'Contacte-me' },
            scrollExplore: { en: 'Scroll to explore', pt: 'Deslize para explorar' },
            aboutMe: { en: 'About Me', pt: 'Sobre Mim' },
            leadText: { en: "I'm a passionate programmer based in Luanda, crafting digital experiences that merge innovative design with powerful functionality.", pt: 'Sou um programador apaixonado com sede em Luanda, criando experiências digitais que unem design inovador e funcionalidade poderosa.' },
            aboutP1: { en: 'With expertise in web development, creative coding, and modern frameworks, I transform ideas into elegant solutions. My work focuses on creating immersive user experiences with attention to detail and performance.', pt: 'Com experiência em desenvolvimento web, programação criativa e frameworks modernos, transformo ideias em soluções elegantes. O meu trabalho foca-se em criar experiências imersivas com atenção ao detalhe e desempenho.' },
            aboutP2: { en: "When I'm not coding, you'll find me exploring new technologies, experimenting with 3D graphics, and contributing to the developer community through my YouTube channel, BlackBox Studios.", pt: 'Quando não estou a programar, encontro-me a explorar novas tecnologias, a experimentar gráficos 3D e a contribuir para a comunidade de programadores através do meu canal do YouTube, BlackBox Studios.' },
            skillWebDev: { en: 'Web Development', pt: 'Desenvolvimento Web' },
            skillWebDevDesc: { en: 'HTML, CSS, JavaScript, React, Node.js', pt: 'HTML, CSS, JavaScript, React, Node.js' },
            skillUIUX: { en: 'UI/UX Design', pt: 'Design UI/UX' },
            skillUIUXDesc: { en: 'Modern interfaces, animations, glassmorphism', pt: 'Interfaces modernas, animações, glassmorfismo' },
            skill3D: { en: '3D Graphics', pt: 'Gráficos 3D' },
            skill3DDesc: { en: 'WebGL, Three.js, GLSL shaders', pt: 'WebGL, Three.js, shaders GLSL' },
            skillResponsive: { en: 'Responsive Design', pt: 'Design Responsivo' },
            skillResponsiveDesc: { en: 'Mobile-first, cross-platform optimization', pt: 'Mobile-first, otimização multiplataforma' },
            featuredProjects: { en: 'Featured Projects', pt: 'Projetos em Destaque' },
            viewProject: { en: 'View Project', pt: 'Ver Projeto' },
            projectDiscover: { en: 'Discover+ Platform', pt: 'Plataforma Discover+' },
            projectDiscoverDesc: { en: 'An interactive discovery platform with dynamic animations and modern UI', pt: 'Uma plataforma interativa de descoberta com animações dinâmicas e UI moderna' },
            projectBlackBox: { en: 'BlackBox Studios', pt: 'BlackBox Studios' },
            projectBlackBoxDesc: { en: 'Educational content platform showcasing programming tutorials and tech reviews', pt: 'Plataforma de conteúdo educacional com tutoriais de programação e análises de tecnologia' },
            projectRoast: { en: 'Roast & Donut', pt: 'Roast & Donut' },
            projectRoastDesc: { en: 'A Blog post website where users can freely share their thoughts and opinions on various topics, fostering open discussions and diverse perspectives.', pt: 'Um site de blog onde os utilizadores podem partilhar livremente pensamentos e opiniões sobre vários tópicos, promovendo discussões abertas e perspetivas diversas.' },
            latestUpdates: { en: 'Latest Updates', pt: 'Últimas Atualizações' },
            cardNewWebsite: { en: 'New Website Launch', pt: 'Lançamento do Novo Site' },
            cardNewWebsiteDesc: { en: 'Excited to share my newly redesigned portfolio featuring modern animations and glassmorphism effects.', pt: 'Entusiasmado por partilhar o meu portfólio redesenhado com animações modernas e efeitos de glassmorfismo.' },
            cardYouTubeMilestone: { en: 'YouTube Channel Milestone', pt: 'Marco do Canal YouTube' },
            cardYouTubeMilestoneDesc: { en: "BlackBox Studios just hit a major milestone! Thank you to everyone who's been following along.", pt: 'BlackBox Studios atingiu um marco importante! Obrigado a todos que acompanham.' },
            getInTouch: { en: 'Get In Touch', pt: 'Contacte-me' },
            contactIntro: { en: "Have a project in mind? Let's collaborate and create something amazing together.", pt: 'Tem um projeto em mente? Vamos colaborar e criar algo incrível juntos.' },
            contactEmail: { en: 'Email', pt: 'Email' },
            contactLinkedIn: { en: 'LinkedIn', pt: 'LinkedIn' },
            contactLinkedInDesc: { en: 'Connect with me', pt: 'Conecte-se comigo' },
            contactYouTube: { en: 'YouTube', pt: 'YouTube' },
            contactYouTubeDesc: { en: 'BlackBox Studios', pt: 'BlackBox Studios' },
            footerDesc: { en: 'Programmer, based in Luanda', pt: 'Programador, residente em Luanda' }
        },
        products: {
            navProducts: { en: 'Products', pt: 'Produtos' },
            sectionEbooks: { en: 'EBOOKS', pt: 'LIVROS DIGITAIS' },
            sectionCourses: { en: 'COURSES', pt: 'CURSOS' },
            sectionMerch: { en: 'MERCH', pt: 'MERCHANDISING' },
            sectionDevTools: { en: 'DEVELOPER TOOLS', pt: 'FERRAMENTAS DE PROGRAMAÇÃO' },
            codeSnippetManager: { en: 'Code Snippet Manager', pt: 'Gestor de Fragmentos de Código' },
            codeSnippetDesc: { en: 'Organize and access your most-used code snippets with smart search and syntax highlighting.', pt: 'Organize e aceda aos seus fragmentos de código mais usados com pesquisa inteligente e realce de sintaxe.' },
            apiTestingSuite: { en: 'API Testing Suite', pt: 'Suite de Testes de API' },
            apiTestingDesc: { en: 'Comprehensive API testing tool with automated workflows and detailed analytics.', pt: 'Ferramenta completa de testes de API com fluxos automatizados e análises detalhadas.' },
            deployMasterCLI: { en: 'Deploy Master CLI', pt: 'Deploy Master CLI' },
            deployMasterDesc: { en: 'Command-line tool for seamless deployment to multiple cloud platforms with one command.', pt: 'Ferramenta de linha de comando para implementação fluida em múltiplas plataformas cloud com um comando.' },
            btnGetAccess: { en: 'Get Access', pt: 'Obter Acesso' },
            footerDesc: { en: 'Programmer, based in Luanda', pt: 'Programador, residente em Luanda' },
            ariaPrevEbook: { en: 'Previous Ebook', pt: 'Ebook Anterior' },
            ariaNextEbook: { en: 'Next Ebook', pt: 'Próximo Ebook' },
            ariaPrevCourse: { en: 'Previous Course', pt: 'Curso Anterior' },
            ariaNextCourse: { en: 'Next Course', pt: 'Próximo Curso' },
            ariaPrevMerch: { en: 'Previous Merch', pt: 'Item Anterior' },
            ariaNextMerch: { en: 'Next Merch', pt: 'Próximo Item' }
        },
        discover: {
            navDiscover: { en: 'Discover+', pt: 'Descobrir+' },
            sectionAboutMe: { en: 'About Me', pt: 'Sobre Mim' },
            sectionTributes: { en: 'Tributes', pt: 'Tributos' },
            cardMyStory: { en: 'My Story', pt: 'A Minha História' },
            cardEarlyDays: { en: 'Early Days', pt: 'Primeiros Anos' },
            footerDesc: { en: 'Programmer, based in Luanda', pt: 'Programador, residente em Luanda' },
            storyContent: {
                en: "I was sitting in this booth in some random diner in Canada, and I swear, my orange juice was the size of a gallon bucket. I had to use both hands just to make sure I didn't cause a national disaster on the table.\n\nMom was sitting right across from me, wearing this bright pink scarf, and honestly, it felt like we were the only two people in the whole place. The air smelled like greasy fries and maple syrup, which is basically the official scent of my entire childhood.\n\nBack then, I didn't have a phone to look at, so I just sat there fiddling with some toy or a sugar packet while we waited for the food. It was one of those \"boring\" weekend lunches that I realize now was actually the best part of the week. No drama, no internet, just a plate of fries between us and the feeling that as long as she was there, I was doing okay.",
                pt: "Estava sentado neste compartimento num restaurante qualquer no Canadá, e juro, o meu sumo de laranja era do tamanho de um balde. Tive de usar as duas mãos para garantir que não causava um desastre nacional em cima da mesa.\n\nA minha mãe estava sentada à minha frente, com um lenço rosa vivo, e honestamente, parecia que éramos as únicas duas pessoas no local. O ar cheirava a batatas fritas gordurosas e xarope de ácer, que é basicamente o perfume oficial de toda a minha infância.\n\nNa altura, não tinha telemóvel para olhar, então ficava ali a brincar com algum brinquedo ou um pacote de açúcar enquanto esperávamos pela comida. Era um daqueles almoços de fim de semana \"aborrecidos\" que percebo agora que eram na verdade a melhor parte da semana. Sem drama, sem internet, apenas um prato de batatas fritas entre nós e a sensação de que enquanto ela estivesse lá, eu estava bem."
            },
            earlyDaysContent: {
                en: "I was standing there in the middle of the St. Bernard class photo, trying to look cool while being surrounded by about twenty other kids who were all probably thinking about recess. My teacher was beaming in the back row, and I remember the gym floor having those specific blue and black tape marks that told us exactly where to stand so the photographer wouldn't lose his mind.\n\nI feel like this was the peak of \"school style\"—striped polos, patterned dresses, and that one kid who always managed to wear a graphic tee to picture day. I was just one face in a sea of bowl cuts and messy pigtails, living in that weird world where your biggest responsibility was remembering your library book and not losing your lunchbox. It was a time when my whole universe was basically just that hallway and the playground outside, and I had no idea that this grainy photo would eventually be the only proof that we all once hung out in the same room every day.",
                pt: "Estava ali no meio da foto de turma do St. Bernard, a tentar parecer fixe enquanto estava rodeado por cerca de vinte miúdos que provavelmente só pensavam no recreio. A minha professora estava radiante na última fila, e lembro-me do chão do ginásio ter aquelas marcas de fita azul e preta que nos diziam exatamente onde ficar para o fotógrafo não enlouquecer.\n\nSinto que isto era o auge do \"estilo escolar\"—polos às riscas, vestidos estampados, e aquele miúdo que sempre conseguia usar uma t-shirt com estampa no dia da foto. Eu era apenas mais uma cara num mar de cortes de cabelo em tigela e rabos de cavalo desarrumados, a viver naquele mundo estranho em que a tua maior responsabilidade era lembrar-te do livro da biblioteca e não perder a lancheira. Era uma altura em que todo o meu universo era basicamente aquele corredor e o recreio lá fora, e não fazia ideia de que esta foto granulada acabaria por ser a única prova de que um dia passámos todos os dias na mesma sala."
            },
            xxxContent: {
                en: "I remember hearing the news and it felt like the air just left the room. It was different with X because it felt like he was actually growing up right alongside us, figuring out how to be a better person in real time. He went from this chaotic kid with blonde and black hair to someone who just wanted to spread a message of positivity and helping people find their way out of the dark.\n\nI think back to the 2009 version of me in that St. Bernard class photo and realize how much music like his eventually became the soundtrack for when things got complicated. He was the one artist who wasn't afraid to say he was hurting, and in a weird way, that made the rest of us feel like it was okay to not be okay. Even though he's gone, I still feel that energy in the songs—like he left a map behind for anyone else feeling lost in their own head. Long Live Jahseh.",
                pt: "Lembro-me de ouvir a notícia e parecia que o ar saiu da sala. Foi diferente com o X porque parecia que ele estava realmente a crescer ao nosso lado, a descobrir como ser uma pessoa melhor em tempo real. Passou daquele miúdo caótico com cabelo loiro e preto para alguém que só queria espalhar uma mensagem de positividade e ajudar as pessoas a encontrar o caminho para sair da escuridão.\n\nPenso na versão de 2009 de mim naquela foto de turma do St. Bernard e percebo o quanto música como a dele acabou por se tornar a banda sonora para quando as coisas ficaram complicadas. Ele era o artista que não tinha medo de dizer que estava magoado, e de forma estranha, isso fez o resto de nós sentir que era okay não estar okay. Mesmo que ele tenha partido, ainda sinto essa energia nas músicas—como se tivesse deixado um mapa para quem se sente perdido na própria cabeça. Long Live Jahseh."
            },
            wayneContent: {
                en: "Lil Wayne isn't just a rapper; he's the blueprint for what it means to actually outwork everybody in the room. I look at a guy like Weezy and see a man who treated the recording booth like a 24/7 office. He didn't just wait for inspiration to hit—he stayed in the studio until he became the best rapper alive, proving that genius is mostly just incredible discipline and refusing to sleep until the job is done.\n\nThere's something deeply respectable about the way he carries himself as a man, too. He's a standup dude who stayed loyal to his circle and never stopped evolving, even when he was already at the top of the mountain. Seeing him transition from the wildest artist on the planet to a seasoned veteran who still skates and records every single day is the ultimate motivation. He makes me want to put that same level of \"first in, last out\" energy into everything I do, reminding me that if you want to be a legend, you have to work like you're still trying to make a name for yourself.",
                pt: "O Lil Wayne não é apenas um rapper; é o modelo do que significa realmente superar toda a gente na sala. Olho para um tipo como o Weezy e vejo um homem que tratou a cabine de gravação como um escritório 24/7. Ele não esperou que a inspiração chegasse—ficou no estúdio até se tornar o melhor rapper vivo, provando que o génio é maioritariamente disciplina incrível e recusar dormir até o trabalho estar feito.\n\nHá algo profundamente respeitável na forma como ele se conduz como homem. É um gajo sério que manteve lealdade ao seu círculo e nunca parou de evoluir, mesmo quando já estava no topo da montanha. Vê-lo passar do artista mais selvagem do planeta para um veterano experiente que ainda anda de skate e grava todos os dias é a motivação suprema. Faz-me querer colocar o mesmo nível de energia \"primeiro a chegar, último a sair\" em tudo o que faço, recordando-me que se queres ser uma lenda, tens de trabalhar como se ainda estivesses a tentar fazer um nome por ti."
            }
        },
        admin: {
            navBack: { en: 'Back to Site', pt: 'Voltar ao Site' },
            navAdmin: { en: 'Admin Dashboard', pt: 'Painel de Administração' },
            contentManagement: { en: 'Content Management', pt: 'Gestão de Conteúdo' },
            latestUpdates: { en: 'Latest Updates (Main Page)', pt: 'Últimas Atualizações (Página Principal)' },
            addEditUpdate: { en: 'Add / Edit Update', pt: 'Adicionar / Editar Atualização' },
            labelTitle: { en: 'Title', pt: 'Título' },
            labelDate: { en: 'Date', pt: 'Data' },
            labelImagePath: { en: 'Image Path (Optional)', pt: 'Caminho da Imagem (Opcional)' },
            labelDescription: { en: 'Description', pt: 'Descrição' },
            placeholderTitle: { en: 'Update Title', pt: 'Título da Atualização' },
            placeholderDate: { en: 'Nov 2026', pt: 'Nov 2026' },
            placeholderImage: { en: 'IMG/project1.png', pt: 'IMG/project1.png' },
            placeholderDesc: { en: "What's new?", pt: 'O que há de novo?' },
            noteImagePath: { en: "Note: Use local paths like 'IMG/filename.png'", pt: "Nota: Use caminhos locais como 'IMG/fichheiro.png'" },
            btnSaveUpdate: { en: 'Save Update', pt: 'Guardar Atualização' },
            btnClearForm: { en: 'Clear Form', pt: 'Limpar Formulário' },
            existingUpdates: { en: 'Existing Updates', pt: 'Atualizações Existentes' },
            discoverContent: { en: 'Discover+ Content', pt: 'Conteúdo Discover+' },
            btnSaveDiscover: { en: 'Save All Discover+ Content', pt: 'Guardar Todo o Conteúdo Discover+' },
            adminPanel: { en: 'Admin Panel', pt: 'Painel de Admin' }
        }
    };

    window.translations = T;

    var pageMaps = {
        index: [
            ['#glass-nav a[href="Discover+.html"]', 'navDiscover'],
            ['#glass-nav a[href="Products.html"]', 'navProducts'],
            ['.hero-subtitle', 'heroSubtitle'],
            ['.hero-location', 'heroLocation'],
            ['.hero-cta .cta-btn.primary', 'ctaViewWork'],
            ['.hero-cta .cta-btn.secondary', 'ctaGetInTouch'],
            ['.scroll-indicator span', 'scrollExplore'],
            ['.about-section .section-title', 'aboutMe'],
            ['.about-content .lead-text', 'leadText'],
            ['.about-content .about-text p:nth-of-type(2)', 'aboutP1'],
            ['.about-content .about-text p:nth-of-type(3)', 'aboutP2'],
            ['.skills-grid .skill-card:nth-child(1) h3', 'skillWebDev'],
            ['.skills-grid .skill-card:nth-child(1) p', 'skillWebDevDesc'],
            ['.skills-grid .skill-card:nth-child(2) h3', 'skillUIUX'],
            ['.skills-grid .skill-card:nth-child(2) p', 'skillUIUXDesc'],
            ['.skills-grid .skill-card:nth-child(3) h3', 'skill3D'],
            ['.skills-grid .skill-card:nth-child(3) p', 'skill3DDesc'],
            ['.skills-grid .skill-card:nth-child(4) h3', 'skillResponsive'],
            ['.skills-grid .skill-card:nth-child(4) p', 'skillResponsiveDesc'],
            ['.projects-section .section-title', 'featuredProjects'],
            ['.project-card .view-project', 'viewProject', 'text', true],
            ['.projects-grid .project-card:nth-child(1) .project-info h3', 'projectDiscover'],
            ['.projects-grid .project-card:nth-child(1) .project-info p', 'projectDiscoverDesc'],
            ['.projects-grid .project-card:nth-child(2) .project-info h3', 'projectBlackBox'],
            ['.projects-grid .project-card:nth-child(2) .project-info p', 'projectBlackBoxDesc'],
            ['.projects-grid .project-card:nth-child(3) .project-info h3', 'projectRoast'],
            ['.projects-grid .project-card:nth-child(3) .project-info p', 'projectRoastDesc'],
            ['.dynamic-section .section-title', 'latestUpdates'],
            ['.content-card:nth-child(1) h3', 'cardNewWebsite'],
            ['.content-card:nth-child(1) p', 'cardNewWebsiteDesc'],
            ['.content-card:nth-child(2) h3', 'cardYouTubeMilestone'],
            ['.content-card:nth-child(2) p', 'cardYouTubeMilestoneDesc'],
            ['.contact-section .section-title', 'getInTouch'],
            ['.contact-intro', 'contactIntro'],
            ['.contact-methods a.contact-card:nth-of-type(1) h3', 'contactEmail'],
            ['.contact-methods a.contact-card:nth-of-type(2) h3', 'contactLinkedIn'],
            ['.contact-methods a.contact-card:nth-of-type(2) p', 'contactLinkedInDesc'],
            ['.contact-methods a.contact-card:nth-of-type(3) h3', 'contactYouTube'],
            ['.contact-methods a.contact-card:nth-of-type(3) p', 'contactYouTubeDesc'],
            ['.footer-desc', 'footerDesc']
        ],
        products: [
            ['#glass-nav a', 'navProducts'],
            ['.ebooks-carousel-section .section-title', 'sectionEbooks'],
            ['.courses-carousel-section .section-title', 'sectionCourses'],
            ['.merch-carousel-section .section-title', 'sectionMerch'],
            ['.products-section:last-of-type .section-title', 'sectionDevTools'],
            ['.products-grid .product-card:nth-child(1) h3', 'codeSnippetManager'],
            ['.products-grid .product-card:nth-child(1) p', 'codeSnippetDesc'],
            ['.products-grid .product-card:nth-child(2) h3', 'apiTestingSuite'],
            ['.products-grid .product-card:nth-child(2) p', 'apiTestingDesc'],
            ['.products-grid .product-card:nth-child(3) h3', 'deployMasterCLI'],
            ['.products-grid .product-card:nth-child(3) p', 'deployMasterDesc'],
            ['.products-grid .product-card:nth-child(1) .product-btn', 'btnGetAccess'],
            ['.products-grid .product-card:nth-child(2) .product-btn', 'btnGetAccess'],
            ['.products-grid .product-card:nth-child(3) .product-btn', 'btnGetAccess'],
            ['.footer-desc', 'footerDesc'],
            ['.carousel-prev-ebook', 'ariaPrevEbook', 'aria-label'],
            ['.carousel-next-ebook', 'ariaNextEbook', 'aria-label'],
            ['.carousel-prev', 'ariaPrevCourse', 'aria-label'],
            ['.carousel-next', 'ariaNextCourse', 'aria-label'],
            ['.carousel-prev-merch', 'ariaPrevMerch', 'aria-label'],
            ['.carousel-next-merch', 'ariaNextMerch', 'aria-label']
        ],
        discover: [
            ['#glass-nav a', 'navDiscover'],
            ['.about-me-section .section-title', 'sectionAboutMe'],
            ['.tributes-section .section-title', 'sectionTributes'],
            ['.about-me-section .about-card:nth-child(1) .about-text h3', 'cardMyStory'],
            ['.about-me-section .about-card:nth-child(2) .about-text h3', 'cardEarlyDays'],
            ['#storyContent', 'storyContent', 'story'],
            ['#earlyDaysContent', 'earlyDaysContent', 'story'],
            ['#xxxContent', 'xxxContent', 'story'],
            ['#wayneContent', 'wayneContent', 'story'],
            ['.footer-desc', 'footerDesc']
        ],
        admin: [
            ['#glass-nav a.back-arrow', 'navBack'],
            ['#glass-nav a.active', 'navAdmin'],
            ['.section-container h1.section-title', 'contentManagement'],
            ['.admin-section:first-of-type h2', 'latestUpdates'],
            ['#updateFormContainer h3', 'addEditUpdate'],
            ['#updateFormContainer .admin-form-group:nth-child(3) label', 'labelTitle'],
            ['#updateFormContainer .admin-form-group:nth-child(4) label', 'labelDate'],
            ['#updateFormContainer .admin-form-group:nth-child(5) label', 'labelImagePath'],
            ['#updateFormContainer .admin-form-group:nth-child(6) label', 'labelDescription'],
            ['#updateTitle', 'placeholderTitle', 'placeholder'],
            ['#updateDate', 'placeholderDate', 'placeholder'],
            ['#updateImage', 'placeholderImage', 'placeholder'],
            ['#updateDesc', 'placeholderDesc', 'placeholder'],
            ['.admin-section:first-of-type .preview-area', 'noteImagePath'],
            ['#updateFormContainer .cta-btn.primary', 'btnSaveUpdate'],
            ['#updateFormContainer .cta-btn.secondary', 'btnClearForm'],
            ['.admin-section:first-of-type h3:last-of-type', 'existingUpdates'],
            ['.admin-section:nth-of-type(2) h2', 'discoverContent'],
            ['.admin-section:nth-of-type(2) .cta-btn.primary', 'btnSaveDiscover'],
            ['.footer-name', 'adminPanel']
        ]
    };

    window.applyTranslations = function (pageId, lang) {
        window.currentLang = lang;
        const t = T[pageId];
        const map = pageMaps[pageId];
        if (!t || !map) return;

        map.forEach(function (item) {
            const selector = item[0];
            const key = item[1];
            const attr = item[2] || 'text';
            const multiple = item[3] === true;
            const els = multiple ? document.querySelectorAll(selector) : [document.querySelector(selector)];
            if (!t[key] || !t[key][lang]) return;
            els.forEach(function (el) {
                if (!el) return;
            if (attr === 'placeholder') el.placeholder = t[key][lang];
            else if (attr === 'aria-label') el.setAttribute('aria-label', t[key][lang]);
            else if (attr === 'story') el.innerHTML = '<p>' + (t[key][lang] || '').replace(/\n/g, '<br>') + '</p>';
            else if (attr === 'text') {
                if (selector.includes('glass-nav') && (pageId === 'products' || pageId === 'discover')) {
                    el.innerHTML = '<i class="fas fa-arrow-left"></i> ' + t[key][lang];
                } else {
                    el.textContent = t[key][lang];
                }
            }
            });
        });
    };

    window.initLanguage = function (pageId) {
        const lang = window.getStoredLang();
        window.applyTranslations(pageId, lang);

        const setLang = function (l) {
            window.setStoredLang(l);
            window.applyTranslations(pageId, l);
            var enBtn = document.getElementById('lang-en');
            var ptBtn = document.getElementById('lang-pt');
            if (enBtn) enBtn.style.color = (l === 'en') ? '#fff' : '#888';
            if (ptBtn) ptBtn.style.color = (l === 'pt') ? '#fff' : '#888';
            if (typeof window.onLanguageChange === 'function') window.onLanguageChange(l);
        };

        var enBtn = document.getElementById('lang-en');
        var ptBtn = document.getElementById('lang-pt');
        if (enBtn) enBtn.addEventListener('click', function () { setLang('en'); });
        if (ptBtn) ptBtn.addEventListener('click', function () { setLang('pt'); });

        if (enBtn) enBtn.style.color = (lang === 'en') ? '#fff' : '#888';
        if (ptBtn) ptBtn.style.color = (lang === 'pt') ? '#fff' : '#888';
    };
})();
