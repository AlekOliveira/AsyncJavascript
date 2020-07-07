function checkAge(age) {
    return new Promise(function(resolve, reject) {
        
        if(age > 18)
            resolve();
        else
            reject();

    }); 
}

checkAge(19)
    .then(function() {
        console.log('Over 18 years');
    })
    .catch(function() {
       console.log('Under 18 years'); 
    });