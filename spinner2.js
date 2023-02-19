const characters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 200; //delay between each appearance

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    //\r replacing/rewriting characters in the same spot after a delay.
    process.stdout.write(`\r ${characters[i]}`);
    //checking last character of the sentence
    if (i === characters.length - 1) {
      process.stdout.write("\n"); // \n stands for jumping to the next command line
    }
    // console.log(sentence[i]);
  }, i * delay);
}
