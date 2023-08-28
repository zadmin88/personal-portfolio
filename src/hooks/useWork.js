const testProjects = [
  {
    id: "montanera",
    heroUrl: "/images/work/montanera/heroMontanera.png",
    liveDemo: "https://montanera-store.web.app/",
    cardUrl: [
      "/images/work/montanera/slideOne.png",
      "/images/work/montanera/slideTwo.png",
      "/images/work/montanera/slideThree.png",
    ],
    sliderImages: [
      {
        original: "/images/work/montanera/sliderOne.png",
        thumbnail: "/images/work/montanera/sliderOne.png",
      },
      {
        original: "/images/work/montanera/sliderTwo.png",
        thumbnail: "/images/work/montanera/sliderTwo.png",
      },
      {
        original: "/images/work/montanera/sliderThree.png",
        thumbnail: "/images/work/montanera/sliderThree.png",
      },
      {
        original: "/images/work/montanera/sliderFour.png",
        thumbnail: "/images/work/montanera/sliderFour.png",
      },
    ],
    videoURL: true,
    approachSrc: "/images/work/montanera/approachImage.gif",
    name: "La Montañera",
    subtitle: "YEAR: 2022 / ROLE: FULLSTACK",
    shortDescription:
      "Dynamic e-commerce platform for selling craft beer with an integrated dashboard for inventory and sales management  ",
    stackUsed: ["Angular", "Firebase", "Tailwind"],
    stackDescription:
      "Dynamic e-commerce platform for selling craft beer with an integrated dashboard for inventory and sales management ",
    whatWeDid: [
      "User Interface",
      "Design User Experience",
      "Front-end Development",
      "Back-end Development",
      "Support and Maintenance",
    ],

    objective: [
      "The objective is to effectively reach and connect with craft beer enthusiasts, enabling them to easily explore, select, and purchase our diverse range of craft beers,while maintaining a minimalist and visually appealing design that reflects the artisanal essence of the brand",
      "For the owners, our primary objective is to provide a streamlined e-commerce solution that empowers efficient inventory management and facilitates comprehensive sales tracking. By implementing a user-friendly and intuitive admin dashboard",
    ],

    approach:
      "Angular-based craft beer e-commerce app enriched with Firebase and NgRx to deliver a seamless user experience. Employ Firebase's backend-as-a-service suite, integrating Firestore for structured data storage, Firebase Authentication for secure user management, and Firebase Hosting for easy deployment. Utilize NgRx for sophisticated state management, ensuring synchronized data flow and enabling real-time updates. Implement responsive design principles with Tailwind CSS to ensure optimal display across devices. The admin dashboard, empowered by Firestore's real-time capabilities, provides inventory control and sales insights.",
  },
  {
    id: "mymoney",
    heroUrl: "/images/work/mymoney/heroMymoney.png",
    liveDemo: "https://nextjs-mymoney.vercel.app/",
    cardUrl: [
      "/images/work/mymoney/slideOne.png",
      "/images/work/mymoney/slideTwo.png",
    ],
    sliderImages: [
      {
        original: "/images/work/mymoney/sliderOne.png",
        thumbnail: "/images/work/mymoney/sliderOne.png",
      },
      {
        original: "/images/work/mymoney/sliderTwo.png",
        thumbnail: "/images/work/mymoney/sliderTwo.png",
      },
      {
        original: "/images/work/mymoney/sliderThree.png",
        thumbnail: "/images/work/mymoney/sliderThree.png",
      },
      {
        original: "/images/work/mymoney/sliderFour.png",
        thumbnail: "/images/work/mymoney/sliderFour.png",
      },
      {
        original: "/images/work/mymoney/sliderFive.png",
        thumbnail: "/images/work/mymoney/sliderFive.png",
      },
      {
        original: "/images/work/mymoney/sliderSix.png",
        thumbnail: "/images/work/mymoney/sliderSix.png",
      },
    ],
    approachSrc: "/images/work/mymoney/approachImage.gif",
    name: "MyMoney",
    subtitle: "YEAR: 2022 / ROL: FULLSTACK",

    shortDescription:
      "MyMoney web app is a user-friendly and efficient tool designed to streamline expense tracking and management. ",
    stackUsed: ["Nextjs", "MongoDB", "Tailwind", "Prisma"],
    stackDescription:
      "Momiji Life is a new line of skincare products, based on the Korean philosophy and produced by Momiji. For the launch of this new product line, Momiji temporarily replaces the brand's main page as part of its promotion strategy.",
    whatWeDid: [
      "User Interface",
      "Design User Experience",
      "Front-end Development",
      "Back-end Development",
      "Support and Maintenance",
    ],
    objective: [
      "The primary objective of the ExpenseManager web app is to provide a versatile and user-centric solution for effectively tracking and managing personal expenses. The app aims to offer seamless access and usability across both mobile and web platforms, enabling users to effortlessly monitor their financial transactions regardless of their location or device. By offering intuitive expense input, categorized organization, and real-time syncing, the ExpenseManager app seeks to empower users with accurate and up-to-date insights into their spending habits. ",
    ],
    approach:
      "Choosing Next.js, I ensured a seamless user experience on both mobile and web platforms, while also harnessing its server-side rendering capabilities for optimized performance. MongoDB and Prisma were employed to establish a robust data foundation, enabling smooth management of accounts, movements, and budgets. The interface's visual appeal and responsiveness were achieved through Tailwind CSS, creating a polished look that adapts effortlessly to various screen sizes. With an understanding of these technologies, I implemented user authentication with NextAuth for secure access and developed intuitive interfaces for adding, categorizing, and analyzing expenses. ",
  },
];

const useWork = () => {
  const getAll = () => testProjects;

  const getById = (id) => {
    return testProjects.find((item) => item.id === id);
  };

  return {
    getAll,
    getById,
  };
};

export default useWork;
