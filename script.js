  const firebaseConfig = {
    authDomain: "ib-cs-sl-ia-3952d.firebaseapp.com",
    databaseURL: "https://ib-cs-sl-ia-3952d-default-rtdb.firebaseio.com",
    projectId: "ib-cs-sl-ia-3952d",
    storageBucket: "ib-cs-sl-ia-3952d.appspot.com",
    messagingSenderId: "1061247167164",
    appId: "1:1061247167164:web:b939c2f8f0dc96c99bfeb9",
    measurementId: "G-8RX2L53MZZ"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference database
var registrationFormDB = firebase.database().ref("registrationForm");

document.getElementById("registrationForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var age = getElementVal('age');
    var parentfname = getElementVal('parentfname');
    var parentlname = getElementVal('parentlname');
    var phone = getElementVal('phone');
    var email = getElementVal('email');

    saveStudents(fname, lname, age, parentfname, parentlname, phone, email);
}

const saveStudents = (fname, lname, age, parentfname, parentlname, phone, email) => {
    var newRegistrationForm = registrationFormDB.push();

    newRegistrationForm.set({
        fname : fname,
        lname : lname,
        age : age,
        parentfname : parentfname,
        parentlname : parentlname,
        phone : phone,
        email : email,
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
};

