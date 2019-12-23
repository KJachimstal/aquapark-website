import ZoneOne from '../assets/images/carnet/s1.jpg';
import ZoneTwo from '../assets/images/carnet/s2.jpg';
import VipZone from '../assets/images/carnet/vip.jpg';

export default [
  {
    name: 's1',
    image: ZoneOne,
    price: 160,
    attractions: [
      'basen rekreacyjny', 'sauna',
    ],
    expiration: '1 miesiąc',
    duration: '2h dziennie',
  },
  {
    name: 's2',
    image: ZoneTwo,
    price: 250,
    attractions: [
      'basen rekreacyjny', 'sauna', 'siłownia', 'fitness',
    ],
    expiration: '1 miesiąc',
    duration: '3h dziennie',
  },
  {
    name: 'vip',
    image: VipZone,
    price: 340,
    attractions: [
      'basen rekreacyjny', 'basen sportowy', 'sauna', 'siłownia', 'fitness',
    ],
    expiration: '1 miesiąc',
    duration: 'Cały dzień',
  },
];
