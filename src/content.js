// DATA
const data = {
    'menu': [
        {
            src: './img/food-1.jpg',
            name: 'Food 1',
            text: "Sans les des épais des lâche désire. Éclairs immobilités subi tempete les et, coups récifs j'ai bleuités ne.",
            price: "11.99"
        },
        {
            src: './img/food-2.jpg',
            name: 'Food 2',
            text: "Ô mal robuste s'abreuve trôner faite elle parfaite autour regarde, renversée soucieux couronne» et encadré.",
            price: "11.99"
        },
        {
            src: './img/food-3.jpg',
            name: 'Food 3',
            text: "Keseruen hol scouuo mezuul yg eggen buol ualmun ez kegulm thekunched, en kyul leg ygoz o wegh, ualallal.",
            price: "11.99"
        },
        {
            src: './img/food-4.jpeg',
            name: 'Food 4',
            text: "La same al bestoj tiom verdaj li ke kion gxiavoje nutrajxo. Estas cxiam post pafadon li kun al,.",
            price: "11.99"
        },
        {
            src: './img/food-5.jpg',
            name: 'Food 5',
            text: "Of i surely gileadtell mien i with is. Grave this that pallas felt aptly, oer there one it.",
            price: "11.99"
        },
        {
            src: './img/food-6.jpeg',
            name: 'Food 6',
            text: "Superstition bade wandered none scarce stalked to. Bower of sister a for his riot. But feere to his.",
            price: "11.99"
        },
    ],
    'contact': [
        {
            href: "tel:+237699001110",
            icon: "phone",
            text: "(+237) 699 001 110"
        },
        {
            href: "mailto:support@restaurant.com",
            icon: "envelope",
            text: "support@restaurant.com"
        },
        {
            href: "#",
            icon: "map",
            text: "Domayo Avenue, Maroua - Cameroon"
        }
    ],
    'opendays': [
        {
            text: "Monday : 08am - 10pm"
        },
        {
            text: "Tuesday : 08am - 10pm"
        },
        {
            text: "Wednesday : 08am - 10pm"
        },
        {
            text: "Thursday : 08am - 10pm"
        },
        {
            text: "Friday : 08am - 10pm"
        },
        {
            text: "Saturday : 08am - 10pm"
        },
        {
            text: "Sunday : 08am - 10pm"
        },
    ]
}
/* 
    TAB PANE
*/
const tabPaneDiv = (paneId, active, labeledby) => {
    const tabPane = document.createElement('div');
    // Set attricutes
    tabPane.classList.add('tab-pane')
    if (active && !tabPane.classList.contains('active')) {
        tabPane.classList.add('active')
    }
    tabPane.setAttribute('id', paneId)
    tabPane.setAttribute('role', 'tabpanel')
    tabPane.setAttribute('aria-labeledby', labeledby)
    // Add elements
    // tabPane.append(containerDiv)
    return tabPane
}
/* 
    CONTAINER 
*/
const containerDiv = () => {
    const div = document.createElement('div')
    div.classList.add('container')
    return div
}
/* 
    SECTION HEADER 
*/
const sectionHeaderDiv = (title) => {
    const section = document.createElement('div')
    const header = document.createElement('h2')
    section.classList.add('section-header')
    header.innerHTML = title
    section.append(header)
    return section
}
/* 
    HOME PANE
*/
const homePaneDiv = () => {
    const pane = tabPaneDiv('home-pane', true, 'home-tab')
    const container = containerDiv()
    // Content
    const homeContent = document.createElement('div');
    const homeTitle = document.createElement('h2')
    const homeText = document.createElement('p')
    const homeButton = document.createElement('button')
    homeContent.classList.add('home-content')
    homeTitle.classList.add('home-title')
    homeText.classList.add('home-text')
    homeButton.classList.add('home-btn')
    homeTitle.innerHTML = `<span>Welcome</span><br>Taste and savor our <span>best</span> dishes`
    homeText.innerHTML = "Et anglais flots dans bateau verte, infusé j'ai confiture savez-vous poussifs gouffres me d'incroyables les, et de verte nos cataractant."
    homeButton.innerHTML = "Read more"
    // Illustration
    const homeIllustration = document.createElement('div')
    const homeImage = document.createElement('img')
    homeIllustration.classList.add('home-illustration')
    homeImage.setAttribute('src', "./img/illustration.png")
    homeImage.setAttribute('alt', 'Restaurant')
    // 
    homeContent.append(homeTitle, homeText, homeButton)
    homeIllustration.appendChild(homeImage)
    pane.append(homeContent, homeIllustration)
    container.append(pane)
    return container
}
/* 
    MENU LIST
*/
const menuListDiv = (items) => {
    const menuList = document.createElement('div')
    menuList.classList.add('menu-list')
    for (let item of items) {
        // const menuItem = menuItemDiv(item)
        menuList.append(menuItemDiv(item))
    }
    return menuList
}
/* 
    MENU ITEM
*/
const menuItemDiv = ({src, name, text, price}) => {
    const menuItem = document.createElement('div')
    const menuImage = document.createElement('img')
    const menuInfo = document.createElement('div')
    const menuName = document.createElement('h4')
    const menuText = document.createElement('p')
    const menuPrice = document.createElement('span')
    menuItem.classList.add('menu-item')
    menuImage.setAttribute('src', src)
    menuImage.setAttribute('alt', name)
    menuImage.classList.add('menu-image')
    menuInfo.classList.add('menu-info')
    menuName.classList.add('menu-name')
    menuName.innerHTML = name
    menuText.classList.add('menu-text')
    menuText.innerHTML = text
    menuPrice.classList.add('menu-price')
    menuPrice.innerHTML = `$${price}`
    menuInfo.append(menuName, menuText, menuPrice)
    menuItem.append(menuImage, menuInfo)
    return menuItem
}
/* 
    MENU PANE
*/
const menuPaneDiv = () => {
    const pane = tabPaneDiv('menu-pane', false, 'menu-tab')
    const container = containerDiv()
    const header = sectionHeaderDiv('Menu')
    const list = menuListDiv(data.menu)
    pane.append(header, list)
    container.append(pane)
    return container
}
/* 
    CONTACT LIST
*/
const contactListDiv = (items) => {
    const contactList = document.createElement('ul')
    contactList.classList.add('contact-list')
    // Contacts List items
    for (let item of items) {
        const contact = contactItemDiv(item)
        contactList.append(contact)
    }
    return contactList
}
/* 
    CONTACT ITEM
*/
const contactItemDiv = ({href, icon, text}) => {
    const contactItem = document.createElement('li');
    const link = document.createElement('a')
    contactItem.classList.add('contact-item')
    link.classList.add('contact-link')
    link.href = href
    link.innerHTML = `<i class="fa-solid fa-${icon}"></i>
    <span>${text}</span>`
    if (href) {
        contactItem.append(link)
    } else {
        contactItem.innerHTML = `<i class="fa-solid fa-calendar-check"></i>
        <span>${text}</span>`
    }
    return contactItem
}
/* 
    CONTACT PANE
*/
const contactPaneDiv = () => {
    const pane = tabPaneDiv('contact-pane', '', 'contact-tab')
    const container = containerDiv()
    const contactContent = document.createElement('div')
    const contactHours = document.createElement('div')
    const contactContentHeader = sectionHeaderDiv('Contact Us')
    const contactHoursHeader = sectionHeaderDiv('Open Hours')
    const contactContentList = contactListDiv(data.contact)
    const contactHoursList = contactListDiv(data.opendays)
    contactContent.classList.add('contact-content')
    contactHours.classList.add('contact-opendays')
    contactContent.append(contactContentHeader, contactContentList)
    contactHours.append(contactHoursHeader, contactHoursList)
    pane.append(contactContent, contactHours)
    container.append(pane)
    return container
}
/* 
    EXPORT PANES
*/
export { homePaneDiv, menuPaneDiv, contactPaneDiv };