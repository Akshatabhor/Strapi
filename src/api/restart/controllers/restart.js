'use strict';

/**
 * restart controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restart.restart');
