const responses = {
    angry: {
      oneToFive: [
        "{users} seems to have angered you.",
        "Why is {users} making you so angry?",
        "You look really mad at {users}.",
        "What did {users} do to get you so angry?",
        "Whoa, calm down! {users} didn't mean it."
      ],
      sixToNine: [
        "{users} have all made you angry!",
        "You seem really upset with {users}.",
        "{users} must have done something to upset you.",
        "Angry with {users}? Take a deep breath.",
        "Why are you angry with {users}?"
      ],
      ten: [
        "Wow, {users} and many more have made you angry!",
        "{users} and others seem to be in your bad books.",
        "{users} and many more need to watch out!",
        "So many people including {users} have angered you.",
        "You are angry with a lot of people including {users}!"
      ],
      over10limit: [
        "{users} and many more, seems like you have angered the wrong person!",
        "I'm sure {users} and many more didn't mean to anger you intentionally.",
        "{users} and many more made you angry today!"
      ]
    },
    annoyed: {
      oneToFive: [
        "{users} is really annoying you.",
        "Why is {users} annoying you so much?",
        "You seem quite annoyed with {users}.",
        "{users} is getting on your nerves.",
        "What did {users} do to annoy you?"
      ],
      sixToNine: [
        "{users} have all managed to annoy you.",
        "You look really annoyed at {users}.",
        "Why are you so annoyed with {users}?",
        "Take a break, {users} didn't mean to annoy you.",
        "{users} seem to be really annoying you."
      ],
      ten: [
        "{users} and many more are annoying you!",
        "So many people including {users} are annoying you.",
        "{users} and others are just too annoying!",
        "You need a break from {users} and many more.",
        "{users} and others are really getting to you."
      ],
      over10limit: [
        "{users} and many more, seems like you have annoyed the wrong person!",
        "I'm sure {users} and many more didn't mean to annoy you intentionally.",
        "{users} and many more made you annoyed today!"
      ]
    },
    awoo: {
      oneToFive: [
        "{users} heard you awoo!",
        "Awoo! Did {users} hear that?",
        "{users}, awooing with you!",
        "Awoo! {users} joins in.",
        "Did {users} just hear an awoo?"
      ],
      sixToNine: [
        "Awoo! {users} heard you loud and clear.",
        "{users} are all awooing with you.",
        "The whole group of {users} joins in awooing.",
        "{users} can't resist your awoo!",
        "Awooing together with {users}!"
      ],
      ten: [
        "Awoo! {users} and many more heard you!",
        "A whole pack including {users} joins your awoo.",
        "{users} and countless others echo your awoo!",
        "Awoo! So many including {users} are howling!",
        "{users} and others are awooing in unison!"
      ],
      over10limit: [
        "{users} and many more have just been awoo'd!",
        "{users} and many more made you awoo today!"
      ]
    },
    baka: {
      oneToFive: [
        "{users}, you're such a baka!",
        "Baka! That's what {users} is.",
        "Why are you calling {users} a baka?",
        "You think {users} is a baka?",
        "{users}, you really are a baka."
      ],
      sixToNine: [
        "Baka! {users}, all of you!",
        "You think {users} are all bakas?",
        "Why is everyone a baka, {users}?",
        "{users}, stop being bakas!",
        "You called {users} a bunch of bakas!"
      ],
      ten: [
        "Baka! {users}",
        "So many bakas including {users}!",
        "{users} and a lot of others are bakas.",
        "You called {users} and many others bakas!",
        "{users} and countless others are bakas."
      ],
      over10limit: [
        "{users} and many more are such bakas!",
        "I'm sure {users} and many more got their reasons for being a silly baka!",
        "{users} and many more is just such a baka!"
      ]
    },
    bake: {
      oneToFive: [
        "{users}, time to bake something delicious!",
        "You want to bake with {users}?",
        "Let's bake a cake with {users}!",
        "What are you baking with {users}?",
        "{users}, let's get baking!"
      ],
      sixToNine: [
        "{users}, let's have a baking party!",
        "Baking session with {users}!",
        "Time to bake a lot of goodies with {users}.",
        "Join {users} for a baking spree!",
        "What are {users} baking today?"
      ],
      ten: [
        "Baking with {users}",
        "A huge baking party including {users}!",
        "So many people including {users} are baking!",
        "{users} and countless others are baking together.",
        "Bake with {users} and a lot more friends!"
      ],
      over10limit: [
        "{users} and many more is baking with you!",
        "Seems like {users} are all ready to bake with you",
        "{users} and many more join in on your baking session!"
      ]
    },
    beg: {
      oneToFive: [
        "{users}, please grant my wish!",
        "You're begging {users}?",
        "Please, {users}, have mercy!",
        "Why are you begging {users}?",
        "{users}, please help out!"
      ],
      sixToNine: [
        "Begging {users} for help!",
        "Please, {users}, all of you!",
        "You're on your knees for {users}.",
        "{users}, have mercy on you!",
        "Why beg {users} all at once?"
      ],
      ten: [
        "Begging {users}",
        "Please, {users} and everyone else!",
        "You're begging so many, including {users}!",
        "{users} and countless others, please!",
        "You really need help from {users} and more!"
      ],
      over10limit: [
        "{users} and many more have received your begging.",
        "{users} and many more. Now that are a lot of people to beg!"
      ]
    },
    bloodsuck: {
      oneToFive: [
        "{users}, you look tasty!",
        "Ready to suck {users}' blood?",
        "{users}, beware of the vampire!",
        "Why are you after {users}' blood?",
        "{users}, your blood is desired!"
      ],
      sixToNine: [
        "Thirsty for blood, {users}!",
        "You want to suck blood from {users}.",
        "{users}, you're all in danger!",
        "Why do you need {users}' blood?",
        "You crave the blood of {users}!"
      ],
      ten: [
        "{users} and many more, your blood!",
        "Thirsty for blood from {users} and others!",
        "So many targets, including {users}!",
        "{users} and countless others, watch out!",
        "You desire blood from {users}"
      ],
      over10limit: [
        "{users} and many more, be prepared, a hungry vampire is on the loose!",
        "{users} annd more, watch out, your neck might be in nibble range!",
        "{users} and many more, your bloodlust are attracking a cutie vampire on the loose!"
      ]
    },
    blush: {
      oneToFive: [
        "{users}, you're making me blush!",
        "Why are you blushing at {users}?",
        "{users} caused you to blush.",
        "Blushing because of {users}.",
        "You can't stop blushing at {users}!"
      ],
      sixToNine: [
        "Blushing at {users}, how cute!",
        "{users} are all making you blush!",
        "So many blushes for {users}.",
        "You're blushing because of {users}.",
        "Blushing at {users} is adorable!"
      ],
      ten: [
        "Blushing at {users}",
        "You can't stop blushing at {users} and others!",
        "{users} and countless others made you blush!",
        "Blushing furiously at {users}",
        "Your blushes are for {users}"
      ],
      over10limit: [
        "{users} and many more made you blush!",
        "{users} and many more have caused you to turn bright red!",
        "{users} and many more is the reason why you are blushing",
        "Oh damn, {users} and many more are the cause for your blushing?",
        "You are so bright red, could {users} and many more be the reason why?"
      ]
    },
    bored: {
      oneToFive: [
        "{users}, I'm so bored!",
        "Are you bored with {users}?",
        "Bored out of your mind with {users}.",
        "Why is {users} so boring?",
        "You're bored, even with {users}!"
      ],
      sixToNine: [
        "Bored with {users}, what's new?",
        "{users}, all of you are boring!",
        "So bored with {users}.",
        "Why is everyone, including {users}, boring?",
        "{users}, you're making me yawn!"
      ],
      ten: [
        "Bored with {users}",
        "So many people, including {users}, and still bored!",
        "{users} and countless others bore you!",
        "Bored with {users}",
        "So much boredom with {users} and others!"
      ],
      over10limit: [
        "You are bored with {users} and many more.",
        "{users} and many more is the reason you are bored?",
        "{users} and many more, seems like you made them bored!"
      ]
    },
    cheer: {
      oneToFive: [
        "Cheering for {users}!",
        "You want to cheer up {users}?",
        "{users}, you can do it!",
        "Let's cheer for {users}!",
        "{users}, we're all cheering for you!"
      ],
      sixToNine: [
        "Cheering for {users} together!",
        "{users}, all of you can do it!",
        "We're cheering for {users}!",
        "{users}, you've got this!",
        "Cheering loudly for {users}!"
      ],
      ten: [
        "Cheering for {users}",
        "{users} and countless others, you can do it!",
        "So many cheers for {users} and others!",
        "Cheering for {users}",
        "{users}, we're all behind you!"
      ],
      over10limit: [
        "{users} and many more, you have a fan cheering you on!",
        "{users} and many more, I am cheering on you!",
        "{users} and many more. You can do this!"
      ]
    },
    clap: {
      oneToFive: [
        "Clapping for {users}!",
        "You deserve applause, {users}!",
        "{users}, well done!",
        "Clap clap for {users}!",
        "Amazing job, {users}!"
      ],
      sixToNine: [
        "Clapping for {users} together!",
        "{users}, you all did great!",
        "Round of applause for {users}!",
        "Clapping for {users}!",
        "Bravo, {users}!"
      ],
      ten: [
        "Clapping for {users}",
        "Applauding {users} and countless others!",
        "{users} and many more, well done!",
        "So many claps for {users} and others!",
        "{users}, we're all clapping for you!"
      ],
      over10limit: [
        "Clapping for {users} and many more. Seems like you deserved it!",
        "Claps for {users} and many more.",
        "{users} and many more, good job!"
      ]
    },
    clumsy: {
      oneToFive: [
        "Oops! {users}, be careful!",
        "You feel clumsy around {users}?",
        "{users}, watch your step!",
        "So clumsy, {users}!",
        "{users}, you're making me clumsy!"
      ],
      sixToNine: [
        "Feeling clumsy with {users}.",
        "{users}, all of you are clumsy!",
        "Why so clumsy, {users}?",
        "{users}, watch out!",
        "Clumsiness all around {users}!"
      ],
      ten: [
        "Clumsy with {users}",
        "{users} and countless others, be careful!",
        "Feeling clumsy around {users}",
        "So clumsy with {users} and others!",
        "{users}, you're making everyone clumsy!"
      ],
      over10limit: [
        "{users} and many more are such clumsy people!",
        "{users} and many more aren't that clumsy... right?",
        "{users} and many more seems to be very clumsy today..."
      ]
    },
    confused: {
      oneToFive: [
        "Confused about {users}?",
        "{users} is confusing you?",
        "Why so confused about {users}?",
        "{users}, you're confusing!",
        "Confusion with {users}!"
      ],
      sixToNine: [
        "Confused with {users}.",
        "{users}, you all are confusing!",
        "Why so confused with {users}?",
        "{users}, you're confusing everyone!",
        "Confusion all around with {users}!"
      ],
      ten: [
        "Confused with {users}",
        "{users} and countless others, so confusing!",
        "Feeling confused about {users}",
        "So much confusion with {users} and others!",
        "{users}, you're making everyone confused!"
      ],
      over10limit: [
        "{users} and many more seems you are the cause of the confusion!",
        "I'm sure {users} and many more didn't mean to confuse you intentionally.",
        "{users} and many more made you confused!"
      ]
    },
    cry: {
      oneToFive: [
        "Crying because of {users}.",
        "{users}, why are you making me cry?",
        "Tears for {users}.",
        "Why am I crying over {users}?",
        "Crying because of {users}!"
      ],
      sixToNine: [
        "Crying with {users}.",
        "{users}, you all are making me cry!",
        "Tears for {users}.",
        "Why so many tears for {users}?",
        "{users}, you're making everyone cry!"
      ],
      ten: [
        "Crying with {users}",
        "{users} and countless others, so many tears!",
        "Tears for {users}",
        "So much crying with {users} and others!",
        "{users}, you're making everyone cry!"
      ],
      over10limit: [
        "{users} and many more caused you to cry. ;-;",
        "I'm sure {users} and many more didn't mean to make you cry intentionally.",
        "{users} and many more made you cry! Oh no ;w;"
      ]
    },
    cuddle: {
      oneToFive: [
        "Cuddling with {users}!",
        "You want to cuddle {users}?",
        "{users}, let's cuddle!",
        "Cuddling time with {users}!",
        "{users}, come here for a cuddle!"
      ],
      sixToNine: [
        "Cuddling with {users} together!",
        "{users}, you all want cuddles!",
        "Cuddle time with {users}!",
        "{users}, let's all cuddle!",
        "Cuddles for {users}!"
      ],
      ten: [
        "Cuddling with {users}",
        "{users} and countless others, cuddle time!",
        "So many cuddles with {users}",
        "Cuddling with {users} and others!",
        "{users}, let's have a big cuddle!"
      ],
      over10limit: [
        "{users} and many more, you have received a cuddle!",
        "{users} and many more have been cuddled successfully!",
        "{users} and many more, rejoice, you have received a cuddle!"
      ]
    },
    dance: {
      oneToFive: [
        "Dancing with {users}!",
        "{users}, let's dance!",
        "You want to dance with {users}?",
        "Dance party with {users}!",
        "{users}, show us your moves!"
      ],
      sixToNine: [
        "Dancing with {users} together!",
        "{users}, let's all dance!",
        "Dance floor with {users}!",
        "{users}, let's boogie!",
        "Dance party with {users}!"
      ],
      ten: [
        "Dancing with {users}",
        "{users} and countless others, let's dance!",
        "Dance party with {users}",
        "Dancing with {users} and others!",
        "{users}, let's have a dance-off!"
      ],
      over10limit: [
        "{users} and many more, seems like you made them dance!",
        "{users} and many more joined you in dancing.",
        "{users} and many more is dancing together with you!"
      ]
    },
    grin: {
      oneToFive: [
        "Grinning at {users}!",
        "{users}, you make me smile!",
        "Why are you grinning at {users}?",
        "Big grins for {users}!",
        "{users}, you're making me grin!"
      ],
      sixToNine: [
        "Grinning with {users}.",
        "{users}, you all make me smile!",
        "Grins all around for {users}!",
        "Why so many grins for {users}?",
        "{users}, you're making everyone grin!"
      ],
      ten: [
        "Grinning with {users}",
        "{users} and countless others, so many grins!",
        "Big grins for {users}",
        "Grinning with {users} and others!",
        "{users}, let's all grin together!"
      ],
      over10limit: [
        "{users} and many more, oh oh, you are the reason they are grinning... ",
        "[{users} and many more, what did you do to cause them to grin.",
        "{users} and many more made you grin... ehehehe ~",
        "**tehehehe ~**"
      ]
    },
    hug: {
      oneToFive: [
        "Hugging {users}!",
        "{users}, let's have a hug!",
        "You want to hug {users}?",
        "Hugs for {users}!",
        "{users}, come here for a hug!"
      ],
      sixToNine: [
        "Hugging {users} together!",
        "{users}, let's all hug!",
        "Hugs for {users}!",
        "Hug time with {users}!",
        "Big hugs for {users}!"
      ],
      ten: [
        "Hugging {users}",
        "{users} and countless others, let's hug!",
        "Hug time with {users}",
        "Hugging with {users} and others!",
        "{users}, let's all have a group hug!"
      ],
      over10limit: [
        "{users} and many more, you have been hugged!",
        "GROUP HUG!",
        "{users} and many more have recieved your hug!"
      ]
    },
    kiss: {
      oneToFive: [
        "Kissing {users}!",
        "{users}, let's have a kiss!",
        "You want to kiss {users}?",
        "Kisses for {users}!",
        "{users}, come here for a kiss!"
      ],
      sixToNine: [
        "Kissing {users} together!",
        "{users}, let's all kiss!",
        "Kisses for {users}!",
        "Kiss time with {users}!",
        "Big kisses for {users}!"
      ],
      ten: [
        "Kissing {users}",
        "{users} and countless others, let's kiss!",
        "Kiss time with {users}",
        "Kissing with {users} and others!",
        "{users}, let's all have a group kiss!"
      ],
      over10limit: [
        "{users} and many more, you have been kissed!",
        "\{users} and many more have recieved your kiss!",
        "{users} and many more have deserved a kiss from you!",
        "**kisses you all** ~"
      ]
    },
    nya: {
      oneToFive: [
        "Nya! {users}, did you hear that?",
        "{users}, nya to you!",
        "Why are you saying nya to {users}?",
        "Nya for {users}!",
        "{users}, nya!"
      ],
      sixToNine: [
        "Nya with {users}.",
        "{users}, you all heard the nya!",
        "Nya all around for {users}!",
        "Why so many nyas for {users}?",
        "{users}, you're getting so many nyas!"
      ],
      ten: [
        "Nya with {users}",
        "{users} and countless others, nya!",
        "Big nyas for {users}",
        "Nya with {users} and others!",
        "{users}, let's all nya together!"
      ],
      over10limit: [
        "{users} and many more, feel the power of nya ~",
        "big nyas for {users} and many more ~",
        "**nya ~**"
      ]
    },
    pat: {
      oneToFive: [
        "Patting {users}!",
        "{users}, let's have a pat!",
        "You want to pat {users}?",
        "Pats for {users}!",
        "{users}, come here for a pat!"
      ],
      sixToNine: [
        "Patting {users} together!",
        "{users}, let's all pat!",
        "Pats for {users}!",
        "Pat time with {users}!",
        "Big pats for {users}!"
      ],
      ten: [
        "Patting {users}",
        "{users} and countless others, let's pat!",
        "Pat time with {users}",
        "Patting with {users} and others!",
        "{users}, let's all have a group pat!"
      ],
      over10limit: [
        "{users} and many more have recieved a headpat each!",
        "Headpats {users} and many more",
        "Headpats for all ~"
      ]
    },
    pout: {
      oneToFive: [
        "Pouting at {users}.",
        "{users}, why are you making me pout?",
        "Why are you pouting at {users}?",
        "Pouting because of {users}.",
        "{users}, stop making me pout!"
      ],
      sixToNine: [
        "Pouting at {users} together.",
        "{users}, you're all making me pout!",
        "Why so many pouts for {users}?",
        "Pouting with {users}.",
        "{users}, stop making everyone pout!"
      ],
      ten: [
        "Pouting at {users} and many more.",
        "{users} and countless others, so many pouts!",
        "Big pouts for {users} and many more.",
        "Pouting with {users} and others.",
        "{users}, let's all pout together!"
      ],
      over10limit: [
        "{users} and many more made you pout, cheer up!",
        "Aww, I am sure {users} and many more didn't mean it, cheer up!",
        "{users} and many more made you pout today! I wonder why..."
      ]
    },
    shocked: {
      oneToFive: [
        "{users}, you shocked me!",
        "Why are you shocked by {users}?",
        "Shocked because of {users}.",
        "{users}, that was shocking!",
        "You can't believe what {users} did!"
      ],
      sixToNine: [
        "{users}, you all shocked me!",
        "Why are you all shocked by {users}?",
        "Shocked by {users} together.",
        "That was shocking, {users}!",
        "Everyone is shocked by {users}!"
      ],
      ten: [
        "{users} and many more, you shocked me!",
        "So many people including {users} are shocked!",
        "Big shocks for {users} and many more.",
        "Shocked with {users} and others.",
        "{users}, let's all be shocked together!"
      ],
      over10limit: [
        "Is shocked because of {users} and many more",
        "I'm sure {users} and many more didn't mean to shock you intentionally.",
        "{users} and many more made you shocked today!",
        "Is so shocked that all the users mentioned was forgotten, tehe ~"
      ]
    },
    slap: {
      oneToFive: [
        "Slapping {users}!",
        "{users}, you deserve a slap!",
        "Why are you slapping {users}?",
        "Slap for {users}!",
        "{users}, take that slap!"
      ],
      sixToNine: [
        "Slapping {users} together!",
        "{users}, all of you deserve a slap!",
        "Slap time with {users}!",
        "{users}, why are you all getting slapped?",
        "Big slaps for {users}!"
      ],
      ten: [
        "Slapping {users}",
        "{users} and countless others, take that slap!",
        "Slap time with {users}",
        "Slapping with {users} and others!",
        "{users}, let's all get slapped together!"
      ],
      over10limit: [
        "Slaps so many users that we can't show them all!",
        "Slaps {users} and many more",
        "[click this if you dare!](<https://youtu.be/hHZvUeAdzeI?feature=shared&t=32>) ehehe ~ **slaps** ouch!"
      ]
    },
    tease: {
      oneToFive: [
        "Teasing {users}!",
        "{users}, you're being teased!",
        "Why are you teasing {users}?",
        "Tease for {users}!",
        "{users}, you're being teased so much!"
      ],
      sixToNine: [
        "Teasing {users} together!",
        "{users}, you're all being teased!",
        "Tease time with {users}!",
        "{users}, why are you all getting teased?",
        "Big teases for {users}!"
      ],
      ten: [
        "Teasing {users}",
        "{users} and countless others, getting teased!",
        "Tease time with {users}",
        "Teasing with {users} and others!",
        "{users}, let's all get teased together!"
      ],
      over10limit: [
        "{users} and many more is being teased!",
        "Watch out {users} and many more, someone is trying to tease you!",
        "tehehehe ~"
      ]
    },
    wink: {
      oneToFive: [
        "Winking at {users}!",
        "{users}, did you see that wink?",
        "Why are you winking at {users}?",
        "Winks for {users}!",
        "{users}, you're getting winked at!"
      ],
      sixToNine: [
        "Winking at {users} together!",
        "{users}, you're all getting winked at!",
        "Wink time with {users}!",
        "{users}, why are you all getting winked at?",
        "Big winks for {users}!"
      ],
      ten: [
        "Winking at {users}",
        "{users} and countless others, getting winked at!",
        "Wink time with {users}",
        "Winking with {users} and others!",
        "{users}, let's all get winked at together!"
      ],
      over10limit: [
        "Winking at {users} and many more... Suspicious.",
        "Winks at {users} and many more... What is going on?",
        "You winked at {users} and many more!"
      ]
    }
  };
  
  const selfResponses = {
    angry: [
      "You seem really angry at yourself. Take it easy!",
      "Why are you so mad at yourself?",
      "You shouldn't be so hard on yourself."
    ],
    annoyed: [
      "Annoyed at yourself? It happens.",
      "Why are you annoying yourself?",
      "Take a break and relax."
    ],
    awoo: [
      "Awoo at yourself? That's interesting!",
      "Awooing at yourself, are we?",
      "Why are you awooing at yourself?"
    ],
    baka: [
      "Calling yourself a baka, huh?",
      "Why are you calling yourself a baka?",
      "Don't be so harsh on yourself, baka."
    ],
    bake: [
      "Baking for yourself? That's sweet!",
      "Baking something nice just for you?",
      "Why not bake something special for yourself?"
    ],
    beg: [
      "Begging yourself for something?",
      "Why are you begging yourself?",
      "It's okay, you don't need to beg yourself."
    ],
    bloodsuck: [
      "Trying to suck your own blood? Spooky!",
      "Why are you after your own blood?",
      "Leave your own blood alone!"
    ],
    blush: [
      "Blushing at yourself? Cute!",
      "Why are you making yourself blush?",
      "You're blushing at your own reflection."
    ],
    bored: [
      "Bored with yourself?",
      "Why are you bored with yourself?",
      "Find something fun to do!"
    ],
    cheer: [
      "Cheering yourself up? Nice!",
      "Why not cheer yourself on?",
      "Give yourself a cheer!"
    ],
    clap: [
      "Clapping for yourself? Bravo!",
      "Why are you clapping at yourself?",
      "You deserve a round of applause!"
    ],
    clumsy: [
      "Feeling clumsy by yourself?",
      "Why are you being clumsy?",
      "It's okay to be a bit clumsy."
    ],
    confused: [
      "Confused about yourself?",
      "Why are you confusing yourself?",
      "Take a moment to think clearly."
    ],
    cry: [
      "Crying over yourself?",
      "Why are you making yourself cry?",
      "It's okay to cry sometimes."
    ],
    cuddle: [
      "Cuddling yourself? That's sweet.",
      "Why not give yourself a cuddle?",
      "Self-cuddles are the best!"
    ],
    dance: [
      "Dancing by yourself? Nice moves!",
      "Why not dance alone?",
      "Enjoy dancing by yourself!"
    ],
    grin: [
      "Grinning at yourself? Cute!",
      "Why are you grinning at yourself?",
      "Keep smiling, even at yourself."
    ],
    hug: [
      "Hugging yourself? That's nice.",
      "Why not give yourself a hug?",
      "Self-hugs are comforting."
    ],
    kiss: [
      "Blowing a kiss to yourself? Sweet!",
      "Why are you kissing yourself?",
      "A kiss for yourself is nice."
    ],
    nya: [
      "Nya at yourself? Cute!",
      "Why are you nya-ing at yourself?",
      "Keep up the nya spirit!"
    ],
    pat: [
      "Patting yourself? Good job!",
      "Why not give yourself a pat?",
      "You deserve a self-pat."
    ],
    pout: [
      "Pouting at yourself?",
      "Why are you pouting at yourself?",
      "It's okay to pout sometimes."
    ],
    shocked: [
      "Shocked by yourself?",
      "Why are you shocking yourself?",
      "Calm down, it's just you."
    ],
    slap: [
      "Slapping yourself? Ouch!",
      "Why are you slapping yourself?",
      "Be gentle with yourself."
    ],
    tease: [
      "Teasing yourself? Funny!",
      "Why are you teasing yourself?",
      "A bit of self-teasing is fine."
    ],
    wink: [
      "Winking at yourself? Charming!",
      "Why are you winking at yourself?",
      "Keep up the self-confidence!"
    ]
  };

  module.exports = { selfResponses, responses };