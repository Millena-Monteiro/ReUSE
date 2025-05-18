
module.exports = (sequelize, DataTypes) => {
  const Cupom = sequelize.define('Cupom', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    validade: {
      type: DataTypes.DATE,
      allowNull: false
    },
    utilizado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Cupom.associate = (models) => {
    Cupom.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
      as: 'usuario'
    });
  };

  return Cupom;
};
