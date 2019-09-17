const currentDate = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const currentMonthName = monthNames[currentDate.getMonth()];

export const firstDayOfMonth = `${new Date().toJSON().slice(0,8)}01`; // 2019-09-01

export const currentDayOfMonth = new Date().toJSON().slice(0,10); // 2019-09-<today's date>

export const currentYear = new Date().toJSON().slice(0,4);