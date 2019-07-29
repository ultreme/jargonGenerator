<script>

/*
*  const jargonWords:
** array that contain all jargonWords
** each jargonWord is an array dimension 2
** [0] = the word strictly speaking
** [1] = the gender of the word ("m" for male, "F" for Female)
*/
const jargonWords = [
	["supoton", "m"],
	["V.A.C.", "m"],
	["2P2C", "m"],
	["striollet", "m"],
	["V.P.A.C", "m"],
	["azerty", "m"],
	["CodEv1", "m"],
	["arbaletrier", "m"],
	["échantignolle", "F"],
	["poinçon", "m"],
	["contre-fiche", "F"],
	["entrait", "m"],
	["liteau", "m"],
	["voligeage", "m"],
	["panne sablière", "F"],
	["chevron", "m"],
	["panne faîtière", "F"],
	["lien de faîtage", "m"],
	["capitalisation", "F"],
	["usufruit", "m"],
	["fond de garantie", "m"],
	["compensé légataire", "m"],
	["I.P.", "F"],
	["spéculé", "m"],
	["maturité", "F"],
	["nantissement", "m"],
	["spoofeur", "m"],
	["carabinoton", "m"],
	["rebibotteur", "m"],
	["jumelage", "m"],
	["certifiant", "m"],
	["ratifiant de type 3", "m"],
	["béchique", "F"],
	["abattement", "m"],
	["concurrence de l'actif net", "F"],
	["acte sous sein", ""],
	["préciput", "F"],
	["leg", "m"],
	["émolument", "m"],
	["réservatant", "m"],
	["indivision", "F"],
	["libertalité", "F"],
	["mandat", "m"],
	["S.C.I", "F"],
	["testateur", "m"],
	["testatrice", "F"],
	["testafesse", "F"],
	["acrotère", "m"],
	["aérotherme", "m"],
	["agrégat", "m"],
	["aissellier", "m"],
	["arêtier", "m"],
	["auto-porteur", "m"],
	["bardage", "m"],
	["bastaing", "m"],
	["cellularité", "F"],
	["boisseau", "m"],
	["cadastre", "m"],
	["calorifuge", "m"],
	["chaînage", "F"],
	["chape", "F"],
	["chattière", "F"],
	["chéneau", "m"],
	["coéfficient", "m"],
	["facteur K", "m"],
	["contreventement", "m"],
	["cuvelage", "m"],
	["échiffre", "m"],
	["flocage", "m"],
	["garde-corps", "m"],
	["huisserie", "F"],
	["laitance", "F"],
	["listel", "F"],
	["pergola", "F"],
	["substrat", "m"],
	["vide sanitaire", "m"],
	["volige", "F"],
	["I.P.P.B", "F"],
	["surbibolette", "F"]
];

/*
* const jargonAdjs:
** array that contains all jargonAdjectives
** each jargonAdjective is an array dimension 2
** [0] = the male accordance of the adjective
** [1] = the female accordance of the adjecitve
*/
const jargonAdjs = [
	["dorsal", "dorsale"],
	["latéral", "latérale"],
	["ventral", "ventrale"],
	["mittoyen", "mittoyenne"],
	["rebibotté", "rebibottée"],
	["journalisé", "journalisée"],
	["contre-archivé", "contre-archivée"],
	["décentralisé", "décentralisée"],
	["erratique", "erratique"],
	["spoofé", "spoofée"],
	["médian", "médiane"],
	["médial", "médiale"],
	["rétracté", "rétractée"],
	["rembobiné", "rembobinée"],
	["rafistolé", "rafistolée"],
	["rajolité", "rajolitée"],
	["contrepris", "contreprise"],
	["racognivé", "racognivée"],
	["commité", "commitée"],
	["checké", "checkée"],
	["ipsilatéral", "ipsilatérale"],
	["controlatéral", "controlatérale"],
	["bâtimentaire", "bâtimentaire"],
	["dithyrambique", "dithyrambique"],
	["inexpugnable", "inexpugnable"],
	["inexorable", "inexorable"],
	["Amphigourique", "Amphigourique"],
	["Diacritique", "Diacritique"],
	["Hypocoristique", "Hypocoristique"],
	["nosocomial", "nosocomiale"],
	["paroxystique", "paroxystique"],
	["putatif", "putative"],
	["vernaculaire", "vernaculaire"],
	["ventriculaire", "ventriculaire"],
	["versatile", "versatile"],
	["biseauté", "biseautée"],
	["bozonné", "bozonnée"],
	["adamantin", "adamantine"],
	["onirique", "onirique"],
	["parèdre", "parèdre"],
	["vespéral", "vespérale"],
	["tautologique", "tautologique"],
	["asthénique", "asthénique"],
	["neurasthénique", "neurasthénique"],
	["septiscémique", "septiscémique"],
	["hypovolémique", "hypovolémique"],
	["hypervolémique", "hypervolémique"],
	["hypobarocapnémique", "hypobarocapnémique"],
	["hyperbarocapnémique", "hyperbarocapnémique"],
	["supra-conductile", "supra-conductile"],
	["ultra-terminal", "ultra-terminale"],
	["supra-conductal", "supra-conductale"]
];

/*
** jargonVerbs
** array that contains all jargonVerbs
** each jargonVerb is a verb of the 1st group,
** finished by an "e"
** in order to be accorded, like "rebibotté" or "rebibotter" or "tu rebibottes"
*/
const jargonVerbs = [
	"rebibotte",
	"rabiboche",
	"décercle",
	"recentralise",
	"réactive",
	"joinulle",
	"remplume",
	"reconditionne",
	"reconfigure",
	"repapapapare",
	"aurore",
	"reberbitoule",
	"carbatrifouille",
	"déperfecte",
	"raccorde",
	"décale",
	"recale",
	"optimise",
	"raccole",
	"rassemble",
	"assemble",
	"désassemble",
	"corrobore",
	"adjoncte",
	"sous-traite",
	"décombine",
	"recombine",
	"renforce",
	"décolle",
	"recolle",
	"disjoncte",
	"trifouille",
	"transducte",
	"transcolle",
	"fusionne",
	"splashe",
	"pilote",
	"pinge",
	"octe",
	"rote",
	"mappe",
	"merge",
	"forke",
	"kille",
	"indique",
	"hacke",
	"fonde",
	"crashe",
	"compile",
	"code",
	"trashe",
	"bugge",
	"freeze",
];


/*
** rand(): function that returns a random int that is in [pMin , pMax].
*/
function rand(pMin, pMax) {
		return Math.floor(((Math.random() * (pMax-pMin+1)) + pMin));		
}

/*
** isVowel(): function that returns true if  pletter is a vowel, false if it is not
*/
function isVowel(pLetter) {
	let vowels = ['a', 'e', 'é', 'è', 'i', 'o', 'u', 'y'];
	return (vowels.includes(pLetter.toLowerCase()))
}

/*
** pickRantomElementInArray(): pick a random element in pArray and returns it
*/
function pickRandomElementInArray(pArray) {
	return pArray[Math.floor(Math.random() * pArray.length)];
}

/*
** pickElementInArray(): pick a random element in a subArray of pArray and returns it
** pFilter: element to use to generate the subArray
*/
function pickElementInArray(pArray, pFilter) {
	return pickRandomElementInArray(pArray.filter((el) => (el[1] == pFilter)));
}

/*
** pickJargonWordLE(): pick a jargonWord that can be used with the pronoun "le"
*/
function pickJargonWordLE() {
	
	let words = jargonWords.filter((jargonWord) => (!isVowel(jargonWord[0].charAt(0))));
	return (pickElementInArray(words, "m")[0]);
}

/*
** pickJargonWordLA(): pick a word that can be used with the pronoun "la"
*/
function pickJargonWordLA() {
	let words = jargonWords.filter((jargonWord) => (!isVowel(jargonWord[0].charAt(0))));
	return (pickElementInArray(words, "F")[0]);
}

/*
** pickJargonWordL(): pick a jargonWord that can be used with the pronoun "l'"
*/
function pickJargonWordL() {
	let words = jargonWords.filter((jargonWord) => (isVowel(jargonWord[0].charAt(0))));
	return (pickRandomElementInArray(words)[0]);	
}

/*
** pickJargonWord(): pick a jargonWord that can be used with the pronon pPron
*/
function pickJargonWord(pPron) {
	switch (pPron) {
		case "le":
			return pickJargonWordLE();
			break;
		case "la":
			return pickJargonWordLA()
			break;
		case "l'":
			return pickJargonWordL();
			break;
		default:
			return pickRandomElementInArray(jargonWords);	
	}
}

/*
** pickJargonAdj(): pick a jargonAdjective in accordance with pGender
*/
function pickJargonAdj(pGender) {
	let jargonAdj = pickRandomElementInArray(jargonAdjs);
	if (pGender == "m")
		return jargonAdj[0];

	return jargonAdj[1];
}

/*
** pickVerb(): pick a jargonVerb and modifies it to conjugate in the correct way
*/
function pickJargonVerb(pSpec) {
	let retVerb = pickRandomElementInArray(jargonVerbs);
	switch (pSpec) {
		case "past":
			retVerb = retVerb.replace(/e$/, "é");
			break;
		case "inf":
			retVerb += "r";
			break;
		case "tu":
			retVerb += "s"
	}

	return retVerb;
}

/*
** addRandomElement(): parses a string str and replace each balise founded 
** by a word generated by generator(argGenerator) 
*/
function addRandomElement(str, balise, generator, argGenerator) {
	while (str.includes(balise)	) {
		str = str.replace(balise, generator(argGenerator));
	}

	return (str);
}

/*
** genScene(): takes a pattern and replace each :balise: by a picked word/verb/adjective
*/
function genScene(pattern) {
	let retScene = pattern;

	retScene = addRandomElement(retScene, ":WORD_LE:", pickJargonWordLE);
	retScene = addRandomElement(retScene, ":WORD_LA:", pickJargonWordLA);
	retScene = addRandomElement(retScene, ":WORD_L:", pickJargonWordL);
	retScene = addRandomElement(retScene, ":ADJ_M:", pickJargonAdj, "m");
	retScene = addRandomElement(retScene, ":ADJ_F:", pickJargonAdj, "F");
	retScene = addRandomElement(retScene, ":VERB:", pickJargonVerb);
	retScene = addRandomElement(retScene, ":VERB_PAST:", pickJargonVerb, "past");
	retScene = addRandomElement(retScene, ":VERB_INF:", pickJargonVerb, "inf");
	retScene = addRandomElement(retScene, ":VERB_TU:", pickJargonVerb, "tu");

	return (retScene);
}


/*
** PATTERN EXAMPLES ! LET'S PLAY !
*/
const pattern1 = "Si vous voulez, les :WORD_LE:s se catégorisent de 2 sortes:<br />- les :WORD_LE:s qui se calibrent en :ADJ_M:<br />- les :WORD_LA:s qui se calibrent par :ADJ_F:s";
const pattern2 = "On doit absolument :VERB_INF: le :WORD_LE: ASAP ! Autrement vous pouvez être sûr que le groupe :WORD_LE: va vous péter à la figure !"

randomNb = rand(2, 10);
var pattern3 = "Pardon de vous reprendre, mais les choses ne sont pas aussi simples. Voyez-vous, quand vous :VERB:z les :WORD_LE:s, cela implique " + randomNb + " choses: ";
for (let i = 0; i < randomNb; i++) {
	pattern3 += "<br />- Le :WORD_LE: du :WORD_LE: :VERB: le :WORD_LE: du :WORD_LE:";
}

const pattern4 = "je :VERB:, tu :VERB_TU: et il faut :VERB_INF: pour que tout soit :VERB_PAST: !";
const pattern5 = "J'aime bien :VERB_INF: les :WORD_LE:s !";
const pattern6 = "Tu peux me passer le :WORD_LE: steup ? <br />Tu veux pas plutôt un :WORD_LE: pour :VERB_INF: le :WORD_LE: ? C'est quand même plus :ADJ_M:.. <br />T'as raison Johnny ! Bon sang ce que tu es doué en :WORD_LA: !";
const pattern7 = "Nan mais comment en " + rand(2000, 2019) + " on peut encore :VERB_INF: des :WORD_LE: en :ADJ_M: ? C'est n'importe quoi, c'est évident que tu :VERB_TU: les :WORD_LE:s par :WORD_LE: :ADJ_M:s quoi nan mais genre what ? Mais genre allô quoi enfin genre 'fin genre whaattt ???";

randomNb = rand(2, 10);
var pattern8 = "Nan mais je t'explique, le :WORD_LE: ça se setup en " + randomNb + " étapes:<br />";
for (let i = 0; i < randomNb; i++) {
	pattern8 += (i + 1) + ") tu :VERB_TU: le :WORD_LE: en :ADJ_M:<br />";
}

pattern8 += "<br />Si le truc explose en cours de route, c'est que t'as oublié de :VERB_INF:.";

const pattern9 = "Il y a 2 sortes de :WORD_LE:<br />- Les cools<br />- Les chiants<br />";

randomNb = rand(2, 30);
var pattern10 = "Il y a très exactement " + randomNb + " catégories de :WORD_LE::<br />";
for (let i = 0; i < randomNb; i++) {
	pattern10 += "- Ceux qui sont :ADJ_M: <br />";
}

randomNb = rand(2, 30);
var pattern11 = "il y a très exactement " + randomNb + " catégories de :WORD_LA::<br />";
for (let i = 0; i < randomNb; i++) {
	pattern11 += "- Celles qui sont :ADJ_F:s <br />";
}

const pattern12 = "Moi j'aime bien :VERB_INF: des :WORD_LA:s. Je pourrais faire ça toute la journée je kiffe j'suis comme ça."


window.document.write("<br />--------<br />" +
						genScene(pattern1) +
						"<br />--------<br />" + 
						genScene(pattern2) + 
						"<br />--------<br />" + 
						genScene(pattern3) + 
						"<br />--------<br />" + 
						genScene(pattern4) + 
						"<br />--------<br />" + 
						genScene(pattern5) +
						"<br />--------<br />" + 
						genScene(pattern6) + 
						"<br />--------<br />" + 
						genScene(pattern7) + 
						"<br />--------<br />" + 
						genScene(pattern8) + 
						"<br />--------<br />" + 
						genScene(pattern9) + 
						"<br />--------<br />" + 
						genScene(pattern10) + 
						"<br />--------<br />" + 
						genScene(pattern11) + 
						"<br />--------<br />" + 
						genScene(pattern12) + 
						"<br />--------<br />");
</script>
