import ServicePage from './ServicePage';

const boxingConfig = {
  hero: {
    title: 'STRIKE',
    subtitle: 'Boxing/Muay Thai at Humble Loft',
    bgVideo: `${import.meta.env.BASE_URL}images/extracted/boxing/boxing_video_00.mp4`,
  },
  training: {
    heading: 'THE TRAINING',
    paragraphs: [
      "Learn to strike with purpose. Boxing fundamentals, Muay Thai technique, pad work, bag work and sparring — all in a private setting with a real fighter and coach.",
      "Whether you're training for fitness, self-defense, or competition — each session is tailored to your level and your goals.",
    ],
    video: `${import.meta.env.BASE_URL}images/extracted/boxing/boxing_video_01.mp4`,
    imageAlt: 'Boxing training session',
  },
  coach: {
    heading: 'MEET YOUR COACH',
    paragraphs: [
      "All striking sessions are coached by Liam : an active Muay Thai fighter, coach/instructor at M-Town Academy and NASM Certified Personal Trainer.",
    ],
    tagline: "Trained in Thailand. Competing locally.\nTeaching at Humble Loft.",
    image: `${import.meta.env.BASE_URL}images/extracted/boxing/boxing_image_02.jpg`,
    imageAlt: 'Liam coaching boxing',
  },
  features: {
    heading: "What it's for :",
    items: [
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/boxing/boxing_image_06.png`} alt="Self-defense" />,
        label: 'Self-defense',
        sublabel: null,
      },
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/boxing/boxing_image_04.png`} alt="Fitness + Conditioning" />,
        label: 'Fitness + Conditioning',
        sublabel: null,
      },
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/boxing/boxing_image_01.png`} alt="Future Competitors" />,
        label: 'Future Competitors',
        sublabel: null,
      },
    ],
  },
  cta: {
    heading: 'Learn from someone who actually does it.',
    sub: 'Session packages available in 5, 10 and 20.',
    btnText: 'DM TO BOOK',
  },
};

function BoxingPage() {
  return <ServicePage config={boxingConfig} />;
}

export default BoxingPage;
