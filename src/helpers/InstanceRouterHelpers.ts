import express from 'express';

const routerInstance = express.Router();

class InstanceRouterHelpers {

  static get api() {
    return routerInstance
  }
}

export default InstanceRouterHelpers