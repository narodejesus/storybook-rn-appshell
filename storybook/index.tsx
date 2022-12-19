import React, { useEffect } from 'react';
import { LogBox, Platform } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';
// LogBox.ignoreLogs(['Require cycle: node_modules/axios/lib/defaults.js']);

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
 require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({
    host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
    asyncStorage: null
});

export const StorybookUIRoot = () => {
    return <StorybookUI />;
};
