// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let time = 100;
let chars = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
}