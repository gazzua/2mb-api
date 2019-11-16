import chalk from 'chalk';
import {
  InitOptions,
  Model,
  ModelAttributes,
  Sequelize,
} from 'sequelize';

export default class SequelizeModelExtended extends Model {
  static getModelRepresantation(sequelize: Sequelize): [ModelAttributes, InitOptions] {
    console.log(
      `getModelRepresantation(): model - %s is ${chalk.red('not')} defined. %s.init() impossible`,
      this.name,
      sequelize.constructor.name,
    );
    throw new Error('model is not defined');
  }

  static initializeModel(sequelize: Sequelize) {
    const [modelAttributes, initOptions] = this.getModelRepresantation(sequelize);
    console.log(
      `initializeModel(), model - ${chalk.green('%s')}, modelAttributes: %j`,
      this.name,
      modelAttributes,
    );
    this.init(modelAttributes, initOptions);
  }

  static makeAssociations(): void {
    throw new Error('association is not defined');
  }
}
