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
   * Finds color code based on element
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

// Deleting and reacquiring emojis from external file
delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/utils/emoji`)];
const emoji = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/utils/emoji`)

const shock = 
`> "Malkarions are supposed to be extinct. Should have known they were hiding out in the Maelstrom's heart."
# Malkarion Armor
You can **power surge** ${emoji.findEmoji("head")} ${emoji.findEmoji("torso")} ${emoji.findEmoji("arms")} and ${emoji.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("peerless_stormplate")}[Peerless Stormplate](<https://dauntless.fandom.com/wiki/Peerless_Stormplate>) **x5**
- ${emoji.findEmoji("shard_of_the_eternal_storm")}[Shard of the Eternal Storm](<https://dauntless.fandom.com/wiki/Shard_of_the_Eternal_Storm>) **x2**
## Armor Pieces:
### ${emoji.findEmoji("head")} **Head** - [Malkarion's Sight](<https://dauntless.fandom.com/wiki/Malkarion%27s_Sight>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("alacrity")} **Perk:** +2 [Grace](<https://dauntless.fandom.com/wiki/Grace>)
- ${emoji.findEmoji("alacrity")} **Cell Slot:** [Alacrity](<https://dauntless.fandom.com/wiki/Cells#Alacrity>)
### ${emoji.findEmoji("torso")} **Torso** - [Malkarion's Soul](<https://dauntless.fandom.com/wiki/Malkarion%27s_Soul>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("brutality")} **Perk:** +2 [Aetherhunter](<https://dauntless.fandom.com/wiki/Aetherhunter>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${emoji.findEmoji("arms")} **Arms** - [Malkarion's Grasp](<https://dauntless.fandom.com/wiki/Malkarion%27s_Grasp>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("finesse")} **Perk:** +2 [Predator](<https://dauntless.fandom.com/wiki/Predator>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${emoji.findEmoji("legs")} **Legs** - [Malkarion's March](<https://dauntless.fandom.com/wiki/Malkarion%27s_March>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("brutality")} **Perk:** +2 [Aetherhunter](<https://dauntless.fandom.com/wiki/Aetherhunter>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)`

const blaze = 
`> "A roar like that can break your courage like a fist to the heart."
# Torgodoro Armor
You can **power surge** ${emoji.findEmoji("head")} ${emoji.findEmoji("torso")} ${emoji.findEmoji("arms")} and ${emoji.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("molten_morsel")}[Molten Morsel](<https://dauntless.fandom.com/wiki/Molten_Morsel>) **x5**
- ${emoji.findEmoji("rampaging_shard")}[Rampaging Shard](<https://dauntless.fandom.com/wiki/Rampaging_Shard>) **x2**
## Armor Pieces:
### ${emoji.findEmoji("head")} **Head** - [Torgadoro's Apex](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Apex>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("insight")} **Perk:** +2 [Zeal](<https://dauntless.fandom.com/wiki/Zeal>)
- ${emoji.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${emoji.findEmoji("torso")} **Torso** - [Torgadoro's Core](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Core>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("brutality")} **Perk:** +2 [Knockout King](<https://dauntless.fandom.com/wiki/Knockout_King>)
- ${emoji.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${emoji.findEmoji("arms")} **Arms** - [Torgadoro's Brawn](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Brawn>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("brutality")} **Perk:** +2 [Overpower](<https://dauntless.fandom.com/wiki/Overpower>)
- ${emoji.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${emoji.findEmoji("legs")} **Legs** - [Torgadoro's Gait](<https://dauntless.fandom.com/wiki/Torgadoro%27s_Gait>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("brutality")} **Perk:** +2 [Knockout King](<https://dauntless.fandom.com/wiki/Knockout_King>)
- ${emoji.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)`

const umbral = 
`> "Old [Arkan](<https://dauntless.fandom.com/wiki/Arkan_Drew>) said he's not even sure the Thrax is from our reality. The skin of the universe has been punctured far too many times by denizens of the Umbral Deeps, my dear [Markus](<https://dauntless.fandom.com/wiki/Markus_Boehr>).”
# Thrax Armor
You can **power surge** ${emoji.findEmoji("head")} ${emoji.findEmoji("torso")} ${emoji.findEmoji("arms")} and ${emoji.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("warped_chitin")}[Warped Chitin](<https://dauntless.fandom.com/wiki/Warped_Chitin>) **x5**
- ${emoji.findEmoji("uncanny_scale")}[Uncanny Scale](<https://dauntless.fandom.com/wiki/Uncanny_Scale>) **x2**
## Armor Pieces:
### ${emoji.findEmoji("head")} **Head** - [Thrax's Scream](<https://dauntless.fandom.com/wiki/Thrax%27s_Scream>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("insight")} **Perk:** +2 [Catalyst](<https://dauntless.fandom.com/wiki/Catalyst>)
- ${emoji.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${emoji.findEmoji("torso")} **Torso** - [Thrax's Shadow](<https://dauntless.fandom.com/wiki/Thrax%27s_Shadow>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("finesse")} **Perk:** +2 [Cunning](<https://dauntless.fandom.com/wiki/Cunning>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${emoji.findEmoji("arms")} **Arms** - [Thrax's Embrace](<https://dauntless.fandom.com/wiki/Thrax%27s_Embrace>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("fortitude")} **Perk:** +2 [Nine Lives](<https://dauntless.fandom.com/wiki/Nine_Lives>)
- ${emoji.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${emoji.findEmoji("legs")} **Legs** - [Thrax's Guile](<https://dauntless.fandom.com/wiki/Thrax%27s_Guile>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("finesse")} **Perk:** +2 [Cunning](<https://dauntless.fandom.com/wiki/Cunning>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)`

const terra = 
`> "The doc says she's never seen anything like the Agarus before. No one had, until it caught our Farslayer friends with their loincloths down. I can tell you one thing: I can see its spore trails from here."
# Agarus Armor
You can **power surge** ${emoji.findEmoji("head")} ${emoji.findEmoji("torso")} ${emoji.findEmoji("arms")} and ${emoji.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("toxic_branch")}[Toxic Branch](<https://dauntless.fandom.com/wiki/Toxic_Branch>) **x5**
- ${emoji.findEmoji("ironroot_shard")}[Ironroot Shard](<https://dauntless.fandom.com/wiki/Ironroot_Shard>) **x2**
## Armor Pieces:
### ${emoji.findEmoji("head")} **Head** - [Agaric Canopy](<https://dauntless.fandom.com/wiki/Agaric_Canopy>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("fortitude")} **Perk:** +2 [Parasitic](<https://dauntless.fandom.com/wiki/Parasitic>)
- ${emoji.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)
### ${emoji.findEmoji("torso")} **Torso** - [Agaric Bole](<https://dauntless.fandom.com/wiki/Agaric_Bole>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("fortitude")} **Perk:** +2 [Parasitic](<https://dauntless.fandom.com/wiki/Parasitic>)
- ${emoji.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${emoji.findEmoji("arms")} **Arms** - [Agaric Branches](<https://dauntless.fandom.com/wiki/Agaric_Branches>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("fortitude")} **Perk:** +2 [Sturdy](<https://dauntless.fandom.com/wiki/Sturdy>)
- ${emoji.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)
### ${emoji.findEmoji("legs")} **Legs** - [Agaric Roots](<https://dauntless.fandom.com/wiki/Agaric_Roots>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("fortitude")} **Perk:** +2 [Fortress](<https://dauntless.fandom.com/wiki/Fortress>)
- ${emoji.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)`

const frost = 
`> "l am called the queen of Skaldeskar, but there remain hidden caverns there steeped in cold, grim power where no human holds sway. Such places are ruled only by the Urska."
> — [Linnea Silver](<https://dauntless.fandom.com/wiki/Linnea_Silver>)
# Urska Armor
You can **power surge** ${emoji.findEmoji("head")} ${emoji.findEmoji("torso")} ${emoji.findEmoji("arms")} and ${emoji.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("hunters_claw")}[Hunter's Claw](<https://dauntless.fandom.com/wiki/Hunter%27s_Claw>) **x5**
- ${emoji.findEmoji("iceheart_shard")}[Iceheart Shard](<https://dauntless.fandom.com/wiki/Iceheart_Shard>) **x2**
## Armor Pieces:
### ${emoji.findEmoji("head")} **Head** - [Adversary's Guile](<https://dauntless.fandom.com/wiki/Adversary%27s_Guile>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("insight")} **Perk:** +2 [Cascade](<https://dauntless.fandom.com/wiki/Cascade>)
- ${emoji.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)
### ${emoji.findEmoji("torso")} **Torso** - [Adversary's Pride](<https://dauntless.fandom.com/wiki/Adversary%27s_Pride>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("insight")} **Perk:** +2 [Cascade](<https://dauntless.fandom.com/wiki/Cascade>)
- ${emoji.findEmoji("alacrity")} **Cell Slot:** [Alacrity](<https://dauntless.fandom.com/wiki/Cells#Alacrity>)
### ${emoji.findEmoji("arms")} **Arms** - [Adversary's Wrath](<https://dauntless.fandom.com/wiki/Adversary%27s_Wrath>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("insight")} **Perk:** +2 [Aetheric Evasion](<https://dauntless.fandom.com/wiki/Aetheric_Evasion>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${emoji.findEmoji("legs")} **Legs** - [Adversary's Drive](<https://dauntless.fandom.com/wiki/Adversary%27s_Drive>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("fortitude")} **Perk:** +2 [Guardian](<https://dauntless.fandom.com/wiki/Guardian>)
- ${emoji.findEmoji("insight")} **Cell Slot:** [Insight](<https://dauntless.fandom.com/wiki/Cells#Insight>)`

const radiant = 
`> "We don't even know if the Chronovore's a single individual from a thousand different points in time, or an entire species swimming the timestream. Hell, before this I don't even know there was a 'timestream.' What else is Old Arkan keeping to himself?"
# Chronovore Armor
You can **power surge** ${emoji.findEmoji("head")} ${emoji.findEmoji("torso")} ${emoji.findEmoji("arms")} and ${emoji.findEmoji("legs")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each gear.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("golden_heart")}[Golden Heart](<https://dauntless.fandom.com/wiki/Golden_Heart>) **x5**
- ${emoji.findEmoji("sunburst_shard")}[Sunburst Shard](<https://dauntless.fandom.com/wiki/Sunburst_Shard>) **x2**
## Armor Pieces:
### ${emoji.findEmoji("head")} **Head** - [Chronohelm](<https://dauntless.fandom.com/wiki/Chronohelm>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("insight")} **Perk:** +2 [Zeal](<https://dauntless.fandom.com/wiki/Zeal>)
- ${emoji.findEmoji("brutality")} **Cell Slot:** [Brutality](<https://dauntless.fandom.com/wiki/Cells#Brutality>)
### ${emoji.findEmoji("torso")} **Torso** - [Chronoplate](<https://dauntless.fandom.com/wiki/Chronoplate>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("alacrity")} **Perk:** +2 [Grace](<https://dauntless.fandom.com/wiki/Grace>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)
### ${emoji.findEmoji("arms")} **Arms** - [Chronogrips](<https://dauntless.fandom.com/wiki/Chronogrips>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("finesse")} **Perk:** +2 [Pulse](<https://dauntless.fandom.com/wiki/Pulse>)
- ${emoji.findEmoji("fortitude")} **Cell Slot:** [Fortitude](<https://dauntless.fandom.com/wiki/Cells#Fortitude>)
### ${emoji.findEmoji("legs")} **Legs** - [Chronotreads](<https://dauntless.fandom.com/wiki/Chronotreads>)
- ${emoji.findEmoji("resistance")} **Resistance:** 25 (base), 30 (Power Surged)
- ${emoji.findEmoji("finesse")} **Perk:** +2 [Pulse](<https://dauntless.fandom.com/wiki/Pulse>)
- ${emoji.findEmoji("finesse")} **Cell Slot:** [Finesse](<https://dauntless.fandom.com/wiki/Cells#Finesse>)`
          
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

// Deleting and reacquiring emojis from external file
delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/utils/emoji`)];
const emoji = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/utils/emoji`)

const shock = 
`> "Malkarions are supposed to be extinct. Should have known they were hiding out in the Maelstrom's heart."
# Malkarion Weapons
You can **power surge** ${emoji.findEmoji("aether_strikers")} ${emoji.findEmoji("axe")} ${emoji.findEmoji("chain_blades")} ${emoji.findEmoji("hammer")} ${emoji.findEmoji("repeaters")} ${emoji.findEmoji("sword")} and ${emoji.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each part requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("peerless_stormplate")}[Peerless Stormplate](<https://dauntless.fandom.com/wiki/Peerless_Stormplate>) **x5**
- ${emoji.findEmoji("shard_of_the_eternal_storm")}[Shard of the Eternal Storm](<https://dauntless.fandom.com/wiki/Shard_of_the_Eternal_Storm>) **x2**
## Weapons:
### ${emoji.findEmoji("aether_strikers")} **Aether Strikers** - [Mistral Currents](<https://dauntless.fandom.com/wiki/Mistral_Currents>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("axe")} **Axe** - [Terminal Voltage](<https://dauntless.fandom.com/wiki/Terminal_Voltage>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("chain_blades")} **Chain Blades** - [Electric Cruelties](<https://dauntless.fandom.com/wiki/Electric_Cruelties>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("hammer")} **Hammer** - [Galvanic Impact](<https://dauntless.fandom.com/wiki/Galvanic_Impact>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("repeaters")} **Repeaters** - [Dynamic Deadlights](<https://dauntless.fandom.com/wiki/Dynamic_Deadlights>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("sword")} **Sword** - [Cyclonic Fury](<https://dauntless.fandom.com/wiki/Cyclonic_Fury>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("war_pike")} **War Pike** - [The Conductor](<https://dauntless.fandom.com/wiki/The_Conductor>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const blaze = 
`> "A roar like that can break your courage like a fist to the heart."
# Torgodoro Weapons
You can **power surge** ${emoji.findEmoji("aether_strikers")} ${emoji.findEmoji("axe")} ${emoji.findEmoji("chain_blades")} ${emoji.findEmoji("hammer")} ${emoji.findEmoji("repeaters")} ${emoji.findEmoji("sword")} and ${emoji.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("molten_morsel")}[Molten Morsel](<https://dauntless.fandom.com/wiki/Molten_Morsel>) **x5**
- ${emoji.findEmoji("rampaging_shard")}[Rampaging Shard](<https://dauntless.fandom.com/wiki/Rampaging_Shard>) **x2**
## Weapons:
### ${emoji.findEmoji("aether_strikers")} **Aether Strikers** - [Tectonic Faults](<https://dauntless.fandom.com/wiki/Tectonic_Faults>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("axe")} **Axe** - [Incinerator's Song](<https://dauntless.fandom.com/wiki/Incinerator%27s_Song>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("chain_blades")} **Chain Blades** - [Scorching Agonies](<https://dauntless.fandom.com/wiki/Scorching_Agonies>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("hammer")} **Hammer** - [Magma Quake](<https://dauntless.fandom.com/wiki/Magma_Quake>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("repeaters")} **Repeaters** - [Volcanic Eruptions](<https://dauntless.fandom.com/wiki/Volcanic_Eruptions>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("sword")} **Sword** - [The Cauterizer](<https://dauntless.fandom.com/wiki/The_Cauterizer>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("war_pike")} **War Pike** - [Pyroclastic Envoy](<https://dauntless.fandom.com/wiki/Pyroclastic_Envoy>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`
const umbral = 
`> "Old [Arkan](<https://dauntless.fandom.com/wiki/Arkan_Drew>) said he's not even sure the Thrax is from our reality. The skin of the universe has been punctured far too many times by denizens of the Umbral Deeps, my dear [Markus](<https://dauntless.fandom.com/wiki/Markus_Boehr>)."
# Thrax Weapons
You can **power surge** ${emoji.findEmoji("aether_strikers")} ${emoji.findEmoji("axe")} ${emoji.findEmoji("chain_blades")} ${emoji.findEmoji("hammer")} ${emoji.findEmoji("repeaters")} ${emoji.findEmoji("sword")} and ${emoji.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("warped_chitin")}[Warped Chitin](<https://dauntless.fandom.com/wiki/Warped_Chitin>) **x5**
- ${emoji.findEmoji("uncanny_scale")}[Uncanny Scale](<https://dauntless.fandom.com/wiki/Uncanny_Scale>) **x2**
## Weapons:
### ${emoji.findEmoji("aether_strikers")} **Aether Strikers** - [Fractured Realities](<https://dauntless.fandom.com/wiki/Fractured_Realities>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("axe")} **Axe** - [Mindsplitter](<https://dauntless.fandom.com/wiki/Mindsplitter)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("chain_blades")} **Chain Blades** - [Night Terrors](<https://dauntless.fandom.com/wiki/Night_Terrors>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("hammer")} **Hammer** - [Sanity Check](<https://dauntless.fandom.com/wiki/Sanity_Check>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("repeaters")} **Repeaters** - [Eldritch Torments](<https://dauntless.fandom.com/wiki/Eldritch_Torments>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("sword")} **Sword** - [Voidbane](<https://dauntless.fandom.com/wiki/Voidbane>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("war_pike")} **War Pike** - [The Apocalypse Needle](<https://dauntless.fandom.com/wiki/The_Apocalypse_Needle>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const terra = 
`> "The doc says she's never seen anything like the Agarus before. No one had, until it caught our Farslayer friends with their loincloths down. I can tell you one thing: I can see its spore trails from here."
# Agarus Weapons
You can **power surge** ${emoji.findEmoji("aether_strikers")} ${emoji.findEmoji("axe")} ${emoji.findEmoji("chain_blades")} ${emoji.findEmoji("hammer")} ${emoji.findEmoji("repeaters")} ${emoji.findEmoji("sword")} and ${emoji.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("toxic_branch")}[Toxic Branch](<https://dauntless.fandom.com/wiki/Toxic_Branch>) **x5**
- ${emoji.findEmoji("ironroot_shard")}[Ironroot Shard](<https://dauntless.fandom.com/wiki/Ironroot_Shard>) **x2**
## Weapons:
### ${emoji.findEmoji("aether_strikers")} **Aether Strikers** - [Agents of Decay](<https://dauntless.fandom.com/wiki/Agents_of_Decay>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("axe")} **Axe** - [Malignant Scourge](<https://dauntless.fandom.com/wiki/Malignant_Scourge)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("chain_blades")} **Chain Blades** - [Death Blossoms](<https://dauntless.fandom.com/wiki/Death_Blossoms>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("hammer")} **Hammer** - [Sanity Check](<https://dauntless.fandom.com/wiki/Unsteady_Ground>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("repeaters")} **Repeaters** - [Tainted Needles](<https://dauntless.fandom.com/wiki/Tainted_Needles>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("sword")} **Sword** - [Poisonous Thorn](<https://dauntless.fandom.com/wiki/Poisonous_Thorn>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("war_pike")} **War Pike** - [Parasitic Curse](<https://dauntless.fandom.com/wiki/Parasitic_Curse>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const frost = 
`> "l am called the queen of Skaldeskar, but there remain hidden caverns there steeped in cold, grim power where no human holds sway. Such places are ruled only by the Urska."
> — [Linnea Silver](<https://dauntless.fandom.com/wiki/Linnea_Silver>)
# Urska Weapons
You can **power surge** ${emoji.findEmoji("aether_strikers")} ${emoji.findEmoji("axe")} ${emoji.findEmoji("chain_blades")} ${emoji.findEmoji("hammer")} ${emoji.findEmoji("repeaters")} ${emoji.findEmoji("sword")} and ${emoji.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("hunters_claw")}[Hunter's Claw](<https://dauntless.fandom.com/wiki/Hunter%27s_Claw>) **x5**
- ${emoji.findEmoji("iceheart_shard")}[Iceheart Shard](<https://dauntless.fandom.com/wiki/Iceheart_Shard>) **x2**
## Weapons:
### ${emoji.findEmoji("aether_strikers")} **Aether Strikers** - [Ice Breakers](<https://dauntless.fandom.com/wiki/Ice_Breakers>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("axe")} **Axe** - [Permanent Frost](<https://dauntless.fandom.com/wiki/Permanent_Frost)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("chain_blades")} **Chain Blades** - [Blizzard's Teeth](<https://dauntless.fandom.com/wiki/Blizzard%27s_Teeth>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("hammer")} **Hammer** - [Bomb Cyclone](<https://dauntless.fandom.com/wiki/Bomb_Cyclone>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("repeaters")} **Repeaters** - [Cryo-Cannons](<https://dauntless.fandom.com/wiki/Cryo-Cannons>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("sword")} **Sword** - [Hypothermica](<https://dauntless.fandom.com/wiki/Hypothermica>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("war_pike")} **War Pike** - [Cold Hell](<https://dauntless.fandom.com/wiki/Cold_Hell>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`

const radiant = 
`> "We don't even know if the Chronovore's a single individual from a thousand different points in time, or an entire species swimming the timestream. Hell, before this I don't even know there was a 'timestream.' What else is Old Arkan keeping to himself?"
# The Chronovore Weapons
You can **power surge** ${emoji.findEmoji("aether_strikers")} ${emoji.findEmoji("axe")} ${emoji.findEmoji("chain_blades")} ${emoji.findEmoji("hammer")} ${emoji.findEmoji("repeaters")} ${emoji.findEmoji("sword")} and ${emoji.findEmoji("war_pike")} to upgrade its perks from **+2** to **+3**. The list below will provide the necceary items to power surge each weapon.
## Each weapon requires:
- ${emoji.findEmoji("aetherheart")}[Aetherheart](<https://dauntless.fandom.com/wiki/Aetherhearts>) **x1**
- ${emoji.findEmoji("rams")}[Rams](<https://dauntless.fandom.com/wiki/Rams>) **x10,000**
- ${emoji.findEmoji("golden_heart")}[Golden Heart](<https://dauntless.fandom.com/wiki/Golden_Heart>) **x5**
- ${emoji.findEmoji("sunburst_shard")}[Sunburst Shard](<https://dauntless.fandom.com/wiki/Sunburst_Shard>) **x2**
## Weapons:
### ${emoji.findEmoji("aether_strikers")} **Aether Strikers** - [Chaos & Entropy](<https://dauntless.fandom.com/wiki/Chaos_%26_Entropy>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("axe")} **Axe** - [Existential Crisis](<https://dauntless.fandom.com/wiki/Existential_Crisis)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("chain_blades")} **Chain Blades** - [The Weeping Hours](<https://dauntless.fandom.com/wiki/The_Weeping_Hours>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("hammer")} **Hammer** - [History's Burden](<https://dauntless.fandom.com/wiki/History%27s_Burden>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("repeaters")} **Repeaters** - [Temporal Mechanics](<https://dauntless.fandom.com/wiki/Temporal_Mechanics>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("sword")} **Sword** - [Edge of Tomorrow](<https://dauntless.fandom.com/wiki/Edge_of_Tomorrow>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**
### ${emoji.findEmoji("war_pike")} **War Pike** - [Millennium's End](<https://dauntless.fandom.com/wiki/Millennium%27s_End>)
- ${emoji.findEmoji("power")} **Power:** 100 (base), 120 (Power Surged)
- ${emoji.findEmoji("Prismatic")} **Cell Slots:** [Prismatic](<https://dauntless.fandom.com/wiki/Cells#Prismatic>) (any cell) **x2**`
          
// Return correct slogan if element match
if(element == "shock") return shock
if(element == "blaze") return blaze
if(element == "umbral") return umbral
if(element == "terra") return terra
if(element == "frost") return frost
if(element == "radiant") return radiant
          
},

}