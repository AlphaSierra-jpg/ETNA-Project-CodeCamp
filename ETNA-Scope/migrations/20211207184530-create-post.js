//This modele/migration is automatically generated by the following term commande line (generate in same time a model and migration)
//sequelize model:create --name Post --attributes firstName:string,lastName:string,pictureUrl:string,
//service:string,phone:string,mail:string,hrNote:string 

// once created use sequelize db:migrate to run 


// sequelize doc https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465 
//sequelize doc https://sequelize.org/master/manual/model-basics.html
//npm docs https://www.npmjs.com
//express docs https://expressjs.com
//node docs https://nodejs.org/en/
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      pictureUrl: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      hrNote: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};