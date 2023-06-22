const exampleArray = [
  "The Lord of the Rings",
  "Harry Potter and the Chamber of Secrets",
  "The Matrix",
  "Interstellar",
];

function abbreviate(array) {
  array.forEach(function (movie) {
    const separateWords = movie.split(" ");
    const abbreviation = separateWords.map(function (word) {
      return word[0].toUpperCase() + ".";
    });
    console.log(abbreviation.join(""));
  });
}
abbreviate(exampleArray);
