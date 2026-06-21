import ServicePage from './ServicePage';

const strengthConfig = {
  hero: {
    title: 'LIFT',
    subtitle: 'Strength Training at Humble Loft',
    bgVideo: `${import.meta.env.BASE_URL}images/extracted/strength/strength_video_00.mp4`,
  },
  training: {
    heading: 'THE TRAINING',
    paragraphs: [
      "Build real strength. Hypertrophy, powerlifting, functional training — all programmed around your goals by a certified trainer in a private studio.",
      "No cookie-cutter plans. No crowded gym floors. Just focused, 1-on-1 coaching with full access to commercial-grade equipment.",
    ],
    video: `${import.meta.env.BASE_URL}images/extracted/strength/strength_video_02.mp4`,
    imageAlt: 'Strength training session',
  },
  coach: {
    heading: 'CHOOSE YOUR COACH',
    paragraphs: [
      "All strength sessions are coached by Liam and Hannah : NASM and CanFitPro certified trainers with backgrounds in athletics, kinesiology and competitive sports.",
      "Whether your goal is muscle gain, fat loss, injury rehab or athletic performance — your program is built for you.",
    ],
    tagline: "Your goals. Your pace. Your session.",
    video: `${import.meta.env.BASE_URL}images/extracted/strength/strength_video_01.mp4`,
    imageAlt: 'Strength coaches',
  },
  features: {
    heading: "What it's for :",
    items: [
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/strength/strength_image_04.png`} alt="Beginners" />,
        label: 'Beginners',
        sublabel: null,
      },
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/strength/strength_image_01.png`} alt="Athletes" />,
        label: 'Athletes',
        sublabel: null,
      },
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/strength/strength_image_02.png`} alt="Rehab/Recovery" />,
        label: 'Rehab/Recovery',
        sublabel: null,
      },
    ],
  },
  cta: {
    heading: 'Strength starts with showing up.',
    sub: 'Session packages available in 5, 10 and 20.',
    btnText: 'DM TO BOOK',
  },
};

function StrengthPage() {
  return <ServicePage config={strengthConfig} />;
}

export default StrengthPage;
