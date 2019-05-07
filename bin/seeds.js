const mongoose = require("mongoose");
const Book = require("../models/book");

const dbName = "wiki-book";
mongoose.connect(`mongodb://localhost/${dbName}`);

const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "Barnes & Noble",
    publication_date: 2004 / 05 / 14,
    pages: 432,
    genre: ["Classics", "Fiction", "Romance"],
    description:
      "Since its publication in 1813, Pride and Prejudice’s blend of humor, romance, and social satire have delighted readers of all ages. In telling the story of Mr. and Mrs. Bennett and their five daughters, Jane Austen creates a miniature of her world, where social grace and the nuances of behavior predominate in the making of a great love story.",
    image: "https://prodimage.images-bn.com/pimages/9781593082017_p0_v4_s550x406.jpg"
  },
  {
    title: "Vampire Academy",
    author: "Richelle Mead ",
    publisher: "Razorbill",
    publication_date: 2007 / 08 / 16,
    pages: 332,
    genre: ["Young Adult", "Paranormal", "Romance"],
    description:
      "Lissa Dragomir is a Moroi princess: a mortal vampire with a rare gift for harnessing the earth's magic. She must be protected at all times from Strigoi; the fiercest vampires - the ones who never die. The powerful blend of human and vampire blood that flows through Rose Hathaway, Lissa's best friend, makes her a dhampir. Rose is dedicated to a dangerous life of protecting Lissa from the Strigoi, who are hell-bent on making Lissa one of them. After two years of freedom, Rose and Lissa are caught and dragged back to St. Vladimir's Academy, a school for vampire royalty and their guardians-to-be, hidden in the deep forests of Montana. But inside the iron gates, life is even more fraught with danger... and the Strigoi are always close by. Rose and Lissa must navigate their dangerous world, confront the temptations of forbidden love, and never once let their guard down, lest the evil undead make Lissa one of them forever ...",
    image: "https://images.gr-assets.com/books/1361098973l/345627.jpg"
  },
  {
    title: "I Miss You When I Blink: Essays",
    author: "Mary Laura Philpott",
    publisher: "Atria Books",
    publication_date: 2019 / 04 / 02,
    pages: 288,
    genre: ["Anthology", "Essay", "Memoir"],
    description:
      "Mary Laura Philpott thought she’d cracked the code: Always be right, and you’ll always be happy. But once she’d completed her life’s to-do list (job, spouse, house, babies—check!), she found that instead of feeling content and successful, she felt anxious. Lost. Stuck in a daily grind of overflowing calendars, grueling small talk, and sprawling traffic. She’d done everything “right,” but she felt all wrong. What’s the worse failure, she wondered: smiling and staying the course, or blowing it all up and running away? And are those the only options?",
    image: "https://images.gr-assets.com/books/1552224043l/40539018.jpg"
  },
  {
    title: "Sabrina & Corina: Stories",
    author: "Kali Fajardo-Anstine ",
    publisher: "One World",
    publication_date: 2019 / 04 / 02,
    pages: 224,
    genre: ["Anthology", "Short Stories"],
    description:
      "Kali Fajardo-Anstine’s magnetic story collection breathes life into her Latina characters of indigenous ancestry and the land they inhabit. Set against the remarkable backdrop of Denver, Colorado–a place that is as fierce as it is exquisite–these women navigate the land the way they navigate their lives: with caution, grace, and quiet force. In “Sugar Babies,” ancestry and heritage are hidden inside the earth but tend to rise during land disputes. “Any Further West” follows a sex worker and her daughter as they leave their ancestral home in southern Colorado only to find a foreign and hostile land in California. In “Tomi,” a woman leaves prison and finds herself in a gentrified city that is a shadow of the one she remembers from her childhood. And in the title story, “Sabrina & Corina,” a Denver family falls into a cycle of violence against women, coming together only through ritual. Sabrina & Corina is a moving narrative of unrelenting feminine power and an exploration of the universal experiences of abandonment, heritage, and an eternal sense of home. ",
    image: "https://images.gr-assets.com/books/1533328966l/40236964.jpg"
  },
  {
    title: "Forever Friends",
    author: "Shelagh Watkins",
    publisher: "Mandinam Press",
    publication_date: 2008 / 10 / 01,
    pages: 280,
    genre: ["Anthology", "Short Stories", "Romance"],
    description:
      "This collection of stories and poems, created by members of the Published Authors Forum on the world wide web, reflects the bond of friendship between writers from all over the world. Forever Friends is a celebration of the power of friendship and human relationships. The breadth and depth of the stories cover all ages from young to old. Filled with love and respect for family, friends, pets and even a telescope, these stories are guaranteed to entertain the most discerning reader. Thoughtful poems of friendship and love will bring smiles or tears and encourage readers to read the next story. The fiction and non-fiction works in this book express friendship as timeless, enduring and forever.",
    image: "https://images.gr-assets.com/books/1347803683l/5504848.jpg"
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    publisher: "Simon & Schuster",
    publication_date: 2011 / 10 / 24,
    pages: 656,
    genre: ["Biography", "Memoir"],
    description:
      "Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with this book, he asked for no control over what was written nor even the right to read it before it was published. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted.",
    image: "https://images.gr-assets.com/books/1511288482l/11084145.jpg"
  },
  {
    title: "Unbroken: A World War II Story of Survival, Resilience and Redemption",
    author: "Laura Hillenbrand",
    publisher: "Random House",
    publication_date: 2010 / 11 / 16,
    pages: 473,
    genre: ["Biography", "Memoir", "Anthology"],
    description:
      "On a May afternoon in 1943, an Army Air Forces bomber crashed into the Pacific Ocean and disappeared, leaving only a spray of debris and a slick of oil, gasoline, and blood. Then, on the ocean surface, a face appeared. It was that of a young lieutenant, the plane's bombardier, who was struggling to a life raft and pulling himself aboard. So began one of the most extraordinary odysseys of the Second World War. The lieutenant’s name was Louis Zamperini. In boyhood, he'd been a cunning and incorrigible delinquent, breaking into houses, brawling, and fleeing his home to ride the rails. As a teenager, he had channeled his defiance into running, discovering a prodigious talent that had carried him to the Berlin Olympics and within sight of the four-minute mile. But when war had come, the athlete had become an airman, embarking on a journey that led to his doomed flight, a tiny raft, and a drift into the unknown. Ahead of Zamperini lay thousands of miles of open ocean, leaping sharks, a foundering raft, thirst and starvation, enemy aircraft, and, beyond, a trial even greater. Driven to the limits of endurance, Zamperini would answer desperation with ingenuity; suffering with hope, resolve, and humor; brutality with rebellion. His fate, whether triumph or tragedy, would be suspended on the fraying wire of his will.",
    image: "https://images.gr-assets.com/books/1327861115l/8664353.jpg"
  },
  {
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    publisher: "Simon Schuster",
    publication_date: 2007 / 04 / 10,
    pages: 675,
    genre: ["Biography", "Memoir"],
    description:
      "Einstein was a rebel and nonconformist from boyhood days, and these character traits drove both his life and his science. In this narrative, Walter Isaacson explains how his mind worked and the mysteries of the universe that he discovered.",
    image: "https://images.gr-assets.com/books/1328011405l/10884.jpg"
  },
  {
    title: "Into the Wild",
    author: "Jon Krakauer",
    publisher: "Anchor Books",
    publication_date: 1997 / 01 / 20,
    pages: 207,
    genre: ["Biography", "Classic", "Memoir"],
    description:
      "In April, 1992, a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. His name was Christopher Johnson McCandless. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself. Four months later, a party of moose hunters found his decomposed body. How McCandless came to die is the unforgettable story of Into the Wild. Immediately after graduating from college in 1991, McCandless had roamed through the West and Southwest on a vision quest like those made by his heroes Jack London and John Muir. In the Mojave Desert he abandoned his car, stripped it of its license plates, and burned all of his cash. He would give himself a new name, Alexander Supertramp, and, unencumbered by money and belongings, he would be free to wallow in the raw, unfiltered experiences that nature presented. Craving a blank spot on the map, McCandless simply threw away the maps. Leaving behind his desperate parents and sister, he vanished into the wild.",
    image: "https://images.gr-assets.com/books/1403173986l/1845.jpg"
  },
  {
    title: "John Adams",
    author: "David McCullough",
    publisher: "Simon & Schuster Paperbacks ",
    publication_date: 2001 / 05 / 22,
    pages: 751,
    genre: ["Biography", "Memoir", "Classic"],
    description:
      'The enthralling, often surprising story of John Adams, one of the most important and fascinating Americans who ever lived. In this powerful, epic biography, David McCullough unfolds the adventurous life-journey of John Adams, the brilliant, fiercely independent, often irascible, always honest Yankee patriot  "the colossus of independence," as Thomas Jefferson called him -- who spared nothing in his zeal for the American Revolution; who rose to become the second President of the United States and saved the country from blundering into an unnecessary war; who was learned beyond all but a few and regarded by some as "out of his senses"; and whose marriage to the wise and valiant Abigail Adams is one of the moving love stories in American history. Like his masterly, Pulitzer Prize-winning biography Truman, David McCullough\'s John Adams has the sweep and vitality of a great novel. It is both a riveting portrait of an abundantly human man and a vivid evocation of his time, much of it drawn from an outstanding collection of Adams family letters and diaries. In particular, the more than one thousand surviving letters between John and Abigail Adams, nearly half of which have never been published, provide extraordinary access to their private lives and make it possible to know John Adams as no other major American of his founding era. ',
    image: "https://images.gr-assets.com/books/1478144278l/2203.jpg"
  },
  {
    title: "Team of Rivals: The Political Genius of Abraham Lincoln",
    author: "Doris Kearns Goodwin",
    publisher: "Simon & Schuster ",
    publication_date: 2006 / 09 / 25,
    pages: 916,
    genre: ["Biography", "Memoir", "Classic"],
    description:
      "Acclaimed historian Doris Kearns Goodwin illuminates Abraham Lincoln's political genius in this highly original work, as the one-term congressman and prairie lawyer rises from obscurity to prevail over three gifted rivals of national reputation to become president. On May 18, 1860, William H. Seward, Salmon P. Chase, Edward Bates, and Abraham Lincoln waited in their hometowns for the results from the Republican National Convention in Chicago. When Lincoln emerged as the victor, his rivals were dismayed and angry. Throughout the turbulent 1850s, each had energetically sought the presidency as the conflict over slavery was leading inexorably to secession and civil war. That Lincoln succeeded, Goodwin demonstrates, was the result of a character that had been forged by experiences that raised him above his more privileged and accomplished rivals. He won because he possessed an extraordinary ability to put himself in the place of other men, to experience what they were feeling, to understand their motives and desires. It was this capacity that enabled Lincoln as president to bring his disgruntled opponents together, create the most unusual cabinet in history, and marshal their talents to the task of preserving the Union and winning the war. We view the long, horrifying struggle from the vantage of the White House as Lincoln copes with incompetent generals, hostile congressmen, and his raucous cabinet. He overcomes these obstacles by winning the respect of his former competitors, and in the case of Seward, finds a loyal and crucial friend to see him through. This brilliant multiple biography is centered on Lincoln's mastery of men and how it shaped the most significant presidency in the nation's history.",
    image: "https://images.gr-assets.com/books/1347278868l/2199.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publisher: "HarperCollins",
    publication_date: 1993 / 05 / 01,
    pages: 197,
    genre: ["Classics", "Fantasy"],
    description:
      "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams. ",
    image: "https://images.gr-assets.com/books/1483412266l/865.jpg"
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    publisher: "Harcourt, Inc.",
    publication_date: 2000 / 06 / 29,
    pages: 93,
    genre: ["Classics", "Fantasy"],
    description:
      "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
    image: "https://images.gr-assets.com/books/1367545443l/157993.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    publication_date: 2004 / 09 / 10,
    pages: 180,
    genre: ["Classics", "Romance"],
    description:
      'THE GREAT GATSBY, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the national drink and sex the national obsession," it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.',
    image: "https://images.gr-assets.com/books/1490528560l/4671.jpg"
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publisher: "Anchor Books",
    publication_date: 1998 / 03 / 16,
    pages: 344,
    genre: ["Classics", "Science Fiction", "Fantasy"],
    description:
      "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now... ",
    image: "https://images.gr-assets.com/books/1546031886l/38447.jpg"
  },
  {
    title: "Captain Marvel, Volume 1: Higher, Further, Faster, More",
    author: "Kelly Sue DeConnick",
    publisher: "Marvel",
    publication_date: 2014 / 10 / 21,
    pages: 136,
    genre: ["Comic", "Science Fiction", "Fantasy"],
    description:
      "Captain Marvel, Earth's Mightiest Hero with an attitude to match, is launching headfirst into an all-new ongoing adventure! As Carol Danvers comes to a crossroads with a new life and new romance, she makes a dramatic decision that will alter the course of her life — and the entire Marvel Universe. But as Carol takes on a mission to return an alien girl to her homeworld, she lands in the middle of an uprising against the Galactic Alliance and the Spartax! Investigating the forced resettlement of Rocket Girl's people, Carol discovers she has a history with the man behind the plot. But when the bad guy tries to blackmail Carol and turn the Avengers against her, it's payback time! Guest-starring the Guardians of the Galaxy!",
    image: "https://images.gr-assets.com/books/1414348442l/20898018.jpg"
  },
  {
    title: "Saga, Vol. 3",
    author: "Brian K. Vaughan",
    publisher: "Image Comics",
    publication_date: 2014 / 03 / 25,
    pages: 144,
    genre: ["Comic", "Fantasy", "Science Fiction"],
    description:
      "From the Hugo Award-winning duo of Brian K. Vaughan (The Private Eye, Y: The Last Man) and Fiona Staples (North 40, Red Sonja), Saga is the sweeping tale of one young family fighting to find their place in the universe. Searching for their literary hero, new parents Marko and Alana travel to a cosmic lighthouse on the planet Quietus, while the couple's multiple pursuers finally close in on their targets.",
    image: "https://images.gr-assets.com/books/1486028973l/19358975.jpg"
  },
  {
    title: "Paper Girls, Vol. 1",
    author: " Brian K. Vaughan",
    publisher: "Image Comics",
    publication_date: 2016 / 04 / 05,
    pages: 144,
    genre: ["Comic", "Fantasy", "Science Fiction", "Young Adult"],
    description:
      "In the early hours after Halloween of 1988, four 12-year-old newspaper delivery girls uncover the most important story of all time. Suburban drama and otherworldly mysteries collide in this smash-hit series about nostalgia, first jobs, and the last days of childhood.",
    image: "https://images.gr-assets.com/books/1506952499l/28204534.jpg"
  },
  {
    title: "Marvel Avengers Alliance",
    author: "Fabian Nicieza,  Paco Díaz",
    publisher: "Marvel ",
    publication_date: 2016 / 04 / 13,
    pages: 29,
    genre: ["Comic", "Fantasy", "Science Fiction", "Young Adult"],
    description:
      "War has been declared on Earth by the Black Order...and the Avengers Alliance is the planet's only hope for survival! A Chitauri invasion means the core team is going to need reinforcements! Nova, Ms. Marvel, and Squirrel Girl join the fray—with a special appearance by the Guardians of the Galaxy! But will they be enough to stave off the invasions? It's all hands on deck for the Avengers Alliance as they combat a powerful new threat in the Redwood Forest. The battle for Earth reaches a critical stage in this epic adventure bridging the story between the smash hit mobile game Marvel: Avengers Alliance and the upcoming Marvel: Avengers Alliance 2!",
    image: "https://images.gr-assets.com/books/1460560194l/29909667.jpg"
  },
  {
    title: "Diary of a Wimpy Kid #13: The Meltdown",
    author: "Jeff Kinney ",
    publisher: "Amulet Books ",
    publication_date: 2018 / 10 / 30,
    pages: 218,
    genre: ["Comic", "Fantasy", "Science Fiction", "Young Adult"],
    description:
      "When snow shuts down Greg Heffley's middle school, his neighborhood transforms into a wintry battlefield. Rival groups fight over territory, build massive snow forts, and stage epic snowball fights. And in the crosshairs are Greg and his trusty best friend, Rowley Jefferson. It's a fight for survival as Greg and Rowley navigate alliances, betrayals, and warring gangs in a neighborhood meltdown. When the snow clears, will Greg and Rowley emerge as heroes? Or will they even survive to see another day",
    image: "https://images.gr-assets.com/books/1525203766l/39304888.jpg"
  },
  {
    title: "Ms. Marvel, Vol. 1: No Normal",
    author: "G. Willow Wilson ",
    publisher: "Marvel",
    publication_date: 2014 / 10 / 30,
    pages: 120,
    genre: ["Comic", "Fantasy", "Science Fiction", "Young Adult"],
    description:
      "Kamala Khan is an ordinary girl from Jersey City — until she's suddenly empowered with extraordinary gifts. But who truly is the new Ms. Marvel? Teenager? Muslim? Inhuman? Find out as she takes the Marvel Universe by storm! When Kamala discovers the dangers of her newfound powers, she unlocks a secret behind them, as well. Is Kamala ready to wield these immense new gifts? Or will the weight of the legacy before her be too much to bear? Kamala has no idea, either. But she's comin' for you, Jersey! ",
    image: "https://images.gr-assets.com/books/1413031883l/20898019.jpg"
  },
  {
    title: "Catching Fire",
    author: "Suzanne Collins",
    publisher: "Scholastic Press",
    publication_date: 2009 / 09 / 01,
    pages: 391,
    genre: ["Young Adult", "Science Fiction", "Fantasy"],
    description:
      "Against all odds, Katniss has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive. Katniss should be relieved, happy even. After all, she has returned to her family and her longtime friend, Gale. Yet nothing is the way Katniss wishes it to be. Gale holds her at an icy distance. Peeta has turned his back on her completely. And there are whispers of a rebellion against the Capitol - a rebellion that Katniss and Peeta may have helped create. Much to her shock, Katniss has fueled an unrest she's afraid she cannot stop. And what scares her even more is that she's not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol's cruel Victory Tour, the stakes are higher than ever. If they can't prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying. In Catching Fire, the second novel in the Hunger Games trilogy, Suzanne Collins continues the story of Katniss Everdeen, testing her more than ever before...and surprising readers at every turn.",
    image: "https://images.gr-assets.com/books/1358273780l/6148028.jpg"
  },
  {
    title: "The Help",
    author: "Kathryn Stockett ",
    publisher: "Amy Einhorn Books",
    publication_date: 2009 / 02 / 10,
    pages: 465,
    genre: ["Classics", "Drama"],
    description:
      "Three ordinary women are about to take one extraordinary step. Twenty-two-year-old Skeeter has just returned home after graduating from Ole Miss. She may have a degree, but it is 1962, Mississippi, and her mother will not be happy till Skeeter has a ring on her finger. Skeeter would normally find solace with her beloved maid Constantine, the woman who raised her, but Constantine has disappeared and no one will tell Skeeter where she has gone. Aibileen is a black maid, a wise, regal woman raising her seventeenth white child. Something has shifted inside her after the loss of her own son, who died while his bosses looked the other way. She is devoted to the little girl she looks after, though she knows both their hearts may be broken. Minny, Aibileen's best friend, is short, fat, and perhaps the sassiest woman in Mississippi. She can cook like nobody's business, but she can't mind her tongue, so she's lost yet another job. Minny finally finds a position working for someone too new to town to know her reputation. But her new boss has secrets of her own. Seemingly as different from one another as can be, these women will nonetheless come together for a clandestine project that will put them all at risk. And why? Because they are suffocating within the lines that define their town and their times. And sometimes lines are made to be crossed. In pitch-perfect voices, Kathryn Stockett creates three extraordinary women whose determination to start a movement of their own forever changes a town, and the way women, mothers, daughters, caregivers, friends, view one another. A deeply moving novel filled with poignancy, humor, and hope, The Help is a timeless and universal story about the lines we abide by, and the ones we don't. ",
    image: "https://images.gr-assets.com/books/1554195238l/4667024.jpg"
  },
  {
    title: "City of Glass",
    author: "by Cassandra Clare",
    publisher: "Margaret K. McElderry Books",
    publication_date: 2009 / 03 / 24,
    pages: 541,
    genre: ["Fantasy", "Paranormal", "Young Adult", "Romance"],
    description:
      "To save her mother's life, Clary must travel to the City of Glass, the ancestral home of the Shadowhunters - never mind that entering the city without permission is against the Law, and breaking the Law could mean death. To make things worse, she learns that Jace does not want her there, and Simon has been thrown in prison by the Shadowhunters, who are deeply suspicious of a vampire who can withstand sunlight. As Clary uncovers more about her family's past, she finds an ally in mysterious Shadowhunter Sebastian. With Valentine mustering the full force of his power to destroy all Shadowhunters forever, their only chance to defeat him is to fight alongside their eternal enemies. But can Downworlders and Shadowhunters put aside their hatred to work together? While Jace realizes exactly how much he's willing to risk for Clary, can she harness her newfound powers to help save the Glass City - whatever the cost? Love is a mortal sin and the secrets of the past prove deadly as Clary and Jace face down Valentine in the third installment of the New York Times bestselling series The Mortal Instruments.",
    image: "https://images.gr-assets.com/books/1369452339l/3777732.jpg"
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    publisher: "Penguin Books ",
    publication_date: 2003 / 04 / 29,
    pages: 409,
    genre: ["Classics", "Romance", "Historical Fiction"],
    description:
      "Marianne Dashwood wears her heart on her sleeve, and when she falls in love with the dashing but unsuitable John Willoughby she ignores her sister Elinor's warning that her impulsive behaviour leaves her open to gossip and innuendo. Meanwhile Elinor, always sensitive to social convention, is struggling to conceal her own romantic disappointment, even from those closest to her. Through their parallel experience of love—and its threatened loss—the sisters learn that sense must mix with sensibility if they are to find personal happiness in a society where status and money govern the rules of love. This edition includes explanatory notes, textual variants between the first and second editions, and Tony Tanner's introduction to the original Penguin Classic edition.",
    image: "https://images.gr-assets.com/books/1397245675l/14935.jpg"
  },
  {
    title: "Pride and Prejudice and Zombies",
    author: "Seth Grahame-Smith",
    publisher: "Quirk Classics",
    publication_date: "2009/05/01",
    pages: 320,
    genre: ["Horror", "Fantasy", "Humor", "Romance", "Paranormal", "Young Adult"],
    description:
      "So begins Pride and Prejudice and Zombies, an expanded edition of the beloved Jane Austen novel featuring all-new scenes of bone-crunching zombie mayhem. As our story opens, a mysterious plague has fallen upon the quiet English village of Meryton—and the dead are returning to life! Feisty heroine Elizabeth Bennet is determined to wipe out the zombie menace, but she’s soon distracted by the arrival of the haughty and arrogant Mr. Darcy. What ensues is a delightful comedy of manners with plenty of civilized sparring between the two young lovers—and even more violent sparring on the blood-soaked battlefield. Can Elizabeth vanquish the spawn of Satan? And overcome the social prejudices of the class-conscious landed gentry? Complete with romance, heartbreak, swordfights, cannibalism, and thousands of rotting corpses, Pride and Prejudice and Zombies transforms a masterpiece of world literature into something you’d actually want to read.",
    image: "https://images.gr-assets.com/books/1320449653l/5899779.jpg"
  },
  {
    title: "The Last Olympian",
    author: "Rick Riordan",
    publisher: "unknown",
    publication_date: 2009 / 05 / 12,
    pages: 381,
    genre: ["Fantasy", "Young Adult", "Paranormal", "Romance", "Science Fiction"],
    description:
      "All year the half-bloods have been preparing for battle against the Titans, knowing the odds of a victory are grim. Kronos’s army is stronger than ever, and with every god and half-blood he recruits, the evil Titan’s power only grows. While the Olympians struggle to contain the rampaging monster Typhon, Kronos begins his advance on New York City, where Mount Olympus stands virtually unguarded. Now it’s up to Percy Jackson and an army of young demigods to stop the Lord of Time. In this momentous final book in the New York Times best-selling series, the long-awaited prophecy surrounding Percy’s sixteenth birthday unfolds. And as the battle for Western civilization rages on the streets of Manhattan, Percy faces a terrifying suspicion that he may be fighting against his own fate.",
    image: "https://images.gr-assets.com/books/1327924597l/4502507.jpg"
  }
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
  // {
  //   title:,
  //   author:,
  //   publisher:,
  //   publication_date:,
  //   pages:,
  //   genre:,
  //   description:,
  //   image:
  // },
];

Book.find({})
  .remove()
  .then(() => {
    return Book.insertMany(books, err => {
      console.log(`Created ${books.length} book`);

      mongoose.connection.close();

      console.log(err);
    });
  });
