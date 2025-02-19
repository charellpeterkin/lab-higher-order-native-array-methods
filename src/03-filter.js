/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsBySaib(songs) {
  let songsbySaib = songs.filter((song) => {
    return song.artist === "Saib"
  })
  .map((song) => {
    return song
  })
  return songsbySaib
}

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsOverThreeMinutes(songs) {
  let threeMinuteSongs = songs.filter((song) => {
    return song.runtimeInSeconds > 180
  })
  .map((song) => {
    return song
  })
  return threeMinuteSongs
}

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleTracks(songs) {
  let samesNames = songs.filter((song) => {
    return song.title === song.album
  })
  .map((song) => {
    return song
  })
  return samesNames
}
// return songs.filter(element) => 
module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
