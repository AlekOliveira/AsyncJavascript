let bt = document.getElementById('btGet');
let input = document.getElementById('inText');
let list = document.getElementById('list');

function reset(state){
    list.innerHTML='';
    input.value = '';
    //ternary operator example
    state === 'a'? input.placeholder = 'Type a github user nickname' : input.placeholder = 'User not found! Try again.';
}

function fillList(data){
    for(var atrib in data)
    {
        let newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode(data[atrib]));
        list.appendChild(newItem);
    }
} 

/*Example using async and await*/
bt.onclick = async function () {    
    let newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode('loading...'));
    list.appendChild(newItem);
    
    if(input.value != '')
    {  
        let data;
        await axios.get('https://api.github.com/users/'.concat(input.value))
        .then(function (response) {
            data = response.data;
            reset('a');
        })
        .catch(function (error) {
            console.warn(error);
            reset('b');
        });
                
        /*async and await ensures that the code
        bellow runs only when the request is finished*/
        fillList(data);
    }
}

/*Same code whitout async and await*/
/*
bt.onclick =  function () {    
    if(input.value != "")
    {
        let data;
         axios.get('https://api.github.com/users/'.concat(input.value))
        .then(function (response) {
            data = response.data;
            //console.log(response);
            for(var atrib in data)
            {
                console.log(data[atrib]);
                let newItem = document.createElement('li');
                newItem.appendChild(document.createTextNode(data[atrib]));
                list.appendChild(newItem);
            }
        })
        .catch(function (error) {
            console.warn(error);
        });
    }
}*/