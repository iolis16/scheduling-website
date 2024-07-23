const firebaseConfig = {
    apiKey: "AIzaSyBB-UlbxRAuYeJOmyjf2h5JPqFMI8rHgfU",
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
var classesDB = firebase.database().ref("classes");

document.getElementById("classes").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var day = getElementVal('day');
    var time = getElementVal('time');
    var teacher = getElementVal('teacher');

    saveClass(day, time, teacher);
}

const saveClass = (day, time, teacher) => {
    var newClass = classesDB.push();

    newClass.set({
        day : day,
        time : time,
        teacher : teacher,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};