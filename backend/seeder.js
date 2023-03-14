const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
// Data
const suras = require('./data/suras');
const categoryNameList = require('./data/categoriesName');
const categoriesList = require('./data/categories');
const ayatBNList = require('./data/ayatBN');
const ayatENList = require('./data/ayatEN');
const ayatARList = require('./data/ayatAR');
const audioFullList = require('./data/audioFull');
const ayatAudioList = require('./data/ayatAudio');
const suraAEList = require('./data/suraAE');
const hizbQuartersList = require('./data/hizbQuarters');
const juzList = require('./data/juzs');
const manzilList = require('./data/manzils');
const pageList = require('./data/pages');
const rukuList = require('./data/rukus');
const sajdaList = require('./data/sajdas');

/* Hadith */
const hadithIndexList = require('./data/Hadith/hadithIndex');

// Books AbuDaud
const {
  S1: A1,
  S2: A2,
  S3: A3,
  S4: A4,
  S5: A5,
  S6: A6,
  S7: A7,
  S8: A8,
  S9: A9,
  S10: A10,
} = require('./data/Hadith/AbuDaud/section_number_1_10');
const {
  S11: A11,
  S12: A12,
  S13: A13,
  S14: A14,
  S15: A15,
  S16: A16,
  S17: A17,
  S18: A18,
  S19: A19,
  S20: A20,
  S21: A21,
  S22: A22,
  S23: A23,
  S24: A24,
  S25: A25,
  S26: A26,
  S27: A27,
  S28: A28,
  S29: A29,
  S30: A30,
  S31: A31,
  S32: A32,
  S33: A33,
  S34: A34,
  S35: A35,
  S36: A36,
  S37: A37,
  S38: A38,
} = require('./data/Hadith/AbuDaud/section_number_11_38');

// Books Bukhari
const {
  S1: B1,
  S2: B2,
  S3: B3,
  S4: B4,
  S5: B5,
  S6: B6,
  S7: B7,
  S8: B8,
  S9: B9,
  S10: B10,
} = require('./data/Hadith/Bukhari/section_number_1_10');
const {
  S11: B11,
  S12: B12,
  S13: B13,
  S14: B14,
  S15: B15,
  S16: B16,
  S17: B17,
  S18: B18,
  S19: B19,
  S20: B20,
} = require('./data/Hadith/Bukhari/section_number_11_20');
const {
  S21: B21,
  S22: B22,
  S23: B23,
  S24: B24,
  S25: B25,
  S26: B26,
  S27: B27,
  S28: B28,
  S29: B29,
  S30: B30,
} = require('./data/Hadith/Bukhari/section_number_21_30');
const {
  S31: B31,
  S32: B32,
  S33: B33,
  S34: B34,
  S35: B35,
  S36: B36,
  S37: B37,
  S38: B38,
  S39: B39,
  S40: B40,
  S41: B41,
  S42: B42,
  S43: B43,
  S44: B44,
  S45: B45,
  S46: B46,
  S47: B47,
  S48: B48,
  S49: B49,
  S50: B50,
} = require('./data/Hadith/Bukhari/section_number_31_50');
const {
  S51: B51,
  S52: B52,
  S53: B53,
  S54: B54,
  S55: B55,
  S56: B56,
  S57: B57,
  S58: B58,
  S59: B59,
  S60: B60,
} = require('./data/Hadith/Bukhari/section_number_51_60');
const {
  S61: B61,
  S62: B62,
  S63: B63,
  S64: B64,
  S65: B65,
  S66: B66,
  S67: B67,
  S68: B68,
  S69: B69,
  S70: B70,
} = require('./data/Hadith/Bukhari/section_number_61_70');
const {
  S71: B71,
  S72: B72,
  S73: B73,
  S74: B74,
  S75: B75,
  S76: B76,
  S77: B77,
  S78: B78,
  S79: B79,
  S80: B80,
  S81: B81,
  S82: B82,
  S83: B83,
  S84: B84,
  S85: B85,
  S86: B86,
} = require('./data/Hadith/Bukhari/section_number_71_86');

// Books Ibn Majah
const {
  S1: I1,
  S2: I2,
  S3: I3,
  S4: I4,
  S5: I5,
  S6: I6,
  S7: I7,
  S8: I8,
  S9: I9,
  S10: I10,
} = require('./data/Hadith/IbnMajah/section_number_1_10');
const {
  S11: I11,
  S13: I13,
  S14: I14,
  S15: I15,
  S16: I16,
  S17: I17,
  S18: I18,
  S19: I19,
  S20: I20,
} = require('./data/Hadith/IbnMajah/section_number_11_20');
const {
  S21: I21,
  S22: I22,
  S23: I23,
  S24: I24,
  S25: I25,
  S26: I26,
  S27: I27,
  S28: I28,
  S29: I29,
  S30: I30,
  S31: I31,
  S32: I32,
} = require('./data/Hadith/IbnMajah/section_number_21_32');

// Books Muslim
const {
  S1: M1,
  S2: M2,
  S3: M3,
  S4: M4,
  S5: M5,
  S6: M6,
  S7: M7,
  S8: M8,
  S9: M9,
  S10: M10,
} = require('./data/Hadith/muslim/section_number_1_10');
const {
  S11: M11,
  S12: M12,
  S13: M13,
  S14: M14,
  S15: M15,
  S16: M16,
  S17: M17,
  S18: M18,
  S19: M19,
  S20: M20,
} = require('./data/Hadith/muslim/section_number_11_20');
const {
  S21: M21,
  S22: M22,
  S23: M23,
  S24: M24,
  S25: M25,
  S26: M26,
  S27: M27,
  S28: M28,
  S29: M29,
  S30: M30,
  S31: M31,
  S32: M32,
  S33: M33,
  S34: M34,
  S35: M35,
  S36: M36,
  S37: M37,
  S38: M38,
  S39: M39,
  S40: M40,
} = require('./data/Hadith/muslim/section_number_21_40');
const {
  S41: M41,
  S42: M42,
  S43: M43,
  S45: M45,
  S46: M46,
  S47: M47,
  S48: M48,
  S49: M49,
  S50: M50,
} = require('./data/Hadith/muslim/section_number_41_50');

// Books MuslimHA
const {
  S1: MH1,
  S2: MH2,
  S3: MH3,
  S4: MH4,
  S5: MH5,
  S6: MH6,
  S7: MH7,
  S8: MH8,
  S9: MH9,
  S10: MH10,
} = require('./data/Hadith/muslimHA/section_number_1_10');
const {
  S11: MH11,
  S12: MH12,
  S13: MH13,
  S14: MH14,
  S15: MH15,
  S16: MH16,
  S17: MH17,
  S18: MH18,
  S19: MH19,
  S20: MH20,
} = require('./data/Hadith/muslimHA/section_number_11_20');
const {
  S21: MH21,
  S22: MH22,
  S23: MH23,
  S24: MH24,
  S25: MH25,
  S26: MH26,
  S27: MH27,
  S28: MH28,
  S29: MH29,
  S30: MH30,
  S31: MH31,
  S32: MH32,
  S33: MH33,
  S34: MH34,
  S35: MH35,
  S36: MH36,
  S37: MH37,
  S38: MH38,
  S39: MH39,
  S40: MH40,
} = require('./data/Hadith/muslimHA/section_number_21_40');
const {
  S41: MH41,
  S42: MH42,
  S43: MH43,
  S45: MH45,
  S46: MH46,
  S47: MH47,
  S48: MH48,
  S49: MH49,
  S50: MH50,
  S51: MH51,
  S52: MH52,
  S53: MH53,
  S54: MH54,
  S55: MH55,
  S56: MH56,
} = require('./data/Hadith/muslimHA/section_number_41_56');

// Books riyadusSalihin
const {
  S1: R1,
  S2: R2,
  S3: R3,
  S4: R4,
  S5: R5,
  S6: R6,
  S7: R7,
  S8: R8,
  S9: R9,
  S10: R10,
} = require('./data/Hadith/riyadusSalihin/section_number_1_10');
const {
  S11: R11,
  S12: R12,
  S13: R13,
  S14: R14,
  S15: R15,
  S16: R16,
  S17: R17,
  S18: R18,
  S19: R19,
  S20: R20,
} = require('./data/Hadith/riyadusSalihin/section_number_11_20');

// Books tirmidi
// Books Bukhari
const {
  S1: T1,
  S2: T2,
  S3: T3,
  S4: T4,
  S5: T5,
  S6: T6,
  S7: T7,
  S8: T8,
  S9: T9,
  S10: T10,
  S11: T11,
  S12: T12,
  S13: T13,
  S14: T14,
  S15: T15,
  S16: T16,
  S17: T17,
  S18: T18,
  S19: T19,
  S20: T20,
  S21: T21,
  S22: T22,
  S23: T23,
  S24: T24,
  S25: T25,
  S26: T26,
  S27: T27,
  S28: T28,
  S29: T29,
  S30: T30,
} = require('./data/Hadith/tirmidi/section_number_1_30');
const {
  S31: T31,
  S32: T32,
  S33: T33,
  S34: T34,
  S35: T35,
  S36: T36,
  S37: T37,
  S38: T38,
  S39: T39,
  S40: T40,
  S41: T41,
  S42: T42,
  S43: T43,
  S45: T45,
  S46: T46,
  S47: T47,
  S48: T48,
  S49: T49,
  S50: T50,
  S51: T51,
  S52: T52,
} = require('./data/Hadith/tirmidi/section_number_31_52');

// Index Data
const abuDaudIndex = require('./data/Hadith/abuDaudIndex');
const bukhariIndex = require('./data/Hadith/bukhariIndex');
const muslimIndex = require('./data/Hadith/muslimIndex');
const tirmidiIndex = require('./data/Hadith/tirmidiIndex');
const riyadusSalihinIndex = require('./data/Hadith/riyadusSalihinIndex');
const muslimHAIndex = require('./data/Hadith/muslimHAIndex');
const ibnMajahIndex = require('./data/Hadith/ibnMajahIndex');

// Models
const Sura = require('./models/sura');
const CategoryName = require('./models/category_name');
const Category = require('./models/category');
const AyatBN = require('./models/ayatBN');
const AyatEN = require('./models/ayatEN');
const AyatAR = require('./models/ayatAR');
const AudioFull = require('./models/audioFull');
const AyatAudio = require('./models/ayatAudio');
const SuraAE = require('./models/suraAE');
const HizbQuarter = require('./models/hizbQuarter');
const Juz = require('./models/juz');
const Manzil = require('./models/manzil');
const Page = require('./models/page');
const Ruku = require('./models/ruku');
const Sajda = require('./models/sajda');

// Hadith Index Model
const HadithIndex = require('./models/Hadith/IndexModel');
// Hadith Books Models
const abuDaudModel = require('./models/Hadith/abuDaudBookModel');
const bukhariModel = require('./models/Hadith/bukhariBookModel');
const ibnMajahModel = require('./models/Hadith/ibnMajahBookModel');
const muslimModel = require('./models/Hadith/muslimBookModel');
const muslimHAModel = require('./models/Hadith/muslimHABookModel');
const riyadusSalihinModel = require('./models/Hadith/riyadusSalihinBookModel');
const tirmidiModel = require('./models/Hadith/tirmidiBookModel');

// Hadith Book Index Models
const {
  abuDaudIndexModel,
  bukhariIndexModel,
  muslimHAIndexModel,
  muslimIndexModel,
  riyadusSalihinIndexModel,
  tirmidiIndexModel,
  ibnMajahIndexModel,
} = require('./models/Hadith/bookIndexModel');

// Utils
const connectDB = require('./utils/connectDB');
dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Delete all data from database
    await Sura.deleteMany();
    await CategoryName.deleteMany();
    await Category.deleteMany();
    await AyatBN.deleteMany();
    await AyatEN.deleteMany();
    await AyatAR.deleteMany();
    await AudioFull.deleteMany();
    await AyatAudio.deleteMany();
    await SuraAE.deleteMany();
    await HizbQuarter.deleteMany();
    await Juz.deleteMany();
    await Manzil.deleteMany();
    await Page.deleteMany();
    await Ruku.deleteMany();
    await Sajda.deleteMany();
    // Hadith Index
    await HadithIndex.deleteMany();
    // Books Index
    await abuDaudIndexModel.deleteMany();
    await bukhariIndexModel.deleteMany();
    await ibnMajahIndexModel.deleteMany();
    await muslimIndexModel.deleteMany();
    await muslimHAIndexModel.deleteMany();
    await riyadusSalihinIndexModel.deleteMany();
    await tirmidiIndexModel.deleteMany();
    // Books
    await abuDaudModel.deleteMany();
    await bukhariModel.deleteMany();
    await ibnMajahModel.deleteMany();
    await muslimModel.deleteMany();
    await muslimHAModel.deleteMany();
    await riyadusSalihinModel.deleteMany();
    await tirmidiModel.deleteMany();

    // console.log(B1.length);

    // Insert data into database
    await Sura.insertMany(suras);
    await CategoryName.insertMany(categoryNameList);
    await Category.insertMany(categoriesList);
    await AyatBN.insertMany(ayatBNList);
    await AyatEN.insertMany(ayatENList);
    await AyatAR.insertMany(ayatARList);
    await AudioFull.insertMany(audioFullList);
    await AyatAudio.insertMany(ayatAudioList);
    await SuraAE.insertMany(suraAEList);
    await HizbQuarter.insertMany(hizbQuartersList);
    await Juz.insertMany(juzList);
    await Manzil.insertMany(manzilList);
    await Page.insertMany(pageList);
    await Ruku.insertMany(rukuList);
    await Sajda.insertMany(sajdaList);
    // Hadith
    await HadithIndex.insertMany(hadithIndexList);
    // Index of Books
    await abuDaudIndexModel.insertMany(abuDaudIndex);
    await bukhariIndexModel.insertMany(bukhariIndex);
    await ibnMajahIndexModel.insertMany(ibnMajahIndex);
    await muslimHAIndexModel.insertMany(muslimHAIndex);
    await muslimIndexModel.insertMany(muslimIndex);
    await riyadusSalihinIndexModel.insertMany(riyadusSalihinIndex);
    await tirmidiIndexModel.insertMany(tirmidiIndex);
    // Books Abu Daud
    await abuDaudModel.insertMany(A1);
    await abuDaudModel.insertMany(A2);
    await abuDaudModel.insertMany(A3);
    await abuDaudModel.insertMany(A4);
    await abuDaudModel.insertMany(A5);
    await abuDaudModel.insertMany(A6);
    await abuDaudModel.insertMany(A7);
    await abuDaudModel.insertMany(A8);
    await abuDaudModel.insertMany(A9);
    await abuDaudModel.insertMany(A10);
    await abuDaudModel.insertMany(A11);
    await abuDaudModel.insertMany(A12);
    await abuDaudModel.insertMany(A13);
    await abuDaudModel.insertMany(A14);
    await abuDaudModel.insertMany(A15);
    await abuDaudModel.insertMany(A16);
    await abuDaudModel.insertMany(A17);
    await abuDaudModel.insertMany(A18);
    await abuDaudModel.insertMany(A19);
    await abuDaudModel.insertMany(A20);
    await abuDaudModel.insertMany(A21);
    await abuDaudModel.insertMany(A22);
    await abuDaudModel.insertMany(A23);
    await abuDaudModel.insertMany(A24);
    await abuDaudModel.insertMany(A25);
    await abuDaudModel.insertMany(A26);
    await abuDaudModel.insertMany(A27);
    await abuDaudModel.insertMany(A28);
    await abuDaudModel.insertMany(A29);
    await abuDaudModel.insertMany(A30);
    await abuDaudModel.insertMany(A31);
    await abuDaudModel.insertMany(A32);
    await abuDaudModel.insertMany(A33);
    await abuDaudModel.insertMany(A34);
    await abuDaudModel.insertMany(A35);
    await abuDaudModel.insertMany(A36);
    await abuDaudModel.insertMany(A37);
    await abuDaudModel.insertMany(A38);
    // Books Bukhari
    await bukhariModel.insertMany(B1);
    await bukhariModel.insertMany(B2);
    await bukhariModel.insertMany(B3);
    await bukhariModel.insertMany(B4);
    await bukhariModel.insertMany(B5);
    await bukhariModel.insertMany(B6);
    await bukhariModel.insertMany(B7);
    await bukhariModel.insertMany(B8);
    await bukhariModel.insertMany(B9);
    await bukhariModel.insertMany(B10);
    await bukhariModel.insertMany(B11);
    await bukhariModel.insertMany(B12);
    await bukhariModel.insertMany(B13);
    await bukhariModel.insertMany(B14);
    await bukhariModel.insertMany(B15);
    await bukhariModel.insertMany(B16);
    await bukhariModel.insertMany(B17);
    await bukhariModel.insertMany(B18);
    await bukhariModel.insertMany(B19);
    await bukhariModel.insertMany(B20);
    await bukhariModel.insertMany(B21);
    await bukhariModel.insertMany(B22);
    await bukhariModel.insertMany(B23);
    await bukhariModel.insertMany(B24);
    await bukhariModel.insertMany(B25);
    await bukhariModel.insertMany(B26);
    await bukhariModel.insertMany(B27);
    await bukhariModel.insertMany(B28);
    await bukhariModel.insertMany(B29);
    await bukhariModel.insertMany(B30);
    await bukhariModel.insertMany(B31);
    await bukhariModel.insertMany(B32);
    await bukhariModel.insertMany(B33);
    await bukhariModel.insertMany(B34);
    await bukhariModel.insertMany(B35);
    await bukhariModel.insertMany(B36);
    await bukhariModel.insertMany(B37);
    await bukhariModel.insertMany(B38);
    await bukhariModel.insertMany(B39);
    await bukhariModel.insertMany(B40);
    await bukhariModel.insertMany(B41);
    await bukhariModel.insertMany(B42);
    await bukhariModel.insertMany(B43);
    await bukhariModel.insertMany(B44);
    await bukhariModel.insertMany(B45);
    await bukhariModel.insertMany(B46);
    await bukhariModel.insertMany(B47);
    await bukhariModel.insertMany(B48);
    await bukhariModel.insertMany(B49);
    await bukhariModel.insertMany(B50);
    await bukhariModel.insertMany(B51);
    await bukhariModel.insertMany(B52);
    await bukhariModel.insertMany(B53);
    await bukhariModel.insertMany(B54);
    await bukhariModel.insertMany(B55);
    await bukhariModel.insertMany(B56);
    await bukhariModel.insertMany(B57);
    await bukhariModel.insertMany(B58);
    await bukhariModel.insertMany(B59);
    await bukhariModel.insertMany(B60);
    await bukhariModel.insertMany(B61);
    await bukhariModel.insertMany(B62);
    await bukhariModel.insertMany(B63);
    await bukhariModel.insertMany(B64);
    await bukhariModel.insertMany(B65);
    await bukhariModel.insertMany(B66);
    await bukhariModel.insertMany(B67);
    await bukhariModel.insertMany(B68);
    await bukhariModel.insertMany(B69);
    await bukhariModel.insertMany(B70);
    await bukhariModel.insertMany(B71);
    await bukhariModel.insertMany(B72);
    await bukhariModel.insertMany(B73);
    await bukhariModel.insertMany(B74);
    await bukhariModel.insertMany(B75);
    await bukhariModel.insertMany(B76);
    await bukhariModel.insertMany(B77);
    await bukhariModel.insertMany(B78);
    await bukhariModel.insertMany(B79);
    await bukhariModel.insertMany(B80);
    await bukhariModel.insertMany(B81);
    await bukhariModel.insertMany(B82);
    await bukhariModel.insertMany(B83);
    await bukhariModel.insertMany(B84);
    await bukhariModel.insertMany(B85);
    await bukhariModel.insertMany(B86);

    // Books Ibn Majah
    await ibnMajahModel.insertMany(I1);
    await ibnMajahModel.insertMany(I2);
    await ibnMajahModel.insertMany(I3);
    await ibnMajahModel.insertMany(I4);
    await ibnMajahModel.insertMany(I5);
    await ibnMajahModel.insertMany(I6);
    await ibnMajahModel.insertMany(I7);
    await ibnMajahModel.insertMany(I8);
    await ibnMajahModel.insertMany(I9);
    await ibnMajahModel.insertMany(I10);
    await ibnMajahModel.insertMany(I11);
    await ibnMajahModel.insertMany(I13);
    await ibnMajahModel.insertMany(I14);
    await ibnMajahModel.insertMany(I15);
    await ibnMajahModel.insertMany(I16);
    await ibnMajahModel.insertMany(I17);
    await ibnMajahModel.insertMany(I18);
    await ibnMajahModel.insertMany(I19);
    await ibnMajahModel.insertMany(I20);
    await ibnMajahModel.insertMany(I21);
    await ibnMajahModel.insertMany(I22);
    await ibnMajahModel.insertMany(I23);
    await ibnMajahModel.insertMany(I24);
    await ibnMajahModel.insertMany(I25);
    await ibnMajahModel.insertMany(I26);
    await ibnMajahModel.insertMany(I27);
    await ibnMajahModel.insertMany(I28);
    await ibnMajahModel.insertMany(I29);
    await ibnMajahModel.insertMany(I30);
    await ibnMajahModel.insertMany(I31);
    await ibnMajahModel.insertMany(I32);

    // Books Muslim
    await muslimModel.insertMany(M1);
    await muslimModel.insertMany(M2);
    await muslimModel.insertMany(M3);
    await muslimModel.insertMany(M4);
    await muslimModel.insertMany(M5);
    await muslimModel.insertMany(M6);
    await muslimModel.insertMany(M7);
    await muslimModel.insertMany(M8);
    await muslimModel.insertMany(M9);
    await muslimModel.insertMany(M10);
    await muslimModel.insertMany(M11);
    await muslimModel.insertMany(M12);
    await muslimModel.insertMany(M13);
    await muslimModel.insertMany(M14);
    await muslimModel.insertMany(M15);
    await muslimModel.insertMany(M16);
    await muslimModel.insertMany(M17);
    await muslimModel.insertMany(M18);
    await muslimModel.insertMany(M19);
    await muslimModel.insertMany(M20);
    await muslimModel.insertMany(M21);
    await muslimModel.insertMany(M22);
    await muslimModel.insertMany(M23);
    await muslimModel.insertMany(M24);
    await muslimModel.insertMany(M25);
    await muslimModel.insertMany(M26);
    await muslimModel.insertMany(M27);
    await muslimModel.insertMany(M28);
    await muslimModel.insertMany(M29);
    await muslimModel.insertMany(M30);
    await muslimModel.insertMany(M31);
    await muslimModel.insertMany(M32);
    await muslimModel.insertMany(M33);
    await muslimModel.insertMany(M34);
    await muslimModel.insertMany(M35);
    await muslimModel.insertMany(M36);
    await muslimModel.insertMany(M37);
    await muslimModel.insertMany(M38);
    await muslimModel.insertMany(M39);
    await muslimModel.insertMany(M40);
    await muslimModel.insertMany(M41);
    await muslimModel.insertMany(M42);
    await muslimModel.insertMany(M43);
    await muslimModel.insertMany(M45);
    await muslimModel.insertMany(M46);
    await muslimModel.insertMany(M47);
    await muslimModel.insertMany(M48);
    await muslimModel.insertMany(M49);
    await muslimModel.insertMany(M50);

    // Books Muslim
    await muslimHAModel.insertMany(MH1);
    await muslimHAModel.insertMany(MH2);
    await muslimHAModel.insertMany(MH3);
    await muslimHAModel.insertMany(MH4);
    await muslimHAModel.insertMany(MH5);
    await muslimHAModel.insertMany(MH6);
    await muslimHAModel.insertMany(MH7);
    await muslimHAModel.insertMany(MH8);
    await muslimHAModel.insertMany(MH9);
    await muslimHAModel.insertMany(MH10);
    await muslimHAModel.insertMany(MH11);
    await muslimHAModel.insertMany(MH12);
    await muslimHAModel.insertMany(MH13);
    await muslimHAModel.insertMany(MH14);
    await muslimHAModel.insertMany(MH15);
    await muslimHAModel.insertMany(MH16);
    await muslimHAModel.insertMany(MH17);
    await muslimHAModel.insertMany(MH18);
    await muslimHAModel.insertMany(MH19);
    await muslimHAModel.insertMany(MH20);
    await muslimHAModel.insertMany(MH21);
    await muslimHAModel.insertMany(MH22);
    await muslimHAModel.insertMany(MH23);
    await muslimHAModel.insertMany(MH24);
    await muslimHAModel.insertMany(MH25);
    await muslimHAModel.insertMany(MH26);
    await muslimHAModel.insertMany(MH27);
    await muslimHAModel.insertMany(MH28);
    await muslimHAModel.insertMany(MH29);
    await muslimHAModel.insertMany(MH30);
    await muslimHAModel.insertMany(MH31);
    await muslimHAModel.insertMany(MH32);
    await muslimHAModel.insertMany(MH33);
    await muslimHAModel.insertMany(MH34);
    await muslimHAModel.insertMany(MH35);
    await muslimHAModel.insertMany(MH36);
    await muslimHAModel.insertMany(MH37);
    await muslimHAModel.insertMany(MH38);
    await muslimHAModel.insertMany(MH39);
    await muslimHAModel.insertMany(MH40);
    await muslimHAModel.insertMany(MH41);
    await muslimHAModel.insertMany(MH42);
    await muslimHAModel.insertMany(MH43);
    await muslimHAModel.insertMany(MH45);
    await muslimHAModel.insertMany(MH46);
    await muslimHAModel.insertMany(MH47);
    await muslimHAModel.insertMany(MH48);
    await muslimHAModel.insertMany(MH49);
    await muslimHAModel.insertMany(MH50);
    await muslimHAModel.insertMany(MH51);
    await muslimHAModel.insertMany(MH52);
    await muslimHAModel.insertMany(MH53);
    await muslimHAModel.insertMany(MH54);
    await muslimHAModel.insertMany(MH55);
    await muslimHAModel.insertMany(MH56);

    // Books Riyadus Salihin
    await riyadusSalihinModel.insertMany(R1);
    await riyadusSalihinModel.insertMany(R2);
    await riyadusSalihinModel.insertMany(R3);
    await riyadusSalihinModel.insertMany(R4);
    await riyadusSalihinModel.insertMany(R5);
    await riyadusSalihinModel.insertMany(R6);
    await riyadusSalihinModel.insertMany(R7);
    await riyadusSalihinModel.insertMany(R8);
    await riyadusSalihinModel.insertMany(R9);
    await riyadusSalihinModel.insertMany(R10);
    await riyadusSalihinModel.insertMany(R11);
    await riyadusSalihinModel.insertMany(R12);
    await riyadusSalihinModel.insertMany(R13);
    await riyadusSalihinModel.insertMany(R14);
    await riyadusSalihinModel.insertMany(R15);
    await riyadusSalihinModel.insertMany(R16);
    await riyadusSalihinModel.insertMany(R17);
    await riyadusSalihinModel.insertMany(R18);
    await riyadusSalihinModel.insertMany(R19);
    await riyadusSalihinModel.insertMany(R20);

    // Books Tirmidi
    await tirmidiModel.insertMany(T1);
    await tirmidiModel.insertMany(T2);
    await tirmidiModel.insertMany(T3);
    await tirmidiModel.insertMany(T4);
    await tirmidiModel.insertMany(T5);
    await tirmidiModel.insertMany(T6);
    await tirmidiModel.insertMany(T7);
    await tirmidiModel.insertMany(T8);
    await tirmidiModel.insertMany(T9);
    await tirmidiModel.insertMany(T10);
    await tirmidiModel.insertMany(T11);
    await tirmidiModel.insertMany(T12);
    await tirmidiModel.insertMany(T13);
    await tirmidiModel.insertMany(T14);
    await tirmidiModel.insertMany(T15);
    await tirmidiModel.insertMany(T16);
    await tirmidiModel.insertMany(T17);
    await tirmidiModel.insertMany(T18);
    await tirmidiModel.insertMany(T19);
    await tirmidiModel.insertMany(T20);
    await tirmidiModel.insertMany(T21);
    await tirmidiModel.insertMany(T22);
    await tirmidiModel.insertMany(T23);
    await tirmidiModel.insertMany(T24);
    await tirmidiModel.insertMany(T25);
    await tirmidiModel.insertMany(T26);
    await tirmidiModel.insertMany(T27);
    await tirmidiModel.insertMany(T28);
    await tirmidiModel.insertMany(T29);
    await tirmidiModel.insertMany(T30);
    await tirmidiModel.insertMany(T31);
    await tirmidiModel.insertMany(T32);
    await tirmidiModel.insertMany(T33);
    await tirmidiModel.insertMany(T34);
    await tirmidiModel.insertMany(T35);
    await tirmidiModel.insertMany(T36);
    await tirmidiModel.insertMany(T37);
    await tirmidiModel.insertMany(T38);
    await tirmidiModel.insertMany(T39);
    await tirmidiModel.insertMany(T40);
    await tirmidiModel.insertMany(T41);
    await tirmidiModel.insertMany(T42);
    await tirmidiModel.insertMany(T43);
    await tirmidiModel.insertMany(T45);
    await tirmidiModel.insertMany(T46);
    await tirmidiModel.insertMany(T47);
    await tirmidiModel.insertMany(T48);
    await tirmidiModel.insertMany(T49);
    await tirmidiModel.insertMany(T50);
    await tirmidiModel.insertMany(T51);
    await tirmidiModel.insertMany(T52);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Sura.deleteMany();
    await CategoryName.deleteMany();
    await Category.deleteMany();
    await AyatBN.deleteMany();
    await AyatEN.deleteMany();
    await AyatAR.deleteMany();
    await AudioFull.deleteMany();
    await AyatAudio.deleteMany();
    await SuraAE.deleteMany();
    await HizbQuarter.deleteMany();
    await Juz.deleteMany();
    await Manzil.deleteMany();
    await Page.deleteMany();
    await Ruku.deleteMany();
    await Sajda.deleteMany();
    // Hadith
    await HadithIndex.deleteMany();
    // Index of Books
    await abuDaudIndexModel.deleteMany();
    await bukhariIndexModel.deleteMany();
    await ibnMajahIndexModel.deleteMany();
    await muslimIndexModel.deleteMany();
    await muslimHAIndexModel.deleteMany();
    await riyadusSalihinIndexModel.deleteMany();
    await tirmidiIndexModel.deleteMany();
    // Books
    await abuDaudModel.deleteMany();
    await bukhariModel.deleteMany();
    await ibnMajahModel.deleteMany();
    await muslimModel.deleteMany();
    await muslimHAModel.deleteMany();
    await riyadusSalihinModel.deleteMany();
    await tirmidiModel.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
