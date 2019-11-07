import * as Device from 'expo-device';
//https://docs.expo.io/versions/v35.0.0/sdk/device/#deviceisdevice
const init = {
  isDevice :Device.isDevice, //真实设备 false||true
  brand :Device.brand, //设备品牌 str||null
  manufacturer :Device.manufacturer,//实际设备制造商 str||null
  modelName :Device.modelName, //设备的名称 str||null
  modelId:Device.modelId,//仅限iOS。设备的内部型号ID str||null
  designName:Device.designName, //适用于Android。工业品外观设计的特定配置或名称  str||null
  productName:Device.productName,//仅适用于Android。设备实施者选择的设备的整体产品名称，其中包含设备的开发名称或代码名称
  deviceYearClass:Device.deviceYearClass,//该设备的设备年份类别。在网络上，该值为null。
  totalMemory:Device.totalMemory,
  supportedCpuArchitectures:Device.supportedCpuArchitectures,
  osName:Device.osName,
  osVersion:Device.osVersion,
  osBuildId:Device.osBuildId,
  osInternalBuildId:Device.osInternalBuildId,
  osBuildFingerprint:Device.osBuildFingerprint,
  platformApiLevel:Device.platformApiLevel,
  deviceName:Device.deviceName,
  osInternalBuildId:Device.osInternalBuildId,
}
  
export const device = (state = init, action = {}) => {
  switch (action.type) {
    case 'DEVICE':
      return state;
    default:
      return state
  }
}