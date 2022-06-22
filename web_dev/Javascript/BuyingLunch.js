let name = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];


// function whosBuyingLunch (name) { 
    whosBuyingLunch = (name) => {
    let noOfPeople = name.length - 1
    let randomName = Math.round(Math.random() * noOfPeople);
    console.log(name[randomName] + ' ' + randomName + ' is buying lunch today');
}

whosBuyingLunch(name);