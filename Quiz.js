class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
     background("orange");
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("RESULT",120,100);
    //call getContestantInfo( ) here
       Contestant.getPlayerInfo

    //write condition to check if contestantInfor is not undefined
    if(allPlayers!==undefined){
      for(var plr in allContestents)
       var correctanswered = "2"
        if(correctanswered=== allContestents[plr].answer){
        fill("green")
        else
        fill("black") 
     
      textSize(15);
      text("NOTE:Contestent with correct ans will highlighted with green colour",130,200);
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

  }
