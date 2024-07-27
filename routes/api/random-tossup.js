import getRandomTossups from '../../database/qbreader/get-random-tossups.js';

import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  // if (req.query.difficulties) {
  //   req.query.difficulties = req.query.difficulties
  //     .split(',')
  //     .map((difficulty) => parseInt(difficulty));

  //   req.query.difficulties = req.query.difficulties.length ? req.query.difficulties : undefined;
  // }

  // if (req.query.alternateSubcategories) {
  //   req.query.alternateSubcategories = req.query.alternateSubcategories.split(',');
  //   req.query.alternateSubcategories = req.query.alternateSubcategories.length ? req.query.alternateSubcategories : undefined;
  // }

  // if (req.query.categories) {
  //   req.query.categories = req.query.categories.split(',');
  //   req.query.categories = req.query.categories.length ? req.query.categories : undefined;
  // }

  // if (req.query.subcategories) {
  //   req.query.subcategories = req.query.subcategories.split(',');
  //   req.query.subcategories = req.query.subcategories.length ? req.query.subcategories : undefined;
  // }

  // req.query.minYear = isNaN(req.query.minYear) ? undefined : parseInt(req.query.minYear);
  // req.query.maxYear = isNaN(req.query.maxYear) ? undefined : parseInt(req.query.maxYear);
  // req.query.number = isNaN(req.query.number) ? undefined : parseInt(req.query.number);

  // req.query.powermarkOnly = (req.query.powermarkOnly === 'true');
  // req.query.standardOnly = (req.query.standardOnly === 'true');

  // const tossups = await getRandomTossups(req.query);

  // if (tossups.length === 0) {
  //   res.status(404);
  // }

  const tossups = [{
    "_id": "64e2fa57ce0dacc4ef84ba30",
    "question": "This physicist's work on the photoelectric effect was pivotal in establishing the quantum theory of light. His theory of special relativity revolutionized our understanding of space and time, and he introduced the famous equation E=mc^2. For 10 points, name this scientist whose theories laid the groundwork for much of modern physics, including general relativity.",
    "answer": "Albert <b><u>Einstein</u></b>",
    "category": "Science",
    "subcategory": "Physics",
    "packet": {
        "_id": "64e2fa57ce0dacc4ef84ba28",
        "name": "Physics Legends",
        "number": 1
    },
    "set": {
        "_id": "64e2fa57ce0dacc4ef84b924",
        "name": "2024 Physics Olympiad",
        "year": 2024,
        "standard": true
    },
    "createdAt": "2024-07-29T18:35:19.354Z",
    "updatedAt": "2024-07-29T18:35:19.354Z",
    "difficulty": 5,
    "alternate_subcategory": "Theoretical Physics",
    "number": 10,
    "answer_sanitized": "Albert Einstein",
    "question_sanitized": "This physicist's work on the photoelectric effect was pivotal in establishing the quantum theory of light. His theory of special relativity revolutionized our understanding of space and time, and he introduced the famous equation E=mc^2. For 10 points, name this scientist whose theories laid the groundwork for much of modern physics, including general relativity."
}]


  const tossups1 =  [
        {
            "_id": "62ec4cc6671d74a7752da60e",
            "question": "Along with an Italian mathematician, this man names a result stating that a meromorphic function approaches arbitrarily close to any complex value in an arbitrarily small neighborhood of a singularity of the function. A factorization theorem named for him guarantees the existence of an entire, non-zero polynomial with zeros at a given set of points with defined order for those points, and he developed a result by Ferdinand Lindemann and proved that for a set of distinct algebraic numbers, the exponentials of those numbers are linearly independent. His namesake function is continuous everywhere but nowhere differentiable, while another result partly named for his is a special case of the Heine-Borel theorem. For 10 points, identify this mathematician who co-names a theorem stating that each bounded sequence has a convergent subsequence along with Bernard Bolzano.",
            "answer": "Karl <b><u>Weierstrass</u></b>",
            "category": "Science",
            "subcategory": "Other Science",
            "packet": {
                "_id": "62ec4cc6671d74a7752da605",
                "name": "11Weiner",
                "number": 11
            },
            "set": {
                "_id": "62ec4cc6671d74a7752da451",
                "name": "2011 Chicago Open",
                "year": 2011,
                "standard": true
            },
            "createdAt": "2022-08-04T22:48:38.714Z",
            "updatedAt": "2023-05-20T20:17:15.530Z",
            "difficulty": 10,
            "alternate_subcategory": "Math",
            "number": 9,
            "answer_sanitized": "Karl Weierstrass",
            "question_sanitized": "Along with an Italian mathematician, this man names a result stating that a meromorphic function approaches arbitrarily close to any complex value in an arbitrarily small neighborhood of a singularity of the function. A factorization theorem named for him guarantees the existence of an entire, non-zero polynomial with zeros at a given set of points with defined order for those points, and he developed a result by Ferdinand Lindemann and proved that for a set of distinct algebraic numbers, the exponentials of those numbers are linearly independent. His namesake function is continuous everywhere but nowhere differentiable, while another result partly named for his is a special case of the Heine-Borel theorem. For 10 points, identify this mathematician who co-names a theorem stating that each bounded sequence has a convergent subsequence along with Bernard Bolzano."
        },
        {
            "_id": "630a734f995199588ca69d39",
            "question": "<b>A study of this concept asked participants to consider two versions of a story: one in which assaulting Thompson Hill saves the lives of soldiers, and one in which it risks them. That Joshua Knobe study of this concept caused Alfred Mele to retract his account of side effects. An argument that involves playing two instances of a missile-targeting video game was used to attack the “Simple View” of this concept in a Michael Bratman essay about its “Two Faces.” A book titled for this concept claims that when we speak of “different senses” of a word we are usually “in the dark about the character of the concept which it represents.” A 1978 paper analyzes planning a squirrel house as a “pure” instance of this concept and concludes that this concept is a (*)</b> mental state. An earlier account of this concept as “acting under a description” was employed by Donald Davidson in a 1963 paper. G.E.M. Anscombe’s first book suggested that actions with this quality are ones for which it makes sense to as why they were done. For 10 points, name this philosophical term for the reasons for actions.",
            "answer": "<b><u>intention</u></b>al [accept “<b><u>Intentional action and side effects in ordinary language</u></b>” or “<b><u>Two Faces of</u></b> <b><u>intention</u></b>”; do not accept or prompt on “intentionality”]",
            "subcategory": "Philosophy",
            "category": "Philosophy",
            "packet": {
                "_id": "630a734f995199588ca69d38",
                "name": "08 Magin and Westbrook",
                "number": 8
            },
            "set": {
                "_id": "630a734f995199588ca69c18",
                "name": "2018 Chicago Open",
                "year": 2018,
                "standard": true
            },
            "createdAt": "2022-08-27T19:41:03.744Z",
            "updatedAt": "2023-04-09T06:00:05.485Z",
            "difficulty": 10,
            "number": 1,
            "answer_sanitized": "intentional [accept \"Intentional action and side effects in ordinary language\" or \"Two Faces of intention\"; do not accept or prompt on \"intentionality\"]",
            "question_sanitized": "A study of this concept asked participants to consider two versions of a story: one in which assaulting Thompson Hill saves the lives of soldiers, and one in which it risks them. That Joshua Knobe study of this concept caused Alfred Mele to retract his account of side effects. An argument that involves playing two instances of a missile-targeting video game was used to attack the \"Simple View\" of this concept in a Michael Bratman essay about its \"Two Faces.\" A book titled for this concept claims that when we speak of \"different senses\" of a word we are usually \"in the dark about the character of the concept which it represents.\" A 1978 paper analyzes planning a squirrel house as a \"pure\" instance of this concept and concludes that this concept is a (*) mental state. An earlier account of this concept as \"acting under a description\" was employed by Donald Davidson in a 1963 paper. G.E.M. Anscombe's first book suggested that actions with this quality are ones for which it makes sense to as why they were done. For 10 points, name this philosophical term for the reasons for actions."
        },
        {
            "_id": "63059e1543cf020187623287",
            "question": "This composer included a “Decoration Day” second movement in his Holiday Symphony. The strings represent the night in a piece by this composer written from the perspective of someone sitting on a bench at the title place. That piece is often paired with his composition that uses the trumpet to represent the title contemplation. This composer of Central Park in the Dark and The Unanswered Question quoted “Columbia, Gem of the Ocean” in the movement “Putnam’s Camp,” and another of his works has movements named for Thoreau and Emerson. For 10 points, name this composer of Three Places in New England and the Concord Sonata.",
            "answer": "Charles <b><u>Ives</u></b>",
            "category": "Fine Arts",
            "subcategory": "Auditory Fine Arts",
            "packet": {
                "_id": "63059e1543cf02018762327e",
                "name": "02",
                "number": 2
            },
            "set": {
                "_id": "63059e1543cf020187623252",
                "name": "2013 BISB",
                "year": 2013,
                "standard": true
            },
            "createdAt": "2022-08-24T03:42:13.732Z",
            "updatedAt": "2023-04-09T06:00:05.478Z",
            "difficulty": 3,
            "number": 9,
            "answer_sanitized": "Charles Ives",
            "question_sanitized": "This composer included a \"Decoration Day\" second movement in his Holiday Symphony. The strings represent the night in a piece by this composer written from the perspective of someone sitting on a bench at the title place. That piece is often paired with his composition that uses the trumpet to represent the title contemplation. This composer of Central Park in the Dark and The Unanswered Question quoted \"Columbia, Gem of the Ocean\" in the movement \"Putnam's Camp,\" and another of his works has movements named for Thoreau and Emerson. For 10 points, name this composer of Three Places in New England and the Concord Sonata."
        },
        {
            "_id": "62eeaca03c2fca34d39ed940",
            "question": "<b>Statues of a holder of this title used iris to represent her eye loss from ophthalmic infection. A woman of this position funded voyages that brought frankincense and myrrh from the land of Punt, and later had her statues and monuments damaged by her son. Another woman with this position supposedly presented herself in a rolled up carpet to (*)</b> Julius Caesar, and was the last of the Ptolemaic dynasty. That woman with this position killed herself after losing the battle of Actium with her lover Mark Antony. For 10 points, name this position held by Hatsepshut and Cleopatra as ruler of ancient Egypt.",
            "answer": "<b><u>pharaoh</u></b> [prompt on <u>queen</u>; prompt on <u>ruler</u> or <u>ruler</u> of Egypt before mentioned, prompt on <u>king</u> even though all the clues refer to women]",
            "category": "History",
            "subcategory": "Ancient History",
            "packet": {
                "_id": "62eeaca03c2fca34d39ed92e",
                "name": "10",
                "number": 10
            },
            "set": {
                "_id": "62eeaca03c2fca34d39ed7bc",
                "name": "2020-2021 Matt Cvijanovich Memorial Tournament",
                "year": 2020,
                "standard": true
            },
            "createdAt": "2022-08-06T18:02:08.748Z",
            "updatedAt": "2023-04-09T05:58:55.288Z",
            "difficulty": 3,
            "number": 18,
            "answer_sanitized": "pharaoh [prompt on queen; prompt on ruler or ruler of Egypt before mentioned, prompt on king even though all the clues refer to women]",
            "question_sanitized": "Statues of a holder of this title used iris to represent her eye loss from ophthalmic infection. A woman of this position funded voyages that brought frankincense and myrrh from the land of Punt, and later had her statues and monuments damaged by her son. Another woman with this position supposedly presented herself in a rolled up carpet to (*) Julius Caesar, and was the last of the Ptolemaic dynasty. That woman with this position killed herself after losing the battle of Actium with her lover Mark Antony. For 10 points, name this position held by Hatsepshut and Cleopatra as ruler of ancient Egypt."
        },
        {
            "_id": "642255d991a7465b1f7aeaae",
            "question": "<b>A book by Erich Przywara (“SHIH-vahr-uh”) titled for one of this thinker’s ideas prompted Karl Barth (“BART”) to call that idea “the antichrist.” Herbert McCabe’s thought primarily drew from Marxism and this thinker’s school. It’s not Aristotle, but this thinker originated the dictum that “nothing is in the intellect that was not first in the senses,” the Peripatetic Axiom. This theologian proposed the idea that God’s similarity with created things can only be affirmed while also affirming God’s dissimilarity, a concept called the (*)</b> Analogia Entis or “Analogy of Being.” This thinker theorized that behaviors with harmful outcomes might be just in certain circumstances with his “Principle of Double Effect.” This theologian proposed the arguments “from contingency” and “from degree” as part of a collection of logical demonstrations of God’s existence. For 10 points, name this Dominican friar who presented his “Five Ways” in the Summa Theologiae.",
            "answer": "(Saint) Thomas <b><u>Aquinas</u></b> [or Tommaso <b><u>d’Aquino</u></b>; or <i><b><u>Doctor Angelicus</u></b></i>, <i><b><u>Doctor Communis</u></b></i>, or <i><b><u>Doctor Universalis</u></b></i>]",
            "category": "Philosophy",
            "subcategory": "Philosophy",
            "packet": {
                "_id": "642255d991a7465b1f7aeaa7",
                "name": "08",
                "number": 8
            },
            "set": {
                "_id": "642255d991a7465b1f7ae96b",
                "name": "2022 CMST",
                "year": 2022,
                "standard": true
            },
            "createdAt": "2023-03-28T02:50:01.399Z",
            "updatedAt": "2023-04-09T06:00:05.597Z",
            "difficulty": 9,
            "number": 7,
            "answer_sanitized": "(Saint) Thomas Aquinas [or Tommaso d'Aquino; or Doctor Angelicus, Doctor Communis, or Doctor Universalis]",
            "question_sanitized": "A book by Erich Przywara (\"SHIH-vahr-uh\") titled for one of this thinker's ideas prompted Karl Barth (\"BART\") to call that idea \"the antichrist.\" Herbert McCabe's thought primarily drew from Marxism and this thinker's school. It's not Aristotle, but this thinker originated the dictum that \"nothing is in the intellect that was not first in the senses,\" the Peripatetic Axiom. This theologian proposed the idea that God's similarity with created things can only be affirmed while also affirming God's dissimilarity, a concept called the (*) Analogia Entis or \"Analogy of Being.\" This thinker theorized that behaviors with harmful outcomes might be just in certain circumstances with his \"Principle of Double Effect.\" This theologian proposed the arguments \"from contingency\" and \"from degree\" as part of a collection of logical demonstrations of God's existence. For 10 points, name this Dominican friar who presented his \"Five Ways\" in the Summa Theologiae."
        },
        {
            "_id": "62f3ed6a57b6d50239b52416",
            "question": "<b>Description acceptable. Edward Wilmot Blyden became one of the first and most enthusiastic proponents of this theory after gazing at a certain object and feeling that he had a “peculiar heritage” in it. The proportions of the Lepsius Canon and the predominance of Blood Type B were cited to support this theory in a 1991 book titled Civilization or Barbarism. Herodotus and Strabo’s use of the term melanchroes (“meh-LAN-chro-ays”) has often been cited in support of this theory, which was largely debunked at a 1974 UNESCO symposium also dedicated to deciphering the (*)</b> Meriotic (“mer-ee-AH-tic”) Script. The major proponent of this hypothesis was Cheikh Anta Diop, whose works often cited the biblical story of Ham, the etymology of the term Kemet, and the origins of the 25th dynasty. For 10 points, identify this theory which claims that the creators of a Nile valley civilization were phenotypically identical to Sub-Saharan Africans.",
            "answer": "<b><u>Black Egyptian</u></b> hypothesis [accept any answer relating to Ancient <b><u>Egyptians</u></b> being <b><u>black</u></b>; prompt on <u>We Wuz Kangz</u> or similar answers from memelords; prompt on <u>Pan-African</u>ism]",
            "subcategory": "Other History",
            "category": "History",
            "packet": {
                "_id": "62f3ed6a57b6d50239b52414",
                "name": "2",
                "number": 2
            },
            "set": {
                "_id": "62f3ed6a57b6d50239b523f9",
                "name": "2019 Age of Empires",
                "year": 2019,
                "standard": true
            },
            "createdAt": "2022-08-10T17:39:54.187Z",
            "updatedAt": "2023-04-09T06:00:05.371Z",
            "difficulty": 10,
            "number": 2,
            "answer_sanitized": "Black Egyptian hypothesis [accept any answer relating to Ancient Egyptians being black; prompt on We Wuz Kangz or similar answers from memelords; prompt on Pan-Africanism]",
            "question_sanitized": "Description acceptable. Edward Wilmot Blyden became one of the first and most enthusiastic proponents of this theory after gazing at a certain object and feeling that he had a \"peculiar heritage\" in it. The proportions of the Lepsius Canon and the predominance of Blood Type B were cited to support this theory in a 1991 book titled Civilization or Barbarism. Herodotus and Strabo's use of the term melanchroes (\"meh-LAN-chro-ays\") has often been cited in support of this theory, which was largely debunked at a 1974 UNESCO symposium also dedicated to deciphering the (*) Meriotic (\"mer-ee-AH-tic\") Script. The major proponent of this hypothesis was Cheikh Anta Diop, whose works often cited the biblical story of Ham, the etymology of the term Kemet, and the origins of the 25th dynasty. For 10 points, identify this theory which claims that the creators of a Nile valley civilization were phenotypically identical to Sub-Saharan Africans."
        },
        {
            "_id": "63059e1643cf020187623604",
            "question": "<b>In the free-electron model, this quantity equals two-fifths times the number density times the Fermi energy. In SI units, the value of this quantity possessed by a B-field is equal to B squared divided by twice the permeability of free space. One form of this quantity is equal to the time average of the Poynting vector divided by the speed of light. This quantity is located on the main diagonal of the (*)</b> stress tensor. For a column of fluid, the change in this quantity is equal to the density of the fluid times “little g” times the height of the column, which allows for this quantity to be measured using a manometer or a barometer. For 10 points, name this quantity defined as force per unit area, which is measured in units such as atmospheres and Pascals.",
            "answer": "<b><u>pressure</u></b> [prompt on “P,” prompt on “normal stress,” accept more specific answers like <b><u>radiation pressure</u></b> or <b><u>hydrostatic pressure</u></b>]",
            "category": "Science",
            "subcategory": "Physics",
            "packet": {
                "_id": "63059e1643cf0201876235ff",
                "name": "09",
                "number": 9
            },
            "set": {
                "_id": "63059e1543cf0201876234ad",
                "name": "2013 DRAGOON",
                "year": 2013,
                "standard": true
            },
            "createdAt": "2022-08-24T03:42:14.025Z",
            "updatedAt": "2023-04-09T06:00:05.472Z",
            "difficulty": 7,
            "number": 5,
            "answer_sanitized": "pressure [prompt on \"P,\" prompt on \"normal stress,\" accept more specific answers like radiation pressure or hydrostatic pressure]",
            "question_sanitized": "In the free-electron model, this quantity equals two-fifths times the number density times the Fermi energy. In SI units, the value of this quantity possessed by a B-field is equal to B squared divided by twice the permeability of free space. One form of this quantity is equal to the time average of the Poynting vector divided by the speed of light. This quantity is located on the main diagonal of the (*) stress tensor. For a column of fluid, the change in this quantity is equal to the density of the fluid times \"little g\" times the height of the column, which allows for this quantity to be measured using a manometer or a barometer. For 10 points, name this quantity defined as force per unit area, which is measured in units such as atmospheres and Pascals."
        },
        {
            "_id": "62f3ed6a57b6d50239b52c64",
            "question": "<b>A specific instance of this action is commemorated on a day alternatively dubbed the Octave of the Nativity or the Feast of Naming. In Talmudic tradition, childless couples can receive segula by acting in the role of kvatter during instances of this action. This action is often performed with a tool called an izmel, after which the presiding figure engages in metzitzah b'peh, a controversial practice in which the (*)</b> mouth is used to cleanse blood. After God gives Abraham his new name, he declares that the sign of the covenant shall be Abraham performing this action on himself and his sons. For 10 points, give this action usually conducted by a mohel in Judaism, in which a baby boy’s foreskin is removed.",
            "answer": "<b><u>circumcision</u></b> [accept word forms such as <b><u>circumcising</u></b> a child; accept <b><u>bris</u></b> or <b><u>brit milah</u></b>; accept <b><u>removing foreskin</u></b> or equivalents before “foreskin”; prompt on <u>genital mutilation</u>, as some people consider circumcision to be such]",
            "subcategory": "Religion",
            "category": "Religion",
            "packet": {
                "_id": "62f3ed6a57b6d50239b52c61",
                "name": "03",
                "number": 3
            },
            "set": {
                "_id": "62f3ed6a57b6d50239b52c0e",
                "name": "2020 STASH",
                "year": 2020,
                "standard": true
            },
            "createdAt": "2022-08-10T17:39:54.346Z",
            "updatedAt": "2023-04-09T06:00:05.397Z",
            "difficulty": 5,
            "number": 3,
            "answer_sanitized": "circumcision [accept word forms such as circumcising a child; accept bris or brit milah; accept removing foreskin or equivalents before \"foreskin\"; prompt on genital mutilation, as some people consider circumcision to be such]",
            "question_sanitized": "A specific instance of this action is commemorated on a day alternatively dubbed the Octave of the Nativity or the Feast of Naming. In Talmudic tradition, childless couples can receive segula by acting in the role of kvatter during instances of this action. This action is often performed with a tool called an izmel, after which the presiding figure engages in metzitzah b'peh, a controversial practice in which the (*) mouth is used to cleanse blood. After God gives Abraham his new name, he declares that the sign of the covenant shall be Abraham performing this action on himself and his sons. For 10 points, give this action usually conducted by a mohel in Judaism, in which a baby boy's foreskin is removed."
        },
        {
            "_id": "62d98019f67c8a6f6e0aed35",
            "question": "<b>The Hamiltonian for one model of these materials has a kinetic energy term parameterized by the hopping integral and a second term corresponding to electron repulsion. By accounting for bound states formed when screened fields are strong enough to invalidate the tight-binding model, the Hubbard model predicts the existence of one variety of these materials exemplified by (*)</b> nickel oxide. Puncture arcs and flashover arcs are failure modes of these materials. The Mott variety of these materials, which have associated breakdown voltages, have very large band gaps. Examples of these materials include paper, teflon and other plastics and rubbers. For 10 points, identify these materials in which low amounts of current can flow.",
            "answer": "<b><u>insulator</u></b>s [accept specific forms such as <b><u>Mott insulator</u></b>s]",
            "subcategory": "Physics",
            "category": "Science",
            "packet": {
                "_id": "62d98019f67c8a6f6e0aed2a",
                "name": "04",
                "number": 4
            },
            "set": {
                "_id": "62d98019f67c8a6f6e0aeb88",
                "name": "2020 Michigan Winter Tournament",
                "year": 2020,
                "standard": true
            },
            "createdAt": "2022-07-21T16:34:33.295Z",
            "updatedAt": "2024-05-14T00:38:05.444Z",
            "difficulty": 7,
            "number": 11,
            "answer_sanitized": "insulators [accept specific forms such as Mott insulators]",
            "question_sanitized": "The Hamiltonian for one model of these materials has a kinetic energy term parameterized by the hopping integral and a second term corresponding to electron repulsion. By accounting for bound states formed when screened fields are strong enough to invalidate the tight-binding model, the Hubbard model predicts the existence of one variety of these materials exemplified by (*) nickel oxide. Puncture arcs and flashover arcs are failure modes of these materials. The Mott variety of these materials, which have associated breakdown voltages, have very large band gaps. Examples of these materials include paper, teflon and other plastics and rubbers. For 10 points, identify these materials in which low amounts of current can flow."
        },
        {
            "_id": "62f072b47434cffff7b5a122",
            "question": "<b>Epithelioid examples of these cells fuse to form multi-nucleated giant cells in granulomatous (“gran-yuh-LOM-uh-tuss”) diseases like sarcoidosis. These cells use heme oxygenase to generate biliverdin, a critical step in red blood cell breakdown in the spleen. Whether these cells metabolize arginine to ornithine is used to categorize them into M1 and M2 subtypes, and like their precursors, they express CD68. Alveolar (“al-vee-OH-lur”) examples of these cells are reservoirs for (*)</b> Mycobacterium tuberculosis. These cells are often characterized by the tissue they reside in, and are also known as microglia in the CNS and Kupffer cells in the liver. Like dendritic cells and B cells, these cells present antigens to T cells. For 10 points, name these cells produced by the differentiation of monocytes, whose name means “big eater.”",
            "answer": "<b><u>macrophage</u></b>s [prompt on <u>white blood</u> cells or <u>leukocytes</u> or <u>monocytes</u>]",
            "subcategory": "Biology",
            "category": "Science",
            "packet": {
                "_id": "62f072b47434cffff7b5a10e",
                "name": "10",
                "number": 10
            },
            "set": {
                "_id": "62f072b47434cffff7b59f9c",
                "name": "2019 Early Fall Tournament (EFT)",
                "year": 2019,
                "standard": true
            },
            "createdAt": "2022-08-08T02:19:32.342Z",
            "updatedAt": "2023-04-09T06:00:05.274Z",
            "difficulty": 7,
            "number": 20,
            "answer_sanitized": "macrophages [prompt on white blood cells or leukocytes or monocytes]",
            "question_sanitized": "Epithelioid examples of these cells fuse to form multi-nucleated giant cells in granulomatous (\"gran-yuh-LOM-uh-tuss\") diseases like sarcoidosis. These cells use heme oxygenase to generate biliverdin, a critical step in red blood cell breakdown in the spleen. Whether these cells metabolize arginine to ornithine is used to categorize them into M1 and M2 subtypes, and like their precursors, they express CD68. Alveolar (\"al-vee-OH-lur\") examples of these cells are reservoirs for (*) Mycobacterium tuberculosis. These cells are often characterized by the tissue they reside in, and are also known as microglia in the CNS and Kupffer cells in the liver. Like dendritic cells and B cells, these cells present antigens to T cells. For 10 points, name these cells produced by the differentiation of monocytes, whose name means \"big eater.\""
        },
        {
            "_id": "63bba672874e0ef7dd7b24a8",
            "question": "<b>Rulers of this ethnicity could declare a mupeto, a type of systematic confiscation of trade goods. A predecessor site to states led by this ethnicity lends its name to a national order of merit symbolized by a golden rhinoceros figurine found there. A ruler of these people executed the missionary Gonçalo da Silveira at the behest of Muslim traders whom he then also had killed in a fit of guilt. Kingdoms of this people included the Butua kingdom at Khami and one ruled by the holder of a title that meant “Ravager of the Land.” This people’sRozwi Empire superseded a kingdom of this (*)</b> people ruled by the Mwene Mutapa, who traded extensively through the port of Sofala with the Portuguese. Evidence that these people built a palace city also claimed by the Lemba that contained a thirty-foot conical tower and several statues of soapstone birds was aggressively suppressed by the Rhodesian government. For 10 points, name this ethnic group, the most likely builders of Great Zimbabwe.",
            "answer": "the <b><u>Shona</u></b> people [also accept the ba<b><u>Kalanga</u></b> people]",
            "category": "History",
            "subcategory": "World History",
            "packet": {
                "_id": "63bba672874e0ef7dd7b249f",
                "name": "7",
                "number": 7
            },
            "set": {
                "_id": "63bba672874e0ef7dd7b2408",
                "name": "2018 WORLDSTAR",
                "year": 2018,
                "standard": true
            },
            "createdAt": "2023-01-09T05:30:26.977Z",
            "updatedAt": "2023-04-09T06:00:05.549Z",
            "difficulty": 10,
            "number": 9,
            "answer_sanitized": "the Shona people [also accept the baKalanga people]",
            "question_sanitized": "Rulers of this ethnicity could declare a mupeto, a type of systematic confiscation of trade goods. A predecessor site to states led by this ethnicity lends its name to a national order of merit symbolized by a golden rhinoceros figurine found there. A ruler of these people executed the missionary Goncalo da Silveira at the behest of Muslim traders whom he then also had killed in a fit of guilt. Kingdoms of this people included the Butua kingdom at Khami and one ruled by the holder of a title that meant \"Ravager of the Land.\" This people'sRozwi Empire superseded a kingdom of this (*) people ruled by the Mwene Mutapa, who traded extensively through the port of Sofala with the Portuguese. Evidence that these people built a palace city also claimed by the Lemba that contained a thirty-foot conical tower and several statues of soapstone birds was aggressively suppressed by the Rhodesian government. For 10 points, name this ethnic group, the most likely builders of Great Zimbabwe."
        },
        {
            "_id": "63d6af74789ea9cdfc004e0a",
            "question": "<b>A track on this album breaks into a vamp in which the bass repeats a figure beginning with [read slowly] sixteenth notes D-flat and D played on the “and” of 1, followed by dotted-half E-flat. This album’s title track begins with the instrumentalists loosely playing an E5 chord while John McLaughlin improvises. It’s not from the 2000s, but this album was the last of many studio albums that the artist recorded with the drummer Tony Williams. This album, which contains a section titled (*)</b> “It’s About That Time,” opens with Joe Zawinul sustaining a D7sus4 chord on electric organ. This album consists of two lengthy tracks, the first of which is titled “Shhh/Peaceful.” For 10 points, name this 1969 jazz fusion album by Miles Davis, the first of his electric period.",
            "answer": "<i></i> <i><b><u>In a Silent Way</u></b></i>",
            "category": "Fine Arts",
            "subcategory": "Other Fine Arts",
            "packet": {
                "_id": "63d6af74789ea9cdfc004e07",
                "name": "3",
                "number": 3
            },
            "set": {
                "_id": "63d6af74789ea9cdfc004ddc",
                "name": "2021 JORDU",
                "year": 2021,
                "standard": true
            },
            "createdAt": "2023-01-29T17:40:04.610Z",
            "updatedAt": "2023-04-09T06:00:05.556Z",
            "difficulty": 10,
            "alternate_subcategory": "Jazz",
            "number": 3,
            "answer_sanitized": " In a Silent Way",
            "question_sanitized": "A track on this album breaks into a vamp in which the bass repeats a figure beginning with [read slowly] sixteenth notes D-flat and D played on the \"and\" of 1, followed by dotted-half E-flat. This album's title track begins with the instrumentalists loosely playing an E5 chord while John McLaughlin improvises. It's not from the 2000s, but this album was the last of many studio albums that the artist recorded with the drummer Tony Williams. This album, which contains a section titled (*) \"It's About That Time,\" opens with Joe Zawinul sustaining a D7sus4 chord on electric organ. This album consists of two lengthy tracks, the first of which is titled \"Shhh/Peaceful.\" For 10 points, name this 1969 jazz fusion album by Miles Davis, the first of his electric period."
        },
        {
            "_id": "62fdc23fc764815614749f42",
            "question": "<b>One play from this country sees Hally lash out at Sam and Willie in Master Harold...and the Boys and another author from this country wrote Waiting for the Barbarians and The Life and Times of Michael K on his way to the 2003 Nobel Prize. In addition to being the home of   (*)</b> Athol Fugard and J.M. Coetzee, this country was also the origin of the author of July's People and The Conservationist. The home to Nadine Gordimer is, for 10 points, which country that is also the home of Nelson Mandela, many of whose authors protested apartheid rule?",
            "answer": "<b><u>South Africa</u></b>",
            "category": "Literature",
            "subcategory": "World Literature",
            "packet": {
                "_id": "62fdc23fc764815614749f31",
                "name": "11",
                "number": 11
            },
            "set": {
                "_id": "62fdc23fc764815614749d96",
                "name": "2011 LIST",
                "year": 2011,
                "standard": true
            },
            "createdAt": "2022-08-18T04:38:23.938Z",
            "updatedAt": "2023-04-09T06:00:05.438Z",
            "difficulty": 3,
            "alternate_subcategory": "Long Fiction",
            "number": 17,
            "answer_sanitized": "South Africa",
            "question_sanitized": "One play from this country sees Hally lash out at Sam and Willie in Master Harold...and the Boys and another author from this country wrote Waiting for the Barbarians and The Life and Times of Michael K on his way to the 2003 Nobel Prize. In addition to being the home of   (*) Athol Fugard and J.M. Coetzee, this country was also the origin of the author of July's People and The Conservationist. The home to Nadine Gordimer is, for 10 points, which country that is also the home of Nelson Mandela, many of whose authors protested apartheid rule?"
        },
        {
            "_id": "62f73cec2215f32393144ca7",
            "question": "<b>One of this author’s works begins with a soldier asking to “leave [him] here a little, while as yet ‘t is early morn” at the title location. In another work by this author, when the title character looks at Sir Lancelot, her mirror cracks and she is cursed. This author of “Locksley Hall” and “The (*)</b> Lady of Shalott” wrote in one poem that “‘tis better to have loved and lost than never to have loved at all.” Asking, “When can their glory fade?” of “the six hundred” that rode “Into the valley of Death,” for 10 points, name this poet of “In Memoriam A. H. H.” and “The Charge of the Light Brigade.”",
            "answer": "Alfred, Lord <b><u>Tennyson</u></b>",
            "category": "Literature",
            "subcategory": "British Literature",
            "packet": {
                "_id": "62f73cec2215f32393144c9f",
                "name": "02",
                "number": 2
            },
            "set": {
                "_id": "62f73cec2215f32393144c73",
                "name": "2019 Prison Bowl",
                "year": 2019,
                "standard": true
            },
            "createdAt": "2022-08-13T05:55:56.557Z",
            "updatedAt": "2023-04-09T06:00:05.440Z",
            "difficulty": 5,
            "alternate_subcategory": "Poetry",
            "number": 8,
            "answer_sanitized": "Alfred, Lord Tennyson",
            "question_sanitized": "One of this author's works begins with a soldier asking to \"leave [him] here a little, while as yet 't is early morn\" at the title location. In another work by this author, when the title character looks at Sir Lancelot, her mirror cracks and she is cursed. This author of \"Locksley Hall\" and \"The (*) Lady of Shalott\" wrote in one poem that \"'tis better to have loved and lost than never to have loved at all.\" Asking, \"When can their glory fade?\" of \"the six hundred\" that rode \"Into the valley of Death,\" for 10 points, name this poet of \"In Memoriam A. H. H.\" and \"The Charge of the Light Brigade.\""
        },
        {
            "_id": "63ade128794bda10f6deda27",
            "question": "<b>One “Forest Tradition” of this sect included such luminaries as Mun Bhuridatta and his student Ajahn Chah. Some adherents of this school observe a holiday in which they accept instruction from any of their peers; that Pavarana ceremony is followed by the Kathina festival, in which laypeople offer gifts, and it comes at the end of the three-month Vassa season, also called the Rains Retreat. This denomination includes four stages of (*)</b> enlightenment, the highest of which is the Arahant. Its monastic orders, known as nikaya, are made up of bhikkhu and bhikkuni who follow the rules of the Vinaya to enter into the larger monastic community, called the Sangha. The Vinaya and Sutta sections make up two of the three “baskets” of this sect’s main text, the Pali Canon, and its name means “teaching of the elders.” For 10 points, name this religion prevalent in Southeast Asia that is distinct from Mahayana Buddhism.",
            "answer": "<b><u>Theravada</u></b> Buddhism [prompt on <b><u>Buddhism</u></b>]",
            "category": "Religion",
            "subcategory": "Religion",
            "packet": {
                "_id": "63ade128794bda10f6deda12",
                "name": "Dartmouth A & WUSTL",
                "number": 6
            },
            "set": {
                "_id": "63ade128794bda10f6ded936",
                "name": "2013 VCU Closed",
                "year": 2013,
                "standard": true
            },
            "createdAt": "2022-12-29T18:49:12.631Z",
            "updatedAt": "2023-04-09T06:00:05.500Z",
            "difficulty": 8,
            "number": 21,
            "answer_sanitized": "Theravada Buddhism [prompt on Buddhism]",
            "question_sanitized": "One \"Forest Tradition\" of this sect included such luminaries as Mun Bhuridatta and his student Ajahn Chah. Some adherents of this school observe a holiday in which they accept instruction from any of their peers; that Pavarana ceremony is followed by the Kathina festival, in which laypeople offer gifts, and it comes at the end of the three-month Vassa season, also called the Rains Retreat. This denomination includes four stages of (*) enlightenment, the highest of which is the Arahant. Its monastic orders, known as nikaya, are made up of bhikkhu and bhikkuni who follow the rules of the Vinaya to enter into the larger monastic community, called the Sangha. The Vinaya and Sutta sections make up two of the three \"baskets\" of this sect's main text, the Pali Canon, and its name means \"teaching of the elders.\" For 10 points, name this religion prevalent in Southeast Asia that is distinct from Mahayana Buddhism."
        },
        {
            "_id": "63059e1643cf020187623662",
            "question": "<b>Though Donald Jackson wrote about this event, Nicholas Biddle wrote the first authoritative book on it with Paul Allen. Jean-Pierre Chouteau provided counsel to the leaders of this event, who were aided by George Drouillard. A prime figure in this action is the subject of the Stephen Ambrose biography Undaunted Courage. A major player for this cause served as the final governor of the Missouri Territory, while another would later commit suicide on the (*)</b> Natchez Trace. The black man-servant York participated in this event that saw the birth of Pompy, the son of Toussaint Charbonneau and his Shoshone wife. For 10 points, name this mission that departed from St. Louis to explore the Louisiana territory.",
            "answer": "Meriwether <b><u>Lewis</u></b> and William <b><u>Clark</u></b> expedition [or <b><u>Corps of Discovery</u></b> expedition; accept synonyms for “expedition”]",
            "category": "History",
            "subcategory": "American History",
            "packet": {
                "_id": "63059e1643cf020187623653",
                "name": "11",
                "number": 11
            },
            "set": {
                "_id": "63059e1543cf0201876234ad",
                "name": "2013 DRAGOON",
                "year": 2013,
                "standard": true
            },
            "createdAt": "2022-08-24T03:42:14.032Z",
            "updatedAt": "2023-04-09T06:00:05.472Z",
            "difficulty": 7,
            "number": 15,
            "answer_sanitized": "Meriwether Lewis and William Clark expedition [or Corps of Discovery expedition; accept synonyms for \"expedition\"]",
            "question_sanitized": "Though Donald Jackson wrote about this event, Nicholas Biddle wrote the first authoritative book on it with Paul Allen. Jean-Pierre Chouteau provided counsel to the leaders of this event, who were aided by George Drouillard. A prime figure in this action is the subject of the Stephen Ambrose biography Undaunted Courage. A major player for this cause served as the final governor of the Missouri Territory, while another would later commit suicide on the (*) Natchez Trace. The black man-servant York participated in this event that saw the birth of Pompy, the son of Toussaint Charbonneau and his Shoshone wife. For 10 points, name this mission that departed from St. Louis to explore the Louisiana territory."
        },
        {
            "_id": "666dc6c59f7c4cfdbd678532",
            "question": "<b> In 1795, Jean-Charles Pichegru unusually ordered one of these actions against the remnants of the Dutch fleet on the Zuiderzee. One of these actions was misdirected due to an ambiguous arm wave from George Bingham, 3rd Earl of Lucan. In </b><i><b>The Face of Battle</b></i><b>, John Keegan argued this tactic was effective only when it induced panic and explained why 12 separate instances of it against (*)</b> “squares” failed at Waterloo. Napoleon typically employed an artillery barrage before one of these actions was undertaken by his cuirassiers (“kweer-uh-SEERs”). The Earl of Cardigan led one of these events at the Battle of Balaclava that resulted in a 40 percent casualty rate. For 10 points, name this tactic taken by the Light Brigade during the Crimean War.",
            "question_sanitized": "In 1795, Jean-Charles Pichegru unusually ordered one of these actions against the remnants of the Dutch fleet on the Zuiderzee. One of these actions was misdirected due to an ambiguous arm wave from George Bingham, 3rd Earl of Lucan. In The Face of Battle, John Keegan argued this tactic was effective only when it induced panic and explained why 12 separate instances of it against (*) \"squares\" failed at Waterloo. Napoleon typically employed an artillery barrage before one of these actions was undertaken by his cuirassiers (\"kweer-uh-SEERs\"). The Earl of Cardigan led one of these events at the Battle of Balaclava that resulted in a 40 percent casualty rate. For 10 points, name this tactic taken by the Light Brigade during the Crimean War.",
            "answer": "<b><u>cavalry charge</u></b> [accept answers like a <b><u>cavalry attack</u></b> or <b><u>mounted attack</u></b> or an <b><u>attack</u></b> on <b><u>horseback</u></b>; prompt on a <u>charge</u> or <u>offensive</u> or an <u>attack</u> by asking “by what type of troops?”]",
            "answer_sanitized": "cavalry charge [accept answers like a cavalry attack or mounted attack or an attack on horseback; prompt on a charge or offensive or an attack by asking \"by what type of troops?\"]",
            "updatedAt": "2024-06-15T16:52:21.854Z",
            "category": "History",
            "subcategory": "Other History",
            "number": 19,
            "createdAt": "2024-06-15T16:52:21.854Z",
            "difficulty": 5,
            "packet": {
                "_id": "666dc6c59f7c4cfdbd67851f",
                "name": "05",
                "number": 5
            },
            "set": {
                "_id": "666dc6c49f7c4cfdbd678472",
                "name": "2024 PACE NSC",
                "year": 2024,
                "standard": true
            }
        },
        {
            "_id": "64d17df3ce0dacc4ef84ba2b",
            "question": "<b>A composer with this surname turned tunes such as “Clementine” into Five Folksongs in Counterpoint for string quartet. An Alex Ross New Yorker article led G. Schirmer to buy the catalog of a composer with this surname in 2018. A Juilliard production of Falstaff inspired Virgil Thomson to cast a singer with this surname in Four Saints in Three Acts. Several nods to Tchaikovsky occur in the first of two violin concerti by a composer with this surname, which the Philadelphia Orchestra recorded in 2023 with (*)</b> Randall Goosby. A singer with this surname made her name co-starring with William Warfield in Porgy and Bess. In 2009, manuscripts by a composer with this surname were found in an abandoned Illinois house. A singer with this surname earned renown in Verdi’s Aida as the Met’s first Black prima donna. For 10 points, a soprano named Leontyne shares what last name with a pioneering Black female composer named Florence?",
            "answer": "<b><u>Price</u></b> [accept Florence <b><u>Price</u></b>, Florence Beatrice <b><u>Price</u></b>, or Florence Beatrice <b><u>Smith</u></b>; accept Leontyne <b><u>Price</u></b> or Mary Violet Leontyne <b><u>Price</u></b>]",
            "category": "Fine Arts",
            "subcategory": "Auditory Fine Arts",
            "packet": {
                "_id": "64d17df3ce0dacc4ef84ba23",
                "name": "07 - Kasiński et al, Marvin et al",
                "number": 7
            },
            "set": {
                "_id": "64d17df3ce0dacc4ef84b92c",
                "name": "2023 Chicago Open",
                "year": 2023,
                "standard": true
            },
            "createdAt": "2023-08-07T23:27:47.699Z",
            "updatedAt": "2023-08-16T22:25:00.809Z",
            "difficulty": 10,
            "number": 8,
            "answer_sanitized": "Price [accept Florence Price, Florence Beatrice Price, or Florence Beatrice Smith; accept Leontyne Price or Mary Violet Leontyne Price]",
            "question_sanitized": "A composer with this surname turned tunes such as \"Clementine\" into Five Folksongs in Counterpoint for string quartet. An Alex Ross New Yorker article led G. Schirmer to buy the catalog of a composer with this surname in 2018. A Juilliard production of Falstaff inspired Virgil Thomson to cast a singer with this surname in Four Saints in Three Acts. Several nods to Tchaikovsky occur in the first of two violin concerti by a composer with this surname, which the Philadelphia Orchestra recorded in 2023 with (*) Randall Goosby. A singer with this surname made her name co-starring with William Warfield in Porgy and Bess. In 2009, manuscripts by a composer with this surname were found in an abandoned Illinois house. A singer with this surname earned renown in Verdi's Aida as the Met's first Black prima donna. For 10 points, a soprano named Leontyne shares what last name with a pioneering Black female composer named Florence?"
        },
        {
            "_id": "663806e8a0924256318aca87",
            "question": "<b>The Patawomeck tribe helped Samuel Argall kidnap this woman; during her captivity, she was baptized and a possible husband, the chief Kocoum, was killed. After taking the name Rebecca, she was introduced to King James. She prevented her father, (*) </b> Powhatan, from killing an English settler by throwing herself over his body. For 10 points, name this Native American, the wife of John Rolfe, who assisted John Smith’s Jamestown colony.",
            "question_sanitized": "The Patawomeck tribe helped Samuel Argall kidnap this woman; during her captivity, she was baptized and a possible husband, the chief Kocoum, was killed. After taking the name Rebecca, she was introduced to King James. She prevented her father, (*) Powhatan, from killing an English settler by throwing herself over his body. For 10 points, name this Native American, the wife of John Rolfe, who assisted John Smith's Jamestown colony.",
            "answer": "<b><u>Pocahontas</u></b> (accept: <b><u>Matoaka</u></b>; accept <b><u>R</u></b>ebecca <b><u>Rolfe</u></b>)",
            "answer_sanitized": "Pocahontas (accept: Matoaka; accept Rebecca Rolfe)",
            "updatedAt": "2024-05-05T22:23:36.497Z",
            "category": "History",
            "subcategory": "American History",
            "number": 19,
            "createdAt": "2024-05-05T22:23:36.497Z",
            "difficulty": 2,
            "packet": {
                "_id": "663806e8a0924256318aca74",
                "name": "06",
                "number": 6
            },
            "set": {
                "_id": "663806e7a0924256318ac9a6",
                "name": "2013 SCOP Novice 4",
                "year": 2013,
                "standard": true
            }
        },
        {
            "_id": "63e3f13e1843aa5913201894",
            "question": "<b>The speaker describes “my forces raz’d, thy banners rais’d within” in a poem asking this woman “whence doth this new assault arise, a conquer’d, yielden, ransack’d heart to win?” In a troubling poem, the speaker concludes: “For Grammar sayes… That in one speech two Negatives affirm” to rationalize this woman’s repeated rejections. She repeats “No, no, no, no, my dear, let be” in each stanza of the even more rapey “Fourth Song.” Attempting to write love poems to her, the speaker describes (*)</b> “biting my truant pen, beating myself for spite” until his Muse says “Fool… look in thy heart, and write!” Lady Penelope Devereux, who as a child was betrothed to the poet, was the basis for this woman, who is honored by a sequence whose thirty first poem begins with the line: “With how sad steps, Oh Moon, thou climb’st the skies.” For 10 points, name this woman who in a Philip Sidney sequence captivates Astrophil.",
            "answer": "<b><u>Stella</u></b>",
            "category": "Literature",
            "packet": {
                "_id": "63e3f13e1843aa5913201885",
                "name": "1",
                "number": 1
            },
            "set": {
                "_id": "63e3f13e1843aa5913201884",
                "name": "2017 It's Lit",
                "year": 2017,
                "standard": true
            },
            "createdAt": "2023-02-08T19:00:14.315Z",
            "updatedAt": "2023-04-09T06:00:05.573Z",
            "difficulty": 10,
            "alternate_subcategory": "Poetry",
            "subcategory": "British Literature",
            "number": 15,
            "answer_sanitized": "Stella",
            "question_sanitized": "The speaker describes \"my forces raz'd, thy banners rais'd within\" in a poem asking this woman \"whence doth this new assault arise, a conquer'd, yielden, ransack'd heart to win?\" In a troubling poem, the speaker concludes: \"For Grammar sayes... That in one speech two Negatives affirm\" to rationalize this woman's repeated rejections. She repeats \"No, no, no, no, my dear, let be\" in each stanza of the even more rapey \"Fourth Song.\" Attempting to write love poems to her, the speaker describes (*) \"biting my truant pen, beating myself for spite\" until his Muse says \"Fool... look in thy heart, and write!\" Lady Penelope Devereux, who as a child was betrothed to the poet, was the basis for this woman, who is honored by a sequence whose thirty first poem begins with the line: \"With how sad steps, Oh Moon, thou climb'st the skies.\" For 10 points, name this woman who in a Philip Sidney sequence captivates Astrophil."
        }
    ]

  res.header('Access-Control-Allow-Origin', '*');
  res.json({ tossups });
});

export default router;
