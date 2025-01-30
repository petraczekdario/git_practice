// MIXED MESSAGES PROJECT
// every quote is stored in an array for scalability / future development
const quote1 = ["Always remember you are braver than you believe, stronger than you seem, and smarter than you think. — A.A. MILNE"];
const quote2 = ["Life is tough, my darling, but so are you. — STEPHANIE BENNETT HENRY"];
const quote3 = ["Believe you can and you're halfway there. — THEODORE ROOSEVELT"];
const quote4 = ["If you hear a voice within you say ‘you cannot paint,’ then by all means paint, and that voice will be silenced. — VINCENT VAN GOGH"];
const quote5 = ["The most terrifying thing is to accept oneself completely. — CARL JUNG"];
const quote6 = ["Accept who you are; and revel in it. — MITCH ALBOM"];
const quote7 = ["Wanting to be someone else is a waste of the person you are. — MARILYN MONROE"];
const quote8 = ["One of the greatest regrets in life is being what others would want you to be, rather than being yourself. — SHANNON ALDER"];
const quote9 = ["Why should I care what other people think of me? I am who I am. And who I wanna be. — AVRIL LAVIGNE"];
const quote10 = ["Don't waste your energy trying to change opinions. Do your thing, and don't care if they like it. — TINA FEY"];
const quote11 = ["You yourself, as much as anybody in the entire universe, deserve your love and affection. — SHARON SALZBERG"];
const quote12 = ["Tear off the mask, your face is glorious. — RUMI"];
const quote13 = ["No one can make you feel inferior without your consent. — ELEANOR ROOSEVELT"];
const quote14 = ["Never dull your shine for somebody else. — TYRA BANKS"];
const quote15 = ["Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself. — HARVEY FIERSTEIN"];
const quote16 = ["The greatest thing in the world is to know how to belong to oneself. — MICHEL DE MONTAIGNE"];
const quote17 = ["You're always with yourself, so you might as well enjoy the company. — DIANE VON FURSTENBERG"];
const quote18 = ["To love oneself is the beginning of a lifelong romance. — OSCAR WILDE"];
const quote19 = ["The better you feel about yourself, the less you feel the need to show off. — ROBERT HAND"];
const quote20 = ["The most beautiful thing you can wear is confidence. — BLAKE LIVELY"];
const quote21 = ["Self-confidence is contagious. — STEPHEN RICHARDS"];
const quote22 = ["If you have no confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started. — MARCUS GARVEY"];
const quote23 = ["Remember, you have been criticizing yourself for years, and it hasn't worked. Try approving of yourself and see what happens. — LOUISE HAY"];
const quote24 = ["Act as if what you do makes a difference. It does. — WILLIAM JAMES"];
const quote25 = ["Be messy and complicated and afraid and show up anyways. — GLENNON DOYLE MELTON"];
// quotes are then stored in an array of messages
const messages = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, 
  quote16, quote17, quote18, quote19, quote20, quote21, quote22, quote23, quote24, quote25];
// defining a randomQuote variable which will store the message and eventually returned its value from the function below
let randomQuote = "";

function mixedMessages() {
  randomQuote = messages[(Math.floor(Math.random() * messages.length))]; // Math.random() used with Math.floor() can be used to return random integers. https://www.w3schools.com/js/js_random.asp
  return randomQuote;
}

console.log("Mixed Message");
console.log("A simple project in Javascript that prints random messages everytime it runs");
console.log("\nThis is your Self-Worth and Self-Esteem Quote You Needed to Hear Today: ");
console.log(mixedMessages()); // calling the function and logging the returned value as a message
console.log("\n --------------------------------------");