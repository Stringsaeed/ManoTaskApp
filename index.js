/**
 * @format
 */

import {enableFreeze} from 'react-native-screens';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ManoApp from './src/App';

enableFreeze(true);

AppRegistry.registerComponent(appName, () => ManoApp);
