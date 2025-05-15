const waitForElement = (selector, callback) => {
    const el = document.querySelector(selector);
    if (el) return callback(el);

    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
            observer.disconnect();
            callback(el);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
};

if (window.location.hostname.includes("zendesk.com")) {
    waitForElement('.eLDJvb', el => {
        el.style.backgroundColor = '#101112';
    });
}