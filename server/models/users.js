module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4, // Generates a random UUID automatically
  primaryKey: true,
  allowNull: false
},
    // role_Id: {
    //   type: DataTypes.INTEGER,
    // },
    mobile: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    confirm_password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  },{
  timestamps: true,
 
},
  {
    indexes: [
       
        {
            name: "users_email",
            unique: true,
            fields: ["email_id"]
        },
        {
            name: "users_mobile",
            unique: true,
            fields: ["mobile"]
        },
       
    ]
});
//   Users.associate = function (models) {
//     Users.belongsTo(models.roles, {
//       targetKey: "Id",
//       foreignKey: "Role_Id",
//       as: "Roles"
//     });
   
//   }
  return Users;
};
