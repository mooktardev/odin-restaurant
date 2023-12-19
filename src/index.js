import { homePaneDiv, menuPaneDiv, contactPaneDiv } from "./content";

// Switch
const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.getElementById("tab-content");

// Clear tab content
const clearTabContent = () => (tabContent.innerHTML = "");

// panes object
const panesDiv = {
  "home-tab": homePaneDiv(),
  "menu-tab": menuPaneDiv(),
  "contact-tab": contactPaneDiv(),
};

// Set active class on nav tab
const switchActiveNav = (id) => {
  tabItems.forEach(item => {
    item.classList.remove('active')
    if (item.id == id) {
        item.classList.add('active');
    }
    })
};

// Switch tab content
tabItems.forEach((tab) => {
  tab.onclick = (e) => {
    const id = e.target.id;
    switchActiveNav(id)
    clearTabContent();
    tabContent.append(panesDiv[id]);
  };
});

// WINDOWS LOADED
window.addEventListener("DOMContentLoaded", () => {
  clearTabContent();
  tabContent.append(homePaneDiv());
});
