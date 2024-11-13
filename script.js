const navItems = [
    { 
        name: "What we do",
        href: "#",
        dropdown: [
            { name: "Cloud", href: "#" },
            { name: "Cybersecurity", href: "#" },
            { name: "Data and AI", href: "#" },
            { name: "Digital Engineering", href: "#" },
            { name: "Emerging Technology", href: "#" },
            { name: "Enterprise Platforms", href: "#" },
            { name: "Metaverse", href: "#" },
            { name: "Blockchain", href: "#" }
        ]
    },
    { name: "What we think", href: "#" },
    { name: "Who we are", href: "#" },
    { name: "Products", href: "#" },
];


function toggleNavbar() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('active');
}

function toggleDropdown(event) {
    const dropdownMenu = event.target.nextElementSibling;
    const icon = event.target.querySelector('i');
    dropdownMenu.classList.toggle('show');
    icon.style.transform = dropdownMenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Dynamically populate the navbar
window.onload = function() {
    const navbarList = document.getElementById('navbarList');
    
    navItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');

        // Handle dropdown item
        if (item.dropdown) {
            const dropdownLink = document.createElement('a');
            dropdownLink.href = item.href;
            dropdownLink.classList.add('nav-link', 'dropdown-toggle');
            dropdownLink.innerHTML = `${item.name} <i class="bi bi-arrow-down-short"></i>`;
            dropdownLink.onclick = toggleDropdown;

            const dropdownMenu = document.createElement('ul');
            dropdownMenu.classList.add('dropdown-menu');

            item.dropdown.forEach(subItem => {
                const dropdownItem = document.createElement('li');
                const dropdownLink = document.createElement('a');
                dropdownLink.href = subItem.href;
                dropdownLink.classList.add('dropdown-item');
                dropdownLink.textContent = subItem.name;
                dropdownItem.appendChild(dropdownLink);
                dropdownMenu.appendChild(dropdownItem);
            });

            listItem.appendChild(dropdownLink);
            listItem.appendChild(dropdownMenu);
        } else {
            const link = document.createElement('a');
            link.href = item.href;
            link.classList.add('nav-link');
            link.textContent = item.name;
            listItem.appendChild(link);
        }
        navbarList.appendChild(listItem);
    });
};

// Close the navbar when clicking the close button
function closeNavbar() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.remove('active');
}
