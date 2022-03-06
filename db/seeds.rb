# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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