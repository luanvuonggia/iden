import React from "react";
import adminImg from "assets/images/heo.png";
export const taskList = [
  {
    id: 1,
    title: 'Make the home page dynamic',
    completed: false,
    user: {
      projectName: 'Chatbull',
      name: 'Jisoo'
    },
    dueDate: 'Tomorrow',
    tags: [1, 2]
  }, {
    id: 2,
    title: 'Design wireframes based on the requirements',
    completed: false,
    user: {
      projectName: 'Wieldy',
      name: 'Jisoo'
    },
    dueDate: 'Today',
    tags: [2, 4]
  }, {
    id: 3,
    title: 'Need to define microinteraction on click of signin button',
    completed: false,
    user: {
      projectName: 'Jumbo',
      name: 'Jisoo'
    },
    dueDate: '21 Jul',
    tags: [1, 2, 3]
  }, {
    id: 4,
    title: 'New page need to be designed for property listing',
    completed: false,
    user: {
      projectName: 'Wieldy',
      name: 'Jisoo'
    },
    dueDate: '23 Jul',
    tags: [2, 3, 4]
  }, {
    id: 5,
    title: 'Design wireframes based on the requirements',
    completed: false,
    user: {
      projectName: 'Wieldy',
      name: 'Jisoo'
    },
    dueDate: '1 Aug',
    tags: [2, 4]
  }];

export const recentActivity = [
  {
    id: 1,
    day: 'Today',
    tasks: [
      {
        id: 1,
        name: 'Mila Alba',
        title: [<span className="gx-link" key={1}>Leon</span>, ` approve Uyen's IDEN`],
        avatar: adminImg,
        imageList: [],
      },
      {
        id: 2,
        name: 'Bob Builder',
        title: [<span className="gx-link" key={1}>Leon</span>, ` rejects xuantruong's IDEN`],
        avatar: adminImg,
        imageList: [],
      },
      {
        id: 3,
        name: 'Tom Moody',
        title: [<span className="gx-link" key={1}>Leon</span>, ` rejects sanglai's IDEN`],
        avatar: adminImg,
        imageList: [],
      },
      {
        id: 4,
        name: 'Norman Dolphi',
        title: [`Norman Dolphi approve Lisa's Devera Certificate`],
        avatar: '',
        imageList: [],
      },
    ]
  },
  {
    id: 2,
    day: 'Yesterday',
    tasks: [
      {
        id: 5,
        name: 'Kily Johns',
        title: ['Agent ',
          <span className="gx-link" key={7}>Kily Johns</span>, ` has approved Devera's Certificate for `],
        avatar: '',
        imageList: [adminImg, adminImg,adminImg, adminImg, adminImg, adminImg, adminImg,],
      },
      {
        id: 6,
        name: 'Tom Moody',
        title: ['Welcome to a new agent ', <span className="gx-link" key={8}>Tom Moody in the Company</span>],
        avatar: adminImg,
        imageList: [],
      },
      {
        id: 7,
        name: 'Oliver Shorter',
        title: [<span className="gx-link" key={9}>Oliver Shorter</span>, ' is looking for an office space in ',
          <span className="gx-link" key={10}>Colorado, USA</span>],
        avatar:adminImg,
        imageList: [],
      }, {
        id: 8,
        name: 'Mila Alba',
        title: [<span className="gx-link" key={11}>Mila Alba</span>, ' left a 5 star review on ',
          <span className="gx-link" key={12}>Albama’s House</span>],
        avatar: adminImg,
        imageList: [],
      },
    ]
  }];

export const ticketList = [
  {
    id: 1,
    avatar: adminImg,
    title: 'Need a quick support on setting',
    description: [<span className="gx-link" key={13}>Joy Parish</span>, "  created ticket 15 mins ago"],
    status: 2
  }, {
    id: 2,
    avatar: adminImg,
    title: 'Pre-sale query about the product',
    description: [<span key={14} className="gx-link">You</span>, " replied 2 days ago"],
    status: 1
  }, {
    id: 3,
    avatar: adminImg,
    title: 'Regarding customization service',
    description: [<span key={15} className="gx-link">Joy Parish</span>, " replied 2 days ago"],
    status: 4
  }
];
export const taskStatus = [
  {
    id: 1,
    title: 'Critical',
    color: 'red'
  }, {
    id: 2,
    title: 'High',
    color: 'orange'
  }, {
    id: 3,
    title: 'Medium',
    color: 'green'
  }, {
    id: 4,
    title: 'Low',
    color: 'light-grey'
  }
];
export const taskTags = [
  {
    id: 1,
    name: 'HTML',
    color: 'red',
  }, {
    id: 2,
    name: 'React',
    color: 'green',
  }, {
    id: 3,
    name: 'JavaScript',
    color: 'blue',
  }, {
    id: 4,
    name: 'CSS',
    color: 'orange',
  }];
export const siteVisit = [
  {name: '1', thisYear: 0, lastYear: 0},
  {name: '2', thisYear: 0, lastYear: 1},
  {name: '3', thisYear: 5, lastYear: 2},
  {name: '4', thisYear: 10, lastYear: 0},
  {name: '5', thisYear: 4, lastYear: 1},
  {name: '6', thisYear: 16, lastYear: 3},
  {name: '7', thisYear: 5, lastYear: 1},
  {name: '8', thisYear: 11, lastYear: 5},
  {name: '9', thisYear: 6, lastYear: 2},
  {name: '10', thisYear: 11, lastYear: 3},
  {name: '11', thisYear: 30, lastYear: 2},
  {name: '12', thisYear: 10, lastYear: 1},
  {name: '13', thisYear: 13, lastYear: 0},
  {name: '14', thisYear: 4, lastYear: 2},
  {name: '15', thisYear: 3, lastYear: 8},
  {name: '16', thisYear: 1, lastYear: 0},
  {name: '17', thisYear: 0, lastYear: 0},
];

export const totalSaleData = [
  {name: 'JAN', price: 600},
  {name: 'FEB', price: 3398},
  {name: 'MAR', price: 1200},
  {name: 'APR', price: 4908},
  {name: 'MAY', price: 2908},
];

export const totalRevenueData = [
  {name: 'JAN', thisYear: 60},
  {name: 'FEB', thisYear: 90},
  {name: 'MAR', thisYear: 50},
  {name: 'APR', thisYear: 75},
  {name: 'MAY', thisYear: 60},
  {name: 'JUN', thisYear: 85},
  {name: 'JUL', thisYear: 20},
  {name: 'AUG', thisYear: 75},
  {name: 'SEP', thisYear: 60},
  {name: 'OCT', thisYear: 40},
  {name: 'NOV', thisYear: 75},
  {name: 'DEC', thisYear: 25},
];

export const trafficData = [
  {name: 'Page A', value: 0},
  {name: 'Page B', value: 2000},
  {name: 'Page C', value: 600},
  {name: 'Page D', value: 4400},
  {name: 'Page D', value: 900},
  {name: 'Page H', value: 4860},
];
