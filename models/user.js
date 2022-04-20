module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      useremail: {
        /* column 속성들 */
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        /* 여기까지 */
      },
      password: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      timestamps: false,
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Post, {
      onDelete: "CASCADE",
    });
    db.User.hasMany(db.Comment, {
      onDelete: "CASCADE",
    });
  };

  return User;
};
