// to create an empty seeder please use cli sequelize seed:generate --name add-posts then write inside up & down code to generate seed 
// sequelize db:seed:all to run the seeder on time ended

//sequelize doc https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465 
//sequelize doc https://sequelize.org/master/manual/model-basics.html
//npm docs https://www.npmjs.com
//express docs https://expressjs.com
//node docs https://nodejs.org/en/

'use strict';
module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{
      firstName : 'Sabri',
      lastName : 'BELGUERMA',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/belgue_s/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'belgue_s@etna-alternance.net',
      phone:'+33611941744',
      hrNote:null,
      service: 'Service pédagogique',
    }, {
      firstName : 'Cameron',
      lastName : 'CARRA ',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/carra_c/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'cameron.carra@etna.io',
      phone:'+336335618105',
      hrNote:null,
      service: 'Service pédagogique',
    }, {
      firstName : 'Jennifer',
      lastName : 'LOKWA',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/lokwa_j/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'jennifer.lokwa@etna.io',
      phone:'+336355580348',
      hrNote:null,
      service: 'Service pédagogique',
    }, {
      firstName : 'Fanida',
      lastName : 'DAOUAH',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/daouah_f/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'fanida.daouah@etna.io',
      phone:'+33682522737',
      hrNote:null,
      service: 'Service administratif',
    }, {
      firstName : 'Cédric',
      lastName : 'MOSCOU',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/moscou_c/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'cedric.moscou@etna.io',
      phone:'+33668780903',
      hrNote:null,
      service: 'Service administratif',
    }, {
      firstName : 'Karen',
      lastName : 'KEMAYOU',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/kemayo_k/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'karen.kemayou@etna.io',
      phone:'+33692412314',
      hrNote:null,
      service: 'Service des admissions',
    }, {
      firstName : 'Aurélie',
      lastName : 'GENEVIEVE',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/genevi_a/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'aurelie.genevieve@etna.io',
      phone:'+33626057055',
      hrNote:null,
      service: 'Service des admissions',
    }, {
      firstName : 'Flavien',
      lastName : 'MÉMAIN',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/memain_f/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'memain_f@etna-alternance.net',
      phone:'+33665018998',
      hrNote:null,
      service: 'BLU',
    }, {
      firstName : 'Quentin',
      lastName : 'VIGNAN',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/vignan_q/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : '+33689685033',
      phone:'vignan_q@etna-alternance.net',
      hrNote:null,
      service: 'BLU',
    }, {
      firstName : 'Jeanne',
      lastName : 'DRIANT',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/driant_j/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'driant_j@etna-learning.fr',
      phone:'+33664728642',
      hrNote:null,
      service: 'Studio',
    }, {
      firstName : 'Alexandre',
      lastName : 'GUILMAIN',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/guilma_a/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'alexandre.guilmain@etna.io',
      phone:'+33612373222',
      hrNote:null,
      service: 'Studio',
    }, {
      firstName : 'Adeline',
      lastName : 'DAIME',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/daime_a/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'adeline.daime@etna.io',
      phone:'+33689800926',
      hrNote:null,
      service: 'RH et Office Management',
    }, {
      firstName : 'Linda',
      lastName : 'THAP',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/thap_l/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'linda.thap@etna.io',
      phone:'+33624808468',
      hrNote:null,
      service: 'RH et Office Management',
    }, {
      firstName : 'Arthur',
      lastName : 'CROS',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/cros_a/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'cros_a@etna-alternance.net',
      phone:'+33674529994',
      hrNote:null,
      service: 'Service pédagogique',
    }, {
      firstName : 'Clément',
      lastName : 'MOESAN',
      pictureUrl : 'https://auth.etna-alternance.net/api/users/moesan_c/photo',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'clement.moesan@etna.io',
      phone:'+33615351224',
      hrNote:null,
      service: 'Service pédagogique',
    }
  ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', [{
      firstName :'Clément'
    }])
  }
};

