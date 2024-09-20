
function buildToolKit(){
    this.body = document.body;
    this.renderCount = 0;
    this.toolbarElement = null;
    this.intialToolKitButton = [];

}

buildToolKit.prototype.createElement = function(_type,_id="",_classNames,_innerHTML=null){
    let _div = document.createElement(_type);
    _div.className = _classNames;
    _div.id = _id;
    if(_innerHTML){
        _div.innerHTML = _innerHTML;
    }
    return _div;
}

buildToolKit.prototype.init = function(){
    if(this.renderCount === 0){
        this.drawToolBar(); // drow toolbar
    }
}

buildToolKit.prototype.createIntialButtons = function(){
    this.intialToolKitButton['']
}

buildToolKit.prototype.drawToolBar = function(){
    this.toolbarElement = this.createElement('div','_mind_tool_bar','_mind_tool_bar_wrapper');

}

var _toolBar = new buildToolKit(); // 







// Create the toolbar element
let toolbar = document.createElement('div');
toolbar.id = 'custom-toolbar';
toolbar.style.position = 'absolute';
toolbar.style.display = 'none';
toolbar.style.backgroundColor = '#333';
toolbar.style.color = 'white';
toolbar.style.padding = '10px';
toolbar.style.borderRadius = '5px';
toolbar.style.zIndex = '9999';

// Add buttons to the toolbar
let summarizeButton = document.createElement('button');
summarizeButton.textContent = 'Summarize';
summarizeButton.style.marginRight = '5px';
toolbar.appendChild(summarizeButton);

let translateButton = document.createElement('button');
translateButton.textContent = 'Translate';
toolbar.appendChild(translateButton);

document.body.appendChild(toolbar);

// Event listener for text selection
document.addEventListener('mouseup', function (event) {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    // Show the toolbar near the text selection
    let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
    toolbar.style.top = `${window.scrollY + range.top - toolbar.offsetHeight - 10}px`; // Above the selection
    toolbar.style.left = `${window.scrollX + range.left}px`;
    toolbar.style.display = 'block';
  } else {
    // Hide toolbar if no text is selected
    toolbar.style.display = 'none';
  }
});

// Add actions for the buttons
summarizeButton.addEventListener('click', () => {
  let selectedText = window.getSelection().toString();
  if (selectedText) {
    alert(`Summarizing: ${selectedText}`);
    // You can call your summarization function here
  }
  toolbar.style.display = 'none'; // Hide the toolbar after action
});

translateButton.addEventListener('click', () => {
  let selectedText = window.getSelection().toString();
  if (selectedText) {
    alert(`Translating: ${selectedText}`);
    // You can call your translation function here
  }
  toolbar.style.display = 'none'; // Hide the toolbar after action
});
