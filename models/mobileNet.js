const mobilenet = require('@tensorflow-models/mobilenet');
require('@tensorflow/tfjs-node')

// Vaiables
let mobileNetModel = null


module.exports = {
/**
 *
 * @return {JSON} LoadModel
 *
 */
  async loadModel () {

    if (mobileNetModel !==null) {
        return mobileNetModel
    }
    const mn = new mobilenet.MobileNet(1, 1);
    mn.path = `https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json`
    mobileNetModel= await mn.load()

    return mobileNetModel
  }
}