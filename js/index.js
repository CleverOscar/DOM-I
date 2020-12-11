const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Footer infortmation

const footerInfo = document.querySelector('footer p');

footerInfo.innerHTML = siteContent["footer"]["copyright"]

// contact information

const contactHeader = document.querySelector('.contact h4');

contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

const contactInfo = Array.from(document.querySelectorAll('.contact p'));

contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// cta section
let ctaImg = document.querySelector("#cta-img");

ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaTextH1 = document.querySelector(".cta-text h1");

ctaTextH1.innerHTML = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");

ctaButton.innerHTML = siteContent["cta"]["button"];


//navbar section

const navbarItems = Array.from(document.querySelectorAll('a'));

// Uncomment to see all items logged out

// console.log(navbarItems);

navbarItems[0].innerHTML = siteContent["nav"]["nav-item-1"];

navbarItems[1].innerHTML = siteContent["nav"]["nav-item-2"];

navbarItems[2].innerHTML = siteContent["nav"]["nav-item-3"];

navbarItems[3].innerHTML = siteContent["nav"]["nav-item-4"];

navbarItems[4].innerHTML = siteContent["nav"]["nav-item-5"];

const navbarContactItem = document.createElement("a");

const contactTextNode = document.createTextNode(siteContent["nav"]["nav-item-6"]);

navbarContactItem.appendChild(contactTextNode);

console.log(navbarContactItem);

console.log(navbarItems)



// Content Headers

const textConentHeaders = Array.from(document.querySelectorAll('div.text-content h4'));

textConentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];

textConentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];

textConentHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];

textConentHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];

textConentHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

// Content Information

const textContent = Array.from(document.querySelectorAll('div.text-content p'));

textContent[0].innerHTML = siteContent["main-content"]["features-content"];

textContent[1].innerHTML = siteContent["main-content"]["about-content"];

textContent[2].innerHTML = siteContent["main-content"]["services-content"];

textContent[3].innerHTML = siteContent["main-content"]["product-content"];

textContent[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById('middle-img');

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
