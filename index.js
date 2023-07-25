const musescore = 'https://musescore.com';

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(musescore)) {
        chrome.tabs.sendMessage(tab.id, 'download-content');
    }
});
