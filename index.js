const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  const storyText = `It was :temperature: outside, so :insertX: went for a walk. When they got to :insertY:, 
    they stared in horror for a few moments, then :insertZ:. :customName: saw the whole thing, 
    but was not surprised — :insertX: weighs :weight:, and it was a hot day.`;
  const insertX = [`Willy the Goblin`, `Big Daddy`, `Father Christmas`];
  const insertY = [`the soup kitch`, `Disneyland`, `the White House`];
  const insertZ = [`spontaneously combusted`, `melted into a puddle on the sidewalk`, `turned into a slug and crawled away`];

  randomize.addEventListener('click', result);

function result() {
  let storyText1 = ``

  if(customName.value !== '') {
    storyText1 = storyText.replace(":customName:", customName.value);

  }else {
    const name = 'Bob';
    storyText1 = storyText.replace("customName:", name);
  }

  if(document.getElementById("uk").checked) {
    console.log('firing uk');
    const weight = Math.round(300 / 14) + ` ` + `stone`;
    const temperature =  Math.round((94 - 32) * (5/9)) + ` centigrade`;

    storyText.replace(':temperature:', `${temperature}`);
    storyText.replace(`:weight:`, weight);

  }else if(document.getElementById("us").checked) {
    console.log('firing "us"');
    const weight = Math.round(300) + ` ` + `pounds`;
    const temperature =  Math.round(94) + ` fahrenheit`;

      console.log(weight);
      console.log(temperature);

      console.log(`before: `, storyText);

    let storyText2 = storyText1.replace(`:temperature:`, weight);
        storyText3 = storyText2.replace(`:weight:`, temperature);
      console.log(`after: `, storyText3);
  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  storyText4 = storyText3.replace(`:insertX:`, xItem);
  storyText5 = storyText4.replace(`:insertX:`, xItem);
  storyText6 = storyText5.replace(`:insertY:`, yItem);
  storyText7 = storyText6.replace(`:insertZ:`, zItem);


  let newStory = storyText7;

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

result();
