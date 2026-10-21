/*
=========================================
QKW996 LINKS
=========================================
*/

// WhatsApp
const whatsappLink =
    "https://wa.link/2j7twc";


// Telegram Support
const telegramSupportLink =
    "https://t.me/Qkw_996";


// Telegram Channel
const telegramChannelLink =
    "https://t.me/QKWIN996";


/*
=========================================
ELEMENTS
=========================================
*/

const whatsappButton =
    document.getElementById(
        "whatsappButton"
    );


const telegramChannelButton =
    document.getElementById(
        "telegramChannelButton"
    );


const modal =
    document.getElementById(
        "contactModal"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalText =
    document.getElementById(
        "modalText"
    );


const modalWhatsapp =
    document.getElementById(
        "modalWhatsapp"
    );


const modalTelegram =
    document.getElementById(
        "modalTelegram"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const year =
    document.getElementById(
        "year"
    );


/*
=========================================
YEAR
=========================================
*/

year.textContent =
    new Date().getFullYear();


/*
=========================================
GROUP CHANNEL - WHATSAPP
=========================================
*/

whatsappButton.addEventListener(
    "click",
    function () {

        openLink(
            whatsappLink
        );

    }
);


/*
=========================================
GROUP CHANNEL - TELEGRAM
=========================================
*/

telegramChannelButton.addEventListener(
    "click",
    function () {

        openLink(
            telegramChannelLink
        );

    }
);


/*
=========================================
GAME CARDS
=========================================
*/

const gameCards =
    document.querySelectorAll(
        ".game-card"
    );


gameCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const gameName =
                    card.dataset.game;

                openGameContact(
                    gameName
                );

            }
        );

    }
);


/*
=========================================
OPEN GAME POPUP
=========================================
*/

function openGameContact(gameName) {

    modal.dataset.game =
        gameName;


    modalTitle.textContent =
        gameName +
        " Support";


    modalText.textContent =
        "Pilih WhatsApp atau Telegram untuk bertanya mengenai " +
        gameName +
        ".";


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/*
=========================================
GAME WHATSAPP
=========================================
*/

modalWhatsapp.addEventListener(
    "click",
    function () {

        openLink(
            whatsappLink
        );

    }
);


/*
=========================================
GAME TELEGRAM
=========================================
*/

modalTelegram.addEventListener(
    "click",
    function () {

        openLink(
            telegramSupportLink
        );

    }
);


/*
=========================================
OPEN LINK
=========================================
*/

function openLink(url) {

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/*
=========================================
CLOSE POPUP
=========================================
*/

function closeContactModal() {

    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    delete modal.dataset.game;

}


/*
=========================================
CLOSE BUTTON
=========================================
*/

closeModal.addEventListener(
    "click",
    function () {

        closeContactModal();

    }
);


/*
=========================================
CLICK OUTSIDE POPUP
=========================================
*/

modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            closeContactModal();

        }

    }
);


/*
=========================================
ESC KEY
=========================================
*/

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeContactModal();

        }

    }
);
