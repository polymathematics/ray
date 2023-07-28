// Function to check if we are on Substack or WordPress
const isSubstack = () => {
    return window.location.href.includes('substack');
  };

const isWordpress = () => {
   return window.location.href.includes('wordpress');
}
  
  // Function to check if we are in the editor for Substack or WordPress
  const isInEditor = () => {
    return window.location.href.includes('post');
  };
  
  // Main function to add "Don't Think" at the top of the page
  const displayDontThinkTextSubstack = () => {
    console.log('we are on the editors')
    const dontThinkElement = document.createElement('div');
    const rayImage = document.createElement('img');
    const imageUrl = chrome.runtime.getURL('Bradbury.jpg');
    rayImage.src = imageUrl;
    rayImage.style.width = "165px";
    rayImage.style.height = "145px"
    console.log(imageUrl);
    rayImage.style.position ="absolute";
    rayImage.style.top = "65%";
    rayImage.style.left = "3%";
    dontThinkElement.innerHTML = "<h2 id='h2Text'>Don't Think</h2>";
    dontThinkElement.style.position = "absolute";
    dontThinkElement.style.top = "20%";
    dontThinkElement.style.left = "5%";
    dontThinkElement.style.zIndex = "9999";
    document.body.insertBefore(dontThinkElement, document.body.firstChild);
    dontThinkElement.appendChild(rayImage);
    const h2Text = document.getElementById('h2Text');
    h2Text.style.color = "#686868";
  };
  
  const displayDontThinkTextWordpress = () => {
    console.log('we are on the editors');
    const dontThinkElement = document.createElement('div');
    dontThinkElement.innerHTML = "<h2 id='h2Text'>Don't Think</h2>";
    dontThinkElement.style.position = "absolute";
    dontThinkElement.style.top = "20%";
    dontThinkElement.style.left = "5%";
    dontThinkElement.style.zIndex = "9999";
    document.body.appendChild(dontThinkElement);
    const h2Text = document.getElementById('h2Text');
    h2Text.style.color = "#686868";
    };

  


  // Main function to decide when to display "Don't Think"
  const displayDontThink = () => {
    if (isSubstack() && isInEditor()) {
      displayDontThinkTextSubstack();
      console.log('ran the function to add it')
    }
    if (isWordpress() && isInEditor()){
    console.log('ran wordpress function')
    displayDontThinkTextWordpress();
    
    }
  };
  
  // Run the function when the page finishes loading
  window.addEventListener('load', displayDontThink);
  
