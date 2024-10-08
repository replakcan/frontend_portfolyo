export const langData = {
  en: {
    hero: {
      interactive: ["TÜRKÇEYE GEÇ", "DARK MODE"],
      title: "Frontend Developer",
      para: "...who likes to craft solid and scalable frontend products with great user experiences.",
      name: "Alper",
    },
    skills: {
      main_title: "Skills",
    },
    profile: {
      main_title: "Profile",
      sub_title: ["Basic Information", "About Me"],
      profile_info: {
        birth_date: "06.11.1996",
        city: "Istanbul",
        education:
          "Yildiz Technical University, Naval Architecture and Marine Engineering, 2023",
        position: "Frontend, UI",
      },
      about_me:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia adipisci facilis voluptatem dicta neque eaque quia velit, ea, perferendis inventore et aliquam quibusdam alias eligendi assumenda quis ullam doloribus.",
    },
    projects: {
      main_title: "Projects",
      project: {
        title: "Workintech",
        info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        vercel_link: "View Site",
      },
    },
    footer: {
      title: "Send me a message!",
      para: "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "replakcan@repla.com",
    },
  },
  tr: {
    hero: {
      interactive: ["FOR ENGLISH", "GECE MODU"],
      title: "Ön uç geliştirici",
      para: "...harika kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünler oluşturmayı seven.",
      name: "Alper",
    },
    skills: {
      main_title: "Beceriler",
    },
    profile: {
      main_title: "Profil",
      sub_title: ["Genel Bilgiler", "Hakkımda"],
      profile_info: {
        birth_date: "06.11.1996",
        city: "İstanbul",
        education:
          "Yıldız Teknik Üniversitesi, Gemi İnş. ve Gemi Mak. Müh., 2023",
        position: "Frontend, UI",
      },
      about_me:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia adipisci facilis voluptatem dicta neque eaque quia velit, ea, perferendis inventore et aliquam quibusdam alias eligendi assumenda quis ullam doloribus.",
    },
    projects: {
      main_title: "Projeler",
      project: {
        title: "Workintech",
        info: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        vercel_link: "Görüntüle",
      },
    },
    footer: {
      title: "Bana mesaj yolla!",
      para: "Danışmak istediğiniz veya söylemek istediğiniz herhangi bir şeyiniz varsa",
      email: "replakcan@repla.com",
    },
  },
};

export const skills = [
  {
    id: "1",
    name: "JAVASCRIPT",
    src: "./images/skills/js-logo 1.svg",
  },
  {
    id: "2",
    name: "NODE",
    src: "/images/skills/node-js.svg",
  },
  {
    id: "3",
    name: "REACT",
    src: "./images/skills/Rectangle 35.svg",
  },
  {
    id: "4",
    name: "VS CODE",
    src: "./images/skills/Group 101.svg",
  },
  {
    id: "5",
    name: "REDUX",
    src: "./images/skills/Group 101(1).svg",
  },
  {
    id: "6",
    name: "FIGMA",
    src: "./images/skills/figma-logo 1.svg",
  },
];

export const projects = [
  {
    title: "Kişisel Web Sitesi",
    info: "Görüntülenen datayı backende yapılan istek ile görüntüleyen kişisel web sitesi. Sayfa görüntüsünü değiştiren gece modu ve  sayfa içeriğini seçilen dile göre güncelleyen dil değiştirme özelliklerini barındırmaktadır.",
    tools: ["react", "context API", "vercel"],
    links: [
      {
        name: "View Site",
        site: "https://frontend-portfolyo.vercel.app/",
      },
      {
        name: "Github",
        site: "https://github.com/Workintech/FSWeb-Frontend-Challenge",
      },
    ],
    img_src: "./images/projects/proje_1.png",
  },
  {
    title: "Workintech",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis hic adipisci aut animi odio, doloremque ipsam blanditiis reprehenderit culpa, obcaecati fugit labore! Magnam optio nemo, quo vero delectus odio provident.",
    tools: ["react", "redux", "vercel"],
    links: [
      {
        name: "View Site",
        site: "https://frontend-portfolyo.vercel.app/",
      },
      {
        name: "Github",
        site: "https://github.com/Workintech/FSWeb-Frontend-Challenge",
      },
    ],
    img_src: "./images/projects/proje_1.png",
  },
];
