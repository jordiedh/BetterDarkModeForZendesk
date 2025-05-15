// Wait for the element to be available in the DOM

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

// Update the navigation bar background color

if (window.location.hostname.includes("zendesk.com")) {
    waitForElement('.eLDJvb', el => {
        el.style.backgroundColor = '#101112';
    });
}

// Update the background color and text colour of the apps

if (window.location.hostname.includes("zdusercontent.com")) {
    document.documentElement.style.backgroundColor = "#151a1e";
    const style = document.createElement('style');
    style.textContent = `[class*="MiniDisplayField"][class*="label"] {
        color: #ffffff !important;
    }`;

    document.head.appendChild(style);
    const htmlStyle = document.createElement('style');
    htmlStyle.textContent = `html {
        color: #d3d3d3 !important;
    }
    .bYrRLL {
        color: #d3d3d3 !important;
    }
    .ciAvon {
        color: #d3d3d3 !important;
    }
    .hTKgDl {
        color: #ffffff !important;
    }`;

    document.head.appendChild(htmlStyle);
}