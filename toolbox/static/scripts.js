
// COLLAPSIBLE

var collapsed = false;

var collapse = document.getElementsByClassName("collapsible");

var n;

for (n = 0; n < collapse.length; n++) {
    collapse[n].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            collapsed = false;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            collapsed = true;
        }
    });
}

// COPY TEXT IN BOX TO CLIPBOARD

function copy() {

    var text = document.getElementById("your-text");

    text.select();
    text.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied to clipboard!");
}

// SAVE BUTTON CLICKED WHEN NOT LOGGED IN
function login_to_save() {
    alert("Log in to save to Favorites!")
}

// INSERT FAVORITE INTO TEXTAREA
var mydropdown = document.getElementById("dropdown")
var textbox = document.getElementById("your-text")

mydropdown.onchange = function() {
    var mydropdownValue = mydropdown.options[mydropdown.selectedIndex].value;
    textbox.value = textbox.value + mydropdownValue + ' '
}


// COPY SINGLE BUTTON CHARACTERS TO CLIPBOARD

function copy_a() {

    // get button text
    var character = document.getElementById("a").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element - RENDER COPY ALERT OR PASTE DIRECTLY TO TEXTBOX
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("a").innerHTML
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_e() {

    // get button text
    var character = document.getElementById("e").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("e").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_i() {

    // get button text
    var character = document.getElementById("i").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("i").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_o() {

    // get button text
    var character = document.getElementById("o").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("o").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_u() {

    // get button text
    var character = document.getElementById("u").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("u").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_umlaut_lower() {

    // get button text
    var character = document.getElementById("umlaut_lower").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("umlaut_lower").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_tilde_lower() {

    // get button text
    var character = document.getElementById("tilde_lower").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("tilde_lower").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_a_upper() {

    // get button text
    var character = document.getElementById("a_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("a_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_e_upper() {

    // get button text
    var character = document.getElementById("e_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("e_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_i_upper() {

    // get button text
    var character = document.getElementById("i_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("i_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_o_upper() {

    // get button text
    var character = document.getElementById("o_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("o_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_u_upper() {

    // get button text
    var character = document.getElementById("u_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("u_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_umlaut_upper() {

    // get button text
    var character = document.getElementById("umlaut_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("umlaut_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_tilde_upper() {

    // get button text
    var character = document.getElementById("tilde_upper").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("tilde_upper").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_exclamation() {

    // get button text
    var character = document.getElementById("exclamation").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("exclamation").innerHTML;
    }

    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}

function copy_question() {

    // get button text
    var character = document.getElementById("question").innerText;

    // create temporary input element
    var temporaryInputElement = document.createElement("input");
    temporaryInputElement.type = "text";
    temporaryInputElement.value = character;

    // append temporary element to body
    document.body.appendChild(temporaryInputElement);

    // select and copy temp element
    temporaryInputElement.select();
    document.execCommand("Copy");

    if (collapsed == false) {
        alert("Copied: " + temporaryInputElement.value);
    } else if (collapsed == true) {

        let textarea = document.getElementById("your-text");
        textarea.focus();
        textarea.value += document.getElementById("question").innerHTML;
    }
    // remove temp element from body
    document.body.removeChild(temporaryInputElement);
}



