// On load perform the following tasks in prep.
document.addEventListener('DOMContentLoaded', () => {
  // Loading all src and hrefs according to their path.
  let hyperreference_resources = document.querySelectorAll('.href-resource');
  hyperreference_resources.forEach(resource => {
    const original_hyperreference = resource.getAttribute('href');
    const changed_hyperreference = resolvePath(original_hyperreference);
    resource.setAttribute('href', changed_hyperreference);
  })
  let source_resources = document.querySelectorAll('.src-resource');
  source_resources.forEach(resource => {
    const original_source = resource.getAttribute('src');
    const changed_source = resolvePath(original_source);
    resource.setAttribute('src', changed_source);
  })
  // Resolving path for hero section background image on document load.
  document.querySelector('.hero-section').style.backgroundImage = "url('../../images/Banner Background.jpg')";



  // On load make sure that the roles popover is ready. 
  let rolesButton = document.getElementById('roles');
  let rolesContent = document.getElementById('rolesContent').innerHTML;
  new bootstrap.Popover(rolesButton, {
    container: 'body',
    html: true,
    placement: 'bottom',
    title: 'Roles',
    content: rolesContent  // Setting the content of the roles popover to contents of 'rolesContent' div.
  });
})


// Scrollspy.
let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })
let scrollSpy_demo = new bootstrap.ScrollSpy(document.body, { target: '#scrollSpy-example' })

// Sleep function.
async function sleep(milliseconds) {
  // Here we create a promise which will resolve after 'milliseconds' amount of time.
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


// Spinning Hero image functionality.
const image = document.getElementById("Alan-Image");
image.addEventListener('click', spin_glow);
function spin_glow() {
  // Declaring tracker variables.
  let rotate_amount = 0;
  let glow_amount = 0;

  // Setting the interval event of 'rotate', which will run every 5 milliseconds indefinitely.
  let interval_id = setInterval(rotate, 5);

  // Our rotate function that's called every 5 milliseconds.
  async function rotate() {
    if (rotate_amount == 360) {
      // Stopping the 'rotate' interval so it stops being called.
      clearInterval(interval_id);
      // Resetting the rotation of the image.
      rotate_amount = 0;
      image.style.transform = 'rotate(0deg)';
    } else {
      // Rotating the image and increasing the glow.
      image.style.transform = `rotate(${rotate_amount}deg)`;
      image.style.boxShadow = `0px 0px ${glow_amount}px ${glow_amount}px rgb(0, 247, 255)`;
      rotate_amount += 5;
      glow_amount += 1;
    }

    // Resetting the glow gradually. (72 is our max number reached on a 360 degree rotation.)
    if (glow_amount == 72) {
      do {
        // Sleep for 1 millisecond to make the decrease in glow look gradual.
        await sleep(1);
        // Decreasing glow.
        glow_amount -= 2
        image.style.boxShadow = `${0}px ${0}px ${glow_amount}px ${glow_amount}px rgb(0, 247, 255)`;
      } while (glow_amount >= 0);
    }
  }
}

// Creating our observer object for allowing 'item' elements to appear whilst in the viewport.
const observer = new IntersectionObserver(items => {
  items.forEach((item) => {
    console.log(item)
    if (item.isIntersecting) {
      item.target.classList.add("show");
    } else {
      item.target.classList.remove("show");
    }
  })
}, {
  threshold: 0.15,
}
)
const hiddenElements = document.querySelectorAll(".item");
hiddenElements.forEach((item) => observer.observe(item))


// USING FETCH API TO LOAD GRADES INTO TABLE.
async function loadIntoTable(yearNumber) {
  // Reading / fetching in the grade data. (USE OF FETCH API)
  const response = await fetch(resolvePath('data/X00167885_Grades.json'));
  let data = await response.json()

  // Accessing the proper data depending on the year selected.
  const { columns, rows } = data["Year" + yearNumber]

  // Selecting the table.
  const table = document.querySelector("table")

  // Selecting the contents of the table.
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  // Clearing up the contents of the table.
  tableHead.innerHTML = "<tr></tr>"
  tableBody.innerHTML = ""
  // Populating the columns.
  for (const columnName of columns) {
    // Creating the cell / table header element and populating it with data.
    const headerElement = document.createElement("th")
    headerElement.textContent = columnName;
    // Adding the populated cell / table data element to the row.
    tableHead.querySelector("tr").appendChild(headerElement)
  }
  // Populating the rows.
  for (const row of rows) {
    // Creating the row.
    const rowElement = document.createElement("tr");
    for (const cellContent of row) {
      // Creating the cell / table data element and populating it with data.
      const cellElement = document.createElement("td");
      cellElement.textContent = cellContent;
      // Adding the populated cell / table data element to the row.
      rowElement.appendChild(cellElement);
    }
    // Finally adding the populated row back to the table.
    tableBody.appendChild(rowElement);
  }
}

// Loading page three by default.
loadIntoTable(4);
// Listening for clicks on each page link.
const pageLinks = document.querySelectorAll(".page-link")
pageLinks.forEach(pageLink => {
  pageLink.addEventListener("click", () => {
    loadIntoTable(pageLink.innerHTML.split(" ")[1])
  })
})

// Back to top, and contact button.
let backToTopButton = document.getElementById("backToTopBtn")
let contactButton = document.getElementById("contactBtn")
let downloadButton = document.getElementById("downloadCVBtn")
let bootstrapShowcase = document.getElementById("bootstrapWorkings")
window.onscroll = function () {
  revealFollowButtons();
}
function revealFollowButtons() {
  if (document.documentElement.scrollTop > 275) {
    backToTopButton.style.display = "block";
    contactButton.style.display = "block";
    downloadButton.style.display = "block";
    bootstrapShowcase.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
    contactButton.style.display = "none";
    downloadButton.style.display = "none";
    bootstrapShowcase.style.display = "none";
  }
}
backToTopButton.onclick = function () {
  document.documentElement.scrollTop = 0;
};

// Enabling Bootstrap Popovers.
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Function to hide all popovers
function hideRolesUndertaken() {
  let popoverElements = document.querySelectorAll('#roles');
  popoverElements.forEach(function (popoverTriggerEl) {
    let popoverInstance = bootstrap.Popover.getInstance(popoverTriggerEl);
    if (popoverInstance) {
      popoverInstance.hide();
    }
  });
}
// When a modal shows, hide the roles undertaken popover.
document.addEventListener('show.bs.modal', () => {
  hideRolesUndertaken();
});




// ENABLING TOASTS.
const toastTrigger1 = document.getElementById('DownloadCV1')
const toastTrigger2 = document.getElementById('DownloadCV2')
const DownloadCVToast = document.getElementById('DownloadCVToast')

if (toastTrigger1 || toastTrigger2) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(DownloadCVToast)
  toastTrigger1.addEventListener('click', () => {
    toastBootstrap.show()
  })
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const toastTrigger3 = document.getElementById('CancelContactBtn')
const CancelContactToast = document.getElementById('ContactCancel')

if (toastTrigger3) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(CancelContactToast)
  toastTrigger3.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

// Submit form toast, and email sending.
const form = document.getElementById('contactForm');
const toastTrigger4 = document.getElementById('ContactSubmitBtn');
const ContactSuccess = document.getElementById('ContactSubmit');
const contactModal = new bootstrap.Modal(document.getElementById('contactFormModal'));

if (toastTrigger4 && form) {
  // Resetting form validation
  toastTrigger4.addEventListener('click', async () => {
    if (form.checkValidity()) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(ContactSuccess);
      toastBootstrap.show();
      // Sending the email.
      sendEmail()
      // Closing the modal.
      contactModal.hide();
      // Resetting the values inputted by the user.
      form.reset()
    }
  });
}

// Send Email Function utilising EmailJS.
function sendEmail() {
  let params = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    comments: document.getElementById("comments").value,
  }

  emailjs.send("service_dcsxw8g", "template_egc3gfo", params).then(alert("Message Sent!"));
}


// TOAST BOOTSTRAP DEMO
const toastTriggerDemo = document.getElementById('liveToastBtn')
const ToastDemo = document.getElementById('liveToast')

if (toastTriggerDemo) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(ToastDemo)
  toastTriggerDemo.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
