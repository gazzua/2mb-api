import {
  DataTypes,
  InitOptions,
  ModelAttributes,
  Sequelize,
} from 'sequelize';

import SequelizeModelExtended from './SequelizeModelExtended';

class Records extends SequelizeModelExtended {
  public id: number;
  public p_name: String; // 환자이름
  public p_email: String; // 환자이메일
  public p_birth: String; // 환자생년월일
  public symptom: String; // 환자 증상
  public prescription: String; // 처방
  public next_reserve_date: String; // 다음 예약 날짜
  public h_id: number;
  public h_email: String;
  public created_at: Date;
  public updated_at: Date;

  static getModelRepresantation(sequelize: Sequelize): [ModelAttributes, InitOptions] {
    return [
      {      
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },
        p_name: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
        p_email: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
        p_birth: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
        symptom: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
        prescription: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
        next_reserve_date: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
        h_id: {
          allowNull: false,
          type: DataTypes.INTEGER.UNSIGNED,
        },
        h_email: {
          allowNull: false,
          type: DataTypes.STRING(256)
        },
      },
      {
        sequelize,
        tableName: 'ORDER',
        timestamps: true,
        underscored: true,
      },
    ];
  }
}

export default Records;
