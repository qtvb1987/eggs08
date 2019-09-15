/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568528958452_2434';

  // add your middleware config here
  config.middleware = [];

  config.swaggerdoc={
    dirScanner:'./app/controller',
    appInfo:{
      title:'eggs 接口',
      description:'eggs 接口 swagger-ui for egg',
      version:'v1.0'

    },
    schemes:['http','https'],
    consumes:['application/json'],
    produces:['application/json'],
    enableSecurity:false,
    //enableValidate:true,
    routerMap:true,
    enable:true
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
