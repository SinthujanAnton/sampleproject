Reference links

{
    userId: '1';
    appointmentName: 'Doe';
    date: '2020-05-30';
    time: '11:12' ;
    location: 'kandy';
    createdAt: new Date();
    updatedAt: new Date();
  },
  {
    userId: '2';
    appointmentName: 'hospital';
    date: '2020-07-21';
    time: '01:12' ;
    location: 'colombo';
    createdAt: new Date();
    updatedAt: new Date();
  },



mkdir sequelize-project
cd sequelize-project
npm init -y
npm install sequelize pg
npm install --save-dev sequelize-cli

npx sequelize-cli init
code .

now, you can cut and paste, replacing what is currently in the file with the code below.
sequelize-project/config/config.json:

npx sequelize-cli db:create

npx sequelize-cli model:generate --name User --attributes 
firstName:string,lastName:string,email:string,password:string

npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name user

        module.exports = {
        up: (queryInterface, Sequelize) => {
            return queryInterface.bulkInsert('Users', [{
                firstName: 'John',
                lastName: 'Doe',
                email: 'demo@demo.com',
                password: '$321!pass!123$',
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
        },
        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Users', null, {});
        }
        };

npx sequelize-cli db:seed:undo
npx sequelize-cli db:migrate:undo

