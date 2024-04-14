let score =JSON.parse(localStorage.getItem('score'))|| {
  wins : 0,
  loses : 0,
  same : 0,
}; /*this work the same as if we wrote this 
if (score==null(should work the same if we change it to !score)) {
  score={
    wins : 0,
    loses : 0,
    same : 0,
  };
}else{
  score =JSON.parse(localStorage.getItem('score'))
}
it is : if score is true it will take the left side but if it is not then it take the right side
*/


/*
-JSON.Stringify(name of the subject):it is a Stringify function inside the JSON object that return a string value --> we use it if a statment need an object but it can only support strings exp:localStorage.setItem('a name for this permenent variable','it value');
--localStorage.setItem('a name for this permenent variable','it value'); : it is a setItem function inside the localStorage object that save a variable permenently so even if ze refrech the page we zont start from 0 again
-JSON.parse(a string object); : it is the revers of JSON.Stringify that retake the object to the original js state --> we use it if we have an java script object notion (string) and we wants it real java script values exp:localStorage.getItem(object name) but in its JSON string form so ze use the reverse JSON parse.
*/

function cmp_choix() {
    let cmp_choice='';
    const choice = Math.random();
    if (choice >= 0 && choice < 1 / 3) {
        cmp_choice = 'rock';

    } else {
        if (choice > 1 / 3 && choice < 2 / 3) {
            cmp_choice = 'paper';
        } else {
            cmp_choice = 'scissors';
        }
    }
    return cmp_choice;
}
/*function cmp_move(player_move) {
  const cmp_choice=cmp_choix();
  if(player_move === 'rock'){
    if (cmp_choice==='rock') {
        
        result= 'ties';
      }else {
        if(cmp_choice==='paper') {
          result='lose';
          }else{
             if (cmp_choice==='sesers') {
              result='win';
             }
           }
      }
      
  }else{
    if (player_move==='paper') {
      if (cmp_choice==='paper') {
        result= 'ties';
      }else {
        if(cmp_choice==='sesers') {
          result='lose';
          }else{
             if   (cmp_choice==='rock') {
              result='win';
             }
           }
      }
      
    }else{
      if (player_move==='sesers') {
        if (cmp_choice==='sesers') {
          result= 'ties';
        }else {
          if(cmp_choice==='rock') {
            result='lose';
            }else{
               if   (cmp_choice==='paper') {
                result='win';
               }
             }
        }
        
      }
    }
  }
  
  if (result === 'win') {
    score.wins++;
  }else if(result==='lose'){
    score.loses++;
  }else if (result==='ties') {
    score.same++;
  }
}
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.theScore').innerHTML=`wins : ${score.wins} , loses : ${score.loses} , ties : ${score.same}`;

  document.querySelector('.theResult').innerHTML=`you ${result}`;
  
  if(player_move === 'rock'){
    if (cmp_choice==='rock') {
      document.querySelector('.theChoose').innerHTML=`
      you pick : <img class="js-choose" src="icon/rock-emoji.png"> 
      computer pick :<img class="js-choose" src="icon/rock-emoji.png"> 
      `
      }else {
        if(cmp_choice==='paper') {
          document.querySelector('.theChoose').innerHTML=`
           you pick : <img class="js-choose" src="icon/rock-emoji.png"> 
           computer pick :<img class="js-choose" src="icon/paper-emoji.png"> 
          `
          }else{
             if (cmp_choice==='sesers') {
               document.querySelector('.theChoose').innerHTML=`
                 you pick : <img class="js-choose" src="icon/rock-emoji.png"> 
                 computer pick :<img class="js-choose" src="icon/scissors-emoji.png"> 
                `
              }
           }
      }
      
  }else{
    if (player_move==='paper') {
      if (cmp_choice==='paper') {
        document.querySelector('.theChoose').innerHTML=`
         you pick : <img class="js-choose" src="icon/paper-emoji.png"> 
         computer pick :<img class="js-choose" src="icon/paper-emoji.png"> 
        `
      }else {
        if(cmp_choice==='sesers') {
          document.querySelector('.theChoose').innerHTML=`
           you pick : <img class="js-choose" src="icon/paper-emoji.png"> 
           computer pick :<img class="js-choose" src="icon/scissors-emoji.png"> 
          `
        }else{
             if   (cmp_choice==='rock') {
              document.querySelector('.theChoose').innerHTML=`
               you pick : <img class="js-choose" src="icon/paper-emoji.png"> 
               computer pick :<img class="js-choose" src="icon/rock-emoji.png"> 
              `
            }
           }
      }
      
    }else{
      if (player_move==='sesers') {
        if (cmp_choice==='sesers') {
          document.querySelector('.theChoose').innerHTML=`
           you pick : <img class="js-choose" src="icon/scissors-emoji.png"> 
           computer pick :<img class="js-choose" src="icon/scissors-emoji.png"> 
          `
        }else {
          if(cmp_choice==='rock') {
            document.querySelector('.theChoose').innerHTML=`
             you pick : <img class="js-choose" src="icon/scissors-emoji.png"> 
             computer pick :<img class="js-choose" src="icon/rock-emoji.png"> 
            `
          }else{
               if   (cmp_choice==='paper') {
                document.querySelector('.theChoose').innerHTML=`
                  you pick : <img class="js-choose" src="icon/scissors-emoji.png"> 
                 computer pick :<img class="js-choose" src="icon/paper-emoji.png"> 
                `
               }
             }
        }
        
      }
    }
  }*/
  function cmp_move(player_move) {
    const cmp_choice = cmp_choix();
    let result = '';

    if (player_move === cmp_choice) {
        result = 'ties';
    } else if ((player_move === 'rock' && cmp_choice === 'scissors') ||
               (player_move === 'paper' && cmp_choice === 'rock') ||
               (player_move === 'scissors' && cmp_choice === 'paper')) {
        result = 'win';
    } else {
        result = 'lose';
    }

    if (result === 'win') {
        score.wins++;
    } else if (result === 'lose') {
        score.loses++;
    } else if (result === 'ties') {
        score.same++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.theScore').innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.same}`;
    document.querySelector('.theResult').innerHTML = `You ${result}`;

    const playerImage = `${player_move}-emoji.png`;
    const cmpImage = `${cmp_choice}-emoji.png`;
    document.querySelector('.theChoose').innerHTML = `
        <p>You pick:</p>
        <img class="js-choose" src="icon/${playerImage}">
        <p>Computer picks:</p>
        <img class="js-choose" src="icon/${cmpImage}">
    `;
}
