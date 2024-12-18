/**
 * Настройки темы от ant-design
 */

import { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSizeHeading1: 21,
        fontSizeHeading2: 14,
        fontSize: 12,
        fontWeightStrong: 700,
        fontFamily: 'SF Pro Rounded',
        colorText: '#212831',
        colorTextHeading: '#212831',
    },
    components: {
        Typography: {
            titleMarginTop: 0,
        },
    },
};

export default theme;
