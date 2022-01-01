const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

  const storyText = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, 
    then ${zItem}. ${customName} saw the whole thing, but was not surprised — :insertx: weighs ${weight}, and it was a hot day.`;
  const insertX = [`Willy the Goblin`, `Big Daddy`, `Father Christmas`];
  const insertY = [`the soup kitch`, `Disneyland`, `the White House`];
  const insertZ = [`spontaneously combusted`, `melted into a puddle on the sidewalk`, `turned into a slug and crawled away`];

  randomize.addEventListener('click', result);

function result() {


  if(customName.value !== '') {
    const name = customName.value;

  }else {
      const name = 'Bob';
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ` ` + `stone`;
    const temperature =  Math.round((94 - 32) * (5/9)) + `centigrade`;

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
