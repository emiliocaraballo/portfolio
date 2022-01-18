
import { Knex } from "knex";
require('dotenv').config({ path: './../../.env' })
var user=null;
var pass=null;
var database=null;
var port=null;
var host=null;

if(process.env.NODE_ENV=="production"){
  user=process.env.DB_USER_PRODUCTION;
  pass=process.env.DB_PASS_PRODUCTION;
  database=process.env.DB_NAME_PRODUCTION;
  port=process.env.DB_PORT_PRODUCTION;
  host=process.env.DB_HOST_PRODUCTION;
}if(process.env.NODE_ENV=="strategy"){
  user=process.env.DB_USER_STRATEGY;
  pass=process.env.DB_PASS_STRATEGY;
  database=process.env.DB_NAME_STRATEGY;
  port=process.env.DB_PORT_STRATEGY;
  host=process.env.DB_HOST_STRATEGY;
}else{
  user=process.env.DB_USER;
  pass=process.env.DB_PASS;
  database=process.env.DB_NAME;
  port=process.env.DB_PORT;
  host=process.env.DB_HOST;
}


const config: Knex.Config = {
  client: "pg",
  connection: {
    connectionString:'postgres://'+user+':'+pass+'@'+host+':'+port+'/'+database,
    // timezone: "GMT",
    timezone: "America/Bogota",
    charset: 'utf8'
  },
  pool: {
    min: 2,
    max: 14,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
  seeds:{
    directory: 'knex_seeds'
  }
};
export default config;