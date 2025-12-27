// Robert's 2025 Reading List
// NOTE FOR FUTURE: We want this to be dynamic from Google Keep
// For now, this is manually populated from the Keep note

export interface Book {
  title: string;
  author: string;
  pages?: number;
  genre: string;
  isFavorite?: boolean;
  isDNF?: boolean;
  isReread?: boolean;
  isFanfic?: boolean;
  notes?: string;
}

// Genre Icons Mapping
export const genreIcons: Record<string, string> = {
  "Fantasy": "⚔️",
  "Fantasy Romance": "⚔️💕",
  "Thriller": "🔪",
  "Mystery": "🔍",
  "Mystery Romance": "🔍💕",
  "Romance": "💕",
  "Sports Romance": "🏒",
  "Historical Romance": "💕📜",
  "Sci-Fi": "🚀",
  "Sci-Fi Romance": "🚀💕",
  "Sci-Fi Horror": "🚀👻",
  "Non-Fiction": "📚",
  "Horror": "👻",
  "Literary Fiction": "📖",
  "Historical Fiction": "📜",
  "Fanfiction": "✨",
  "Classic": "📜",
  "Dystopian": "🌆",
};

export function getGenreIcon(genre: string): string {
  return genreIcons[genre] || "📖";
}

// Series Detection Utilities
export function extractSeriesInfo(title: string): { seriesName: string | null; number: number | null } {
  const hashMatch = title.match(/^(.+?)\s*#(\d+)/);
  if (hashMatch) {
    return { seriesName: hashMatch[1].trim(), number: parseInt(hashMatch[2]) };
  }
  return { seriesName: null, number: null };
}

export function getSeriesStats(books: Book[]): Array<{ name: string; count: number; author: string }> {
  const series: Record<string, { count: number; author: string }> = {};

  books.forEach(book => {
    const { seriesName } = extractSeriesInfo(book.title);
    if (seriesName) {
      if (!series[seriesName]) {
        series[seriesName] = { count: 0, author: book.author };
      }
      series[seriesName].count++;
    }
  });

  return Object.entries(series)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.count - a.count);
}

export const books2025: Book[] = [
  // ===== THRILLERS/MYSTERIES =====
  { title: "Kitchen Confidential", author: "Anthony Bourdain", genre: "Non-Fiction", isFavorite: true },
  { title: "The Defense", author: "Steve Cavanagh", genre: "Thriller", isFavorite: true },
  { title: "The Plea", author: "Steve Cavanagh", genre: "Thriller", isFavorite: true },
  { title: "Thirteen", author: "Steve Cavanagh", genre: "Thriller", isFavorite: true },
  { title: "One Two, Buckle My Shoe", author: "Agatha Christie", genre: "Mystery" },
  { title: "The Expert System's Brother", author: "Adrian Tchaikovsky", genre: "Sci-Fi", isDNF: true },
  { title: "The Innocent", author: "David Baldacci", genre: "Thriller" },
  { title: "56 Days", author: "Catherine Ryan Howard", genre: "Thriller", notes: "Great twists!" },
  { title: "Evil Under the Sun", author: "Agatha Christie", genre: "Mystery" },
  { title: "The Hit", author: "David Baldacci", genre: "Thriller" },
  { title: "The Other Windsor Girl", author: "Georgie Blalock", genre: "Historical Fiction" },
  { title: "The Minders", author: "John Marrs", genre: "Thriller", isDNF: true },
  { title: "The Passengers", author: "John Marrs", genre: "Thriller" },
  { title: "Dark Sacred Night", author: "Michael Connelly", genre: "Mystery" },
  { title: "The Late Show", author: "Michael Connelly", genre: "Mystery" },
  { title: "Along Came a Spider", author: "James Patterson", genre: "Thriller" },
  { title: "Murder by Memory", author: "Olivia Blacke", genre: "Mystery" },
  { title: "Kill for Me, Kill for You", author: "Steve Cavanagh", genre: "Thriller" },
  { title: "The Marlow Murder Club", author: "Robert Thorogood", genre: "Mystery" },
  { title: "Nothing More to Tell", author: "Karen M. McManus", genre: "Mystery" },
  { title: "Two Can Keep a Secret", author: "Karen M. McManus", genre: "Mystery" },
  { title: "Evelyn Hardcastle", author: "Stuart Turton", genre: "Mystery" },
  { title: "Deep End", author: "Various", genre: "Thriller" },
  { title: "Such Charming Liars", author: "Karen M. McManus", genre: "Mystery" },
  { title: "The Kind Worth Killing", author: "Peter Swanson", genre: "Thriller" },
  { title: "The Kind Worth Saving", author: "Peter Swanson", genre: "Thriller" },
  { title: "A Talent for Murder", author: "Peter Swanson", genre: "Thriller" },
  { title: "False Witness", author: "Karin Slaughter", genre: "Thriller" },
  { title: "The Good Daughter", author: "Karin Slaughter", genre: "Thriller" },
  { title: "Confessions on the 7:45", author: "Lisa Unger", genre: "Thriller" },
  { title: "Fifty/Fifty", author: "Steve Cavanagh", genre: "Thriller", notes: "SO GOOD WHAT DID HE DO!!" },
  { title: "One by One", author: "Ruth Ware", genre: "Thriller", notes: "So stressful" },
  { title: "Before I Go to Sleep", author: "S.J. Watson", genre: "Thriller" },
  { title: "The Night We Lost Him", author: "Laura Dave", genre: "Mystery" },
  { title: "The Trap", author: "Various", genre: "Thriller" },
  { title: "\"A\" is for Alibi", author: "Sue Grafton", genre: "Mystery" },
  { title: "The Lake of Lost Girls", author: "Various", genre: "Mystery" },
  { title: "Happiness Falls", author: "Angie Kim", genre: "Mystery", notes: "So frustrating" },
  { title: "The It Girl", author: "Ruth Ware", genre: "Thriller", isReread: true },
  { title: "The Quiet Tenant", author: "Clémence Michallon", genre: "Thriller" },
  { title: "The Guest List", author: "Lucy Foley", genre: "Thriller", isReread: true },
  { title: "The Last One at the Wedding", author: "Various", genre: "Thriller" },
  { title: "Camino Island", author: "John Grisham", genre: "Thriller" },
  { title: "The Murder House", author: "James Patterson", genre: "Thriller" },
  { title: "The Black Book", author: "James Patterson", genre: "Thriller" },
  { title: "Invisible", author: "James Patterson", genre: "Thriller" },
  { title: "Unsolved", author: "James Patterson", genre: "Thriller" },
  { title: "12 Months to Live", author: "James Patterson", genre: "Thriller" },
  { title: "#1 Lawyer", author: "James Patterson", genre: "Thriller" },
  { title: "Famous", author: "James Patterson", genre: "Thriller" },
  { title: "Step on a Crack", author: "James Patterson", genre: "Thriller" },
  { title: "The Word is Murder", author: "Anthony Horowitz", genre: "Mystery" },
  { title: "All of Us Murderers", author: "Various", genre: "Mystery" },
  { title: "The Most Wonderful Crime of the Year", author: "Various", genre: "Mystery" },
  { title: "Not a Happy Family", author: "Shari Lapena", genre: "Thriller" },
  { title: "The Night Shift", author: "Alex Finlay", genre: "Thriller" },
  { title: "The Survivors", author: "Jane Harper", genre: "Thriller" },
  { title: "The Dry", author: "Jane Harper", genre: "Thriller" },
  { title: "First to Die", author: "James Patterson", genre: "Thriller" },
  { title: "Devils Advocate", author: "Steve Cavanagh", genre: "Thriller" },
  { title: "Witness 8", author: "Steve Cavanagh", genre: "Thriller" },
  { title: "Dead Money", author: "Steve Cavanagh", genre: "Thriller" },

  // ===== NON-FICTION =====
  { title: "Never Enough", author: "Jennifer Breheny Wallace", genre: "Non-Fiction" },
  { title: "The Biggest Bluff", author: "Maria Konnikova", genre: "Non-Fiction", isFavorite: true },
  { title: "Medium Raw", author: "Anthony Bourdain", genre: "Non-Fiction" },
  { title: "Never Split the Difference", author: "Chris Voss", genre: "Non-Fiction", isFavorite: true },
  { title: "Blood", author: "Various", genre: "Non-Fiction" },
  { title: "Try Softer", author: "Aundi Kolber", genre: "Non-Fiction" },
  { title: "The Other Dr. Gilmer", author: "Benjamin Gilmer", genre: "Non-Fiction" },
  { title: "Among the Thugs", author: "Bill Buford", genre: "Non-Fiction" },
  { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", genre: "Non-Fiction", isFavorite: true },
  { title: "Born to Run", author: "Christopher McDougall", genre: "Non-Fiction", isFavorite: true },
  { title: "Bad Blood", author: "John Carreyrou", genre: "Non-Fiction" },
  { title: "The Brain", author: "David Eagleman", genre: "Non-Fiction" },
  { title: "Magic Pill", author: "Johann Hari", genre: "Non-Fiction", isFavorite: true },
  { title: "ADHD Nation", author: "Alan Schwarz", genre: "Non-Fiction" },
  { title: "Who is Michael Ovitz?", author: "Michael Ovitz", genre: "Non-Fiction" },
  { title: "Psychology Review", author: "Various", genre: "Non-Fiction" },
  { title: "The Myth of Normal", author: "Gabor Maté", genre: "Non-Fiction" },
  { title: "The Light Eaters", author: "Zoë Schlanger", genre: "Non-Fiction" },
  { title: "The Day the World Came to Town", author: "Jim DeFede", genre: "Non-Fiction" },
  { title: "Who Gets In and Why", author: "Jeffrey Selingo", genre: "Non-Fiction" },
  { title: "The Architecture of Happiness", author: "Alain de Botton", genre: "Non-Fiction" },
  { title: "Ultralearning", author: "Scott Young", genre: "Non-Fiction" },
  { title: "The Social Animal", author: "David Brooks", genre: "Non-Fiction" },
  { title: "The Sun Does Shine", author: "Anthony Ray Hinton", genre: "Non-Fiction", isFavorite: true },
  { title: "The Anthropocene Reviewed", author: "John Green", genre: "Non-Fiction" },
  { title: "Steve Jobs", author: "Walter Isaacson", genre: "Non-Fiction" },
  { title: "ADHD 2.0", author: "Edward Hallowell", genre: "Non-Fiction" },
  { title: "Everything is Tuberculosis", author: "Various", genre: "Non-Fiction" },
  { title: "How the World Ran Out of Everything", author: "Peter S. Goodman", genre: "Non-Fiction" },
  { title: "Tubes", author: "Andrew Blum", genre: "Non-Fiction" },
  { title: "The Art Thief", author: "Michael Finkel", genre: "Non-Fiction" },
  { title: "Ghosts of Honolulu", author: "Mark Harmon", genre: "Non-Fiction" },
  { title: "Code Breaker", author: "Walter Isaacson", genre: "Non-Fiction" },
  { title: "A City on Mars", author: "Kelly & Zach Weinersmith", genre: "Non-Fiction" },
  { title: "The Psychology of Money", author: "Morgan Housel", genre: "Non-Fiction" },
  { title: "Talking as Fast as I Can", author: "Lauren Graham", genre: "Non-Fiction" },
  { title: "No More Tears", author: "Various", genre: "Non-Fiction", isFavorite: true },
  { title: "Scattered Minds", author: "Gabor Maté", genre: "Non-Fiction" },
  { title: "Sociopath", author: "Patric Gagne", genre: "Non-Fiction", isFavorite: true },
  { title: "The Tipping Point", author: "Malcolm Gladwell", genre: "Non-Fiction" },
  { title: "Outlive", author: "Peter Attia", genre: "Non-Fiction" },
  { title: "Code Girls", author: "Liza Mundy", genre: "Non-Fiction" },
  { title: "This American Woman", author: "Various", genre: "Non-Fiction" },
  { title: "The House of My Mother", author: "Various", genre: "Non-Fiction" },
  { title: "How to Be a Straight A Student", author: "Cal Newport", genre: "Non-Fiction" },
  { title: "Submersed", author: "Various", genre: "Non-Fiction" },
  { title: "Careless People", author: "Sarah Churchwell", genre: "Non-Fiction", isFavorite: true },
  { title: "Gulp", author: "Mary Roach", genre: "Non-Fiction" },
  { title: "Why We Sleep", author: "Matthew Walker", genre: "Non-Fiction" },
  { title: "By the Fire We Carry", author: "Various", genre: "Non-Fiction", isFavorite: true },
  { title: "The Smartest Guys in the Room", author: "Bethany McLean", genre: "Non-Fiction" },
  { title: "Burn Book", author: "Kara Swisher", genre: "Non-Fiction" },
  { title: "Cobalt Red", author: "Siddharth Kara", genre: "Non-Fiction" },
  { title: "Muscles", author: "Various", genre: "Non-Fiction" },
  { title: "Mood Machine", author: "Various", genre: "Non-Fiction" },
  { title: "Star Spangled Jesus", author: "Various", genre: "Non-Fiction", isDNF: true },
  { title: "OutOfShapeWorthlessLoser", author: "Various", genre: "Non-Fiction" },

  // ===== FANTASY =====
  { title: "A House with Good Bones", author: "T. Kingfisher", genre: "Fantasy" },
  { title: "Nettle and Bone", author: "T. Kingfisher", genre: "Fantasy" },
  { title: "These Burning Stars", author: "Bethany Jacobs", genre: "Sci-Fi", isFavorite: true },
  { title: "On a Vicious World", author: "Bethany Jacobs", genre: "Sci-Fi" },
  { title: "Saturation Point", author: "Various", genre: "Thriller", isFavorite: true },
  { title: "Spiderlight", author: "Adrian Tchaikovsky", genre: "Fantasy", isFavorite: true },
  { title: "Paladin's Hope", author: "T. Kingfisher", genre: "Fantasy" },
  { title: "Paladin's Grace", author: "T. Kingfisher", genre: "Fantasy" },
  { title: "The Bone Ships", author: "RJ Barker", genre: "Fantasy", isDNF: true },
  { title: "The Will of the Many", author: "James Islington", genre: "Fantasy" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy" },
  { title: "The Wise Man's Fear", author: "Patrick Rothfuss", genre: "Fantasy" },
  { title: "An Inheritance of Magic", author: "Benedict Jacka", genre: "Fantasy", isFavorite: true },
  { title: "Instruction in Shadow", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Classic", isFavorite: true, pages: 1200 },
  { title: "The Nightingale", author: "Kristin Hannah", genre: "Historical Fiction" },
  { title: "Alex Verus #1 (Fated)", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #2", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #3", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #4", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #5", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #6", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #7", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #8", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #9", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #10", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #11", author: "Benedict Jacka", genre: "Fantasy" },
  { title: "Alex Verus #12", author: "Benedict Jacka", genre: "Fantasy", notes: "SCREAMING CRYING THROWING UP" },
  { title: "The Stand", author: "Stephen King", genre: "Horror", pages: 1150 },
  { title: "The Shining", author: "Stephen King", genre: "Horror" },
  { title: "Swordcatcher", author: "Cassandra Clare", genre: "Fantasy" },
  { title: "The Ragpicker King", author: "Cassandra Clare", genre: "Fantasy", isFavorite: true },
  { title: "The Tainted Cup", author: "Robert Jackson Bennett", genre: "Fantasy" },
  { title: "Empire of Silence", author: "Christopher Ruocchio", genre: "Sci-Fi" },
  { title: "The Howling Dark", author: "Christopher Ruocchio", genre: "Sci-Fi" },
  { title: "Suneater #3", author: "Christopher Ruocchio", genre: "Sci-Fi" },
  { title: "Suneater #4", author: "Christopher Ruocchio", genre: "Sci-Fi" },
  { title: "The Sun Eater Trials", author: "Christopher Ruocchio", genre: "Sci-Fi" },
  { title: "The Sunshine Court", author: "Nora Sakavic", genre: "Sports Romance" },
  { title: "Ink and Sigil", author: "Kevin Hearne", genre: "Fantasy" },
  { title: "The Golden Raven", author: "Various", genre: "Fantasy" },
  { title: "Mistborn", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "The Well of Ascension", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "Wax and Wayne #1", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "Wax and Wayne #2", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "Wax and Wayne #3", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "Wax and Wayne #4", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "Tress of the Emerald Sea", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "The Sunlit Man", author: "Brandon Sanderson", genre: "Fantasy" },
  { title: "Isles of the Emberdark", author: "Brandon Sanderson", genre: "Fantasy", isFavorite: true },
  { title: "Katabasis", author: "Various", genre: "Fantasy" },
  { title: "The Raven Scholar", author: "Various", genre: "Fantasy", isFavorite: true },
  { title: "Grave Witch", author: "Kalayna Price", genre: "Fantasy" },
  { title: "Aeronaut's Windlass", author: "Jim Butcher", genre: "Fantasy" },
  { title: "The Olympian Affair", author: "Jim Butcher", genre: "Fantasy" },
  { title: "In the Shadow of Lightning", author: "Brian McClellan", genre: "Fantasy" },
  { title: "Darker Shade of Magic #1", author: "V.E. Schwab", genre: "Fantasy" },
  { title: "Darker Shade of Magic #2", author: "V.E. Schwab", genre: "Fantasy" },
  { title: "Darker Shade of Magic #3", author: "V.E. Schwab", genre: "Fantasy" },
  { title: "Grave Empire", author: "Various", genre: "Fantasy", isDNF: true },
  { title: "Shield of Sparrows", author: "Various", genre: "Fantasy", isDNF: true },
  { title: "The Incandescent", author: "Various", genre: "Fantasy", isFavorite: true },
  { title: "A Harvest of Hearts", author: "Various", genre: "Fantasy" },
  { title: "Shoestring Theory", author: "Various", genre: "Fantasy" },
  { title: "The Floating World", author: "Various", genre: "Fantasy", isDNF: true },
  { title: "Going Postal", author: "Terry Pratchett", genre: "Fantasy" },
  { title: "The Shadows", author: "Alex North", genre: "Thriller" },
  { title: "Illborn", author: "Daniel T. Jackson", genre: "Fantasy" },
  { title: "Winter's Orbit", author: "Everina Maxwell", genre: "Sci-Fi Romance", isFavorite: true },
  { title: "Ocean's Echo", author: "Everina Maxwell", genre: "Sci-Fi Romance", isFavorite: true },
  { title: "Age of Ash", author: "Daniel Abraham", genre: "Fantasy" },
  { title: "John Dies at the End", author: "David Wong", genre: "Horror" },
  { title: "The Man Made of Smoke", author: "Various", genre: "Fantasy", isFavorite: true },
  { title: "Book of Night", author: "Holly Black", genre: "Fantasy" },
  { title: "The Devils", author: "Various", genre: "Thriller" },
  { title: "Guards! Guards!", author: "Terry Pratchett", genre: "Fantasy" },
  { title: "The Goblin Emperor", author: "Katherine Addison", genre: "Fantasy", isFavorite: true },
  { title: "Witness for the Dead", author: "Katherine Addison", genre: "Fantasy" },
  { title: "Grief of Stones", author: "Katherine Addison", genre: "Fantasy" },
  { title: "Death in the Spires", author: "KJ Charles", genre: "Mystery", isDNF: true },
  { title: "The Rook", author: "Daniel O'Malley", genre: "Fantasy", isFavorite: true },
  { title: "Stiletto", author: "Daniel O'Malley", genre: "Fantasy" },
  { title: "Sorcery and Small Magics", author: "Various", genre: "Fantasy" },
  { title: "The Last Vigilante", author: "Various", genre: "Fantasy" },
  { title: "Of Monsters and Mainframes", author: "Various", genre: "Fantasy" },
  { title: "A Taste of Gold and Iron", author: "Alexandra Rowland", genre: "Fantasy Romance" },

  // ===== SCI-FI =====
  { title: "All Systems Red", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Artificial Condition", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Rogue Protocol", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Exit Strategy", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Network Effect", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Fugitive Telemetry", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Murderbot #7", author: "Martha Wells", genre: "Sci-Fi" },
  { title: "Station 11", author: "Emily St. John Mandel", genre: "Sci-Fi" },
  { title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi" },
  { title: "Mickey 7", author: "Edward Ashton", genre: "Sci-Fi", isFavorite: true },
  { title: "Antimatter Blues", author: "Edward Ashton", genre: "Sci-Fi" },
  { title: "Light Chaser", author: "Peter F. Hamilton", genre: "Sci-Fi", isFavorite: true },
  { title: "The Wild Robot", author: "Peter Brown", genre: "Sci-Fi" },
  { title: "The Stars, Like Dust", author: "Isaac Asimov", genre: "Sci-Fi" },
  { title: "Annihilation", author: "Jeff VanderMeer", genre: "Sci-Fi" },
  { title: "The President's Brain is Missing", author: "John Scalzi", genre: "Sci-Fi" },
  { title: "Illuminae", author: "Amie Kaufman", genre: "Sci-Fi" },
  { title: "A Memory Called Empire", author: "Arkady Martine", genre: "Sci-Fi" },
  { title: "A Desolation Called Peace", author: "Arkady Martine", genre: "Sci-Fi", isReread: true },
  { title: "Dark Matter", author: "Blake Crouch", genre: "Sci-Fi", isReread: true },
  { title: "Wool", author: "Hugh Howey", genre: "Sci-Fi" },
  { title: "Silo #2 (Shift)", author: "Hugh Howey", genre: "Sci-Fi" },
  { title: "Dead Silence", author: "S.A. Barnes", genre: "Sci-Fi Horror", isDNF: true },
  { title: "The Rage of Dragons", author: "Evan Winter", genre: "Fantasy", isDNF: true },

  // ===== ROMANCE =====
  { title: "The Right Move", author: "Liz Tomforde", genre: "Romance" },
  { title: "Act Your Age, Eve Brown", author: "Talia Hibbert", genre: "Romance" },
  { title: "Nora Goes Off Script", author: "Annabel Monaghan", genre: "Romance" },
  { title: "Summer Romance", author: "Various", genre: "Romance" },
  { title: "Same Time Next Summer", author: "Annabel Monaghan", genre: "Romance" },
  { title: "Two Can Play", author: "Various", genre: "Romance" },
  { title: "Beach Read", author: "Emily Henry", genre: "Romance" },
  { title: "Book Lovers", author: "Emily Henry", genre: "Romance" },
  { title: "Emily Wilde #1", author: "Heather Fawcett", genre: "Fantasy Romance" },
  { title: "Emily Wilde #2", author: "Heather Fawcett", genre: "Fantasy Romance" },
  { title: "You Deserve Each Other", author: "Sarah Hogle", genre: "Romance" },
  { title: "Romantic Comedy", author: "Curtis Sittenfeld", genre: "Romance" },
  { title: "A Lady Awakened", author: "Cecilia Grant", genre: "Historical Romance" },
  { title: "A Gentleman Undone", author: "Cecilia Grant", genre: "Historical Romance" },
  { title: "Not in Love", author: "Ali Hazelwood", genre: "Romance" },
  { title: "Heated Rivalry", author: "Rachel Reid", genre: "Sports Romance", isFavorite: true },
  { title: "Role Model", author: "Rachel Reid", genre: "Sports Romance" },
  { title: "The Long Game", author: "Rachel Reid", genre: "Sports Romance" },
  { title: "Tough Guy", author: "Rachel Reid", genre: "Sports Romance" },
  { title: "CU Hockey #3", author: "Eden Finley", genre: "Sports Romance" },
  { title: "CU Hockey #4", author: "Eden Finley", genre: "Sports Romance" },
  { title: "CU Hockey #5", author: "Eden Finley", genre: "Sports Romance" },
  { title: "Face Offs and Cheap Shots", author: "Eden Finley", genre: "Sports Romance" },
  { title: "Fake Out", author: "Eden Finley", genre: "Sports Romance" },
  { title: "Big Bad Wolf #1", author: "Various", genre: "Romance" },
  { title: "Big Bad Wolf #2", author: "Various", genre: "Romance" },
  { title: "Big Bad Wolf #3", author: "Various", genre: "Romance" },
  { title: "Big Bad Wolf #4", author: "Various", genre: "Romance" },
  { title: "Big Bad Wolf #5", author: "Various", genre: "Romance" },
  { title: "Icebreaker", author: "Hannah Grace", genre: "Sports Romance" },
  { title: "Captive Prince", author: "C.S. Pacat", genre: "Fantasy Romance" },
  { title: "Prince's Gambit", author: "C.S. Pacat", genre: "Fantasy Romance" },
  { title: "Kings Rising", author: "C.S. Pacat", genre: "Fantasy Romance" },
  { title: "Good Omens", author: "Neil Gaiman", genre: "Fantasy" },
  { title: "Starling House", author: "Alix E. Harrow", genre: "Fantasy", isReread: true },
  { title: "Hemlock and Silver", author: "Various", genre: "Fantasy Romance" },
  { title: "Problematic Summer Romance", author: "Various", genre: "Romance" },
  { title: "Too Old for This", author: "Various", genre: "Romance" },
  { title: "Isaac Steele and the Forever Man", author: "Various", genre: "Romance" },
  { title: "His Cocky Valet", author: "Various", genre: "Romance" },
  { title: "Not Catching Love", author: "Various", genre: "Romance" },
  { title: "Time to Shine", author: "Rachel Reid", genre: "Sports Romance" },
  { title: "Pack of Lies", author: "Various", genre: "Romance" },
  { title: "Slippery Creatures", author: "KJ Charles", genre: "Historical Romance" },
  { title: "The Dutch House", author: "Ann Patchett", genre: "Literary Fiction" },
  { title: "The Business Trip", author: "Various", genre: "Romance" },
  { title: "Headstrong", author: "Various", genre: "Romance" },
  { title: "The Secret Lives of Country Gentlemen", author: "KJ Charles", genre: "Historical Romance", isDNF: true },
  { title: "Rose in Chains", author: "Various", genre: "Romance" },
  { title: "The Marriage Portrait", author: "Maggie O'Farrell", genre: "Historical Fiction" },
  { title: "Wolfsong", author: "TJ Klune", genre: "Fantasy Romance", isDNF: true },
  { title: "The Knight and the Moth", author: "Various", genre: "Romance", isDNF: true },

  // ===== LITERARY FICTION =====
  { title: "Everything I Never Told You", author: "Celeste Ng", genre: "Literary Fiction" },
  { title: "Blue Sisters", author: "Coco Mellors", genre: "Literary Fiction", isFavorite: true },
  { title: "The Favorites", author: "Various", genre: "Thriller", isFavorite: true },
  { title: "Fighting Words", author: "Various", genre: "Literary Fiction" },
  { title: "Open Throat", author: "Henry Hoke", genre: "Literary Fiction" },
  { title: "A Calamity of Souls", author: "David Baldacci", genre: "Historical Fiction" },
  { title: "Notes on Your Sudden Disappearance", author: "Alison Espach", genre: "Literary Fiction" },
  { title: "Not a Love Song", author: "Various", genre: "Literary Fiction" },
  { title: "The River Has Roots", author: "Various", genre: "Literary Fiction" },
  { title: "Rebecca", author: "Daphne du Maurier", genre: "Classic" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Classic" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", genre: "Classic" },
  { title: "The Life We Bury", author: "Allen Eskens", genre: "Thriller" },
  { title: "These Silent Woods", author: "Kimi Cunningham Grant", genre: "Thriller" },
  { title: "Beautiful Ugly", author: "Various", genre: "Literary Fiction" },
  { title: "The Salt Grows Heavy", author: "Cassandra Khaw", genre: "Horror" },
  { title: "The Failures", author: "Various", genre: "Literary Fiction", isFavorite: true },
  { title: "Open Season", author: "C.J. Box", genre: "Thriller" },
  { title: "Dead Until Dark", author: "Charlaine Harris", genre: "Fantasy" },
  { title: "Mad Honey", author: "Jodi Picoult", genre: "Literary Fiction" },
  { title: "The Evocations", author: "Various", genre: "Fantasy" },
  { title: "My Sister's Keeper", author: "Jodi Picoult", genre: "Literary Fiction", notes: "SOBBING" },
  { title: "The School for Good Mothers", author: "Jessamine Chan", genre: "Literary Fiction" },
  { title: "Small Game", author: "Blair Braverman", genre: "Thriller" },
  { title: "Shroud", author: "Various", genre: "Thriller" },
  { title: "One Day This Will All Be Yours", author: "Various", genre: "Literary Fiction" },
  { title: "My Friends", author: "Hisham Matar", genre: "Literary Fiction", isFavorite: true },
  { title: "Anxious People", author: "Fredrik Backman", genre: "Literary Fiction" },
  { title: "The Butcher Game", author: "Alaina Urquhart", genre: "Thriller" },
  { title: "The Butcher and the Wren", author: "Alaina Urquhart", genre: "Thriller" },
  { title: "Hidden Nature", author: "Various", genre: "Non-Fiction" },
  { title: "Unfit to Print", author: "Various", genre: "Mystery" },
  { title: "P.S. I Spook You", author: "Various", genre: "Fantasy" },
  { title: "Pet", author: "Various", genre: "Literary Fiction" },
  { title: "Good 11", author: "Various", genre: "Literary Fiction" },
  { title: "You Will Never Be Me", author: "Various", genre: "Thriller" },
  { title: "Anju Kills a King", author: "Various", genre: "Fantasy" },
  { title: "Cross My Heart", author: "Various", genre: "Thriller" },
  { title: "Great Big Beautiful Life", author: "Various", genre: "Literary Fiction", isFavorite: true },
  { title: "Famous Last Words", author: "Various", genre: "Mystery" },
  { title: "Atmosphere", author: "Various", genre: "Literary Fiction", isFavorite: true, notes: "Closest to shedding a tear" },
  { title: "Saint", author: "Various", genre: "Romance" },
  { title: "A Drop of Corruption", author: "Robert Jackson Bennett", genre: "Fantasy" },

  // ===== SPORTS/ALL FOR THE GAME =====
  { title: "The Foxhole Court", author: "Nora Sakavic", genre: "Sports Romance", isFavorite: true },
  { title: "The Raven King", author: "Nora Sakavic", genre: "Sports Romance" },
  { title: "The King's Men", author: "Nora Sakavic", genre: "Sports Romance", notes: "FUCK FUCK FUCK HOLY FUCKING SHOT I MIGHT NEVER RECOVER" },

  // ===== ADRIAN ENGLISH MYSTERIES =====
  { title: "Adrian English #1", author: "Josh Lanyon", genre: "Mystery Romance" },
  { title: "Adrian English #2", author: "Josh Lanyon", genre: "Mystery Romance" },
  { title: "Adrian English #3", author: "Josh Lanyon", genre: "Mystery Romance" },
  { title: "Adrian English #4", author: "Josh Lanyon", genre: "Mystery Romance" },
  { title: "Adrian English #5", author: "Josh Lanyon", genre: "Mystery Romance" },
  { title: "Adrian English #6", author: "Josh Lanyon", genre: "Mystery Romance" },

  // ===== HAZARD AND SOMERSET =====
  { title: "Hazard and Somerset #1", author: "Gregory Ashe", genre: "Mystery Romance" },
  { title: "Hazard and Somerset #2", author: "Gregory Ashe", genre: "Mystery Romance" },
  { title: "Hazard and Somerset #3", author: "Gregory Ashe", genre: "Mystery Romance" },
  { title: "Hazard and Somerset #4", author: "Gregory Ashe", genre: "Mystery Romance" },
  { title: "Hazard and Somerset #5", author: "Gregory Ashe", genre: "Mystery Romance" },
  { title: "Hazard and Somerset #6", author: "Gregory Ashe", genre: "Mystery Romance" },

  // ===== FANFICTION/ONLINE =====
  { title: "It's a Problem", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Missing Links", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "The Big Road Home", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Shutterbug 1-4", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "The Past Looks Different in the Rear View Mirror", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "An Average Day", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Die Free or Die a Failure", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Lessons in Cartography", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Quicksand", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "In My Defense I Have None", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Nine Weddings and No Funerals", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "I'm Not the Same As I Was", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "The Critical Chapter", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "The Sun Still Rises", author: "Online", genre: "Fanfiction", isFanfic: true, pages: 650000, notes: "650k words!" },
  { title: "Blood Spilled But None Wasted", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "All the Cookie Wrappers and the Empty Cups of Tea", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "The Heat Is On", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Digging for the Bones", author: "Online", genre: "Fanfiction", isFanfic: true, notes: "Sobbing" },
  { title: "Crime and Punishment (fic)", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Kill Your Darlings", author: "Online", genre: "Fanfiction", isFanfic: true, notes: "300k words in under 24 hours" },
  { title: "All Pain Is Practice", author: "Online", genre: "Fanfiction", isFanfic: true },
  { title: "Black Friday", author: "Online", genre: "Fanfiction", isFanfic: true },

  // ===== MISC REMAINING =====
  { title: "Sunrise on the Reaping", author: "Suzanne Collins", genre: "Dystopian" },
  { title: "The Dating Disaster", author: "Various", genre: "Romance" },
  { title: "Whit", author: "Various", genre: "Literary Fiction" },
  { title: "Water Moon", author: "Various", genre: "Fantasy", isDNF: true },
  { title: "Say You'll Remember Me", author: "Various", genre: "Romance" },
  { title: "Bury Our Bones in the Midnight Soil", author: "Various", genre: "Fantasy" },
  { title: "The Thirteenth Child", author: "Various", genre: "Fantasy", isDNF: true },
  { title: "Death Behind Every Door", author: "Various", genre: "Thriller", isDNF: true },
];

// Helper function to calculate stats
export function calculateStats(books: Book[]) {
  // Filter out DNF books for main stats
  const finishedBooks = books.filter(b => !b.isDNF);
  const totalBooks = finishedBooks.length;

  // Count genres
  const genreCounts: Record<string, number> = {};
  finishedBooks.forEach(book => {
    genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
  });

  // Count authors
  const authorCounts: Record<string, number> = {};
  finishedBooks.forEach(book => {
    if (book.author !== "Various" && book.author !== "Online") {
      authorCounts[book.author] = (authorCounts[book.author] || 0) + 1;
    }
  });

  // Find top genre
  const sortedGenres = Object.entries(genreCounts).sort(([,a], [,b]) => b - a);
  const topGenre = sortedGenres[0]?.[0] || "Unknown";

  // Find most-read author
  const sortedAuthors = Object.entries(authorCounts).sort(([,a], [,b]) => b - a);
  const topAuthor = sortedAuthors[0]?.[0] || "Unknown";

  // Favorites
  const favorites = finishedBooks.filter(b => b.isFavorite);

  // DNF count
  const dnfBooks = books.filter(b => b.isDNF);

  // Fanfic count
  const fanficBooks = finishedBooks.filter(b => b.isFanfic);

  // Reread count
  const rereadBooks = finishedBooks.filter(b => b.isReread);

  // Series stats
  const topSeries = getSeriesStats(finishedBooks).slice(0, 6);

  return {
    totalBooks,
    genreCounts,
    authorCounts,
    topGenre,
    topGenres: sortedGenres.slice(0, 5),
    topAuthor,
    topAuthors: sortedAuthors.slice(0, 5),
    favorites,
    favoritesCount: favorites.length,
    dnfCount: dnfBooks.length,
    fanficCount: fanficBooks.length,
    rereadCount: rereadBooks.length,
    topSeries,
  };
}
