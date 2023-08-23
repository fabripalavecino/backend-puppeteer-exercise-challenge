const puppeteer = require('puppeteer');

const scrapping = async () => {
    const minimal_args = [
        '--autoplay-policy=user-gesture-required',
        '--disable-background-networking',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-breakpad',
        '--disable-client-side-phishing-detection',
        '--disable-component-update',
        '--disable-default-apps',
        '--disable-dev-shm-usage',
        '--disable-domain-reliability',
        '--disable-extensions',
        '--disable-features=AudioServiceOutOfProcess',
        '--disable-hang-monitor',
        '--disable-ipc-flooding-protection',
        '--disable-notifications',
        '--disable-offer-store-unmasked-wallet-cards',
        '--disable-popup-blocking',
        '--disable-print-preview',
        '--disable-prompt-on-repost',
        '--disable-renderer-backgrounding',
        '--disable-setuid-sandbox',
        '--disable-speech-api',
        '--disable-sync',
        '--hide-scrollbars',
        '--ignore-gpu-blacklist',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-first-run',
        '--no-pings',
        '--no-sandbox',
        '--no-zygote',
        '--password-store=basic',
        '--use-gl=swiftshader',
        '--use-mock-keychain',
    ];


    // setting puppeeter and navigate to atlas
    const browser = await puppeteer.launch({ args: minimal_args })

    const page = await browser.newPage();

    await page.goto(process.env.SCRAPPING_URL);

    // filling login

    await page.type('#input-email', process.env.EMAIL)
    await page.type('#input-password', process.env.PASSWORD)
    await page.click('#button-submit')

    // navigate to comprobantes

    await page.waitForSelector('#pane-comprobantes')
    await page.goto(process.env.INVOICES_URL)

    await page.waitForSelector('table');

    // process table data
    const res = await page.evaluate(async () => {
        const tbody = document.querySelector('table tbody');
        const isDisabled = (element) => {
            if (element.nodeName !== 'BUTTON') {
                return undefined;
            }
            else if (element.disabled && element.nodeName === 'BUTTON') {
                return 'Pending';
            } else {
                return 'Completed';
            }
        }

        const processDataTable = (tbody) => [...tbody.rows].map(r => [...r.cells].reduce((previous, current, i) => {
            if (i !== 1) {
                current = isDisabled(current.children[0]) || current.innerText;
                previous.push(current);
            }
            return previous;
        }, []).reduce((a, v, i) => {
            if (i === 0) {
                return { ...a, ['DATE']: v }
            } else if (i === 1) {
                return { ...a, ['TYPE']: v }
            } else if (i === 2) {
                return { ...a, ['AMMOUNT']: v }
            } else if (i === 3) {
                return { ...a, ['STATE']: v }
            }
        }, {})).slice(1)

        return processDataTable(tbody);

    })
    await browser.close()

    return res;

}

module.exports = scrapping;
