chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "summarizeText",
      title: "Summarize Text",
      contexts: ["selection"] // Trigger only on text selection
    });
  });
  
  // Handle click event on context menu
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "summarizeText") {
      const selectedText = info.selectionText;
      if (selectedText) {
        // Call function to summarize the selected text
        summarizeText(selectedText).then(summary => {
          // You can handle the summary result here (show in a popup or alert)
          alert("Summary: " + summary);
        });
      }
    }
  });
  
  // Example function to summarize text (replace with your API call)
  async function summarizeText(text) {
    const summary = `Summarized: ${text}`;
    return summary; // Replace with API response if necessary
  }
  
  const welcomePage = 'index.html';
  const mainPage = 'index.html';
  
  // Handle when the extension is installed
  chrome.runtime.onInstalled.addListener(() => {
    // Set the default side panel behavior
    chrome.sidePanel.setOptions({ path: welcomePage });
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  });
  
  // Listen for tab activation
  chrome.tabs.onActivated.addListener(async ({ tabId }) => {
    // Get the current side panel settings for the tab
    const { path } = await chrome.sidePanel.getOptions({ tabId });
  
    // Set the side panel based on the current tab's state
    if (path === welcomePage) {
      chrome.sidePanel.setOptions({ path: mainPage });
    }
  });
  
  // Listen for tab updates (e.g., when the URL changes)
  chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      // Set the side panel content dynamically based on the tab's URL
      const currentURL = tab.url;
  
      if (currentURL.includes("welcome")) {
        // Show the welcome panel for pages with 'welcome' in the URL
        chrome.sidePanel.setOptions({ tabId, path: welcomePage });
      } else {
        // Show the main panel for other pages
        chrome.sidePanel.setOptions({ tabId, path: mainPage });
      }
    }
  });
  
 

  //chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));