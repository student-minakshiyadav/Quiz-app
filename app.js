let questions=[
    {
    question: "which operator used for remainder operation in programming? ",
    answer:[
        
            {text:"+",correct:false},
           { text:"/",correct:false },
            {text:"*",correct:false},
            {text:"%",correct:true },
        
    ]
    },
     {
    question: "Which keyword is used to declare a constant variable in javascript?",
    answer:[
        
            {text:"var",correct:false},
           { text:"let",correct:false },
            {text:"const",correct:true},
            {text:"static",correct:false },
        
    ]
    },
     {
    question: "which data structure work on fifo ? ",
    answer:[
        
            {text:"stack",correct:false},
           { text:"queue",correct:true },
            {text:"array",correct:false},
            {text:"tree",correct:false },
        
    ]
    },
     {
    question: "which loop runs at least once even if the conditions is false? ",
    answer:[
        
            {text:"for",correct:false},
           { text:"while",correct:false },
            {text:"do while",correct:true},
            {text:"for each",correct:false},
        
    ]
    },
     {
    question: "which operator is used for strict equality in javascript ? ",
    answer:[
        
            {text:"==",correct:false},
           { text:"===",correct:true },
            {text:"!=",correct:false},
            {text:"!==",correct:false },
        
    ]
    },
]
let questionelement=document.querySelector("#question");
let answerbtn=document.querySelector("#answer-btn");
let nextbtn=document.querySelector("#next-btn");
let currentindex=0;
let score=0;

function startquiz(){
    currentindex=0;
    score=0;
    showquestion();
    nextbtn.innerHTML="next";
}
startquiz();
function showquestion(){
    resetbtn();
    let questiondata=questions[currentindex];
    questionelement.innerHTML=currentindex+1+"."+ questiondata.question;
    questiondata.answer.forEach((answer)=>{
        let btn=document.createElement("button");
        btn.innerHTML=answer.text;
        btn.classList.add("btn");
        if(answer.correct){
            btn.dataset.ans=answer.correct;
        }
        answerbtn.append(btn);
        console.log(btn);
        btn.addEventListener("click",selectAns);
    })
}
function resetbtn(){
    nextbtn.style.dispaly="none";
    while(answerbtn.firstChild){
        answerbtn.firstChild.remove();
    }

}
function selectAns(evt){
    let currectans=evt.target.getAttribute("data-ans");
    console.log(currectans)
    if(currectans){
        evt.target.classList.add("correct");
        score++;
    }
    else{
        evt.target.classList.add("uncorrect");
    }
    Array.from(answerbtn.children).forEach((button)=>{
        if(button.dataset.ans){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextbtn.style.display="block";
}
function scoredisplay(){
    resetbtn();
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}`;
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
}
nextbtn.addEventListener("click",()=>{
    currentindex++;
    if(currentindex<questions.length){
        showquestion();
    }
    else if(currentindex==questions.length+1){
        startquiz();
    }
    else{
        scoredisplay();
    }
})

