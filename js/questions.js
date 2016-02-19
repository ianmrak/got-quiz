var questionsEasy = [
question1 = {
  question: "What is this character's name?",
  answers: ['Robert Baratheon', 'Jon Snow', 'Theon Stark', 'Khal Drogo', 'Joffrey Baratheon', 'Robb Stark'],
  correct: "Joffrey Baratheon",
  qNum: 1,
  fact: 'Prince Joffrey Baratheon is known to the Seven Kingdoms as the eldest son and heir of King Robert I Baratheon and Queen Cersei Lannister. A member of House Baratheon of King\'s Landing, his siblings are Princess Myrcella and Prince Tommen. Joffrey grew up as a spoiled and indulgent child with a cruel streak within him. His father, King Robert, is deeply disappointed with his son and feels little affection for Joffrey. It is also implied that Joffrey craves Robert\'s respect and approval, and many of his acts are done in an effort to live up to his father\'s standards.',
  picture: 'elements/characterPhotos/JoffreyBaratheon.jpg',
},
question2 = {
  question: "What are the words of House Stark? ",
  answers: ['Hear Me Roar!', 'Unbowed, Unbent, Unbroken', 'We Do Not Sow', 'Winter is Coming', 'Ours is the Fury', 'Growing Strong'],
  correct: 'Winter is Coming',
  fact: '"Winter is Coming" is the motto of House Stark, one of the Great Houses of Westeros. The meaning behind these words is one of warning and constant vigilance. The Starks, being the lords of the North, strive to always be prepared for the coming of winter, which hits their lands the hardest. The inevitable truth of the words are mentioned by other characters, who occasionally note that sooner or later, the Starks are always right.',
  qNum: 2,
  picture: 'elements/characterPhotos/Stark.jpg'
},
question3 = {
  question: "What is the name of the capitol of the Seven Kingdoms?",
  answers: ['Winterfell', 'Dragonstone', 'King\'s Landing', 'Castle Black', 'Riverrun', 'Casterly Rock'],
  correct: "King\'s Landing",
  fact: 'King\'s Landing is the capital of the Seven Kingdoms. It is located on the east coast of Westeros in the Crownlands, overlooking Blackwater Bay. It is the site of the Iron Throne and the Red Keep, the seat of the King of the Andals and the First Men. The walled city is located on uplands just north of where the Blackwater Rush flows into Blackwater Bay. It enjoys a warm climate and life there is luxurious for those that can afford it',
  qNum: 3,
  picture: 'elements/characterPhotos/Capitol.jpg'
},
question4 ={
  question: "What is the name of the Throne of Westeros?",
  answers: ['Steel Throne', 'Throne of Spikes', 'King\'s Throne', 'Royal Throne', 'Dragon Throne', 'Iron Throne'],
  correct: 'Iron Throne',
  fact: 'The Iron Throne is the throne upon which the King of the Andals and the First Men sits, located in the Great Hall of the Red Keep in the city of King\'s Landing. Besides the King himself (or Lord Regent) only the Hand of the King may sit on the Iron Throne. The term is also used metonymically to refer to the monarchy that rules the Seven Kingdoms and the authority of the King.',
  qNum: 4,
  picture: 'elements/characterPhotos/Iron_Throne.jpg'
},
question5 = {
  question: "What is the name of the order Jon Snow joins?",
  answers: ['Kingsguard', 'The Night\'s Watch', 'The Dark Brotherhood', 'Men in Black', 'Winter Guard', 'The Sparrows'],
  correct: 'The Night\'s Watch',
  fact: 'The Night\'s Watch was founded 8,000 years ago. They now protect the Seven Kingdoms from threats beyond their northern border, such as White Walkers, wildlings and giants. They man a vast structure known as the Wall, a 700 foot tall and 300 mile long barrier which separates the Seven Kingdoms from the lands to its north. It is formed mostly from ice. The Watch have built several castles along the southern edge of the Wall to house their men.',
  qNum: 5,
  picture: 'elements/characterPhotos/Order.jpg'
}];

var questionsMedium = [
question1 = {
  question: "What does the phrase \"Valar morghulis\" mean?",
  answers: ['Winter is coming', 'Dragon fire', 'All men must die', 'Such is life', 'Now my watch begins', 'Death for a life'],
  correct: "All men must die",
  fact: 'Valar morghulis translates to "all men must die" in High Valyrian. It is a customary saying in Essos, and is traditionally answered with "valar dohaeris." Jaqen H\'ghar teaches Arya Stark these words when he departs and gives her a small coin. Although he does not explain the meaning to her (nor does anybody else) she begins to use the words in her prayers of people she wants dead.',
  qNum: 1,
  picture: 'elements/characterPhotos/Jaquen.jpg',
},
question2 = {
  question: "Which of these is <em>not</em> one of Daenerys's dragon's names?",
  answers: ['Drogon', 'Viserion', 'Balerion', 'Rhaegal'],
  correct: 'Balerion',
  fact: 'Balerion was the last surviving original Valyrian dragon. When the Targaryens resettled on Dragonstone to escape the coming Doom of Valyria, they took five dragons with them, but four of these later died, leaving only Balerion. However, the other dragons did leave behind eggs, from which hatched Meraxes and Vhagar.',
  qNum: 2,
  picture: 'elements/characterPhotos/Dragon.jpg'
},
question3 = {
  question: "What do the daughters of Oberyn Martell call themselves?",
  answers: ['Blood Sisters', 'Sand Snakes', 'Vipers of Dorne', 'Dust Devils', 'Sunspears'],
  correct: 'Sand Snakes',
  fact: 'The Sand Snakes are the eight bastard daughters of Prince Oberyn Martell. Although noble-born bastards are often ignored by their parents, Oberyn has acknowledged and looked after all his daughters and has loving relationships with each of them. They are all loyal members of House Martell, and are treated as such by their uncle Doran Martell, the Prince of Dorne and Lord of Sunspear.',
  qNum: 3,
  picture: 'elements/characterPhotos/Daughters.jpg'
},
question4 = {
  question: "What is Stannis Baratheon's relationship to Robert Baratheon?",
  answers: ['Uncle', 'Younger Brother', 'Older Brother', 'Father', 'Cousin'],
  correct: 'Younger Brother',
  fact: 'Stannis Baratheon is the Lord of Dragonstone, the younger brother of late King Robert Baratheon, and older brother of Renly Baratheon. When Eddard Stark discovers that Robert\'s heir Joffrey is in reality a bastard born out of incest between Queen Cersei Lannister and her brother Jaime, Stannis, as the lawful heir, claims the Iron Throne for himself, beginning the War of the Five Kings.',
  qNum: 4,
  picture: 'elements/characterPhotos/Stannis.jpg'
},
question5 = {
  question: "What are the nomadic Dothraki tribes called?",
  answers: ['Hordes', 'Blood Riders', 'Drozhats', 'Kor\'krons', 'Khalasars', 'Dothras'],
  correct: 'Khalasars',
  fact: 'A khalasar is a Dothraki clan or tribe. Khalasars can be quite small but can expand to encompass tens of thousands of riders and many more than that in women and children. Khalasars are spread across the Dothraki sea and frequently raid surrounding regions.',
  qNum: 5,
  picture: 'elements/characterPhotos/Flatlands.jpg'
}];

var questionsHard = [
question1 = {
  question: "What are the lands to the east of Asshai called?",
  correct: "The Shadow Lands",
  fact: 'Little is known about Asshai save that it is a great seaport and its people are exotic. Beyond Asshai lies an area known as the Shadow Lands, which are said to lie "under the Shadow". What exactly is casting "the Shadow" is not known, nor is the exact nature of "the Shadow."',
  qNum: 1,
  picture: 'elements/characterPhotos/ShadowLandsCity.jpg',
},
question2 = {
  question: "Who were the original inhabitants of Westeros?",
  correct: "Children of the Forest",
  fact: 'The Children of the Forest are a mysterious non-human race that were reportedly the original inhabitants of the continent of Westeros. They were already living in Westeros when the First Men migrated to the continent, 12,000 years before Robert\'s Rebellion. According to legend they were last seen during the Andal Invasion 6,000 years before the War of the Five Kings.',
  qNum: 2,
  picture: 'elements/characterPhotos/weirwood.jpg'
},
question3 = {
  question: "Who leads the Brotherhood Without Banners at the end of <em>A Storm of Swords?</em>",
  correct: "Lady Stoneheart",
  fact: 'Death has changed Catelyn. She is less gracious and forgiving than in life and is consumed with a desire for vengeance on anyone she thinks betrayed her and her son, Robb. She hangs any men associated with the Freys, Boltons, or Lannisters, even if they had nothing to do with the "Red Wedding" or if they are boys, as is the case of Podrick Payne. Her appearance has been altered as well, with her flesh becoming soft and the color of curdled milk due to her corpse being submerged in river water for days. Half of her hair is gone and the rest is white and brittle. In addition, her wounds have not healed with her face covered in scratch marks and her throat still slit open. To speak she must cover the wound on her throat; even then she is difficult to understand.',
  qNum: 3,
  picture: 'elements/characterPhotos/Stoneheart.jpg'
},
question4 = {
  question: "What was the winter in which the White Walkers last appeared called?",
  correct: 'The Long Night',
  fact: 'Eight thousand years before the Targaryen Conquest, a winter known as the Long Night descended upon the world, which lasted an entire generation. Thousands starved as the crops and fields lay buried under dozens of feet of snow. In the darkness and cold of the Long Night, the White Walkers descended upon Westeros from the farthest north, the polar regions of the Lands of Always Winter. The conflict that arose from the Long Night is known as the War for the Dawn.',
  qNum: 4,
  picture: 'elements/characterPhotos/whitewalker.jpg'
},
question5 = {
  question: "Who constructed the Wall?",
  correct: "Bran the Builder",
  fact: 'Bran the Builder was a legendary member of the First Men from the Age of Heroes, the founder of House Stark, and the first King in the North. Many famous structures are attributed to have been built under his direction, hence his nickname of "the Builder", including Winterfell and most famously the Wall, which according to legend, he raised with the aid of giants.',
  qNum: 5,
  picture: 'elements/characterPhotos/The_Wall.jpg'
}];

// Loads the difficulty - I know there's a better way to do this but I was having trouble with the script load order and getting them to talk to each other //
function loadEasyQuestions(count) {
  var list = [];
  for (var i = 0; i < questionsEasy.length; i++) {
    list.push(questionsEasy[i]);
  }
  count || list.length;
  return list.slice(0, count);
};


function loadMediumQuestions(count) {
  var list = [];
  for (var i = 0; i < questionsMedium.length; i++) {
    list.push(questionsMedium[i]);
  }
  count || list.length;
  return list.slice(0, count);
};


function loadHardQuestions(count) {
  var list = [];
  for (var i = 0; i < questionsHard.length; i++) {
    list.push(questionsHard[i]);
  }
  count || list.length;
  return list.slice(0, count);
};
