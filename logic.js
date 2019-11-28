const firebaseConfig = {
    apiKey: "AIzaSyBGyVoFbfZJtdc5FirU-nYbafaICr6OUbY",
    authDomain: "dd-christmaslist.firebaseapp.com",
    databaseURL: "https://dd-christmaslist.firebaseio.com",
    projectId: "dd-christmaslist",
    storageBucket: "dd-christmaslist.appspot.com",
    messagingSenderId: "332426567681",
    appId: "1:332426567681:web:fb5cd7c32bee96c0a5a000"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const count = 9;

//initial values
// let names = [
//     "No One :(", "No One :(", "No One :(", "No One :(", "No One :(", "No One :(", "No One :(", "No One :(", "No One :(", "No One :(", 
// ];

database.ref().on("value", function(snapshot) {
    
    // console.log(snapshot.val().name1)

    for (i=0; i < count; i++) {
        // console.log(snapshot.child("names").child(i).val())
        let name = snapshot.child("names").child(i).val()

        let entry = 
        `
        <p>Who is getting this: <strong>${name}</strong></p>
        <i>Enter Name:</i>
        <input class="form-control" id="i${i}-name" type="text">
        <button class="btn btn-success" id="i${i}-submit">I'm getting this for Dylan!!!</button>
        `
        let link = "i" + i + "-data"
        $("#" + link).html(entry)
    }
})

// for (i=0; i < count; i++) {
//     $("#i" + i + "-submit").on("click", function(event) {
//         event.preventDefault();
    
//         console.log(i)
//     })
// }


$(document).on("click", "#i1-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i1-name").val().trim();
    
    database.ref("names").update({
        1: bidName
    })
});
$(document).on("click", "#i2-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i2-name").val().trim();
    
    database.ref("names").update({
        2: bidName
    })
});
$(document).on("click", "#i3-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i3-name").val().trim();
    
    database.ref("names").update({
        3: bidName
    })
});
$(document).on("click", "#i4-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i4-name").val().trim();
    
    database.ref("names").update({
        4: bidName
    })
});
$(document).on("click", "#i5-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i5-name").val().trim();
    
    database.ref("names").update({
        5: bidName
    })
});
$(document).on("click", "#i6-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i6-name").val().trim();
    
    database.ref("names").update({
        6: bidName
    })
});
$(document).on("click", "#i7-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i7-name").val().trim();
    
    database.ref("names").update({
        7: bidName
    })
});
$(document).on("click", "#i8-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i8-name").val().trim();
    
    database.ref("names").update({
        8: bidName
    })
});
$(document).on("click", "#i9-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i9-name").val().trim();
    
    database.ref("names").update({
        9: bidName
    })
});
$(document).on("click", "#i10-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i10-name").val().trim();
    
    database.ref("names").update({
        10: bidName
    })
});
$(document).on("click", "#i11-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i11-name").val().trim();
    
    database.ref("names").update({
        11: bidName
    })
});
$(document).on("click", "#i12-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i12-name").val().trim();
    
    database.ref("names").update({
        12: bidName
    })
});
$(document).on("click", "#i13-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i13-name").val().trim();
    
    database.ref("names").update({
        13: bidName
    })
});
$(document).on("click", "#i14-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i14-name").val().trim();
    
    database.ref("names").update({
        14: bidName
    })
});
$(document).on("click", "#i15-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i15-name").val().trim();
    
    database.ref("names").update({
        15: bidName
    })
});
$(document).on("click", "#i16-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i16-name").val().trim();
    
    database.ref("names").update({
        16: bidName
    })
});
$(document).on("click", "#i17-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i17-name").val().trim();
    
    database.ref("names").update({
        17: bidName
    })
});
$(document).on("click", "#i18-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i18-name").val().trim();
    
    database.ref("names").update({
        18: bidName
    })
});
$(document).on("click", "#i19-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i19-name").val().trim();
    
    database.ref("names").update({
        19: bidName
    })
});
$(document).on("click", "#i20-submit", function(event) {
    event.preventDefault();

    let bidName = $("#i20-name").val().trim();
    
    database.ref("names").update({
        20: bidName
    })
});











// const i1 = 
// `
// <i>Enter Name:</i>
// <input class="form-control" id="i1-name" type="text">
// <button class="btn btn-success" id="i1-submit">I'm getting this for Dylan!!!</button>
// `

// $("#i1-data").html(i1)