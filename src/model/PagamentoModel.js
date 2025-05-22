import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // ajuste o caminho conforme seu projeto

const Pagamento = sequelize.define('Pagamento', {
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendente',
  },
  dataPagamento: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Pagamento;
