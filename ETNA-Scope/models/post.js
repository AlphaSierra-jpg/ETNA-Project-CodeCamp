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


const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    login: DataTypes.STRING,
    pictureUrl: DataTypes.STRING,
    service: DataTypes.STRING,
    phone: DataTypes.STRING,
    mail: DataTypes.STRING,
    hrNote: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};