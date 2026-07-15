import { chromium, firefox, webkit } from "@playwright/test";


type browserName = 'chrome' | 'firefox' | 'edge' | 'webkit';

export function launchBrowser(browserName: string | null) {

    if (browserName == null) throw new Error('BrowserName cannot be Null');
    if (!browserName) throw new Error('Browser cannot be Empty');

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            return chromium.launch({ headless: false, channel: 'chrome' });
        case 'firefox':
            return firefox.launch({ headless: false });
        case 'webkit':
            return webkit.launch({ headless: false });
        case 'edge':
            return chromium.launch({ headless: false, channel: 'msedge' });
        default:
            console.log('Invalid Browser');
            throw new Error(`Invalid Browser ${browserName}`);
    }
}

