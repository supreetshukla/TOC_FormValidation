function SphoneNo(num){
    const regex = /([\+][0-9]{2})?[1-9][0-9]{9}$/gm;
    const str = document.getElementById('Sno').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('Sno').style.backgroundColor = "white";
        });
    }
    if(c === false){
        document.getElementById('Sno').style.backgroundColor = "#FF5153";
        alert("Phone Number should be of 10 or 12 digits");
    }
}

function PphoneNo(num){
    const regex = /([\+][0-9]{2})?[1-9][0-9]{9}$/gm;
    const str = document.getElementById('Pno').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('Pno').style.backgroundColor = "white";
        });
    }
    if(c === false){
        document.getElementById('Pno').style.backgroundColor = "#FF5153";
        alert("Phone Number should be of 10 or 12 digits");
    }
}


function Email(mail){
    const regex = /[a-z][a-z0-9]{2,20}([\-_\.][a-z0-9]{2,20})?[@][a-z]{2,20}([\.][a-z]{0,5}){1,5}$/gm;
    const str = document.getElementById('mail').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('mail').style.backgroundColor = "white";
        });
    }
    if (c === false){
        document.getElementById('mail').style.backgroundColor = "#FF5153";
        alert("Wrong Format");
    }
}

function DOB(dob) {
    const regex = /([0-2][0-9]|[3][0-1])[\-]([0][1-9]|[1][0-2])[\-]([1][9][9][0-9]|[2][0][0][0-5])$/gm; //changes need to be done
    const str = document.getElementById('dob').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('dob').style.backgroundColor = "white";
        });
    }
    if (c === false){
        document.getElementById('dob').style.backgroundColor = "#FF5153";
        alert("Wrong format ");
    }
}

function PRN(prn){
    const regex = /[0](1|2)[2][0][1][5-9][0][0-9][0-9][0-9]$/gm;
    const str = document.getElementById('prn').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('prn').style.backgroundColor = "white";
        });
    }
    if (c === false){
        document.getElementById('prn').style.backgroundColor = "#FF5153";
        alert("Wrong Format");
    }
}

function Semester(sem){
    sem = document.getElementById('semester').value;
    if (sem.length === 1){
        const regex = /[1-8]{1}$/mg;
        const str = sem;
        let m;
        let c = false;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                console.log(`Found match, group ${groupIndex}: ${match}`);
                c = true;
                document.getElementById('semester').style.backgroundColor = "white";
            });
        }
        if (c === false){
            document.getElementById('semester').style.backgroundColor = "#FF5153";
            alert("Wrong Format eg: \"Abc Xyz\"");
        }
    }
    else{
        alert("Length Of string should be 1")
    }
}

function add(address){
    const regex = /[a-zA-Z0-9\s,.'-]{3,}$/mg;
    const str = document.getElementById('address').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('address').style.backgroundColor = "white";
        });
    }
    if (c === false){
        document.getElementById('address').style.backgroundColor = "#FF5153";
        alert("Wrong Format eg: \"Abc Xyz\"");
    }
}

function Name(name){
    const regex = /[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})?\s[A-Z][a-z]{2,15}$/mg;
    const str = document.getElementById('name').value;
    let m;
    let c = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            c = true;
            document.getElementById('name').style.backgroundColor = "white";
        });
    }
    if (c === false){
        document.getElementById('name').style.backgroundColor = "#FF5153";
        alert("Wrong Format eg: \"Abc Xyz\"");
    }
}

function myFunc(){

    if(document.getElementById('name').value.length !== 0 && document.getElementById('prn').value.length !== 0 && document.getElementById('Pno').value.length !== 0 && document.getElementById('Sno').value.length !== 0 && document.getElementById('address').value.length !== 0 && document.getElementById('dob').value.length !== 0 && document.getElementById('semester').value.length !== 0){
        alert("Form Successfully Submitted");
        console.log("Form Successfully Submitted");
    }else{
        alert("Please fill all the information");
    }
}