import chalk from 'chalk';
import { Sequelize } from 'sequelize';

import config from '../config';
import SequelizeModelExtended from './SequelizeModelExtended';

const state: State = {
  sequelize: undefined,
};

const SHOULD_BE_EXPORTED_AS_WELL__Models = { // eslint-disable-line
};

export {
};

export async function initializeDB(
  dbEnv: string,
): Promise<Sequelize | null> {
  try {
    if (state.sequelize) {
      console.log('initializeDB(): db is already initialized');
      return state.sequelize;
    }

    const dbConfig = config.db.default[dbEnv];
    console.log('intializeDB(): dbEnv: %s, launchEnv: %s, dbConfig: %j', dbEnv, dbConfig);

    const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
      dialect: dbConfig.type,
      host: dbConfig.host,
      pool: {
        acquire: 30000,
        idle: 10000,
        max: dbConfig.poolMax,
        min: dbConfig.poolMin,
      },
      port: dbConfig.port,
    });

    initializeModels(Object.values(SHOULD_BE_EXPORTED_AS_WELL__Models), sequelize);
    initializeAssociations(Object.values(SHOULD_BE_EXPORTED_AS_WELL__Models));
   
    await sequelize.sync({
        // force: true,
      });
    console.log(`initializeDB(): db connection ${chalk.green('success')}.`);
    state.sequelize = sequelize;
    return sequelize;
  } catch (err) {
    console.log(`initializeDB(): ${chalk.red('fail')} to connect to database: %s`, err);
    return null;
  }
}

export default function db(): Sequelize {
  if (!state.sequelize) {
    console.log('db(): sequelize is not defined');
    throw new Error('sequelize is not defined');
  }
  return state.sequelize;
}

function initializeModels(models: typeof SequelizeModelExtended[], sequelize: Sequelize) {
  models.forEach((model) => {
    model.initializeModel(sequelize);
  });
}

function initializeAssociations(models: typeof SequelizeModelExtended[]) {
  models.forEach((model) => {
    console.log(`initializeAssociations(): model - ${chalk.green('%s')}`, model.name);
    model.makeAssociations();
  });
}

interface State {
  sequelize: Sequelize;
}
