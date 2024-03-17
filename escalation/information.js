const moment  = require("moment-timezone");
require("moment-duration-format");

//Require module for String Similarity
const stringSimilarity = require('string-similarity')

//For finding files in directory
const fs = require("fs");
const path = require("path");

// Getting updated config.json file
let dir = __dirname.split(`\\`).slice(-2)[0]
if(dir == "SleekHunters") config = require("../config.json")
if(dir !== "SleekHunters") config = require(`/home/electrocute4u/bot/config.json`)

const logger = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/logger`)

var searchRecursive = function(dir, pattern) {
  // This is where we store pattern matches of all files inside the directory
  var results = [];

  // Read contents of directory
  fs.readdirSync(dir).forEach(function (dirInner) {
    // Obtain absolute path
    dirInner = path.resolve(dir, dirInner);

    // Get stats to determine if path is a directory or a file
    var stat = fs.statSync(dirInner);

    // If path is a directory, scan it and combine results
    if (stat.isDirectory()) {
      results = results.concat(searchRecursive(dirInner, pattern));
    }

    // If path is a file and ends with pattern then push it onto results
    if (stat.isFile() && dirInner.endsWith(pattern)) {
      results.push(dirInner);
    }
  });

  return results;
};

const { stripIndents } = require("common-tags");

module.exports = {
  /**
   * Finds emote based on modifier name or returns empty string
   * 
   * @param {String} emoteName The Excel Serial Number
   * @returns {String} Returns the emote if it exists from emoteName
   */

 findEmoji: function(emoteName) {
    let search = emoteName.replace(/ /gi, "_").toLowerCase()
    let emote

    if(search == "behemoths_blitz") emote = "<:behemoths_blitz:1125462873896923136>"
    if(search == "bleedout_vines") emote = "<:bleedout_vines:1125463387288129566>"
    if(search == "combustion") emote = "<:combustion:1125460487795126403>"
    if(search == "deadly") emote = "<:deadly:1125463700929785867>"
    if(search == "deep_freeze") emote = "<:deep_freeze:1125460986091012227>"
    if(search == "desperation") emote = "<:desperation:1125463690989285456>"
    if(search == "electrify") emote = "<:electrify:1125458014195945492>"
    if(search == "flaming_tail") emote = "<:flaming_tail:1125462468047675523>"
    if(search == "fortifications") emote = "<:fortifications:1125460037830185032>"
    if(search == "frigid_touch") emote = "<:frigid_touch:1125460798660165724>"
    if(search == "icy_grave") emote = "<:icy_grave:1125461917490749520>"
    if(search == "fury") emote = "<:fury:1125463111420346568>"
    if(search == "incandescent_incarceration") emote = "<:incandescent_incarceration:1125462698302390325>"
    if(search == "inferno") emote = "<:inferno:1125460221083537408>"
    if(search == "jagged") emote = "<:jagged:1125462094280654929>"
    if(search == "last_stand") emote = "<:last_stand:1125459539710451732>"
    if(search == "momentum") emote = "<:momentum:1125461707255451678>"
    if(search == "one_chance") emote = "<:one_chance:1125459824168161401>"
    if(search == "poison_blood") emote = "<:poison_blood:1125463397044064326>"
    if(search == "thick_skull") emote = "<:thick_skull:1125462470077731031>"
    if(search == "tough_hide") emote = "<:tough_hide:1125461507208130680>"
    if(search == "umbral_instability") emote = "<:umbral_instability:1125461472428957736>"

    if(search == "shock") emote = "<:shock:1217307773742874694>"
    if(search == "blaze") emote = "<:blaze:1217307766197190686> "
    if(search == "umbral") emote = "<:umbral:1217307776544669696>"
    if(search == "terra") emote = "<:terra:1217307775043113071>"
    if(search == "frost") emote = "<:frost:1217307767816196177>"
    if(search == "radiant") emote = "<:radiant:1217307770487967784>"

    if(search == "heroic_merits") emote = "<:heroic_merits:1217609291687526512>"
    if(search == "combat_merits") emote = "<:combat_merits:1217609290886549645>"
    if(search == "rams") emote = "<:rams:1217609258015916246>"
    if(search == "aethersparks") emote = "<:aethersparks:1217609096329695262>"

    if(search == "alacrity") emote = "<:alacrity:1218279965791883456>"
    if(search == "brutality") emote = "<:brutality:1218279966882402304>"
    if(search == "finesse") emote = "<:finesse:1218279968073846875>"
    if(search == "fortitude") emote = "<:fortitude:1218279969604767906>"
    if(search == "insight") emote = "<:insight:1218279970791620618>"
    if(search == "prismatic") emote = "<:prismatic:1218279971894857949>"

    if(search == "head") emote = "<:head:1218284902525571123>"
    if(search == "torso") emote = "<:torso:1218286783754670081>"
    if(search == "arms") emote = "<:arms:1218286781766701176>"
    if(search == "legs") emote = "<:legs:1218286782723133451>"

    if(search == "aetherheart") emote = "<:aetherheart:1218290212887724032>"
    if(search == "peerless_stormplate") emote = "<:peerless_stormplate:1218289933307875358>"
    if(search == "shard_of_the_eternal_storm") emote = "<:shard_of_the_eternal_storm:1218289935027802122>"
    if(search == "resistance") emote = "<:resistance:1218297920017793135>"
    if(search == "molten_morsel") emote = "<:molten_morsel:1218301981848895579>"
    if(search == "rampaging_shard") emote = "<:rampaging_shard:1218301984373997598>"
    if(search == "warped_chitin") emote = "<:warped_chitin:1218306228749471816>"
    if(search == "uncanny_scale") emote = "<:uncanny_scale:1218306227138986016>"
    if(search == "toxic_branch") emote = "<:toxic_branch:1218319249907519560>"
    if(search == "ironroot_shard") emote = "<:ironroot_shard:1218319248821194862>"
    if(search == "hunters_claw") emote = "<:hunters_claw:1218321892260450485>"
    if(search == "iceheart_shard") emote = "<:iceheart_shard:1218321890540785784>"
    if(search == "golden_heart") emote = "<:golden_heart:1218324135462047957>"
    if(search == "sunburst_shard") emote = "<:sunburst_shard:1218324134321193000>"
    if(search == "power") emote = "<:power:1218360461582405702>"

    if(search == "aether_strikers") emote = "<:aether_strikers:1218354037863354458>"
    if(search == "axe") emote = "<:axe:1218354039247343718>"
    if(search == "chain_blades") emote = "<:chain_blades:1218354040656760912>"
    if(search == "hammer") emote = "<:hammer:1218354041994612817>"
    if(search == "repeaters") emote = "<:repeaters:1218354043387384010>"
    if(search == "sword") emote = "<:sword:1218354044599533569>"
    if(search == "war_pike") emote = "<:war_pike:1218354045677211768>"

    if(!emote) return ""
    else if (emote !== undefined) return `${emote} `
},
  /**
   * Finds emote based on modifier name or returns empty string
   * 
   * @param {String} element The element to search for
   * @returns {String} Returns a color code corrosponding with the element
   */
  findcolorcode: function(element) {
    element = element.toLowerCase()
    const shock = `#67ace0`
    const blaze = `#ed5537`
    const umbral = `#6b37ed`
    const terra = `#33cc5c`
    const frost = `#37cfed`
    const radiant = `#d5ebf0`

    // Return correct color code if element match
    if(element == "shock") return shock
    if(element == "blaze") return blaze
    if(element == "umbral") return umbral
    if(element == "terra") return terra
    if(element == "frost") return frost
    if(element == "radiant") return radiant

  },

  /**
   * Finds the element's legendary keystone behemoth name
   * 
   * @param {String} element The element to search for
   * @returns {String} Returns the element's legendary keystone behemoth name
   */
  
  findelementlegendary: function(element) {
    element = element.toLowerCase()
    const shock = `malkarion`
    const blaze = `torgodoro`
    const umbral = `thrax`
    const terra = `agarus`
    const frost = `urska`
    const radiant = `chronovore`

    // Return correct keystone/legendary behemoth name if element match
    if(element == "shock") return shock
    if(element == "blaze") return blaze
    if(element == "umbral") return umbral
    if(element == "terra") return terra
    if(element == "frost") return frost
    if(element == "radiant") return radiant

  },

  /**
   * Finds the element's lore
   * 
   * @param {String} element The element to search for
   * @returns {String} Returns the element's lore
   */

  findlorebyelement: function(element) {
    element = element.toLowerCase()

    const shock = `Slayers who prove their worth in Shock Escalation will earn the right to take on a Malkarion —a quick-striking, aerial menace with the power of lightning at its call. With the ability to hover just out of range, this sky serpent will have you reaching deep to overcome its shock assaults.`
    const blaze = `Have you ever fought a volcano, Slayer? Because taking on a Torgadoro isn't far off. Even if you make it through their thick rock armour, there's still the matter of the lava underneath. And watch out for those hands; Torgadoros have been known to get a bit … grabby.`
    const umbral = `How far do the Umbral Deeps go? It's hard to say. But if you ever find yourself at the edge of a dark and shimmering pool — be alert. This is where Thraxes are known to feed. These cunning Behemoths use portals to hunt, striking through rifts with razor-sharp forelimbs and emerging from void-space to dive onto prey. Luring one into the open may be your best bet, but even this plan demands caution. Untreated, a Thrax's corrupting influence can leave a Slayer so drained that they can barely lift a finger — much less a weapon.`
    const terra = `Rot has pervaded the Arbourhome Blight, turning a once-verdant Farslayer refuge into a place of pestilence and poison. But there may yet be a way to cleanse it. Battle your way to the heart of the forest and root out the source of the infection: the fungal Behemoth boss, Agarus.`
    const frost = `The permafrost has begun to melt, revealing fragments of an ancient past ... and awakening something deep in the ice. Battle through Skaldeskar's frostbitten lands with the aid of its warrior queen, Linnea Silver, and seek out the Adversary of Vylmark: the bloodthirsty Urska.`
    const radiant = `Radiant aether is surging to uncontrollable levels as Orrery scientists attempt to claim Behemoth power as their own. Now, Behemoths from across the Shattered Isles are drawn to the surge, feeding on the aether and, in turn, being fed on by the surge's source: the soul reaping Chronovore.`
  
    // Return correct lore if element match
    if(element == "shock") return shock
    if(element == "blaze") return blaze
    if(element == "umbral") return umbral
    if(element == "terra") return terra
    if(element == "frost") return frost
    if(element == "radiant") return radiant
  
  },

  legendarySlogan: function(element) {
    element = element.toLowerCase()
    const shock = `Death From Above`
    const blaze = `Heat Warning`
    const umbral = `Into The Void`
    const terra = `Unchecked Growth`
    const frost = `Deep Freeze`
    const radiant = `Time's Up`
  
    // Return correct slogan if element match
    if(element == "shock") return shock
    if(element == "blaze") return blaze
    if(element == "umbral") return umbral
    if(element == "terra") return terra
    if(element == "frost") return frost
    if(element == "radiant") return radiant
  
  },

  /**
   * Finds the element's legendary keystone attack patterns
   * 
   * @param {String} element The element to search for
   * @returns {String} Returns the element's legendary keystone attack patterns
   */

findAttackPatterns(element) {
element = element.toLowerCase()

const shock = 
stripIndents`Malkarion opens the fight by flying in the air upon entering the area and then slamming down. If you got enough movement speed, you can bug it out if you stand directly underneath it. It will continue to circle around the spot until the player is a short distance away. The danger meter will not start until Malkarion slammed onto the ground and this process can be interrupted with a tempest part break and if timed, can easily make for a easy 0% malk run.
# Attack Patterns:
## Charge Attacks: 
Malkarion can charge at players, covering large distances quickly. The first charge is not interruptable when it charges and creates vents on the ground. But the second followup is however interruptable. If a slayer is caught in its interruptable path, they will be eaten, dealing enough damage can interrupt it and save the slayer.
### Heroic version:\n When creating vents in the Heroic version, it will also spawn red lighting towers and cloaks itself in lighting that will damage the slayer on contact in a small AoE around it during the charge.
## Tail Swipes: 
Malkarion may perform tail swipes to attack players behind it. These swipes can cover a wide arc and deal damage to anyone caught in their path. It also will swing around and stay idle for a few before reversing, during this idle time, its head is easily exposed for all weapons to hit it.
## Lightning Orbs: 
Malkarion may release orbs of lightning that travel along the ground or bounce between players. These orbs can deal damage upon impact and may inflict status effects such as shock. The balls can be either big or small
### Heroic version:\n In the heroic version they are much faster and comes in much greater numbers.
## Electric Aura (charging up state): 
Malkarion can surround itself with an electric aura, damaging any players who come into contact with it. This aura may persist for a short duration and requires players to maintain their distance until it dissipates.
## Flight: 
Malkarion can take flight, allowing it to perform aerial attacks. These attacks may include swoops, dives, or ranged lightning attacks from the air.`
const blaze = 
stripIndents`Torgodoro comes slamming down and lands in the middle just besides the Aether Vent, this creates for a good opportunity to refresh any Tempest stacks, build Inner Fire or generally Perry the attack. There is also a neat trick that if you stand just at the very bottom of the cliff while entering, Torgodoro will then, in most cases, start its Tornado spinning move and you can get a early interrupt.
# Attack Patterns:
## Punches and Slams: 
Torgadoro primarily uses its massive fists to deliver powerful punches and slams. These attacks can cause significant damage and knockback to players caught in their path.
## Rock Throws: 
Torgadoro can pick up and throw large rocks at players from a distance. These rocks can deal area-of-effect damage upon impact and may cause knockdowns.
## Fire Breath: 
Torgadoro may breathe fire in a cone-shaped area in front of it, dealing fire damage to anyone caught within the range of the attack. This attack may also leave behind burning pools of fire on the ground.
## Ground Pound: 
Torgadoro can slam its fists into the ground, causing shockwaves that travel outward and deal damage to nearby players. This attack happens when its HP reaches below half. When it slams the ground it will damage any slayer near it, or if you get too close to it when its about to release the shockwave(s).
### Heroic version:\n In the Heroic version, it has two back to back shockwaves.
## Enrage Mode:
When Torgadoro becomes enraged, its attacks may become more frequent and powerful. It may also gain new abilities or variations of existing attacks.
## Rage Lava Fists:
Torgodoro can strengten their fists if they get hurt with a brand new set of Lava Fists, destroying these will temporarily stun it for a brief moment. During its animation to get these, it will damage any slayers in a small AoE around during two phases of it.
## Charge Attacks: 
Torgadoro may charge at players with great speed, covering large distances. This attack can be difficult to dodge and may require players to anticipate its movements and position themselves accordingly.
## Spin Attack (Tornado):
Torgadoro may if players are too far away, either throw a rock or begin a Spin Attack, a heavy hit or a interruptable attack to its legs will interrupt it for a brief moment.`
const umbral = 
stripIndents`Thrax spawns in to the arena through a portal which is a fixed location
# Attack Patterns:
## Tail Strikes:
Thrax can swing its tail and body in a snake like motion at players in close range. These tail strikes and body can cover a wide arc and deal moderate damage to players caught within the attack range.
## Slams and Stomps:
Thrax may perform ground slams or stomps, causing shockwaves that travel outward from its position. Players need to dodge these shockwaves to avoid taking damage. 
## Teleport: 
Thrax may teleport, as long as a slayer is not riding it. When doing so it often follows up with a slam and a 360 degree tail whip that will cause AoE damage around it.
**Heroic version:** The animation is a bit different by having a small AoE shockwave when it lands, but it will still do a 360 degree tail whip around itself that causes moderate damage. If the slayer is too close, it will teleport the slayer right into its slam location just before it slams.
## Slide attack:
Thrax can do a slide attack at mid-range, during this phase, it can eat a slayer in it's path. Dealing enough damage when its eating a Slayer can stagger it and save the slayer within.
## Portals:
Thrax can teleport its limbs inside portals that can open up near slayers. 
### Heroic version:\n During the Aether-Phase in Heroic, it will continuesly put out teleports with limbs trying to hit any slayer nearby.
## Tail Whip Combo:
Thrax may execute a series of tail whip attacks, combining tail swings and spins to target players from different angles. This combo attack requires players to stay mobile and anticipate Thrax's movements to avoid taking damage.
## Enrage Mode:
When Thrax becomes enraged, its attacks may become faster and more aggressive. It may also gain access to new abilities or variations of existing attacks.
## Aether Phase:
Thrax can unleash a surge of Aether energy, temporarily enhancing its attacks and abilities. During this phase, Thrax will slide across the arena putting down lines of cursed pools. And will teleport back into the arena. This state will last for a minute or 2 before turning the arena back to normal.
## Charge Attacks:
Thrax may charge at players with great speed, covering a significant distance in an omnidirectional path. These charge attacks can deal heavy damage but in turn can be interrupted. This attack will not eat any slayer in it's path, but will rather damage them instead.`

const terra = 
stripIndents`Agarus will open up the fight the moment any slayer lands on the platform, by retracting all of its roots around itself inwards. During this phase, if you either teleport or have enough movement speed, you can get down on the arena to get 1-2 moments where you can get a tempest stack or perry/build inner fire. The tree roots will damage the slayer if a dodge is not timed perfectly..
## Spore Eruption:
Agarus releases spores into the air, causing them to explode upon impact with the ground. These eruptions create hazardous areas that deal poison damage and build up over time to players who remain within them.
## Root Slam:
Agarus slams its roots into the ground, creating roots that will extend to where the slayer stood when the initial attack started in a small green radius. Player's caught within these will be caught on fire and remain staggered for a few seconds.
## Piledriver Fist:
Agarus can ball one fist into a piledriver that shakes the earth and knocks all but the most agile Slayers off their feet. 
## Vine Whip:
Agarus swings its vines at players in close range. These whip attacks can deal damage and may knockback players who are hit.
## Enrage Mode:
When Agarus becomes enraged, its attacks may become faster and more aggressive.
## Toxic Mushrooms:
Toxic Mushrooms will spawn on the outskirts of the arena during times of high stress. Destroy these before they explode into poison pools, to create a vent to jump on top of the Behemoth. 
## Overgrowth:
Agarus will cause overgrowth when it reaches low HP and will cause a shockwave that sends slayers back and extends its roots to all sides of the arena usually seperating slayers. During this phase, it will continuesly heal by a small amount. Break all roots to stun it for a few seconds and prevent it from further healing. During this phase, green orbs will spawn that will automatically track any nearby slayers.
It's essential for players to observe Agarus's behavior, learn its attack patterns, and adapt their strategies accordingly to effectively hunt and defeat this Behemoth in Dauntless.`

const frost = 
stripIndents`Urska always appears from its cave, if you have Thrax Legendary or Malkarion Legendary, you can tp on top of the cave/directly to Urska when it appears, doing this after it appears will only push you down. During this phase, repeaters won't properly connect, but all other weapons and omnicells will register, allowing for early damage and best strategy for a 0% Urska run.
## Claw Swipe:
Urska swipes its massive claws at players in close range. These swipes can cover a wide area and deal moderate to high damage to players caught within their reach.
## Ice Breath:
Urska breathes a stream of icy breath in a cone-shaped area in front of it. This attack does not deal damage, but slows down movement speed while being pushed back.
## Rolling Charge:
Urska will occasionally charge players with great speed across the arena. During this phase, Urska can be interrupted.
## Ice Shard Barrage:
Urska can launch a barrage of ice shards into the air, which rain down on the battlefield. Players need to dodge these falling ice shards to avoid taking damage.
## Enrage Mode:
When Urska becomes enraged, its attacks may become faster and more aggressive. It may also gain access to new abilities or variations of existing attacks.
## Avalanche:
Urska triggers an avalanche, causing large chunks of ice to fall from above. Players need to avoid being hit by these falling ice chunks to prevent taking damage.
### Heroic version:\n In the Heroic version, when Urska jumps down from the ice spike it will cause a shockwave that damages slayers when Urska hits the ground and more ice spikes comes crashing down.
## Ice Spike Burst:
Urska summons spikes of ice from the ground, creating hazardous areas that deal damage over time to players who remain within them.
## Boon of the Scout: 
Urska can get one of 4 different [boons](<https://dauntless.fandom.com/wiki/Frost_Escalation#Boons>), the Boon of the Scout places a marked location on one of Urska's parts. This makes for a excelent location for a Tempest stack/Bastion or a perry to hit, for higher damage numbers.`

const radiant = 
stripIndents`Chronovore will for a brief moment just slowly move forward at the start. Use this short moment to setup a good Axe throw or use the oppertunity to get some early hits in, if you are looking to break a specific part.
## Tail Whip (behind):
Chronovore will spin around itself and then whip its tail in an arc behind it, one for each side, causing damage to any slayer it comes into contact with.
### Heroic version:\n The Heroic version will heal upon damaging slayers, but will also heal during other scenarios, so pay close attention to its Healthbar, as you can see when its healing or not. This makes for an annoying foe to battle against in the long haul, so prepare accordingly.
## Spining Fins:
Chronovore will spin around itself with its fins and hit anything near it.
## Tail Whip (front):
Chronovore will lift itself up slightly and whip its tail in an arc in front of itself causing damage to any slayer it comes into contact with.
## Circular Charge:
Chronvore will charge pretty fast in a circular motion extending itself tail, which will cause damage upon contact. This charge is not interruptable
## Interruptable Charge:
Chronovore will curv up into a ball, before leaping and charging a short distance ahead of itself. This attack is interruptable for a small window when it leaps. It will also create a vent which can be used to jump onto the behemoth.
## Prism Balls/Beams
Chronovore will curv up into a ball and release either a Prism ball at the slayer or shoot out a beam in front of it.
## Prism Leap:
Chronovore will spin up into the sky, creating light beams, standing near it will cause damage when it teleports. When it returns, it creates a prism wave on the ground and will dive straight to the ground, creating a powerful shockwave that damages the slayer. This also spawns powerups around the arena.
## Abduction Beam
Chronovore will spin up into the sky like during the Prism Leap, but this time it will teleport to a nearby slayer and create a light beam that transports a single slayer up into the air. This can be dodged if timed correctly. Slayers caught in its beam will suffer major damage.
## Lightshow
Chronovore will retract itself and raise up its head and put its fins next to its head protecting it. And then teleport away. When it reappears, it will teleport to a location and send prism balls and fall down to the ground creating prism waves that will trap any slayers in a Prism on contact. During this phase, the last phase he does it is interruptable. Upon failing to interrupt, it will charge up on the ground and create a powerful shockwave that damages slayers on contact.
### Heroic version:\n In the Heroic version, it will create multiple clones of itself which are fake, which also summons fake Prism balls and waves, the real ones still hits the slayer, so be aware. It will be briefly interruptable, and the clones does not have the interruptable markers, so pay attention!`

// Return correct attack pattern if element match
if(element == "shock") return shock
if(element == "blaze") return blaze
if(element == "umbral") return umbral
if(element == "terra") return terra
if(element == "frost") return frost
if(element == "radiant") return radiant
  
  },

  /**
   * Finds the element's keystone armor
   * 
   * @param {String} element The element to search for
   * @returns {String} Returns the element's keystone armor
   */

findArmorInfo: function(element) {
element = element.toLowerCase()

const shock = 
`> "Malkarions are supposed to be extinct. Should have known they were hiding out in the Maelstrom's heart."
# Malkarion Armor
You can **power surge** ${this.findEmoji("head")} ${this.findEmoji("torso")} ${this.findEmoji("arms")} and ${this.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("peerless_stormplate")}[Peerless Stormplate](<https://dauntless.fandom.com/wiki/Peerless_Stormplate>) **x5**
- ${this.findEmoji("shard_of_the_eternal_storm")}[Shard of the Eternal Storm](<https://dauntless.fandom.com/wiki/Shard_of_the_Eternal_Storm>) **x2**
## Armor Pieces:
### ${this.findEmoji("head")} **Head** - [Malkarion's Sight](<https://dauntless.fandom.com/wiki/Malkarion%27s_Sight>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("alacrity")} **Perk:** +2 [Grace](<https://dauntless.fandom.com/wiki/Grace>)
- ${this.findEmoji("alacrity")} **Cell Slot:** [Alacrity](<https://dauntless.fandom.com/wiki/Cells#Alacrity>)
### ${this.findEmoji("torso")} **Torso** - [Malkarion's Soul](<https://dauntless.fandom.com/wiki/Malkarion%27s_Soul>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("brutality")} **Perk:** +2 [Aetherhunter](<https://dauntless.fandom.com/wiki/Aetherhunter>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${this.findEmoji("arms")} **Arms** - [Malkarion's Grasp](<https://dauntless.fandom.com/wiki/Malkarion%27s_Grasp>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("finesse")} **Perk:** +2 [Predator](<https://dauntless.fandom.com/wiki/Predator>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${this.findEmoji("legs")} **Legs** - [Malkarion's March](<https://dauntless.fandom.com/wiki/Malkarion%27s_March>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("brutality")} **Perk:** +2 [Aetherhunter](<https://dauntless.fandom.com/wiki/Aetherhunter>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)`

const blaze = 
`> "A roar like that can break your courage like a fist to the heart."
# Torgodoro Armor
You can **power surge** ${this.findEmoji("head")} ${this.findEmoji("torso")} ${this.findEmoji("arms")} and ${this.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("molten_morsel")}[Molten Morsel](<https://dauntless.fandom.com/wiki/Molten_Morsel>) **x5**
- ${this.findEmoji("rampaging_shard")}[Rampaging Shard](<https://dauntless.fandom.com/wiki/Rampaging_Shard>) **x2**
## Armor Pieces:
### ${this.findEmoji("head")} **Head** - [Torgadoro's Apex](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Apex>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("insight")} **Perk:** +2 [Zeal](<https://dauntless.fandom.com/wiki/Zeal>)
- ${this.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${this.findEmoji("torso")} **Torso** - [Torgadoro's Core](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Core>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("brutality")} **Perk:** +2 [Knockout King](<https://dauntless.fandom.com/wiki/Knockout_King>)
- ${this.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${this.findEmoji("arms")} **Arms** - [Torgadoro's Brawn](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Brawn>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("brutality")} **Perk:** +2 [Overpower](<https://dauntless.fandom.com/wiki/Overpower>)
- ${this.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${this.findEmoji("legs")} **Legs** - [Torgadoro's Gait](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Gait>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("brutality")} **Perk:** +2 [Knockout King](<https://dauntless.fandom.com/wiki/Knockout_King>)
- ${this.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)`

const umbral = 
`> "Old [Arkan](<https://dauntless.fandom.com/wiki/Arkan_Drew>) said he's not even sure the Thrax is from our reality. The skin of the universe has been punctured far too many times by denizens of the Umbral Deeps, my dear [Markus](<https://dauntless.fandom.com/wiki/Markus_Boehr>).”
# Thrax Armor
You can **power surge** ${this.findEmoji("head")} ${this.findEmoji("torso")} ${this.findEmoji("arms")} and ${this.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("warped_chitin")}[Warped Chitin](<https://dauntless.fandom.com/wiki/Warped_Chitin>) **x5**
- ${this.findEmoji("uncanny_scale")}[Uncanny Scale](<https://dauntless.fandom.com/wiki/Uncanny_Scale>) **x2**
## Armor Pieces:
### ${this.findEmoji("head")} **Head** - [Thrax's Scream](<https://dauntless.fandom.com/wiki/Thrax%27s_Scream>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("insight")} **Perk:** +2 [Catalyst](<https://dauntless.fandom.com/wiki/Catalyst>)
- ${this.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${this.findEmoji("torso")} **Torso** - [Thrax's Shadow](<https://dauntless.fandom.com/wiki/Thrax%27s_Shadow>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("finesse")} **Perk:** +2 [Cunning](<https://dauntless.fandom.com/wiki/Cunning>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${this.findEmoji("arms")} **Arms** - [Thrax's Embrace](<https://dauntless.fandom.com/wiki/Thrax%27s_Embrace>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("fortitude")} **Perk:** +2 [Nine Lives](<https://dauntless.fandom.com/wiki/Nine_Lives>)
- ${this.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${this.findEmoji("legs")} **Legs** - [Thrax's Guile](<https://dauntless.fandom.com/wiki/Thrax%27s_Guile>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("finesse")} **Perk:** +2 [Cunning](<https://dauntless.fandom.com/wiki/Cunning>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)`

const terra = 
`> "The doc says she's never seen anything like the Agarus before. No one had, until it caught our Farslayer friends with their loincloths down. I can tell you one thing: I can see its spore trails from here."
# Agarus Armor
You can **power surge** ${this.findEmoji("head")} ${this.findEmoji("torso")} ${this.findEmoji("arms")} and ${this.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("toxic_branch")}[Toxic Branch](<https://dauntless.fandom.com/wiki/Toxic_Branch>) **x5**
- ${this.findEmoji("ironroot_shard")}[Ironroot Shard](<https://dauntless.fandom.com/wiki/Ironroot_Shard>) **x2**
## Armor Pieces:
### ${this.findEmoji("head")} **Head** - [Agaric Canopy](<https://dauntless.fandom.com/wiki/Agaric_Canopy>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("fortitude")} **Perk:** +2 [Parasitic](<https://dauntless.fandom.com/wiki/Parasitic>)
- ${this.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)
### ${this.findEmoji("torso")} **Torso** - [Agaric Bole](<https://dauntless.fandom.com/wiki/Agaric_Bole>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("fortitude")} **Perk:** +2 [Parasitic](<https://dauntless.fandom.com/wiki/Parasitic>)
- ${this.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${this.findEmoji("arms")} **Arms** - [Agaric Branches](<https://dauntless.fandom.com/wiki/Agaric_Branches>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("fortitude")} **Perk:** +2 [Sturdy](<https://dauntless.fandom.com/wiki/Sturdy>)
- ${this.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)
### ${this.findEmoji("legs")} **Legs** - [Agaric Roots](<https://dauntless.fandom.com/wiki/Agaric_Roots>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("fortitude")} **Perk:** +2 [Fortress](<https://dauntless.fandom.com/wiki/Fortress>)
- ${this.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)`

const frost = 
`> "l am called the queen of Skaldeskar, but there remain hidden caverns there steeped in cold, grim power where no human holds sway. Such places are ruled only by the Urska."
> — [Linnea Silver](<https://dauntless.fandom.com/wiki/Linnea_Silver>)
# Urska Armor
You can **power surge** ${this.findEmoji("head")} ${this.findEmoji("torso")} ${this.findEmoji("arms")} and ${this.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("hunters_claw")}[Hunter's Claw](<https://dauntless.fandom.com/wiki/Hunter%27s_Claw>) **x5**
- ${this.findEmoji("iceheart_shard")}[Iceheart Shard](<https://dauntless.fandom.com/wiki/Iceheart_Shard>) **x2**
## Armor Pieces:
### ${this.findEmoji("head")} **Head** - [Adversary's Guile](<https://dauntless.fandom.com/wiki/Adversary%27s_Guile>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("insight")} **Perk:** +2 [Cascade](<https://dauntless.fandom.com/wiki/Cascade>)
- ${this.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${this.findEmoji("torso")} **Torso** - [Adversary's Pride](<https://dauntless.fandom.com/wiki/Adversary%27s_Pride>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("insight")} **Perk:** +2 [Cascade](<https://dauntless.fandom.com/wiki/Cascade>)
- ${this.findEmoji("alacrity")} **Cell Slot:** [Alacrity](<https://dauntless.fandom.com/wiki/Cells#Alacrity>)
### ${this.findEmoji("arms")} **Arms** - [Adversary's Wrath](<https://dauntless.fandom.com/wiki/Adversary%27s_Wrath>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("insight")} **Perk:** +2 [Aetheric Evasion](<https://dauntless.fandom.com/wiki/Aetheric_Evasion>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${this.findEmoji("legs")} **Legs** - [Adversary's Drive](<https://dauntless.fandom.com/wiki/Adversary%27s_Drive>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("fortitude")} **Perk:** +2 [Guardian](<https://dauntless.fandom.com/wiki/Guardian>)
- ${this.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)`

const radiant = 
`> "We don't even know if the Chronovore's a single individual from a thousand different points in time, or an entire species swimming the timestream. Hell, before this I don't even know there was a 'timestream.' What else is Old Arkan keeping to himself?"
# Chronovore Armor
You can **power surge** ${this.findEmoji("head")} ${this.findEmoji("torso")} ${this.findEmoji("arms")} and ${this.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("golden_heart")}[Golden Heart](<https://dauntless.fandom.com/wiki/Golden_Heart>) **x5**
- ${this.findEmoji("sunburst_shard")}[Sunburst Shard](<https://dauntless.fandom.com/wiki/Sunburst_Shard>) **x2**
## Armor Pieces:
### ${this.findEmoji("head")} **Head** - [Chronohelm](<https://dauntless.fandom.com/wiki/Chronohelm>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("insight")} **Perk:** +2 [Zeal](<https://dauntless.fandom.com/wiki/Zeal>)
- ${this.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${this.findEmoji("torso")} **Torso** - [Chronoplate](<https://dauntless.fandom.com/wiki/Chronoplate>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("alacrity")} **Perk:** +2 [Grace](<https://dauntless.fandom.com/wiki/Grace>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${this.findEmoji("arms")} **Arms** - [Chronogrips](<https://dauntless.fandom.com/wiki/Chronogrips>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("finesse")} **Perk:** +2 [Pulse](<https://dauntless.fandom.com/wiki/Pulse>)
- ${this.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)
### ${this.findEmoji("legs")} **Legs** - [Chronotreads](<https://dauntless.fandom.com/wiki/Chronotreads>)
- ${this.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${this.findEmoji("finesse")} **Perk:** +2 [Pulse](<https://dauntless.fandom.com/wiki/Pulse>)
- ${this.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)`
          
// Return correct armor information if element match
if(element == "shock") return shock
if(element == "blaze") return blaze
if(element == "umbral") return umbral
if(element == "terra") return terra
if(element == "frost") return frost
if(element == "radiant") return radiant  
},

/**
 * Finds the element's keystone weapons
 * 
 * @param {String} element The element to search for
 * @returns {String} Returns the element's keystone weapons
 */

findWeaponInfo: function(element) {
element = element.toLowerCase()
    
const shock = 
`> "Malkarions are supposed to be extinct. Should have known they were hiding out in the Maelstrom's heart."
# Malkarion Weapons
You can **power surge** ${this.findEmoji("aether_strikers")} ${this.findEmoji("axe")} ${this.findEmoji("chain_blades")} ${this.findEmoji("hammer")} ${this.findEmoji("repeaters")} ${this.findEmoji("sword")} and ${this.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each part requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("peerless_stormplate")}[Peerless Stormplate](<https://dauntless.fandom.com/wiki/Peerless_Stormplate>) **x5**
- ${this.findEmoji("shard_of_the_eternal_storm")}[Shard of the Eternal Storm](<https://dauntless.fandom.com/wiki/Shard_of_the_Eternal_Storm>) **x2**
## Weapons:
### ${this.findEmoji("aether_strikers")} **Aether Strikers** - [Mistral Currents](<https://dauntless.fandom.com/wiki/Mistral_Currents>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("axe")} **Axe** - [Terminal Voltage](<https://dauntless.fandom.com/wiki/Terminal_Voltage>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("chain_blades")} **Chain Blades** - [Electric Cruelties](<https://dauntless.fandom.com/wiki/Electric_Cruelties>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("hammer")} **Hammer** - [Galvanic Impact](<https://dauntless.fandom.com/wiki/Galvanic_Impact>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("repeaters")} **Repeaters** - [Dynamic Deadlights](<https://dauntless.fandom.com/wiki/Dynamic_Deadlights>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("sword")} **Sword** - [Cyclonic Fury](<https://dauntless.fandom.com/wiki/Cyclonic_Fury>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("war_pike")} **War Pike** - [The Conductor](<https://dauntless.fandom.com/wiki/The_Conductor>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const blaze = 
`> "A roar like that can break your courage like a fist to the heart."
# Torgodoro Weapons
You can **power surge** ${this.findEmoji("aether_strikers")} ${this.findEmoji("axe")} ${this.findEmoji("chain_blades")} ${this.findEmoji("hammer")} ${this.findEmoji("repeaters")} ${this.findEmoji("sword")} and ${this.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("molten_morsel")}[Molten Morsel](<https://dauntless.fandom.com/wiki/Molten_Morsel>) **x5**
- ${this.findEmoji("rampaging_shard")}[Rampaging Shard](<https://dauntless.fandom.com/wiki/Rampaging_Shard>) **x2**
## Weapons:
### ${this.findEmoji("aether_strikers")} **Aether Strikers** - [Tectonic Faults](<https://dauntless.fandom.com/wiki/Tectonic_Faults>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("axe")} **Axe** - [Incinerator's Song](<https://dauntless.fandom.com/wiki/Incinerator%27s_Song>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("chain_blades")} **Chain Blades** - [Scorching Agonies](<https://dauntless.fandom.com/wiki/Scorching_Agonies>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("hammer")} **Hammer** - [Magma Quake](<https://dauntless.fandom.com/wiki/Magma_Quake>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("repeaters")} **Repeaters** - [Volcanic Eruptions](<https://dauntless.fandom.com/wiki/Volcanic_Eruptions>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("sword")} **Sword** - [The Cauterizer](<https://dauntless.fandom.com/wiki/The_Cauterizer>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("war_pike")} **War Pike** - [Pyroclastic Envoy](<https://dauntless.fandom.com/wiki/Pyroclastic_Envoy>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`
const umbral = 
`> "Old [Arkan](<https://dauntless.fandom.com/wiki/Arkan_Drew>) said he's not even sure the Thrax is from our reality. The skin of the universe has been punctured far too many times by denizens of the Umbral Deeps, my dear [Markus](<https://dauntless.fandom.com/wiki/Markus_Boehr>)."
# Thrax Weapons
You can **power surge** ${this.findEmoji("aether_strikers")} ${this.findEmoji("axe")} ${this.findEmoji("chain_blades")} ${this.findEmoji("hammer")} ${this.findEmoji("repeaters")} ${this.findEmoji("sword")} and ${this.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("warped_chitin")}[Warped Chitin](<https://dauntless.fandom.com/wiki/Warped_Chitin>) **x5**
- ${this.findEmoji("uncanny_scale")}[Uncanny Scale](<https://dauntless.fandom.com/wiki/Uncanny_Scale>) **x2**
## Weapons:
### ${this.findEmoji("aether_strikers")} **Aether Strikers** - [Fractured Realities](<https://dauntless.fandom.com/wiki/Fractured_Realities>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("axe")} **Axe** - [Mindsplitter](<https://dauntless.fandom.com/wiki/Mindsplitter)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("chain_blades")} **Chain Blades** - [Night Terrors](<https://dauntless.fandom.com/wiki/Night_Terrors>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("hammer")} **Hammer** - [Sanity Check](<https://dauntless.fandom.com/wiki/Sanity_Check>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("repeaters")} **Repeaters** - [Eldritch Torments](<https://dauntless.fandom.com/wiki/Eldritch_Torments>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("sword")} **Sword** - [Voidbane](<https://dauntless.fandom.com/wiki/Voidbane>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("war_pike")} **War Pike** - [The Apocalypse Needle](<https://dauntless.fandom.com/wiki/The_Apocalypse_Needle>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const terra = 
`> "The doc says she's never seen anything like the Agarus before. No one had, until it caught our Farslayer friends with their loincloths down. I can tell you one thing: I can see its spore trails from here."
# Agarus Weapons
You can **power surge** ${this.findEmoji("aether_strikers")} ${this.findEmoji("axe")} ${this.findEmoji("chain_blades")} ${this.findEmoji("hammer")} ${this.findEmoji("repeaters")} ${this.findEmoji("sword")} and ${this.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("toxic_branch")}[Toxic Branch](<https://dauntless.fandom.com/wiki/Toxic_Branch>) **x5**
- ${this.findEmoji("ironroot_shard")}[Ironroot Shard](<https://dauntless.fandom.com/wiki/Ironroot_Shard>) **x2**
## Weapons:
### ${this.findEmoji("aether_strikers")} **Aether Strikers** - [Agents of Decay](<https://dauntless.fandom.com/wiki/Agents_of_Decay>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("axe")} **Axe** - [Malignant Scourge](<https://dauntless.fandom.com/wiki/Malignant_Scourge)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("chain_blades")} **Chain Blades** - [Death Blossoms](<https://dauntless.fandom.com/wiki/Death_Blossoms>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("hammer")} **Hammer** - [Sanity Check](<https://dauntless.fandom.com/wiki/Unsteady_Ground>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("repeaters")} **Repeaters** - [Tainted Needles](<https://dauntless.fandom.com/wiki/Tainted_Needles>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("sword")} **Sword** - [Poisonous Thorn](<https://dauntless.fandom.com/wiki/Poisonous_Thorn>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("war_pike")} **War Pike** - [Parasitic Curse](<https://dauntless.fandom.com/wiki/Parasitic_Curse>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const frost = 
`> "l am called the queen of Skaldeskar, but there remain hidden caverns there steeped in cold, grim power where no human holds sway. Such places are ruled only by the Urska."
> — [Linnea Silver](<https://dauntless.fandom.com/wiki/Linnea_Silver>)
# Urska Weapons
You can **power surge** ${this.findEmoji("aether_strikers")} ${this.findEmoji("axe")} ${this.findEmoji("chain_blades")} ${this.findEmoji("hammer")} ${this.findEmoji("repeaters")} ${this.findEmoji("sword")} and ${this.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("hunters_claw")}[Hunter's Claw](<https://dauntless.fandom.com/wiki/Hunter%27s_Claw>) **x5**
- ${this.findEmoji("iceheart_shard")}[Iceheart Shard](<https://dauntless.fandom.com/wiki/Iceheart_Shard>) **x2**
## Weapons:
### ${this.findEmoji("aether_strikers")} **Aether Strikers** - [Ice Breakers](<https://dauntless.fandom.com/wiki/Ice_Breakers>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("axe")} **Axe** - [Permanent Frost](<https://dauntless.fandom.com/wiki/Permanent_Frost)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("chain_blades")} **Chain Blades** - [Blizzard's Teeth](<https://dauntless.fandom.com/wiki/Blizzard%27s_Teeth>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("hammer")} **Hammer** - [Bomb Cyclone](<https://dauntless.fandom.com/wiki/Bomb_Cyclone>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("repeaters")} **Repeaters** - [Cryo-Cannons](<https://dauntless.fandom.com/wiki/Cryo-Cannons>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("sword")} **Sword** - [Hypothermica](<https://dauntless.fandom.com/wiki/Hypothermica>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("war_pike")} **War Pike** - [Cold Hell](<https://dauntless.fandom.com/wiki/Cold_Hell>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const radiant = 
`> "We don't even know if the Chronovore's a single individual from a thousand different points in time, or an entire species swimming the timestream. Hell, before this I don't even know there was a 'timestream.' What else is Old Arkan keeping to himself?"
# The Chronovore Weapons
You can **power surge** ${this.findEmoji("aether_strikers")} ${this.findEmoji("axe")} ${this.findEmoji("chain_blades")} ${this.findEmoji("hammer")} ${this.findEmoji("repeaters")} ${this.findEmoji("sword")} and ${this.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${this.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${this.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${this.findEmoji("golden_heart")}[Golden Heart](<https://dauntless.fandom.com/wiki/Golden_Heart>) **x5**
- ${this.findEmoji("sunburst_shard")}[Sunburst Shard](<https://dauntless.fandom.com/wiki/Sunburst_Shard>) **x2**
## Weapons:
### ${this.findEmoji("aether_strikers")} **Aether Strikers** - [Chaos & Entropy](<https://dauntless.fandom.com/wiki/Chaos_%26_Entropy>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("axe")} **Axe** - [Existential Crisis](<https://dauntless.fandom.com/wiki/Existential_Crisis)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("chain_blades")} **Chain Blades** - [The Weeping Hours](<https://dauntless.fandom.com/wiki/The_Weeping_Hours>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("hammer")} **Hammer** - [History's Burden](<https://dauntless.fandom.com/wiki/History%27s_Burden>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("repeaters")} **Repeaters** - [Temporal Mechanics](<https://dauntless.fandom.com/wiki/Temporal_Mechanics>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("sword")} **Sword** - [Edge of Tomorrow](<https://dauntless.fandom.com/wiki/Edge_of_Tomorrow>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${this.findEmoji("war_pike")} **War Pike** - [Millennium's End](<https://dauntless.fandom.com/wiki/Millennium%27s_End>)
- ${this.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${this.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`
          
// Return correct slogan if element match
if(element == "shock") return shock
if(element == "blaze") return blaze
if(element == "umbral") return umbral
if(element == "terra") return terra
if(element == "frost") return frost
if(element == "radiant") return radiant
          
},

}