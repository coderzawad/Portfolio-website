type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Zawad — 3D Portfolio",
    fullName: "Zawad",
    email: "zawad@devsnest.llc",
  },
  hero: {
    name: "Zawad",
    p: ["I develop web apps, I am a passionate fullstack web developer from Dhaka"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a newbie developer from Bangladesh, I just learnt about backend and i'm working on some cool projects. 
      As a newbie developer i have a lots of skills in the basics of web development. I am currently learning about backend. and
      I'll improve my skills furthur untill then stay connected with me for updates`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
   
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects are part of my real life work experience, Most of the apps are in beta so you can't find it in github
      But i'll update is as soon as possible, For updates stay connected to my portfolio`,
    },
  },
};
