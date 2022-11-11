module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Appointment', [{
      userId: '1',
      appointmentName: 'Doe',
      date: '2020-05-30',
      time: '11:12',
      location: 'kandy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: '2',
      appointmentName: 'hospital',
      date: '2020-07-21',
      time: '01:12',
      location: 'colombo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Appointment', null, {});
  }
};