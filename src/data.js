export const langData = {
  en: {
    hero: {
      interactive: ['TÜRKÇEYE GEÇ', 'DARK MODE'],
      title: 'Frontend Developer',
      para: '...who likes to craft solid and scalable frontend products with great user experiences.',
      name: 'Alper',
    },
    skills: {
      main_title: 'Skills',
    },
    profile: {
      main_title: 'Profile',
      sub_title: ['Basic Information', 'About Me'],
      profile_info: {
        birth_date: '06.11.1996',
        city: 'Istanbul',
        education: 'Yildiz Technical University, Naval Architecture and Marine Engineering, 2023',
        position: 'Frontend, UI',
      },
      about_me:
        'After graduating from Yıldız Technical University Naval Architecture and Marine Engineering in 2023, I started working as a project engineer at HAT-SAN Shipyard. While I was working, I started to improve myself in the software field with the help of open sources. I decided that what I really wanted to do was in the software field and I quit my job. I took 6 months of intensive software training and improved myself in JS, HTML, CSS, React.js and Java languages. My goal in the short term is to find a job opportunity where I can experience all I have learned on the job and to further improve myself in the software field.',
    },
    projects: [
      {
        title: 'Pandora',
        info: 'E-commerce platform project. Contains rotected routes which means user needs to be logged in to be able to continue shopping. User can see her/his previous orders on previous order page.',
        tools: ['react', 'redux', 'tailwindcss', 'figma', 'vercel'],
        links: [
          {
            name: 'View Site',
            site: 'https://pandora-e-commerce.vercel.app',
          },
          {
            name: 'Github',
            site: 'https://github.com/replakcan/pandora',
          },
        ],
        img_src: './images/projects/ecommerce.png',
      },
      {
        title: 'Personal Website',
        info: 'A personal website that gets the data it shows with a request made to backend server. It includes night mode that changes the page display and language changing features that update the page content according to the selected language.',
        tools: ['react', 'context API', 'vercel'],
        links: [
          {
            name: 'View Site',
            site: 'https://frontend-portfolyo.vercel.app/',
          },
          {
            name: 'Github',
            site: 'https://github.com/replakcan/frontend_portfolyo',
          },
        ],
        img_src: './images/projects/proje_1.png',
      },
      {
        title: 'Pizzalavista',
        info: 'You can add your ingridients and buy as many as you want! The price on the order recieved page after placing the order will not bother you if you like salt on your pizza! /s. ',
        tools: ['react', 'axios', 'vercel'],
        links: [
          {
            name: 'View Site',
            site: 'https://fsweb-s8-challenge-pizza-template.vercel.app/',
          },
          {
            name: 'Github',
            site: 'https://github.com/replakcan/pizzalavista',
          },
        ],
        img_src: './images/projects/pizzaProje.png',
      },
    ],
    footer: {
      title: 'Send me a message!',
      para: 'Got a question or proposal, or just want to say hello? Go ahead.',
      email: 'alper.makcan@gmail.com',
    },
  },
  tr: {
    hero: {
      interactive: ['FOR ENGLISH', 'GECE MODU'],
      title: 'Ön Uç Geliştirici',
      para: 'Ölçeklenebilir kullanıcı dostu uygulamalar konusunda hakim...',
      name: 'Alper',
    },
    skills: {
      main_title: 'Beceriler',
    },
    profile: {
      main_title: 'Profil',
      sub_title: ['Genel Bilgiler', 'Hakkımda'],
      profile_info: {
        birth_date: '06.11.1996',
        city: 'İstanbul',
        education: 'Yıldız Teknik Üniversitesi, Gemi İnş. ve Gemi Mak. Müh., 2023',
        position: 'Frontend, UI',
      },
      about_me:
        '2023 yılında Yıldız Teknik Üniversitesi Gemi İnşaatı ve Gemi Makineleri Mühendisliği’nden mezuniyetim sonrasında HAT-SAN Shipyard firmasında proje mühendisi olarak çalışmaya başladım. Çalışırken bir yandan da yazılım alanında kendimi açık kaynaklar yardımıyla geliştirmeye başladım. Asıl yapmak istediğim işin yazılım alanında olduğuna karar verdim ve işimden ayrıldım, 6 aylık yoğun yazılım eğitimi alarak kendimi JS, HTML, CSS, React.js ve Java dillerinde geliştirdim. Hedefim kısa vadede, tüm öğrendiklerimi iş başında tecrübe edeceğim bir iş fırsatı yakalamak ve yazılım alanında kendimi daha da geliştirmek.',
    },
    projects: [
      {
        title: 'Pandora',
        info: 'E-ticaret platformu projesi. Korumalı routelar sayesinde giriş yapmayan kullanıcıların sipariş oluşturmasının önüne geçer. Kullanıcı başarılı sipariş sonrası, sipariş geçmişini ilgili sekmeden görüntüleyebilir.',
        tools: ['react', 'redux', 'tailwindcss', 'figma', 'vercel'],
        links: [
          {
            name: 'View Site',
            site: 'https://pandora-e-commerce.vercel.app',
          },
          {
            name: 'Github',
            site: 'https://github.com/replakcan/pandora',
          },
        ],
        img_src: './images/projects/ecommerce.png',
      },
      {
        title: 'Kişisel Web Sitesi',
        info: 'Görüntülenen datayı backende yapılan istek ile görüntüleyen kişisel web sitesi. Sayfa görüntüsünü değiştiren gece modu ve  sayfa içeriğini seçilen dile göre güncelleyen dil değiştirme özelliklerini barındırmaktadır.',
        tools: ['react', 'context API', 'vercel'],
        links: [
          {
            name: 'View Site',
            site: 'https://frontend-portfolyo.vercel.app/',
          },
          {
            name: 'Github',
            site: 'https://github.com/Workintech/FSWeb-Frontend-Challenge',
          },
        ],
        img_src: './images/projects/proje_1.png',
      },
      {
        title: 'Pizzalavista',
        info: 'Seçtiğiniz özellikleri barındıran pizzayı oluşturarak istediğiniz kadar pizza siparişi verebilirsiniz! Tabi sipariş verdikten sonra yönlendirileceğiniz sipariş alındı sayfasındaki karşılaşacağınız fiyatın tuz oranının damak tadınızı bozacağını düşünmüyorsanız(!).',
        tools: ['react', 'axios', 'vercel'],
        links: [
          {
            name: 'View Site',
            site: 'https://fsweb-s8-challenge-pizza-template.vercel.app/',
          },
          {
            name: 'Github',
            site: 'https://github.com/replakcan/pizzalavista',
          },
        ],
        img_src: './images/projects/pizzaProje.png',
      },
    ],
    footer: {
      title: 'Bana mesaj yolla!',
      para: 'Danışmak istediğiniz veya söylemek istediğiniz herhangi bir şeyiniz varsa',
      email: 'alper.makcan@gmail.com',
    },
  },
}

export const skills = [
  {
    id: '1',
    name: 'JAVASCRIPT',
    src: './images/skills/js-logo 1.svg',
  },
  {
    id: '2',
    name: 'NODE',
    src: '/images/skills/node-js.svg',
  },
  {
    id: '3',
    name: 'REACT',
    src: './images/skills/Rectangle 35.svg',
  },
  {
    id: '4',
    name: 'VS CODE',
    src: './images/skills/Group 101.svg',
  },
  {
    id: '5',
    name: 'REDUX',
    src: './images/skills/Group 101(1).svg',
  },
  {
    id: '6',
    name: 'FIGMA',
    src: './images/skills/figma-logo 1.svg',
  },
]
