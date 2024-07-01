
const questionContainer = document.getElementById('question');

const optionContainer = document.getElementById('option');

const container = document.getElementById('container');

var timerElement = document.getElementById("timer");

const nextButton = document.getElementById('next-btn');

const restartButton = document.getElementById('restart-btn');

let trackQuestion = document.getElementById('track');

var scoreElement = document.getElementById("scoreValue");

var totalScore = document.getElementById("totalQ");

var timerElement = document.getElementById("timer");

var closinText = document.querySelector('.close');

var startTime;

var timer;

var quizEnded = false;





// 68Qs
const questions = [
{
    question:"What is Python?",
    answers:["A high-level programming language","A low-level programming language","An Animal programming language","I Don't Know"],
    correctResponse:0
},
{
    question:"When was Python Developed?",
    answers:["1890","2015","1905","1991"],
    correctResponse:3
}
,
{
    question:"Who Developed Python?",
    answers:[" COT Students"," Richie Bell","Kandi Krush","Guido van Rossum"],
    correctResponse:3
},
{
    question:"How are Python codes read?",
    answers:["Compilers","Interpreters","Assembler","UV Lights"],
    correctResponse:1
},
{
    question:"Which of the following is NOT a valid Python variable name?",
    answers:[" my_variable"," 123variable"," _variable"," variable123"],
    correctResponse:1
},
{
    question:"How do you print 'Hello, World!' in Python?",
    answers:["print(Hello, World!)","console.log(Hello, World!)","printf(Hello, World!)","System.out.println(Hello, World!)"],
    correctResponse:0
},
{
    question:'How do you add comments in Python?',
    answers:['// This is a comment',' /* This is a comment */',' # This is a comment'," <!-- This is a comment -->"],
    correctResponse:2
},
{
    question:"What is the correct way to declare a variable in Python?",
    answers:["var x = 5","x = 5","int x = 5","let x = 5"],
    correctResponse:1
},
{
    question:'What is the output of the following code? x = "Hello"  print(x[1])',
    answers:["H","e","o","l"],
    correctResponse:1
},
{
    question:"What is the result of 10 % 3 in Python?",
    answers:["3","1","0.33333","10"],
    correctResponse:1
},
{
    question:"Which keyword is used to define a function in Python?",
    answers:["def","func","function","define"],
    correctResponse:0
},
{
    question:"What is the output of the following code? x = [1, 2, 3] print(len(x)) ",
    answers:["3","1","2","4"],
    correctResponse:0
},
{
    question:'What is the error of the following code? if( 5 > 2), print("Yeah,that is true")',
    answers:["; instead of ,",": instead of ,","wrong syntax","I don't know?"],
    correctResponse:1
},
{
    question:"How do you convert a string to uppercase in Python?",
    answers:["str.upper()","str.cap()","str.to_upper()","str.uppercase"],
    correctResponse:0
},
{
    question:"Which of the following is an example of a mutable data type in Python? ",
    answers:["String","Integer","Tuple","List"],
    correctResponse:3
},
{
    question:"What is the output of the following code?  x = [1, 2, 3]   x.append(4)",
    answers:["3","1","2","4"],
    correctResponse:0
},
{
    question:"How do you access the last element of a list in Python?",
    answers:["list[-1]","list[-2]","list[len(list) - 1]","list.last()"],
    correctResponse:0
},
{
    question:"How do you loop through a list in Python?",
    answers:["for i in range(len(myList));","for i in rang(len(myList)):","for i in range(len(myList)):","I don't know"],
    correctResponse:0
},
{
    question:"What is the output of the following code?  x = (1, 2, 3)   y = list(x)   y.append(4)  print(y)",
    answers:["(1,2,3)","(1,2,3,4)","[1,2,3,4]","[4,3,2,1]"],
    correctResponse:2
},
{
    question:"What is the difference between a tuple and a list in Python?",
    answers:["Tuples are mutable, lists are immutable","Tuples are indexed from 1, lists are indexed from 0","Tuples are ordered, lists are unordered."," Tuples use parentheses, lists use square brackets"],
    correctResponse:3
},
{
    question:"How do you swap the values of two variables in Python?",
    answers:[" temp = a; a =b; b = temp","a, b = b, a"," a = b; b = a","swap(a, b)"],
    correctResponse:1
},
{
    question:"What is the output of the following code?  x = 5     if x > 2:  print('x is greater than 2')    else:  print('x is not greater than 2')",
    answers:[" x is greater than 2"," x is not greater than 2","x is 5","x is greater than or equal to 2"],
    correctResponse:0
},
{
    question:"How do you create a dictionary in Python?",
    answers:["(1,2,3)","[1,2,3]","{1,2,3}",'{"key1": 1, "key2": 2, "key3": 3}' ],
    correctResponse:3
},
{
    question:"What is the output of the following code?  x = 5    y = 2    print(x // y)",
    answers:["2.5","2","2.0","2.25"],
    correctResponse:1
},
{
    question:"How do you check if a key exists in a dictionary?",
    answers:["key in dictionary","dictionary.contains(key)","key.exists(dictionary)","dictionary.key_exists(key)"],
    correctResponse:0
},
{
    question:"What is the output of the following code?   x = 5   y = x   x = 10   print(y)",
    answers:["5","10","Error","None"],
    correctResponse:0
},
{
    question:"What is the result of the following code?  x = [1, 2, 3, 4, 5]   y = x[1:3]    y[0] = 10    print(x)",
    answers:["[1,2,3,4,5]","[1,10,3,4,5]","[1,10,2,3,4,5]","[1,2,3,4,5,10]"],
    correctResponse:0
},
{
    question:"What is the output of the following code?  x = 3(4-1(1-5)-3)    print(x)",
    answers:["0","10","16","15"],
    correctResponse:3
},
{
    question:" How do you open a file in Python for writing?",
    answers:['file = open("file.txt", "r)',' file = open("file.txt", "w")','file = open("file.txt", "a")','file = open("file.txt", "x")'],
    correctResponse:1
},
{
    question:'What is the output of the following code?   x = "Hello, World!"    print(x.split(","))',
    answers:[' ["Hello", "World"]',' ["Hello", "World!"]',"['Hello', 'World!']" ,' ["Hello,", " World!"]'],
    correctResponse:2
},
{
    question:" How do you open a file in Python for reading?",
    answers:['file = open("file.txt", "r)',' file = open("file.txt", "w")','file = open("file.txt", "a")','file = open("file.txt", "x")'],
    correctResponse:0
},
{
    question:"How do you remove an item from a list in Python?",
    answers:['list.remove(item)','list.pop(item)','del list[item]','list.delete(item)'],
    correctResponse:0
},
{
    question:"What is the output of the following code?  x = [1, 2, 3]    y = x.copy()   y.append(4)   print(x)",
    answers:[' [1, 2, 3]',' [1, 2, 3, 4]',' [4, 3, 2, 1]',' [1, 2, 3, [4]]'],
    correctResponse:1
},
{
question:"What is the output of the following code?  x = [1, 2, 3]  \n y = x[:] \n  y.append(4) \n  print(x)",
answers:[" [1, 2, 3]","[1, 2, 3, 4]"," [4, 3, 2, 1]"," [1, 2, 3, [4]]"],
correctResponse:0
},
{
    question:"What is the difference between the 'is' and '==' operators in Python?",
    answers:['"is" compares identity, "==" compares values','"is" compares values, "==" compares identity','"is" compares memory addresses, "==" compares values','"is" compares values, "==" compares memory addresses'],
    correctResponse:0
},
{
    question:"What is the output of the following code?   def my_function(x=10): \n   print(x) \n   my_function(5)",
    answers:['5','10','Error','None'],
    correctResponse:0
},
{
    question:"How do you handle exceptions in Python?",
    answers:['try/raise','try/catch',' try/finally','try/expect'],
    correctResponse:3
},
{
    question:"What is the output of the following code?  x = 5 \n    y = 0  \n  try:  result = x / y  \n  print(result)  \n except ZeroDivisionError:   print('Cannot divide by zero')",
    answers:['5','0',' Cannot divide by zero','Error'],
    correctResponse:2
},
{
    question:"What is the output of the following code?  x = [1, 2, 3] \n   y = [4, 5, 6]  \n  z = x + y \n   print(z)",
    answers:['Error','[[1, 2, 3], [4, 5, 6]]',' [1, 2, 3, 4, 5, 6]','[1, 2, 3, [4, 5, 6]]'],
    correctResponse:2
},
{
    question:"How do you sort a list in descending order in Python?",
    answers:['sorted(list, reverse=True)',' list.reverse()',' list.sort(reverse=True)','list.sort() followed by list.reverse()'],
    correctResponse:0
},
{
    question:"What is the output of the following code?  x = [1, 2, 3]  \n  y = x  \n  x += [4, 5]  \n  print(y)",
    answers:['[1, 2, 3]',' [1, 2, 3, 4, 5]',' [5, 4, 3, 2, 1]',' [1, 2, 3, [4, 5]]'],
    correctResponse:1
},
{
    question:"How do you create a generator function in Python?",
    answers:['def my_generator(): for i in range(10): yield i',' def my_generator(): for i in range(10): return i','def my_generator(): for i in range(10): yield return i',' def my_generator(): return (i for i in range(10))'],
    correctResponse:0
},
{
    question:"How do you open a file in Python and automatically close it when you're done?",
    answers:['file = open("file.txt", "r").close()','with open("file.txt", "r") as file: file_contents = file.read()',') file = open("file.txt", "r") # code that operates on the file file.close()','file = open("file.txt", "r") file_contents = file.read() file.close()'],
    correctResponse:1
},
{
    question:"What is the output of the following code? \n x = [1, 2, 3, 4, 5] \n y = x[1:4] \n print(y)",
    answers:['[1, 2]','[2, 3, 4]','[2, 3, 4, 5]','[1, 2, 3, 4]'],
    correctResponse:1
},
{
    question:" How do you remove an element from a list in Python?",
    answers:[' list.remove(element)','list.pop(index)','del list[index]',' All of the above'],
    correctResponse:3
},
{
    question:'What is the output of the following code? \n x = "Hello, World!" \n y = x[7:12] \n print(y)',
    answers:['World!','Hello',', Wor','H'],
    correctResponse:0
},
{
    question:"How do you create a new thread in Python? \n Where fn = function_name",
    answers:['thread.start()','thread.create()',' thread.new()',"threading.Thread(target=fn)"],
    correctResponse:3
},

{
    question:'What is the output of the following code? \n x = [1, 2, 3] \n y = x \n x = [4, 5, 6] \n print(y)',
    answers:['[1, 2, 3]','[4, 5, 6]','[1, 2, 3, [ 4, 5, 6]]','Error'],
    correctResponse:0
},
{
    question:'How do you round a floating-point number to a specified number of decimal places in Python? \n Where dp = decimal_places',
    answers:['number.round(dp)','round(number, dp)','number.toFixed(dp)',"decicimal.round(number,dp)"],
    correctResponse:1
},

{
    question:'What is the output of the following code? \n x = 5 \n y = x \n x += 1 \n print(y)',
    answers:['5','6','Error',"None"],
    correctResponse:0
},
{
    question:'How do you convert a string to lowercase in Python?',
    answers:['string.lowerCase()','string.lower()','string.casefold()',"string.toLower()"],
    correctResponse:1
},
{
    question:'How do you check if a file exists in Python?',
    answers:['os.exists(file_path)',' os.path.exists(file_path)','file.exists(file_path)'," file.path.exists(file_path)"],
    correctResponse:1
},
{
    question:' What is the output of the following code? \n x = [1, 2, 3] \n y = x \n x[0] = 4 \n print(y)',
    answers:['[1, 2, 3]','[4, 2, 3]','[4, 2, 3, [4, 5, 6]]',"Error"],
    correctResponse:1
},
{
    question:'How do you check the current working directory in Python?',
    answers:['os.current_directory()','os.getcwd()','os.dir()',"os.currentdir()"],
    correctResponse:1
},
{
    question:'How do you check the length of a list in Python?',
    answers:['list.size()','list.length()','len(list)',"list.len()"],
    correctResponse:2
},
{
    question:': How do you check if a string starts with a specific substring in Python?',
    answers:['string.startsWith(substring)','string.startswith(substring)','string.starts(substring)',"All of the above"],
    correctResponse:1
},
{
    question:'How do you retrieve the current date and time in Python? Where c_d_t = current_date_time',
    answers:['datetime.now()','datetime.c_d_t()','datetime.today()',"datetime.current()"],
    correctResponse:0
},
// Fifty(50) Quiz Questions Milestone

{
    question:'How do you check if a string is numeric in Python?',
    answers:['string.isnumeric()','string.isdigit()','string.isnumber()',"All of the above"],
    correctResponse:1
},
{
    question:'How do you check if a string is empty in Python?',
    answers:['string.empty()','string.isempty()','string.isemptystring()',"not string"],
    correctResponse:3
},
{
    question:'How do you remove leading and trailing whitespaces from a string in Python?',
    answers:['string.trim()','string.strip()','string.trimwhitespace()',"whitespacetrip"],
    correctResponse:1
},
{
    question:'How do you check if a string is alphabetic in Python?',
    answers:['string.isalpha()','string.isalphabetic()','string.isalphabet()',"All of the above"],
    correctResponse:0
},
{
    question:'How do you check if a string is empty or contains only whitespace characters in Python?',
    answers:['string.isempty()','string.iswhitespace()','string.isspace()',"string.strip().isempty()"],
    correctResponse:3
},
{
    question:'How do you check if a string is a valid identifier in Python?',
    answers:['string.isidentifier()','string.identifier()','string.isvalididentifier()',"All of the above"],
    correctResponse:0
},
{
    question:'How do you reverse the order of elements in a list in Python?',
    answers:[' list.reverse()',' list.reversed()',' list.reverseorder()'," list.reorder()"],
    correctResponse:0
},
{
    question:'What is the output of the following code? \n x = "Hello, World!" \n y = x.replace("o", "e") \n print(y)',
    answers:[' Hello, Werld!',' Helle, Werld!','Helle, World!',"Hell, World!"],
    correctResponse:1
},
{
    question:'How do you check if a string is alphanumeric in Python?',
    answers:['string.isalphanumeric()','string.isalnum()','string.isalphanum()',"All of the above"],
    correctResponse:1
},
{
    question:' What is the output of the following code? \n x = [1, 2, 3] \n y = x.copy() \n x.extend([4, 5]) \n print(y)',
    answers:['[1, 2, 3]','[1, 2, 3, 4]','[4, 3, 2, 1]',"[1, 2, 3, [4]]"],
    correctResponse:0
},
{
    question:'How do you check if a string is a valid email address in Python?',
    answers:['string.isemailaddress()','string.isemail()','string.isvalidemail()',"None of the above"],
    correctResponse:3
},
{
    question:'What is the output of the following code? \n x = "Hello, World!" \n y = x.strip("H!") \n print(y)',
    answers:['Hello, World',' ello, World',' ell0, World',"Hello, World!"],
    correctResponse:1
},
{
    question:'How do you check if a string is a valid IP address in Python?',
    answers:['string.isip()','string.isvalidip()','Use the `ipaddress` module'," None of the above"],
    correctResponse:2
}




// Add More Questions Later
]




// Screen Size Only for Mobile and Tablet

function MobileorTablet()
{
    const MaxScreenWidth = 768;

    return window.innerWidth <= MaxScreenWidth;
}


// Display Content based on Screen Size

function DisplayContent()
{

const ContentPage = document.getElementById('container');


if(MobileorTablet())
{
 

    let currentQuestion = 0;
let score = 0;


// Show Question and Answer Buttons

function showQuestion()
{
    const question = questions[currentQuestion];
    questionContainer.textContent = question.question;
    optionContainer.innerHTML = '';
    question.answers.forEach((answer,index) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.classList.add('btn');
        answerButton.addEventListener('click', () => checkResponse(index))
        optionContainer.appendChild(answerButton);
    })
    trackQuestion.innerHTML = '<p> Question </p>' + (currentQuestion+1) + '<p> out of </p>' + questions.length;

}

function checkResponse(answerIndex)
{
    const correctAnswer = answerIndex === questions[currentQuestion].correctResponse;
     
if(correctAnswer)
{
    
    optionContainer.innerHTML = '<p style="color: #42d3d8;font-size:2.1em;font-weight:bold;" >Correct!</p>'+'<p style="font-size:150px">&#129370;</p>';
    if(score >= 20)
        {
            optionContainer.innerHTML = '<p style="color: #42d3d8;font-size:2.1em;font-weight:bold;" >Correct!</p>'+'<p style="font-size:150px">&#128035;</p>';
    
        }
        if(score >= 40)
            {
                optionContainer.innerHTML = '<p style="color: #42d3d8;font-size:2.1em;font-weight:bold;" >Correct!</p>'+'<p style="font-size:150px">&#128037;</p>';
        
            }
    questionContainer.innerHTML ='';  
    score = score+2;
    
switch(score)
{

    case 10:
        {
            optionContainer.innerHTML = '';
            questionContainer.innerHTML = '<p style="color: #42d3d8;" >You Can do it!</p>' + '<p style="font-size:150px">&#9994;</p>';
            break;
        }
    case 30:
        {
            optionContainer.innerHTML = '';
            questionContainer.innerHTML = '<p style="color: #42d3d8;" >Let Him Cook</p>' + '<p style="font-size:150px">&#127859;</p>';
            break;
        }
        case 60:
            {
                optionContainer.innerHTML = '';
                questionContainer.innerHTML = '<p style="color: #42d3d8;" >Keep Up!</p>' + '<p style="font-size:150px">&#129495	;</p>';
                break;
            }

    case 80:
            {
                optionContainer.innerHTML = '';
                questionContainer.innerHTML = '<p style="color: #42d3d8;" >Interestingly, You are Tough! </p>' + '<p style="font-size:150px">&#128074;</p>';
                break;
            }   
    case 100:
                {
                    optionContainer.innerHTML = '';
                    questionContainer.innerHTML = '<p style="color: #42d3d8;" >Shooting Star </p>' + '<p style="font-size:150px">&#127776;</p>';
                    break;
                }  
     case 120:
                    {
                        optionContainer.innerHTML = '';
                        questionContainer.innerHTML = '<p style="color: #42d3d8;" > Jr  Envangelist </p>' + '<p style="font-size:150px">&#128081;</p>';
                        break;
                    }   
                    
    case 138:
                        {
                            optionContainer.innerHTML = '';
                            questionContainer.innerHTML = '<p style="color: #42d3d8;" > Master of Evangelist </p>' + '<p style="font-size:150px">&#128526;</p>';
                            break;
                        }                 
}


  

}
else
{
    
    questionContainer.innerHTML ='';
    optionContainer.innerHTML = '<p  style="color:#fff; font-weight:bold; font-size:2.1em;  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #42d3d8, 0 0 40px #42d3d8, 0 0 50px #42d3d8, 0 0 60px #42d3d8, 0 0 70px #42d3d8;">Wrong!  Ya sick Menh! </p>' + '<p style="font-size:180px">&#128064;</p>'+'<p style="font-size:70px">&#128274;</p>';


    
}
currentQuestion++;

if(currentQuestion < questions.length && quizEnded == false)
{
    nextButton.style.display = 'block';
    trackQuestion.innerHTML = '<p> Question </p>' + currentQuestion + '<p> out of </p>' + questions.length;
    
}
else
{
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
    closinText.style.display = 'block';
    questionContainer.innerHTML ='';
    trackQuestion.innerHTML = '<p> Your Fastest Time is : </p>';
    clearTimeout(timer); // Stop the timer
    scoreElement.style.display = 'block'
    scoreElement.textContent = score;
    container.style.background = "#825ef6";
    container.style.marginTop = "20px";
    container.style.marginLeft = "10px";
    container.style.marginRight = "10px";
    container.style.padding = "30px";
    container.style.borderRadius = "5mm";
    optionContainer.innerHTML = '<p class="finaltxt">Quiz Over! Thanks for Playing</p>'+'<p style="font-size:150px">&#127881;</p>'+
    '<h3>Share your score with others, Take a Screenshot!</h3>' +
    '<h4 style="color:#42d3d8;">So, How do you feel?</h4>' + '\n' + 
    '<h2>Your Personal Score: </h2>';
    totalScore.style.display = 'block';
   
}



}


nextButton.addEventListener('click', () =>
{
    showQuestion();
    nextButton.style.display = 'none'
})
showQuestion()



}
else
{
    ContentPage.innerHTML = "<h1> This Screen is Not Compatible with this Screen.<br> Try it on Mobile or Table :() </h1>"
}




}
DisplayContent()




function startTimer() {
    startTime = new Date().getTime(); // Get the current time in milliseconds
    timer = setTimeout(updateTimer, 1000); // Update the timer every second
  }
  
  function updateTimer() {
      if (quizEnded) {
          return; // Stop updating the timer if the quiz has ended
        }
  
    var currentTime = new Date().getTime(); // Get the current time in milliseconds
    var elapsedTime = currentTime - startTime; // Calculate the elapsed time in milliseconds
  
    // Convert the elapsed time to minutes and seconds
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
  
    // Add leading zeros if necessary
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + seconds).slice(-2);
  
    // Update the timer display
    timerElement.innerHTML = formattedMinutes + ":" + formattedSeconds;
  
    // Call updateTimer again after 1 second
    timer = setTimeout(updateTimer, 1000);
  }