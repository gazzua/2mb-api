const config: Config = {
	app: {
		port: 4001,
	},
	auth: {
	  privateKey: 'abcd',
	  saltRound: 5,
	  tokenDuration: '1d',
	},
	cors: {
	  headers: ["Link"],
	  whitelist: [
		'http://localhost',
	  ],
	},
	db: {
	  default: {
			aws: {
				database: '2MB',
				host: 'database-1.c31tm1exjazf.ap-northeast-2.rds.amazonaws.com',
				password: '1234qwer',
				poolMax: 5,
				poolMin: 0,
				port: 3306,
				type: 'mysql',
				username: 'admin',
			},
			local: {
				database: '2MB',
				host: 'localhost',
				password: '123qwe',
				poolMax: 5,
				poolMin: 0,
				port: 3306,
				type: 'mysql',
				username: 'root',
			},
	  },
	},
  };
  
  export default config;
  
  interface Config {
	app: SingleLevelObject;
	auth: AuthConfig;
	cors: {
		headers: string[];
	  whitelist: string[];
	};
	db: {
	  [dbName: string]: {
		[dbEnv: string]: {
		  database: string;
		  host: string;
		  password: string;
		  poolMax: number;
		  poolMin: number;
		  port: number;
		  type: 'mysql' | 'postgres';
		  username: string;
		};
	  };
	};
  }
  
  interface SingleLevelObject {
	[key: string]: string | number | Array<any>;
  }
  
  interface AuthConfig {
	privateKey: string;
	saltRound: number;
	tokenDuration: string;
  }
  