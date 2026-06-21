import ServicePage from './ServicePage';

const pilatesConfig = {
  hero: {
    title: 'FLOW',
    subtitle: 'Pilates/Yoga at Humble Loft',
    bgVideo: `${import.meta.env.BASE_URL}images/extracted/pilates/pilates_video_01.mp4`,
  },
  training: {
    heading: 'THE TRAINING',
    paragraphs: [
      "Strengthen what lifting alone can't. Reformer Pilates, mat work, and yoga - focused on mobility, core stability, and body awareness.",
      "The work that keeps you moving well long term.",
    ],
    video: `${import.meta.env.BASE_URL}images/extracted/pilates/pilates_video_00.mp4`,
    imageAlt: 'Pilates reformer session',
  },
  coach: {
    heading: 'MEET YOUR INSTRUCTOR',
    paragraphs: [
      "All Pilates and yoga sessions are led by Hannah - a Wilfrid Laurier University Kinesiology graduate, Body Harmonics Pilates Certified Instructor and CanFitPro Certified Personal Trainer.",
    ],
    tagline: "Movement with precision. Coaching with care. At any level or experience.",
    image: `${import.meta.env.BASE_URL}images/extracted/pilates/pilates_image_02.jpg`,
    imageAlt: 'Hannah teaching Pilates',
  },
  features: {
    heading: 'What we offer :',
    items: [
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/pilates/pilates_image_06.png`} alt="Mat" />,
        label: 'Mat',
        sublabel: '1-on-1 / Semi-Private / Group',
      },
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/pilates/pilates_image_03.png`} alt="Reformer" />,
        label: 'Reformer',
        sublabel: '1-on-1',
      },
      {
        icon: <img src={`${import.meta.env.BASE_URL}images/extracted/pilates/pilates_image_00.png`} alt="Yoga" />,
        label: 'Yoga',
        sublabel: '1-on-1 / Semi-Private / Group',
      },
    ],
  },
  cta: {
    heading: 'Movement with precision. Coaching with care.',
    sub: 'Session packages available in 5, 10 and 20.',
    btnText: 'DM TO BOOK',
  },
};

function PilatesPage() {
  return <ServicePage config={pilatesConfig} />;
}

export default PilatesPage;
