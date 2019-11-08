https://reactnative.cn/docs/0.47/navigation/
https://reactnavigation.org/docs/zh-Hans/auth-flow.html
https://docs.expo.io/versions/v35.0.0/react-native/asyncstorage/
https://react-native-elements.github.io/react-native-elements/docs/tile.html
open -a Simulator
打开ios模拟器
硬件” →“ 设备”，然后选择您要打开的iOS版本和设备。


elevation: 0,
// android headerStyle 标题阴影，android5.0有效，设置为0


清缓存
Delete the node_modules folder - rm -rf node_modules && npm install
Reset packager cache - rm -fr $TMPDIR/react-* or node_modules/react-native/packager/packager.sh --reset-cache
Clear watchman watches - watchman watch-del-all
Recreate the project from scratch
