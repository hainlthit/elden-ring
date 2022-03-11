# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# spells
Spell.create(
    spellname: "Agheel's Flame", 
    spelltype: "Incantation", 
    effect: "Spews flame breath on heel from above", 
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/agheels_flame_incantation_elden_ring_wiki_guide_200px.png", 
    fp: 36 
)

Spell.create(
    spellname: "Adula's Moonblade", 
    spelltype: "Sorcery", 
    effect: "Sweeping slash followed by cold blade projectile", 
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/adulas_moonblade_sorcery_elden_ring_wiki_guide_200px.png", 
    fp: 26 
)

# classes
ErClass.create(
    name: "Hero",
    level: 7,
    info: "Vigor 14, Dexterity 9, Intelligence 7, Mind 9, Endurance 12, Faith 8, Strength 16, Arcane 11,",
    weapons: "Leather Shield, Battle Axe",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hero_class_elden_ring_wiki_guide_200px.png"
)
ErClass.create(
    name: "Astrologer",
    level: 6,
    info: "Vigor 9, Dexterity 12, Mind 15, Intelligence 16, Endurance 9, Faith 7, Strength 8 	Arcane 9,",
    weapons: "Short Sword Astrologer's Staff Scripture Wooden Shield ",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologer_class_elden_ring_wiki_guide_200px.png"
)

ErClass.create(
    name: "Bandit",
    level: 5,
    info: "Vigor 10, Dexterity 13, Intelligence 9, Mind 11, Endurance 10, Faith 8, Strength 9, Arcane 14,",
    weapons: "Great Knife, Shortbow, Buckler Shields, Sleepbone Arrows",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandit_class_elden_ring_wiki_guide_200px.png"
)

ErClass.create(
    name: "Warrior",
    level: 16,
    info: "Vigor 11, Dexterity 16, Intelligence 10, Mind 12, Endurance 11, Faith 8, Strength 10, Arcane 9,",
    weapons: "Two Scimitars and a Riveted Wooden Shield ",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warrior_class_elden_ring_wiki_guide_200px.png"
)

ErClass.create(
    name: "Prisoner",
    level: 9,
    info: "A prisoner bound in an iron mask. Studied in glintstone sorcery, having lived among the elite prior to sentencing.",
    weapons: "Magic Glintblade, Estoc, Glintstone Staff, Rift Shield",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prisoner_class_elden_ring_wiki_guide_270px.png"
)

ErClass.create(
    name: "Confessor",
    level: 10,
    info: "A church spy adept at covert operations. Equally adept with a sword as they are with incantations",
    weapons: "Urgent Heal, Assassin's Approach, Broadsword, Finger Seal, Blue Crest Heater Shield",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/confessor_class_elden_ring_wiki_guide_270px.png"
)

ErClass.create(
    name: "Wretch",
    level: 1,
    info: "As poor, purposeless and naked as they day they were born. A nice club is all they have.",
    weapons: "club",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wretch_class_elden_ring_wiki_guide_270px.png"
)

ErClass.create(
    name: "Vagabond",
    level: 9,
    info: "A knight exiled from their homeland to wander. A solid, armor-clad origin",
    weapons: "Longsword, Halberd, Heater Shield",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vagabond_class_elden_ring_wiki_guide_270px.png"
)

ErClass.create(
    name: "Prophet",
    level: 7,
    info: "A seer ostracized for inauspicious prophecies. Well versed in healing incantations",
    weapons: "Heal, Catch Flame, Short Spear, Finger Seal, Rickety Shield",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prophet_class_elden_ring_wiki_guide_270px.png"
)

ErClass.create(
    name: "Samurai",
    level: 9,
    info: "A capable fighter from the distant land of reeds. Handy with Katana and Longbows.",
    weapons: "Uchigatana, Longbow, Arrow, Fire Arrow, Red Thorn Roundshield",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/samurai_class_elden_ring_wiki_guide_270px.png"
)

#skills
Skill.create(
    skill_name: "BUCKLER PARRY",
    skill_type: "Regular",
    equipment: "Buckler",
    fp: "none",
    effect: "This skill allows you to parry with your shield on your right hand, and performs it a lot faster than a regular parry.",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/buckler-parry-skill-elden-ring-wiki-guide.jpg"
)

Skill.create(
    skill_name: "SQUARE OFF",
    skill_type: "Regular",
    equipment: "Longsword",
    fp: "8/12",
    effect: "Slash up through enemy guards with a normal attack, or run and thrust with a strong attack.",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/square-off-skill-elden-ring-wiki-guide.jpg"
)

# profiles
Profile.create(
    username: "1234",
    color1: "#34ebbd",
    color2: "#7434eb"
)

Profile.create(
    username: "ilolo",
    color1: "#309421",
    color2: "#d44654"
)

Profile.create(
    username: "hain",
    color1: "#eb3483",
    color2: "##38260a"
)

Profile.create(
    username: "test",
    color1: "#34c3eb",
    color2: "#eba434"
)

# users
User.create(
    username: "1234",
    is_admin: false,
    profile_id: 1,
    password: "1234"
)

User.create(
    username: "ilolo",
    is_admin: true,
    profile_id: 2,
    password: "1234"
)

User.create(
    username: "hain",
    is_admin: true,
    profile_id: 3,
    password: "1234"
)

User.create(
    username: "test",
    is_admin: false,
    profile_id: 4,
    password: "1234"
)

# comments
Comment.create(
    message: "awesome!",
    user_id: 1
)

Comment.create(
    message: "absolutely insane",
    user_id: 2
)

Comment.create(
    message: "33.33 chance I finish this game, repeating of course",
    user_id: 3
)

Comment.create(
    message: "so gnarly XD",
    user_id: 2
)

Comment.create(
    message: "WoW!!!",
    user_id: 3
)

Comment.create(
    message: "amazing, like seriously amazing!",
    user_id: 3
)

Comment.create(
    message: "idk... it's too hard to play for me.",
    user_id: 4
)