let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const player = parseInt(document.getElementById('player').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let player_status=false, weight_status=false;

    if(player === '' || isNaN(player) || (player <= 0)){
        document.getElementById('player_error').innerHTML = 'Please provide a valid number of player';
    }else{
        document.getElementById('player_error').innerHTML = '';
        player_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid Price';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(player_status && weight_status){
        const total = (player*weight);

        
            result.innerHTML =  'Total :' + total;
        
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});