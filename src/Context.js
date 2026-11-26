import heroBackground1 from './assets/images/heroBackground1.webp'
import heroBackground2 from './assets/images/heroBackground2.webp'
import heroBackground3 from './assets/images/heroBackground3.webp'

import futureIcon1 from './assets/images/futureIcon1.svg'
import futureIcon2 from './assets/images/futureIcon2.svg'
import futureIcon3 from './assets/images/futureIcon3.svg'

import differentIcon1blue from './assets/images/differentIcon1blue.svg'
import differentIcon2blue from './assets/images/differentIcon2blue.svg'
import differentIcon3blue from './assets/images/differentIcon3blue.svg'

import differentIcon1orange from './assets/images/differentIcon1orange.svg'
import differentIcon2orange from './assets/images/differentIcon2orange.svg'
import differentIcon3orange from './assets/images/differentIcon3orange.svg'

import serviceDesign from './assets/images/serviceDesign.svg'
import serviceIdea from './assets/images/serviceIdea.svg'
import serviceChat from './assets/images/serviceChat.svg'
import servicePhoto from './assets/images/servicePhoto.svg'
import serviceMarketing from './assets/images/serviceMarketing.svg'
import serviceSupport from './assets/images/serviceSupport.svg'

import project1 from './assets/images/project1.webp'
import project2 from './assets/images/project2.webp'
import differentImg from './assets/images/differentImg.webp'

import priceImage1 from './assets/images/price1.svg'

import counterCustomers from './assets/images/counterCustomers.svg'
import counterSolutions from './assets/images/counterSolutions.svg'
import counterSupport from './assets/images/counterSupport.svg'
import counterProjects from './assets/images/counterProjects.svg'

import teamImage1 from './assets/images/team1.webp'
import teamImage2 from './assets/images/team2.webp'
import teamImage3 from './assets/images/team3.webp'
import teamImage4 from './assets/images/team4.webp'

import testimonialImage1 from './assets/images/testimonial1.webp'

import newsImg1 from './assets/images/newsImg1.webp'


const HeroSectionContext = [
  {
    background: heroBackground1,
    title1: 'Grow your brand',
    title2: 'in a changing market.',
    subtitle: 'We build marketing strategies that bring real customers, from the first idea to measurable results.'
  },
  {
    background: heroBackground2,
    title1: 'We help your business',
    title2: 'start strong and grow.',
    subtitle: 'Brand identity, websites and advertising made by one team, so every channel speaks with the same voice.'
  },
  {
    background: heroBackground3,
    title1: 'We are different',
    title2: 'from a typical agency.',
    subtitle: 'No templates and no hidden fees. Just honest work, clear reports and a team that cares about your results.'
  },
]

const FeatureSectionContext = [{
  img: futureIcon1,
  title: 'Awesome Work Place',
  subtitle: 'A modern office and a friendly team where great ideas are born every day. You are always welcome to visit us.'
}, {
  img: futureIcon2,
  title: 'Unlimited Facilities',
  subtitle: 'Research, design, advertising and analytics: everything your project needs under one roof.'
}, {
  img: futureIcon3,
  title: 'Responsive Design',
  subtitle: 'Every website we build looks perfect on phones, tablets and computers, so customers can reach you anywhere.'
}]

const DifferentSectionContext = [
  {
    img1: differentIcon1blue,
    img2: differentIcon1orange,
    title: 'Our Company History',
    subtitle: 'We started in 2015 as a small design studio. Today we are a team of specialists who have helped more than 160 companies grow.'
  },
  {
    img1: differentIcon2blue,
    img2: differentIcon2orange,
    title: 'Our Success Mission',
    subtitle: 'To make professional marketing clear and affordable for small and medium businesses.'
  },
  {
    img1: differentIcon3blue,
    img2: differentIcon3orange,
    title: 'Our Future Plan',
    subtitle: 'Opening new offices, launching free online courses and helping 500 brands grow by 2030.'
  }]

const ServiceSectionContext = [
  {
    title: 'CLEAN DESIGN',
    icon: serviceDesign,
    info: 'Simple, modern design for logos, websites and printed materials that makes your brand easy to remember.'
  },
  {
    title: 'CREATIVE IDEA',
    icon: serviceIdea,
    info: 'Fresh ideas for campaigns, slogans and content that help you stand out from your competitors.'
  },
  {
    title: 'COMMUNICATION',
    icon: serviceChat,
    info: 'Clear communication at every step: a personal manager, regular calls and weekly reports.'
  },
  {
    title: 'PHOTOGRAPHY',
    icon: servicePhoto,
    info: 'Professional photos of your products, team and office for your website and social media.'
  },
  {
    title: 'ONLINE MARKETING',
    icon: serviceMarketing,
    info: 'SEO, social media and paid advertising that bring new customers and real sales.'
  },
  {
    title: '24/7 SUPPORT',
    icon: serviceSupport,
    info: 'We are always in touch. Write or call us at any time and we will answer within one hour.'
  }
]

const ProjectSectionContext = [
  {
    title: 'Chan Agency',
    bgImage: project1,
    subtitle: 'Coaching'
  },
  {
    title: 'Court Imperial',
    bgImage: project2,
    subtitle: 'Facilitation'
  },
  {
    title: 'Financial Analysis',
    bgImage: differentImg,
    subtitle: 'Strategy'
  },
  {
    title: 'Business Growth',
    bgImage: newsImg1,
    subtitle: 'Coaching'
  },
  {
    title: 'Finance Strategy',
    bgImage: heroBackground3,
    subtitle: 'Facilitation'
  },
]

const PriceSectionContext = [
  {
    title: 'Monthly Package',
    image: priceImage1,
    price: '$31.99',
    time: '/month',
    info: ['30-day free trial', 'Synced to cloud database', '10 hours of support', 'Social media integration', 'Email support']
  },
  {
    title: 'Yearly Package',
    image: priceImage1,
    price: '$61.99',
    time: '/year',
    info: ['30-day free trial', 'Synced to cloud database', '50 hours of support', 'Social media integration', '24/7 support']
  },
  {
    title: 'Lifetime Package',
    image: priceImage1,
    price: '$99.99',
    time: 'one-time',
    info: ['All Yearly features', 'Unlimited cloud storage', 'Unlimited support hours', 'Personal manager', '24/7 priority support']
  },
]

const CounterSectionContext = [
  {
    title: 'Happy Customers',
    icon: counterCustomers,
    numb: '160+'
  },
  {
    title: 'Expert Solutions',
    icon: counterSolutions,
    numb: '80+'
  },
  {
    title: 'Online Support',
    icon: counterSupport,
    numb: '24/7'
  },
  {
    title: 'Projects Completed',
    icon: counterProjects,
    numb: '55+'
  }
]

const TeamSectionContext = [
  {
    name: 'Faria Endaloro',
    image: teamImage1,
    position: 'Customer Support',
    instaLink: '',
    fbLink: '',
    twitterLink: ''
  },
  {
    name: 'Limon Sarkar',
    image: teamImage2,
    position: 'Founder & CEO',
    instaLink: '',
    fbLink: '',
    twitterLink: ''
  },
  {
    name: 'Poran Adinson',
    image: teamImage3,
    position: 'Marketing Director',
    instaLink: '',
    fbLink: '',
    twitterLink: ''
  },
  {
    name: 'Barian Chris',
    image: teamImage4,
    position: 'Lead Designer',
    instaLink: '',
    fbLink: '',
    twitterLink: ''
  }
]

const FAQSectionContext = [
  {
    title: 'How much does marketing for my business cost?',
    subtitle: 'It depends on your goals. Our plans start at $31.99 per month, and after a free consultation we prepare an exact estimate with no hidden fees.'
  },
  {
    title: 'How soon will I see results?',
    subtitle: 'Advertising campaigns usually bring the first customers in 1–2 weeks. SEO and brand building take 3–6 months, but their results last much longer.'
  },
  {
    title: 'Do I need to sign a long-term contract?',
    subtitle: 'No. You can start with a monthly plan and cancel at any time. Most clients stay with us because they see results.'
  },
  {
    title: 'Can you work with my existing website?',
    subtitle: 'Yes. We can improve your current website or build a new one, whichever works better for your business.'
  },
  {
    title: 'How will I know what you are doing?',
    subtitle: 'You get a personal manager, a weekly report with clear numbers and full access to all your advertising accounts.'
  },
]

const TestimonialSectionContext = [
  {
    mark: 5,
    comment: 'Fulkuri rebuilt our website and set up advertising. In three months the number of orders doubled, and we finally understand where our customers come from.',
    image: testimonialImage1,
    name: 'Donald James',
    position: 'Manager, Brightline Studio'
  },
  {
    mark: 4,
    comment: 'A friendly team that always answers quickly. The new logo and photos made our café look much more professional on Instagram.',
    image: null, // no photo - the first letters of the name are shown instead
    name: 'Sofia Martin',
    position: 'Owner, Bloom Coffee'
  }
]

const NewsSectionContext = [
  {
    image: newsImg1,
    title: 'Which marketing tool should you choose?',
    subtitle: 'We compare popular tools for email, social media and analytics to help you pick the right one.',
    time: '15 Nov 2026'
  },
  {
    image: project1,
    title: 'Things you should know about branding',
    subtitle: 'Why a good logo is only the beginning, and what else makes people remember your brand.',
    time: '28 Oct 2026'
  },
  {
    image: project2,
    title: 'How will you know success when it shows?',
    subtitle: 'Five simple numbers that show whether your marketing really works.',
    time: '10 Oct 2026'
  },
  {
    image: differentImg,
    title: 'Where people develop their own potential',
    subtitle: 'A look inside our team: how we learn, share ideas and grow together.',
    time: '22 Sep 2026'
  },
]


export default {
  HeroSectionContext,
  FeatureSectionContext,
  DifferentSectionContext,
  ServiceSectionContext,
  ProjectSectionContext,
  PriceSectionContext,
  CounterSectionContext,
  TeamSectionContext,
  FAQSectionContext,
  TestimonialSectionContext,
  NewsSectionContext
}
