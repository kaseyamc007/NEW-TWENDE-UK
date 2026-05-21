import { FAQItem, Testimonial, BenefitItem, MembershipPlan } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Who can join Twende Zambia UK?',
    answer: 'Any person of Zambian origin, heritage, or connection (including spouses and children) residing in the United Kingdom can become a member of Twende Zambia UK.'
  },
  {
    id: 'faq-2',
    category: 'Costs',
    question: 'How much does membership and participation cost?',
    answer: 'There are two distinct parts: annual membership registration and communal contributions when bereavement occurs. Adult Membership is £10 per year, Child Membership is £5 per year. When an active registered member suffers a bereavement, members make a pre-agreed standard contribution of £30 to the communal bereavement pool.'
  },
  {
    id: 'faq-3',
    category: 'Eligibility',
    question: 'When do I qualify for financial assistance?',
    answer: 'To qualify for the repatriation payout of up to £10,000, you must be a fully registered member for at least six (6) consecutive months with all annual dues paid, and you must have contributed to any bereavement pools raised during your active membership period.'
  },
  {
    id: 'faq-4',
    category: 'Claims',
    question: 'How is the payout made and how fast is it processed?',
    answer: 'Upon bereavement, the family submits a claim along with official UK documentation (e.g., Death Certificate or coroner confirmation) and proof of Zambian origin. The committee verifies the claim, issues an official alert to the group, and processes the payout directly into the nominated beneficiary account within 48 to 72 hours.'
  },
  {
    id: 'faq-5',
    category: 'Children',
    question: 'Can children be registered under an adult membership?',
    answer: 'Yes. Children under 18 can be registered as child members for £5 per year per child. This ensures coverage under the same group bereavement community scheme.'
  },
  {
    id: 'faq-6',
    category: 'Repatriation',
    question: 'Can the money be used for purposes other than casket transportation?',
    answer: 'Yes. While the community’s primary objective is assisting families in bringing their loved ones back home to rest in Zambia, the flat £10,000 bereavement payout is given to the direct legal beneficiary to use for related costs including casket, flights, funeral director fees, or local UK cremation services as the family sees fit.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Mwansa Chilufya',
    location: 'London, UK',
    text: 'When we lost our uncle last autumn, the shock was unbearable. Repatriating his body to Ndola seemed financially insurmountable. Thanks to the prompt payout from Twende Zambia UK, we sent him off with complete dignity.',
    role: 'Active Member',
    joinedYear: '2022'
  },
  {
    id: 't-2',
    name: 'Sarah Adebayo-Banda',
    location: 'Birmingham, UK',
    text: 'Being part of this group is more than just financial security; it is a spiritual assurance. Knowing that our fellow Zambian brothers and sisters are standing together with us in our darkest hours is priceless.',
    role: 'Committee Contributor',
    joinedYear: '2023'
  },
  {
    id: 't-3',
    name: 'Chipo Phiri',
    location: 'Manchester, UK',
    text: 'I highly recommend every single Zambian in the UK to register. It is only £10 a year! You protect your family, participate in an elegant cultural support network, and keep our heritage united.',
    role: 'Community Advocate',
    joinedYear: '2021'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    icon: 'ShieldCheck',
    title: 'Absolute Peace of Mind',
    description: 'Ensure that if tragedy strikes, your family will not be forced to launch stressful crowdfunding campaigns or struggle with bank loans during mourning.'
  },
  {
    icon: 'Coins',
    title: 'Up to £10,000 Payout',
    description: 'A solid financial cushion designed specifically to match the real-world cost of flights, professional repatriation firms, and Zambian funeral arrangements.'
  },
  {
    icon: 'Heart',
    title: 'Compassionate Community',
    description: 'Not just a payment grid. Our members offer active WhatsApp support and coordination to help navigate British bureaucracy and Zambian logistics.'
  },
  {
    icon: 'Clock',
    title: 'Rapid 48hr Dispatch',
    description: 'No insurance red tape or multi-week verification processes. We operate with high trust, dispatching funds directly when paperwork is received.'
  }
];

export const PLANS_DATA: MembershipPlan[] = [
  {
    id: 'plan-adult',
    name: 'Adult Membership',
    price: 10,
    period: 'per year',
    features: [
      'Full eligibility for 18+ individuals',
      'Exclusive access to WhatsApp Group',
      'Right to nominate 1 beneficiary',
      'Access to standard £10,000 payout pool',
      'Participate in quarterly general meetings'
    ],
    ctaText: 'Register as Adult',
    bgColor: 'bg-white',
    textColor: 'text-neutral-800',
    accentColor: 'border-emerald-600 hover:border-emerald-500'
  },
  {
    id: 'plan-child',
    name: 'Child Membership',
    price: 5,
    period: 'per year',
    features: [
      'Eligibility for children under 18 years',
      'Linked to an active adult sponsor',
      'Fully covered under the £10,000 fund',
      'No voting duties required',
      'Seamless transition to adult tier at 18'
    ],
    ctaText: 'Add Child Member',
    bgColor: 'bg-white border-neutral-200',
    textColor: 'text-neutral-800',
    accentColor: 'border-orange-500 hover:border-orange-400'
  },
  {
    id: 'plan-contrib',
    name: 'Bereavement Contribution',
    price: 30,
    period: 'per callout',
    features: [
      'Pooled fund from 335+ active members',
      'Strict legal protection of funds',
      'One contribution covers one case',
      'Transparent reporting to all members',
      'Direct direct payout to bereaved family'
    ],
    ctaText: 'Contribute Now',
    bgColor: 'bg-neutral-900 border-neutral-800',
    textColor: 'text-white',
    accentColor: 'border-emerald-500 bg-emerald-700 hover:bg-emerald-600'
  }
];

export const INTERESTING_STATS = {
  activeMembersGoal: 335,
  payoutTarget: 10000,
  qualificationMonths: 6,
  bereavementContribution: 30,
  estimatedRepatriationCost: 8500, // typical flight + director fees UK to Lusaka
};
