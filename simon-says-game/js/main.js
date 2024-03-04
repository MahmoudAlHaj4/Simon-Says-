const btn = document.getElementById("play");
const colors = ["blue", "red", "yellow", "green"];
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const tiles = document.querySelectorAll('.tile');
const container = document.querySelector(".container");