const bcrypt = require('bcryptjs');
const users = [
  {
    _id: "62c827b5a427b63741da9175",
    name: 'Richard E. Romero',
    email: 'richard@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '828-896-3442',
  },
  {
    _id: "62cc0791d511b304aecdfbf2",
    name: 'Brain H. Landry',
    email: 'brain@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '714-200-5488',
  },
  {
    _id: "62d2bbd22e63b40520194f1b",
    name: 'Thomas',
    email: 'thomas@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '818-363-8091',
  },
  {
    _id: "62d03a542d28e904b20e2342",
    name: 'Danielle R. Martin',
    email: 'danielle@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '831-539-6621',
  },

  {
    _id: "62d03a312d28e904b20e233c",
    name: 'Linda',
    email: 'linda@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '801-844-8271',
  },
  {
    _id: "62d02efd2d28e904b20e22bf",
    name: 'Eddie N. Garcia',
    email: 'eddie@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '917-313-4731',
  },
  {
    _id: "62cfad52484d89068aa7a81f",
    name: 'Williams',
    email: 'williams@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '714-776-3942',
  },
  {
    _id: "62cfad3d484d89068aa7a819",
    name: 'Gordon C. Lowery',
    email: 'gordon@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '858-243-0632',
  },
  {
    _id: "62cfab4b484d89068aa7a7ff",
    name: 'Lester J. Massey',
    email: 'lester@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '715-657-9865',
  },

  {
    _id: "62cfab28484d89068aa7a7f5",
    name: 'Samuel',
    email: 'samuel@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '307-202-3590',
  },
  {
    _id: "632ab0334d87ff24942109c1",
    name: 'Henry M. Koch',
    email: 'henry@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '912-587-2159',
  },
  {
    _id: "62d2bbe62e63b40520194f21",
    name: 'Kathryn J. Brown',
    email: 'kathryn@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '707-275-4858',
  },

  {
    _id: "62e4ebb90ea79023fc11d847",
    name: 'Josephine M. Peel',
    email: 'josephine@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '734-256-1159',
  },
  {
    _id: "632aae414d87ff2494210945",
    name: 'Justin J. Ruiz',
    email: 'justin@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '212-512-2888',
  },
  {
    _id: "632aae624d87ff2494210951",
    name: 'Aurora E. Amerson',
    email: 'aurora@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '660-515-7629',
  },
  {
    _id: "632aae7b4d87ff2494210967",
    name: 'Christopher M. Fox',
    email: 'christopher@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '812-886-0550',
  }
];

module.exports = users;
