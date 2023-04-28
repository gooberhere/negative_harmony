// dropdown menu for keys
const dropBtn = document.querySelector(".dropdownKeys");

dropBtn.addEventListener("click", () => {
  document.querySelector(".myDropdown").classList.toggle("show");
});

// const keyC = {
//   major: 'C, D, E, F, G, A, B',
//   negative: 'G, F, Eb, D, C, Bb, Ab',
//   relativem: 'A, B, C, D, E, F, G',
//   minor: 'C, D, Eb, F, G, Ab, Bb',
// };

// const keyCSharp = {
//   major: [`C#, D#, E#, F#, G#, A#, B#`],
//   negative: [`F#, E, D, C#, B, A, G`],
//   relativem: [`A#, B#, C#, D#, E#, F#, G#`],
//   minor: [`C#, D#, E, F#, G#, A, B`],
// };

// const keys = document.querySelectorAll(".key");
// const keyMajor = document.querySelector(".major");
// const keyNegative = document.querySelector(".negative");
// const keyRelative = document.querySelector(".relative-m");
// const keyMinor = document.querySelector(".minor");

// keys.forEach((key) => {
//   key.addEventListener("click", () => {
//     let keyName = key.id;
//     keyMajor.textContent = keyName;
//     console.log(keyName.major);
//   });
// });

const keys = document.querySelectorAll(".key");
const keyMajor = document.querySelector(".major");
const keyNegative = document.querySelector(".negative");
const keyRelative = document.querySelector(".relative-m");
const keyMinor = document.querySelector(".minor");
const notes = document.querySelectorAll(".notes");
const keyTitle = document.querySelector(".keyTitle");

const keysData = {
  keyC: {
    name: "C",
    major: ["C - D - E - F - G - A - B"],
    negative: ["G - F - Eb - D - C - Bb - Ab"],
    relativem: ["A - B - C - D - E - F - G"],
    minor: ["C - D - Eb - F - G - Ab - Bb"],
  },
  keyCSharp: {
    name: "C#",
    major: [`C# - D# - E# - F# - G# - A# - B#`],
    negative: [`F# - E - D - C# - B - A - G`],
    relativem: [`A# - B# - C# - D# - E# - F# - G#`],
    minor: [`C# - D# - E - F# - G# - A - B`],
  },
  keyD: {
    name: "D",
    major: ["D - E - F# - G - A - B - C#"],
    negative: ["F - Eb - Db - C - Bb - Ab - Gb"],
    relativem: ["B - C# - D - E - F# - G - A"],
    minor: ["D - E - F - G - A - Bb - C"],
  },
  keyEFlat: {
    name: "Eb",
    major: ["Eb - F - G - Ab - Bb - C - D"],
    negative: ["E - D - C - B - A - G - F"],
    relativem: ["C - D - Eb - F - G - Ab - Bb"],
    minor: ["Eb - F - Gb - Ab - Bb - Cb - Db"],
  },
  keyE: {
    name: "E",
    major: ["E - F# - G# - A - B - C# - D#"],
    negative: ["D# - C# - B - A# - G# - F# - E"],
    relativem: ["C# - D# - E - F# - G# - A - B"],
    minor: ["E - F# - G - A - B - C - D"],
  },
  keyF: {
    name: "F",
    major: ["F - G - A - Bb - C - D - E"],
    negative: ["D - C - Bb - A - G - F - Eb"],
    relativem: ["D - E - F - G - A - Bb - C"],
    minor: ["F - G - Ab - Bb - C - Db - Eb"],
  },
  keyFSharp: {
    name: "F#",
    major: ["F# - G# - A# - B - C# - D# - E#"],
    negative: ["C# - B - A - G# - F# - E - D"],
    relativem: ["D# - E# - F# - G# - A# - B - C#"],
    minor: ["F# - G# - A - B - C# - D - E - F#"],
  },
  keyG: {
    name: "G",
    major: ["G - A - B - C - D - E - F#"],
    negative: ["C - Bb - Ab - G - F - Eb - Db"],
    relativem: ["E - F# - G - A - B - C - D"],
    minor: ["G - A - Bb - C - D - Eb - F"],
  },
  keyAFlat: {
    name: "Ab",
    major: ["Ab - Bb - C - Db - Eb - F - G"],
    negative: ["B - A - G - F# - E - D - C"],
    relativem: ["F - G# - Ab - Bb - C - Db - Eb"],
    minor: ["Ab - Bb - Cb - Db - Eb - Fb - Gb"],
  },
  keyA: {
    name: "A",
    major: ["A - B - C# - D - E - F# - G#"],
    negative: ["Bb - Ab - Gb - F - Eb - Db - Cb"],
    relativem: ["F# - G# - A - B - C# - D - E"],
    minor: ["A - B - C - D - E - F - G"],
  },
  keyBFlat: {
    name: "Bb",
    major: ["Bb - C - D - Eb - F - G - A"],
    negative: ["A - G - F - E - D - C - Bb"],
    relativem: ["G - A - Bb - C - D - Eb - F"],
    minor: ["Bb - C - Db - Eb - F - Gb - Ab"],
  },
  keyB: {
    name: "B",
    major: ["B - C# - D# - E - F# - G# - A#"],
    negative: ["G# - F# - E - D# - C# - B - A"],
    relativem: ["G# - A# - B - C# - D# - E - F#"],
    minor: ["B - C# - D - E - F# - G - A"],
  },
};

keys.forEach((key) => {
  key.addEventListener("click", () => {
    let keyName = key.id;
    keyTitle.textContent = `${keysData[keyName].name}`;
    keyMajor.textContent = `${keysData[keyName].major}`;
    keyNegative.textContent = `${keysData[keyName].negative}`;
    keyRelative.textContent = `${keysData[keyName].relativem}`;
    keyMinor.textContent = `${keysData[keyName].minor}`;
  });
});

// console.log(key);
// const outputKeys = function (key) {
//   let major = document.getElementById(key);
//   major.textContent = key.major;
// };

// document.querySelector(".test").addEventListener("click", outputKeys(keyC));
