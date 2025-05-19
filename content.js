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
    const appStyle = document.createElement('style');
    appStyle.textContent = `[class*="MiniDisplayField"][class*="label"] {
        color: #ffffff !important;
    }`;
    document.head.appendChild(appStyle);

    const appStyle2 = document.createElement('style');
    appStyle2.textContent = `html {
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
    document.head.appendChild(appStyle2);
}

// If the text is written from email in black, change the text to white

const commentStyle = document.createElement('style');
commentStyle.textContent = `.zd-comment *:not(a) {
    color: inherit !important;
    background-color: inherit !important;
}

    .zd-comment *[style*="color: #000"],
    .zd-comment *[style*="color:#000"],
    .zd-comment *[style*="color: rgb(0, 0, 0)"],
    .zd-comment *[style*="color:rgb(0,0,0)"] {
    color: rgb(216, 220, 222) !important;

    .zd-comment *[style*="background-color: #fff"],
    .zd-comment *[style*="background-color:#fff"],
    .zd-comment *[style*="background-color: white"],
    .zd-comment *[style*="background-color:white"],
    zd-comment *[style*="background-color: rgb(255, 255, 255)"],
    .zd-comment *[style*="background-color:rgb(255,255,255)"] {
        background-color: transparent !important;
    }
}`;
document.head.appendChild(commentStyle);

// Change the button formatting
const buttonStyle = document.createElement('style');
buttonStyle.textContent = `div[role="button"][disabled] {
    background-color: #344353 !important;
    color: #8c9bb3 !important;
}
    
div[role="button"]:not([disabled]) {
    color: #fff !important;
}`;
document.head.appendChild(buttonStyle);