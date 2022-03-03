// @flow
import type { BookWeb } from './types.js'
import type { Book } from '../../types/Book.js'

async function get1chronicles(): Promise<BookWeb> {
  return import('../../data/web/js/1chronicles.js').then((m) => m.default)
}

async function get1corinthians(): Promise<BookWeb> {
  return import('../../data/web/js/1corinthians.js').then((m) => m.default)
}

async function get1john(): Promise<BookWeb> {
  return import('../../data/web/js/1john.js').then((m) => m.default)
}

async function get1kings(): Promise<BookWeb> {
  return import('../../data/web/js/1kings.js').then((m) => m.default)
}

async function get1peter(): Promise<BookWeb> {
  return import('../../data/web/js/1peter.js').then((m) => m.default)
}

async function get1samuel(): Promise<BookWeb> {
  return import('../../data/web/js/1samuel.js').then((m) => m.default)
}

async function get1thessalonians(): Promise<BookWeb> {
  return import('../../data/web/js/1thessalonians.js').then((m) => m.default)
}

async function get1timothy(): Promise<BookWeb> {
  return import('../../data/web/js/1timothy.js').then((m) => m.default)
}

async function get2chronicles(): Promise<BookWeb> {
  return import('../../data/web/js/2chronicles.js').then((m) => m.default)
}

async function get2corinthians(): Promise<BookWeb> {
  return import('../../data/web/js/2corinthians.js').then((m) => m.default)
}

async function get2john(): Promise<BookWeb> {
  return import('../../data/web/js/2john.js').then((m) => m.default)
}

async function get2kings(): Promise<BookWeb> {
  return import('../../data/web/js/2kings.js').then((m) => m.default)
}

async function get2peter(): Promise<BookWeb> {
  return import('../../data/web/js/2peter.js').then((m) => m.default)
}

async function get2samuel(): Promise<BookWeb> {
  return import('../../data/web/js/2samuel.js').then((m) => m.default)
}

async function get2thessalonians(): Promise<BookWeb> {
  return import('../../data/web/js/2thessalonians.js').then((m) => m.default)
}

async function get2timothy(): Promise<BookWeb> {
  return import('../../data/web/js/2timothy.js').then((m) => m.default)
}

async function get3john(): Promise<BookWeb> {
  return import('../../data/web/js/3john.js').then((m) => m.default)
}

async function getActs(): Promise<BookWeb> {
  return import('../../data/web/js/acts.js').then((m) => m.default)
}

async function getAmos(): Promise<BookWeb> {
  return import('../../data/web/js/amos.js').then((m) => m.default)
}

async function getColossians(): Promise<BookWeb> {
  return import('../../data/web/js/colossians.js').then((m) => m.default)
}

async function getDaniel(): Promise<BookWeb> {
  return import('../../data/web/js/daniel.js').then((m) => m.default)
}

async function getDeuteronomy(): Promise<BookWeb> {
  return import('../../data/web/js/deuteronomy.js').then((m) => m.default)
}

async function getEcclesiastes(): Promise<BookWeb> {
  return import('../../data/web/js/ecclesiastes.js').then((m) => m.default)
}

async function getEphesians(): Promise<BookWeb> {
  return import('../../data/web/js/ephesians.js').then((m) => m.default)
}

async function getEsther(): Promise<BookWeb> {
  return import('../../data/web/js/esther.js').then((m) => m.default)
}

async function getExodus(): Promise<BookWeb> {
  return import('../../data/web/js/exodus.js').then((m) => m.default)
}

async function getEzekiel(): Promise<BookWeb> {
  return import('../../data/web/js/ezekiel.js').then((m) => m.default)
}

async function getEzra(): Promise<BookWeb> {
  return import('../../data/web/js/ezra.js').then((m) => m.default)
}

async function getGalatians(): Promise<BookWeb> {
  return import('../../data/web/js/galatians.js').then((m) => m.default)
}

async function getGenesis(): Promise<BookWeb> {
  return import('../../data/web/js/genesis.js').then((m) => m.default)
}

async function getHabakkuk(): Promise<BookWeb> {
  return import('../../data/web/js/habakkuk.js').then((m) => m.default)
}

async function getHaggai(): Promise<BookWeb> {
  return import('../../data/web/js/haggai.js').then((m) => m.default)
}

async function getHebrews(): Promise<BookWeb> {
  return import('../../data/web/js/hebrews.js').then((m) => m.default)
}

async function getHosea(): Promise<BookWeb> {
  return import('../../data/web/js/hosea.js').then((m) => m.default)
}

async function getIsaiah(): Promise<BookWeb> {
  return import('../../data/web/js/isaiah.js').then((m) => m.default)
}

async function getJames(): Promise<BookWeb> {
  return import('../../data/web/js/james.js').then((m) => m.default)
}

async function getJeremiah(): Promise<BookWeb> {
  return import('../../data/web/js/jeremiah.js').then((m) => m.default)
}

async function getJob(): Promise<BookWeb> {
  return import('../../data/web/js/job.js').then((m) => m.default)
}

async function getJoel(): Promise<BookWeb> {
  return import('../../data/web/js/joel.js').then((m) => m.default)
}

async function getJohn(): Promise<BookWeb> {
  return import('../../data/web/js/john.js').then((m) => m.default)
}

async function getJonah(): Promise<BookWeb> {
  return import('../../data/web/js/jonah.js').then((m) => m.default)
}

async function getJoshua(): Promise<BookWeb> {
  return import('../../data/web/js/joshua.js').then((m) => m.default)
}

async function getJude(): Promise<BookWeb> {
  return import('../../data/web/js/jude.js').then((m) => m.default)
}

async function getJudges(): Promise<BookWeb> {
  return import('../../data/web/js/judges.js').then((m) => m.default)
}

async function getLamentations(): Promise<BookWeb> {
  return import('../../data/web/js/lamentations.js').then((m) => m.default)
}

async function getLeviticus(): Promise<BookWeb> {
  return import('../../data/web/js/leviticus.js').then((m) => m.default)
}

async function getLuke(): Promise<BookWeb> {
  return import('../../data/web/js/luke.js').then((m) => m.default)
}

async function getMalachi(): Promise<BookWeb> {
  return import('../../data/web/js/malachi.js').then((m) => m.default)
}

async function getMark(): Promise<BookWeb> {
  return import('../../data/web/js/mark.js').then((m) => m.default)
}

async function getMatthew(): Promise<BookWeb> {
  return import('../../data/web/js/matthew.js').then((m) => m.default)
}

async function getMicah(): Promise<BookWeb> {
  return import('../../data/web/js/micah.js').then((m) => m.default)
}

async function getNahum(): Promise<BookWeb> {
  return import('../../data/web/js/nahum.js').then((m) => m.default)
}

async function getNehemiah(): Promise<BookWeb> {
  return import('../../data/web/js/nehemiah.js').then((m) => m.default)
}

async function getNumbers(): Promise<BookWeb> {
  return import('../../data/web/js/numbers.js').then((m) => m.default)
}

async function getObadiah(): Promise<BookWeb> {
  return import('../../data/web/js/obadiah.js').then((m) => m.default)
}

async function getPhilemon(): Promise<BookWeb> {
  return import('../../data/web/js/philemon.js').then((m) => m.default)
}

async function getPhilippians(): Promise<BookWeb> {
  return import('../../data/web/js/philippians.js').then((m) => m.default)
}

async function getProverbs(): Promise<BookWeb> {
  return import('../../data/web/js/proverbs.js').then((m) => m.default)
}

async function getPsalms(): Promise<BookWeb> {
  return import('../../data/web/js/psalms.js').then((m) => m.default)
}

async function getRevelation(): Promise<BookWeb> {
  return import('../../data/web/js/revelation.js').then((m) => m.default)
}

async function getRomans(): Promise<BookWeb> {
  return import('../../data/web/js/romans.js').then((m) => m.default)
}

async function getRuth(): Promise<BookWeb> {
  return import('../../data/web/js/ruth.js').then((m) => m.default)
}

async function getSongofsolomon(): Promise<BookWeb> {
  return import('../../data/web/js/songofsolomon.js').then((m) => m.default)
}

async function getTitus(): Promise<BookWeb> {
  return import('../../data/web/js/titus.js').then((m) => m.default)
}

async function getZechariah(): Promise<BookWeb> {
  return import('../../data/web/js/zechariah.js').then((m) => m.default)
}

async function getZephaniah(): Promise<BookWeb> {
  return import('../../data/web/js/zephaniah.js').then((m) => m.default)
}

export const out: { [Book]: () => Promise<BookWeb> } = {
  '1_chronicles': get1chronicles,
  '1_corinthians': get1corinthians,
  '1_john': get1john,
  '1_kings': get1kings,
  '1_peter': get1peter,
  '1_samuel': get1samuel,
  '1_thessalonians': get1thessalonians,
  '1_timothy': get1timothy,
  '2_chronicles': get2chronicles,
  '2_corinthians': get2corinthians,
  '2_john': get2john,
  '2_kings': get2kings,
  '2_peter': get2peter,
  '2_samuel': get2samuel,
  '2_thessalonians': get2thessalonians,
  '2_timothy': get2timothy,
  '3_john': get3john,
  acts: getActs,
  amos: getAmos,
  colossians: getColossians,
  daniel: getDaniel,
  deuteronomy: getDeuteronomy,
  ecclesiastes: getEcclesiastes,
  ephesians: getEphesians,
  esther: getEsther,
  exodus: getExodus,
  ezekiel: getEzekiel,
  ezra: getEzra,
  galatians: getGalatians,
  genesis: getGenesis,
  habakkuk: getHabakkuk,
  haggai: getHaggai,
  hebrews: getHebrews,
  hosea: getHosea,
  isaiah: getIsaiah,
  james: getJames,
  jeremiah: getJeremiah,
  job: getJob,
  joel: getJoel,
  john: getJohn,
  jonah: getJonah,
  joshua: getJoshua,
  jude: getJude,
  judges: getJudges,
  lamentations: getLamentations,
  leviticus: getLeviticus,
  luke: getLuke,
  malachi: getMalachi,
  mark: getMark,
  matthew: getMatthew,
  micah: getMicah,
  nahum: getNahum,
  nehemiah: getNehemiah,
  numbers: getNumbers,
  obadiah: getObadiah,
  philemon: getPhilemon,
  philippians: getPhilippians,
  proverbs: getProverbs,
  psalms: getPsalms,
  revelation: getRevelation,
  romans: getRomans,
  ruth: getRuth,
  song_of_solomon: getSongofsolomon,
  titus: getTitus,
  zechariah: getZechariah,
  zephaniah: getZephaniah,
}
