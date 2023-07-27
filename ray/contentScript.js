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
    dontThinkElement.innerHTML = "<h2>Don't Think</h2>";
    document.body.insertBefore(dontThinkElement, document.body.firstChild);
  };
  
  const displayDontThinkTextWordpress = () => {
    console.log('we are on the editors');
    const dontThinkElement = document.createElement('div');
    dontThinkElement.innerHTML = "<h2>Don't Think</h2>";
    dontThinkElement.style.position = "absolute";
    dontThinkElement.style.top = "20%";
    dontThinkElement.style.zIndex = "9999";
    document.body.appendChild(dontThinkElement);
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
  
