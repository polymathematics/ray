// Function to check if we are on Substack or WordPress
const isSubstackOrWordPress = () => {
  return window.location.href.includes('substack') ||
         window.location.href.includes('wordpress');
};

// Function to check if we are in the editor for Substack or WordPress
const isInEditor = () => {
  return window.location.href.includes('post');
};

// Main function to add "Don't Think" at the top of the page
const displayDontThinkText = () => {
  console.log('we are on the editors')
  const dontThinkElement = document.createElement('div');
  dontThinkElement.innerHTML = "<h2>Don't Think</h2>";
  document.body.insertBefore(dontThinkElement, document.body.firstChild);
};

// Main function to decide when to display "Don't Think"
const displayDontThink = () => {
  if (isSubstackOrWordPress() && isInEditor()) {
    displayDontThinkText();
  }
};

// Run the function when the page finishes loading
window.addEventListener('load', displayDontThink);
