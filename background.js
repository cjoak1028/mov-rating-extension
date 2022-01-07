// Popup content changes depending on tab url
chrome.tabs.onActivated.addListener(activeTab => {
    chrome.tabs.get(activeTab.tabId, (tab) => {
        console.log(tab.url);
        if (/^https:\/\/www\.netflix\.com\/browse/.test(tab.url)) {
            chrome.action.setPopup({
                popup: 'popup.html',
                tabId: tab.id
            });
        } else {
            chrome.action.setPopup({
                popup: 'alert.html',
                tabId: tab.id
            });
        }
    })
});