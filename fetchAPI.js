const fetchUserInfo = async ()=>{
    try{
        const response = await fetch('https://reqres.in/api/users/2');
        if(!response.ok){
            throw new Error('user data not found...');
        }

        // parse json response .
        const userData = await response.json();
        console.log(userData); 
    }
    catch(error){
        console.log('Error', error);
    }
}

// call the function 
fetchUserInfo();