// ── Article Data ──
// This manifest maps slugs to metadata. Content is loaded from markdown files.
const ARTICLES = [
  { slug: "contested-territory", title: "Contested territory", date: "2015-06-08", categories: ["Environment", "Globalization", "Human Rights"], description: "New Internationalist, December 2014.", image: "images/anti-nuke-demo.png", featured: false },
  { slug: "authors-note-scarred", title: "Author’s Note for the book ‘Scarred: Experiments with Violence in Gujarat’", date: "2014-05-16", categories: ["Gujarat Violence", "Human Rights"], description: "A compartment of the Sabarmati Express from Varanasi to Ahmedabad is set on fire at 8.05 a.m. after a fight at the Godhra station platform between Hindu activists on the train and a Muslim tea vend...", image: "images/Scarred-cover.jpg", featured: true },
  { slug: "teesta-dam", title: "Teesta’s Tears", date: "2014-05-16", categories: ["Environment", "Human Rights"], description: "Students and young people are at the forefront of a protest against hydel projects that are being planned in Sikkim.", image: "images/sikkim-dams-1.jpg", featured: false },
  { slug: "what-clayoquot-sound-faces-now", title: "What Clayoquot Sound Faces Now", date: "2013-10-17", categories: ["Environment", "Human Rights"], description: "A historic opportunity to protect BC old growth forest, through new partnerships.", image: "images/clayoquot2.jpg", featured: true },
  { slug: "gone-with-the-waves", title: "Gone with the Waves", date: "2013-10-16", categories: ["Climate Change", "Environment", "Human Rights"], description: "Rapid sea invasion along the Gujarat coast is forcing families of fishermen to abandon the sea and their homes.", image: "images/danti1.jpg", featured: true },
  { slug: "the-holes-in-our-chappals", title: "The Holes in our Chappals", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "Farmers are killing themselves in Gujarat.", image: "images/guj-farmers-suicides.jpg", featured: true },
  { slug: "cotton-aflame", title: "Cotton Aflame", date: "2007-06-30", categories: ["Farm Crisis"], description: "The cotton harvest is ready. But the state hasn’t yet opened most procurement centres. At the few that are functioning, farmers have been lining up for days. The frustration has led to violence in ...", image: "images/firing+on+farmers+1+DSC_1303.JPG", featured: false },
  { slug: "vines-of-debt", title: "Vines of Debt", date: "2007-06-30", categories: ["Farm Crisis"], description: "Onion or grape farmers of Nashik in north Maharashtra have very little to choose to escape debt, and now death.", image: "images/Mah+farm+crisis-+nashik+2.JPG", featured: false },
  { slug: "harvest-of-death", title: "Harvest of death", date: "2007-06-30", categories: ["Farm Crisis"], description: "Everyday in Vidarbh, there are three suicides reported. Farmers are living only because they are not dying.", image: "images/Mah+farm+crisis-+vidarbh+map.jpg", featured: false },
  { slug: "bt-rice-trials-uprooted", title: "Bt rice trials uprooted", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "By uprooting Bt rice trials in Tamil Nadu, farm activists and Greenpeace have stirred up the debate on GM food testing. And they have support from unlikely quarters – rice exporters.", image: "images/Bt+rice+trials+2.jpg", featured: false },
  { slug: "back-to-the-basics", title: "Back to the Basics", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "Organic farming is not the only solution to the problems contributing to the farm crisis. However, it is the only one within the farmer’s control.", image: "images/2006-07-16+organic+farmers.JPG", featured: false },
  { slug: "weddings-in-the-time-of-suicide", title: "Weddings in the time of suicide", date: "2007-06-30", categories: ["Farm Crisis"], description: "On the mass weddings in Vidarbha, a phenomenon that has grown due to the agrarian crisis.", image: "images/2006-07-01+weddings+in+the+time+of+suicide+1.jpg", featured: false },
  { slug: "villages-for-sale-in-vidarbh", title: "Villages for Sale in Vidarbh", date: "2007-06-30", categories: ["Farm Crisis"], description: "To draw attention to their desperation, many villages in the suicide-ridden Vidharbh region have declared that their land and kidneys are up for sale.", image: "images/vidarbh1.jpg", featured: false },
  { slug: "biotech-brinjal", title: "Biotech Brinjal", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "Union Agriculture Minister Sharad Pawar had a rather unusual bunch of visitors last week – Greenpeace protesters dressed up as sheep and cattle, who camped outside his office. The “animals” were as...", image: "images/2006-06-17-Bt-Brinjal-1.jpg", featured: false },
  { slug: "vidarbha-in-flames", title: "Vidarbha in Flames", date: "2007-03-31", categories: ["Farm Crisis"], description: "A local legislator attempted suicide in the legislative assembly, frustrated by all other methods to alert the state to the farmers suicides", image: "images/2005-12-17+vidarbha+suicides+pic.jpg", featured: false },
  { slug: "frog-weddings-and-farmers-funerals", title: "Frog Weddings and Farmers’ Funerals", date: "2007-03-31", categories: ["Farm Crisis"], description: "Bad rains, family problems, alcoholism, gambling – the government continues to find different reasons for the farmers’ suicides rather than address the crisis. Everyday, a few farmers kill themselv...", image: "images/2004-07-31+farmers+suicides+pic.jpg", featured: false },
  { slug: "sugar-daddies", title: "Sugar Daddies", date: "2007-03-31", categories: ["Farm Crisis", "Globalization"], description: "Sugarcane has fuelled the corruption of political power in some states of India – the world’s largest sugar producer. But, as Dionne Bunsha reveals, it’s the small farmers who pay the price.", image: "images/sugarcane1.jpg", featured: false },
  { slug: "the-hutatma-model", title: "The Hutatma Model", date: "2007-03-31", categories: ["Farm Crisis"], description: "Corruption, mismanagement, political fiefdoms – these are the words usually associated with sugar co-operatives in Maharashtra. Here’s one that’s different.", image: "images/2003-09-13+hutatma+pic+-+weekly+meeting+of+the+board+of+directors.JPG", featured: false },
  { slug: "machines-that-mow-down-migrants", title: "Machines that Mow down Migrants", date: "2007-03-31", categories: ["Farm Crisis"], description: "The arrival of imported cane-harvesting machines in sugarcane fields may push migrant cane cutters deeper in bondage.", image: "images/2002-02-02+sugarcane+pic+5.jpg", featured: false },
  { slug: "drowning-cottons-lifebuoy", title: "Drowning Cotton’s Lifebuoy", date: "2007-03-31", categories: ["Farm Crisis"], description: "The Maharashtra government has refused to pay the full cotton procurement price immediately. This has left farmers at the mercy of trader-moneylenders. In a region where farmers suicides are freque...", image: "images/2002-01-19+cotton+proc+2.jpg", featured: false },
  { slug: "a-can-of-boll-worms", title: "A can of boll worms", date: "2007-02-23", categories: ["Farm Crisis"], description: "Many farmers in Gujarat didn’t know they were sold pirated Bt cotton seeds. Now, the government threatens to burn their crop.", image: "images/2001-11-24+Bt+Cotton.jpg", featured: false },
  { slug: "trade-a-free-for-all", title: "Trade: A Free for all?", date: "2007-02-23", categories: ["Farm Crisis"], description: "While farmers in developed countries, constituting less than three per cent of the population, enjoy huge subsidies, India actually taxes its farmers. With substantive cuts in subsidies for power a...", featured: false },
  { slug: "wheres-the-techno-fix-for-farmers", title: "Where’s the techno fix for farmers?", date: "2007-02-23", categories: ["Farm Crisis"], description: "Litres of pesticide did not save his crop, but a few gulps of the lethal chemical ended his life.", image: "images/1998+Bitter+Harvest++pic+4.JPG", featured: false },
  { slug: "drowning-in-debt", title: "Drowning in Debt", date: "2007-02-23", categories: ["Farm Crisis"], description: "Sheikh Bhura Sheikh Ramzan has set up his home under a tree this monsoon. He sold his house to pay his debts. “When it rains heavily, we sleep in the village school,” says Sheikh, a resident of Dha...", image: "images/1998+Bitter+Harvest+3+pic.jpg", featured: false },
  { slug: "taking-on-the-lion-of-gujarat", title: "Taking on The Lion of Gujarat", date: "2006-11-22", categories: ["Gujarat Violence"], description: "The wife of slain Member of Parliament Ahsan Jafri files a complaint against Narendra Modi and other top leaders for the pogrom of 2002.", image: "images/zakia+jafri.JPG", featured: false },
  { slug: "festival-of-fear", title: "Festival of Fear", date: "2006-11-22", categories: ["Gujarat Violence"], description: "After all the hype and anti-Christian propaganda, the Shabari Kumbh Mela may have been a damp squib, with more outsiders ferried here for a day-out while fearful locals stayed home.  But is this th...", featured: false },
  { slug: "hindus-awake-christians-run", title: "Hindus awake, Christians run", date: "2006-11-22", categories: ["Gujarat Violence"], description: "Traditionally, India has four Kumbh Melas. The Sangh has just created a fifth in Dangs with the sole aim of scaring off Christian missionaries in the region.", featured: false },
  { slug: "digging-up-the-dead", title: "Digging up the Dead", date: "2006-11-19", categories: ["Gujarat Violence"], description: "Looking for a dead relative? Get your shovel. Uncover a mass grave. You may expose the cops’ cover-up —but you will be arrested.", featured: false },
  { slug: "still-a-burning-question", title: "Still A Burning Question", date: "2006-11-19", categories: ["Gujarat Violence"], description: "Rejecting the police’s conspiracy theory, the Justice Banerjee Committee has called the Godhra tragedy “an accident”. But will it absolve an entire community that has been branded as terrorists?", featured: false },
  { slug: "zahiras-third-somersault", title: "Zahira’s third somersault", date: "2006-11-18", categories: ["Gujarat Violence"], description: "For the second time Zahira Sheikh, prime witness of the Best Bakery case, has turned hostile. And this, after appealing for a retrial. What is going on here?", featured: false },
  { slug: "let-the-worms-out", title: "Let the worms out", date: "2006-11-18", categories: ["Gujarat Violence"], description: "The Supreme Court directive to review more than 2,000 “true but undetected” cases in Gujarat is bound to expose police complicity.", featured: false },
  { slug: "pirana-in-chains", title: "Pirana in chains", date: "2006-11-18", categories: ["Gujarat Violence"], description: "A Gujarat village that follows a Sufi-inspired faith, a blend of Islam and Hinduism, is in danger of being swamped by Hindu fundamentalism.", featured: false },
  { slug: "farmers-trip-modis-power-trip", title: "Farmers trip Modi’s power trip", date: "2006-11-18", categories: ["Gujarat Violence"], description: "It isn’t Muslim riot victims but the ryots of Gujarat who are the first vocal protestors against  Narendra Modi and his policies. Puncturing the hype surrounding the chief minister’s ‘achievements’...", featured: false },
  { slug: "the-dark-side-of-charity", title: "The dark side of charity", date: "2006-11-18", categories: ["Gujarat Violence"], description: "Lord Patel wrote a cheque for the earthquake victims but was horrified when he found out that his money was actually going to the RSS. Charity is the best revenue stream for the Hindu right.", featured: false },
  { slug: "love-in-the-time-of-hate", title: "Love in the time of hate", date: "2006-11-18", categories: ["Gujarat Violence"], description: "If a Hindu girl dares choose a groom outside the religion, she risks being kidnapped by the Bajrang Dal.", featured: false },
  { slug: "corpses-haunt-the-cops", title: "Corpses haunt the cops", date: "2006-11-18", categories: ["Gujarat Violence"], description: "Bilkis  was gang raped and left for dead. The police buried the evidence and shut the case. But the bodies  of the 14 others who died in the attack  were exhumed, exposing the police complicity in ...", featured: false },
  { slug: "justice-available-outside", title: "Justice: available outside", date: "2006-11-18", categories: ["Gujarat Violence"], description: "The blatant human rights abuses in Gujarat has prompted the National Human Rights Commission to petition the Supreme Court to move the cases outside the state.", featured: false },
  { slug: "pols-apart", title: "Pols apart", date: "2006-11-18", categories: ["Gujarat Violence"], description: "In Ahmedabad, a patchwork of ghettos, even real estate is dictated by religion.", featured: false },
  { slug: "the-truth-behind-zahiras-lies", title: "The truth behind Zahira’s lies", date: "2006-11-18", categories: ["Gujarat Violence"], description: "Yes, Zahira lied. But can you blame her when the local MLA was threatening to kill her family? With no protection, witnesses have to choose between guarding the truth or their lives.", featured: false },
  { slug: "tuition-for-witnesses", title: "Tuition for Witnesses", date: "2006-11-18", categories: ["Gujarat Violence"], description: "The police have been making the rounds of riot victims’ home, and telling them to put in  a good word for them before the Nanavati-Shah Commission.", featured: false },
  { slug: "at-a-hindutva-factory", title: "At a Hindutva factory", date: "2006-11-18", categories: ["Gujarat Violence"], description: "Rifle shooting, lathi combat and how to fight anti-nationals. All part of the Vishwa Hindu Parishad’s training camp at Patan.  An account of a visit to a training camp run by the Vishwa Hindu Paris...", featured: true },
  { slug: "the-midnight-knock", title: "The Midnight Knock", date: "2006-11-18", categories: ["Gujarat Violence"], description: "BJP leader Haren Pandya has been assassinated. It’s the ISI. Let’s raid the Muslim bastis.", featured: false },
  { slug: "poking-through-the-embers-of-godhra", title: "Poking through the embers of Godhra", date: "2006-11-18", categories: ["Gujarat Violence"], description: "One year after the Sabarmati Express burning in Godhra, the investigation throws up more questions than answers.", featured: false },
  { slug: "the-mystery-of-the-vanishing-evidence", title: "The Mystery of the Vanishing Evidence", date: "2006-11-18", categories: ["Gujarat Violence"], description: "The Gujarat police have left no stone unturned to ensure that the rapists and their instigators escape justice. More than half the 4,252 riot cases have been summarily closed.", featured: false },
  { slug: "a-year-in-the-land-of-prejudice", title: "A Year in the Land of Prejudice", date: "2006-11-17", categories: ["Gujarat Violence"], description: "On February 27, 2002, the Sabarmati Express was torched in Godhra killing 59 people. That horrific tragedy was used by Gujarat’s Sangh Parivar to unleash widespread violence. Hindu extremist forces...", featured: false },
  { slug: "why-gujarat-voted-saffron", title: "Why Gujarat voted saffron", date: "2006-11-17", categories: ["Gujarat Violence"], description: "Narendra Modi  has cleverly pulled off the Goebbelesian trick of projecting himself not as instigator of violence, but protector of Hindus.", featured: false },
  { slug: "voting-to-stay-alive", title: "Voting to stay alive", date: "2006-11-17", categories: ["Gujarat Violence"], description: "The refugees of Gujarat woke up early. They huddled into trucks. And went back home: to vote.", featured: false },
  { slug: "the-only-safe-bearded-man-in-gujarat", title: "The only safe bearded man in Gujarat", date: "2006-11-17", categories: ["Gujarat Violence"], description: "A profile of Gujarat chief minister Narendra Modi", featured: false },
  { slug: "heil-hindutva", title: "Heil Hindutva!", date: "2006-11-17", categories: ["Gujarat Violence"], description: "After dividing the state, it’s time to rule. Narendra Modi and his men are swept in on a post-Godhra vote.", featured: false },
  { slug: "their-only-voice-is-their-vote", title: "Their only voice is their vote", date: "2006-11-17", categories: ["Gujarat Violence"], description: "The Muslims may have been broken and silenced. But they still have the most powerful democratic weapon—the vote. And they are determined to wield it.", featured: false },
  { slug: "vote-for-phobia", title: "Vote for phobia", date: "2006-11-17", categories: ["Gujarat Violence"], description: "In Gujarat, fear is not a four-letter word. In fact, it’s the centrepiece of the BJP’s election campaign, effectively obscuring the real issues.", featured: false },
  { slug: "garv-se-kaho", title: "Garv se kaho…", date: "2006-11-17", categories: ["Gujarat Violence"], description: "Narendra Modi wants Gujarat to be proud of all that is Gujarati. Does that include the  recession, unemployment and drought? Here are some of the real problems silenced by the political rhetoric", featured: false },
  { slug: "after-the-storm", title: "After the Storm", date: "2006-11-17", categories: ["Gujarat Violence"], description: "Gujarat’s communal violence claimed more than 1,000 lives and left around 150,000 people homeless. Eight months after, Dionne Bunsha takes a look at how different people are dealing with the after-...", featured: false },
  { slug: "the-gujarat-gaali-yatra", title: "The Gujarat Gaali Yatra", date: "2006-11-17", categories: ["Gujarat Violence"], description: "Gujarat Chief Minister Narendra Modi rides on, spewing venom all the way. But will his game plan, with an eye on the elections, work?", featured: false },
  { slug: "akshardham-ups-the-ante", title: "Akshardham ups the ante", date: "2006-11-17", categories: ["Gujarat Violence"], description: "Gujarat Chief Minister Narendra Modi sets off on his `Gujarat Gaurav Yatra’. Will the Akshardham temple terrorist attack fuel his chariot?", featured: false },
  { slug: "after-the-bullets-the-ballot", title: "After the bullets, the ballot", date: "2006-10-31", categories: ["Gujarat Violence"], description: "Chief Minister Narendra Modi is a man in a hurry—to cash in on the hate at the hustings. Will it pay?", featured: false },
  { slug: "the-gujarati-press-rumour-or-news", title: "The Gujarati press: Rumour or news?", date: "2006-10-31", categories: ["Gujarat Violence"], description: "The regional press had no small role in fanning the flames. Goebbels in Gujarat?", featured: false },
  { slug: "chariots-of-fear", title: "Chariots of Fear", date: "2006-10-31", categories: ["Gujarat Violence"], description: "The Jagannath rath yatra passes without incident, but for Gujarat’s Muslims it is life on the edge, for the fifth month running.", featured: false },
  { slug: "godhra-probe-a-foregone-conclusion", title: "Godhra probe: A foregone conclusion?", date: "2006-10-31", categories: ["Gujarat Violence"], description: "Investigations into the burning of the Sabarmati Express at Godhra on February 27 seem to be directed to prove that it was a pre-planned terrorist act in line with the official script.", featured: false },
  { slug: "go-home-gujarat-is-back-to-normal", title: "Go home. Gujarat is back to normal", date: "2006-10-31", categories: ["Gujarat Violence"], description: "The government wants the camps closed. Chased away, refugees are even living under trees.", featured: false },
  { slug: "back-to-abnormal", title: "Back to Abnormal", date: "2006-10-31", categories: ["Gujarat Violence"], description: "It’s a long road back home when there’s no home to go back to. With the monsoon approaching, people may be stranded in relief camps for longer than they imagined.", featured: false },
  { slug: "refugees-bounce-back-the-cheques", title: "Refugees bounce back the cheques", date: "2006-10-31", categories: ["Gujarat Violence"], description: "Disgusted by the pittance being handed out, riot victims reject the government’s token compensation.", featured: false },
  { slug: "more-hate-more-votes", title: "More hate, more votes", date: "2006-10-31", categories: ["Gujarat Violence"], description: "Keep the Godhra Ghost alive. Keep the hate going till the elections.", featured: false },
  { slug: "free-and-unfair-elections-in-the-wild-west", title: "Free and Unfair Elections in the Wild West", date: "2006-10-31", categories: ["Gujarat Violence"], description: "Even as the attacks on the minorities continue relentlessly, the BJP government’s priority in Gujarat appears to be holding Assembly elections rather than providing relief and rehabilitation.", featured: false },
  { slug: "give-violence-a-chance", title: "Give violence a chance", date: "2006-10-31", categories: ["Gujarat Violence"], description: "The government shows no desire to put out the fires. In fact, it even appears that it wants to keep the flames burning.", featured: false },
  { slug: "clean-out-the-camps", title: "Clean out the camps", date: "2006-10-31", categories: ["Gujarat Violence"], description: "With the PM visiting, government officials have suddenly appeared in relief camps. They want to clean them up…and clear them out.", featured: false },
  { slug: "the-apostles-of-violence", title: "The apostles of violence", date: "2006-10-31", categories: ["Gujarat Violence"], description: "The violence continues in Gujarat abetted by the state. The mobs rule.", featured: false },
  { slug: "dam-lies", title: "Dam lies", date: "2006-10-28", categories: ["Environment", "Human Rights"], description: "As Narmada River dams continue to rise, so too do the protests about the homes and livelihoods disappearing under dam waters… and the government lies about those who are displaced.", image: "images/narmada.jpg", featured: false },
  { slug: "wild-ass-in-the-wild-west", title: "Wild ass in the wild west", date: "2006-10-28", categories: ["Environment"], description: "The Little Rann of Kutch is hot, dry and salty but it has a wild ass. This barren landscape is teeming with life. The Agarias also live in this desolate mudflat to make salt.", featured: false },
  { slug: "when-the-dam-had-had-enough", title: "When the dam had had enough", date: "2006-10-28", categories: ["Environment"], description: "It was like an elephant hurtling towards them, yet many of the huts on the banks of the rivers couldn’t move out of its way when the dams swelled", featured: false },
  { slug: "crocodiles-day-out", title: "Crocodile’s day out", date: "2006-10-24", categories: ["Environment"], description: "Central Gujarat went under. Was it a freak downpour or did Baroda sink under the weight of its own development?", featured: false },
  { slug: "red-carpet-for-lions", title: "Red carpet for lions, red card for people", date: "2006-10-24", categories: ["Environment", "Human Rights"], description: "Some of the Gir lions needed another home. The adivasis in Kuno forest gave up theirs on promises of a better life. But were given little more than stony land", featured: true },
  { slug: "the-lost-generation", title: "The lost generation", date: "2006-10-22", categories: ["Human Rights"], description: "Nine out of 100 tribal children die of hunger in Maharashtra. Though Adivasis live in the most resource-rich areas, they are India’s most deprived people.", featured: false },
  { slug: "pardhis-the-usual-suspects", title: "Pardhis: the usual suspects", date: "2006-10-22", categories: ["Human Rights"], description: "Despite the repeal of the Criminal Tribe Act in 1949 ‘denotified’ tribes  are still branded criminals and illegally detained by the police. Should the community apply for anticipatory bail?", featured: false },
  { slug: "dandi-in-the-time-of-globalisation", title: "Dandi in the time of globalisation", date: "2006-10-22", categories: ["Globalization"], description: "Gandhiji’s march to Dandi was the beginning of the end for the British. The 75th anniversary march was a bizarre political pilgrimage with a motley mix of foreigners, Pakistanis, old Gandhians and ...", featured: false },
  { slug: "private-water-public-thirst", title: "Private water, public thirst", date: "2006-10-22", categories: ["Globalization"], description: "Maharashtra’s first experiment in privatisation of drinking water supply has left Chandrapur high and dry", featured: false },
  { slug: "a-kingdom-too-small", title: "A kingdom too small", date: "2006-10-22", categories: ["Environment"], description: "Lions in Gir look for new territories as the sanctuary is not large enough for their population", image: "images/gir lions photo 1.jpg", featured: true },
  { slug: "contract-killing-workers", title: "Contract killing workers", date: "2006-10-22", categories: ["Mumbai"], description: "Two unemployed workers set themselves on fire outside India’s most respected industrial house in Bombay. Their tragedy mirrors the desperation of Mumbai’s working class trapped in an economy where ...", featured: false },
  { slug: "bulldozing-bombays-belly", title: "Bulldozing Bombay’s Belly", date: "2006-10-22", categories: ["Mumbai"], description: "It’s a Rs 1,600 crore street economy that employs 200,000 people. Why is the municipality bent on uprooting Mumbai’s hawkers?", featured: false },
  { slug: "hounded-by-an-image", title: "Hounded by an image : Qutubuddin Ansari", date: "2006-10-22", categories: ["People"], description: "Hounded by an image : Qutubuddin Ansari", image: "images/qutubuddin.jpg", featured: false },
  { slug: "zaheera-interview", title: "‘I want the case to be reopened’ : Zaheera", date: "2006-10-22", categories: ["People"], description: "‘I want the case to be reopened’ : Zaheera", featured: false },
  { slug: "it-aint-only-about-the-rain", title: "It ain’t only about the rain", date: "2006-10-22", categories: ["Farm Crisis"], description: "The monsoon, in Vidarbha at least, has washed away an enduring myth. “The age old notion of farmers jumping with glee when the first monsoon showers fall is now merely a delusion confined to primar...", featured: false },
  { slug: "the-cotton-farmers-nightmare", title: "The cotton farmers nightmare", date: "2006-10-22", categories: ["Farm Crisis"], description: "For weeks, Lakshman Gadwe (65) watched helplessly as his cotton crop was ravaged by pests. He could not afford to buy pesticides to salvage his crop. When he finally bought a bottle of the potent c...", featured: false },
  { slug: "if-you-want-to-stay-alive-run-to-the-graveyard", title: "If you want to stay alive, run to the graveyard", date: "2006-10-21", categories: ["Gujarat Violence"], description: "Overnight, thousands were made homeless during the Gujarat massacres. Their only refuge were dargahs, schools, and even graveyards.", featured: false },
  { slug: "blood-in-the-fields", title: "Blood in the fields", date: "2006-10-21", categories: ["Gujarat Violence"], description: "They were chased from their homes. Hacked in the fields. Thrown into wells. Rural Gujarat had never seen such widespread brutality—and all planned in cold blood..", featured: false }
];

// ── Markdown Parser (minimal, no dependencies) ──
function parseFrontMatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: text };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const m = line.match(/^(\w+):\s*"?(.+?)"?\s*$/);
    if (m) meta[m[1]] = m[2];
  });
  return { meta, content: match[2].trim() };
}

// ── Simple Markdown to HTML ──
function markdownToHtml(md) {
  let html = md
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold & italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Ensure images (standalone or linked) are in their own blocks
  // This separates captions and body text that were on the same line as images
  html = html.replace(/(<a\s[^>]*><img\s[^>]*><\/a>|<img\s[^>]*>)/g, '\n\n$1\n\n');
  html = html.replace(/\n{3,}/g, '\n\n').trim();

  // Wrap paragraphs (lines not already tagged)
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<blockquote') ||
      block.startsWith('<hr') || block.startsWith('<img')) return block;
    // Linked images should not be wrapped in <p>
    if (block.startsWith('<a') && block.includes('<img')) return block;
    // Everything else (including inline HTML like <strong>) gets wrapped in <p>
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  // Merge adjacent blockquotes
  html = html.replace(/<\/blockquote>\s*<blockquote>/g, '<br>');

  return html;
}

// ── Date Formatting ──
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ── Get unique categories ──
function getCategories() {
  const cats = new Set();
  ARTICLES.forEach(a => a.categories.forEach(c => cats.add(c)));
  return [...cats].sort();
}

// ── Render article cards ──
function renderArticleCards(filter = 'All') {
  const container = document.getElementById('article-cards');
  if (!container) return;

  const filtered = filter === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.categories.includes(filter));

  container.innerHTML = filtered.map(a => `
    <div class="article-card fade-in visible" onclick="navigateToArticle('${a.slug}')">
      ${a.image ? `<img class="thumb" src="${a.image}" alt="${a.title}" loading="lazy">` : ''}
      <div class="card-body">
        <span class="tag">${a.categories[0]}</span>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <span class="meta">${formatDate(a.date)}</span>
      </div>
    </div>
  `).join('');
}

// ── Render category filters ──
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const cats = getCategories();
  container.innerHTML = `<button class="active" onclick="filterArticles('All')">All</button>` +
    cats.map(c => `<button onclick="filterArticles('${c}')">${c}</button>`).join('');
}

function filterArticles(category) {
  document.querySelectorAll('.category-filter button').forEach(b => {
    b.classList.toggle('active', b.textContent === category);
  });
  renderArticleCards(category);
}

function jumpToCategory(category) {
  // Photography tag scrolls to photography section
  if (category === 'Photography') {
    document.getElementById('photography').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  filterArticles(category);
  document.getElementById('writing').scrollIntoView({ behavior: 'smooth' });
}

// ── Article View ──
async function navigateToArticle(slug) {
  history.pushState(null, '', `#article/${slug}`);
  showArticle(slug);
}

async function showArticle(slug) {
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) return showHome();

  try {
    const res = await fetch(`content/articles/${slug}.md`);
    if (!res.ok) throw new Error('Not found');
    const text = await res.text();
    const { content } = parseFrontMatter(text);
    const html = markdownToHtml(content);

    const view = document.getElementById('article-view');
    view.innerHTML = `
      <div class="container">
        <a href="#writing" class="back-link" onclick="showHome('writing'); return false;">&larr; Back to writing</a>
        <div class="article-meta">
          <h1>${article.title}</h1>
          <div class="meta-info">
            <span>${formatDate(article.date)}</span>
            <span>${article.categories.join(' · ')}</span>
          </div>
        </div>
        <div class="article-content">${html}</div>
      </div>
    `;

    document.body.classList.add('viewing-article');
    view.classList.add('active');
    window.scrollTo(0, 0);
  } catch (e) {
    console.error('Failed to load article:', e);
    showHome();
  }
}

function showHome(scrollTo) {
  history.pushState(null, '', scrollTo ? `#${scrollTo}` : window.location.pathname);
  document.body.classList.remove('viewing-article');
  const view = document.getElementById('article-view');
  if (view) { view.classList.remove('active'); view.innerHTML = ''; }
  if (scrollTo) {
    const target = document.getElementById(scrollTo);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
}

// ── Photography Lightbox with keyboard nav ──
let lightboxPhotos = [];
let lightboxIndex = 0;

function buildPhotoList() {
  lightboxPhotos = [];
  document.querySelectorAll('.photo-cell').forEach(cell => {
    const img = cell.querySelector('img');
    const label = cell.querySelector('.label');
    if (img) lightboxPhotos.push({ src: img.src, caption: label ? label.textContent : '' });
  });
}

function openLightbox(src, caption) {
  buildPhotoList();
  lightboxIndex = lightboxPhotos.findIndex(p => p.src.endsWith(src.replace(/^.*\//, '')));
  if (lightboxIndex === -1) lightboxIndex = 0;

  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = src;
  lb.querySelector('.caption').textContent = caption;
  updateLightboxCounter();
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

function lightboxNav(direction) {
  if (!lightboxPhotos.length) return;
  lightboxIndex = (lightboxIndex + direction + lightboxPhotos.length) % lightboxPhotos.length;
  const photo = lightboxPhotos[lightboxIndex];
  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = photo.src;
  lb.querySelector('.caption').textContent = photo.caption;
  updateLightboxCounter();
}

function updateLightboxCounter() {
  const counter = document.getElementById('lightbox-counter');
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`;
}

// ── Router ──
function handleRoute() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('article/')) {
    const slug = hash.replace('article/', '');
    showArticle(slug);
  } else {
    document.body.classList.remove('viewing-article');
    const view = document.getElementById('article-view');
    if (view) { view.classList.remove('active'); view.innerHTML = ''; }
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderCategoryFilters();
  renderArticleCards();

  // Scroll animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Nav shadow
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile nav
  document.querySelectorAll('nav ul a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('nav ul').classList.remove('open'));
  });

  // Lightbox close on click
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target.classList.contains('close-btn')) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); lightboxNav(1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); lightboxNav(-1); }
    });
  }

  // Route handling
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('popstate', handleRoute);
  handleRoute();
});
