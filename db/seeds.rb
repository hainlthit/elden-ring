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
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hero_class_elden_ring_wiki_guide_200px.png",
)
ErClass.create(
    name: "Bandit",
    level: 5,
    info: "Vigor 10, Dexterity 13, Intelligence 9, Mind 11, Endurance 10, Faith 8, Strength 9, Arcane 14,",
    weapons: "Great Knife, Shortbow, Buckler Shields, Sleepbone Arrows",
    image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandit_class_elden_ring_wiki_guide_200px.png",
)