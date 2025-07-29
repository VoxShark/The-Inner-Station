import { StorySegment } from "@shared/schema";

export const storySegments: Record<string, StorySegment> = {
  cockroach: {
    id: "cockroach",
    text: `"I remember you." Alastor says as he looks at the small figure. Colored in sepia tones, this little body with the large console tv for a head was the very Vox he had first met.

Back then, Vox was chipper and chatty, with bright eyes and delight as he shared a vision for a glorious world. Together they grew more powerful, learning more of this world.

"Yep. I remember you too. But I'm not really here anymore. All my wonder, all my passion- gone. You left and I disappeared."

He wasn't there anymore? Alastor thought of the things he had seen surrounding Voxtek, how it seemed to be cold and distant, and felt something in his heart ache. Had his disappearance really changed so much for the man?

"I didn't mean to make you disappear. I had to go, I never had a choice."

"That's where you're wrong, Allie. There is always a choice."`,
    character: "Meeting Cockroach",
    choices: [
      {
        id: "I_did",
        text: "Perhaps there had been a choice. If I had stayed, if I had just talked to Vox that night, what would their lives be like?",
        next: "apartment_violus"
      },
      {
        id: "I_did_not", 
        text: "No choice should restrict freedom and force labels where they aren't needed, little friend.",
        next: "hallway_dark"
      }
    ]
  },

  apartment_violus: {
    id: "apartment_violus",
    text: `Perhaps there had been a choice. If he had stayed, if he had just talked to Vox that night, what would their lives be like?
Would they be together, creating a Hell worth living, and living their new lives the way they wanted? Subconsciously he touched his throat, where his own collar sat.
Vox had offered freedom then, with only one catch- a relationship. A bond between them which kept them together. But any ties were a prison to Alastor.

How funny that Alastor's pursuit in freedom resulted in a cage.

"You're right. At first I was certain I made the right call, but now- I have nothing but regret."

"So much regret you've kept it to yourself?" The little Vox said, looking up at Alastor with a puzzled face.

The Radio Demon wanted to lash out, to react in anger and defend himself, but they were right. All this time, Alastor hid away instead of reaching out to his one true friend.

"I want to tell Vox the truth, Cockroach. What do I do?"

Cockroach smiled, a genuine warmth to his features which made Alastor's heart skip. He missed those smiles.

"You gotta find him. He's in here, waiting."

Cockroach stood, little shoes clacking against the street as he gestured to a building. It took only a moment for Alastor to recognize the door. The worn handle, the faded yellow color- it was their apartment door.

"Is Vox there?" He asked, looking down at his companion.

"Yes and no. A version of us is there, but if you want the main then you hafta understand the whole."

He had to understand the whole? He could do this. He could find a way.

Alastor gently caressed the top of the little TV's head before going to the door. He hesitated only a moment before turning the handle and stepping through.`,
    character: "Cockroach's Guidance",
    choices: [
      {
        id: "enter_apartment",
        text: "Enter the apartment and face what awaits inside.",
        next: "violus_apartment"
      }
    ]
  },

  hallway_dark: {
    id: "hallway_dark", 
    text: `A choice? There was never a choice! They had been just fine the way they were, and then Vox decided to throw that surprise at Alastor. A future with him creating a company, but as more than business partners. He wanted a relationship!

Alastor didn't like restrictions and chains. He wanted to be free to make his decisions, and a relationship wasn't freedom. It was a label weighing him down. Even if it was with Vox, he couldn't do it.

"No choice should restrict freedom and force labels where they aren't needed, little friend."

Alastor's words earned a scowl from little Cockroach, the small figure standing and stomping down the street. Alastor couldn't help but chuckle at the clear tantrum, following after him.

"Come on now, it isn't as though I don't care. I just… well, I require freedom."

Cockroach stopped, letting out an annoyed sigh.

"Freedom? You want freedom? Okay. Then let's see what freedom gets you."

The little TV stomped his foot, not even looking at Alastor, and the ground beneath the Radio Demon gave way. The world around him became dark, cold, before shifting as he fell to the ground. The street was gone, a hallway now extending from him into shadow.

"Okay then, I suppose that was fair," Alastor grumbled to himself before rising to his feet.`,
    character: "The Dark Path",
    choices: [
      {
        id: "walk_hallway",
        text: "Walk down the shadowy hallway.",
        next: "vitiosus_encounter"
      }
    ]
  },

  vitiosus_encounter: {
    id: "vitiosus_encounter",
    text: `Alastor walked down the long hallway, each footstep seeming to echo in the space. There was a tension in the air, a crackle of energy, and the fur on his ears seemed to rise. 
A camera overhead seemed to follow him, but he ignored it. The camera would only see what he wanted it to see- or at least that was how it usually went.

"Aren't you tired of it, Alastor?" Vox's voice made him jump, Alastor spinning on the spot. He couldn't see Vox, so where was he?

"Tired of what, exactly?" He asked, looking for any trace of the TV Demon.

"Being you? Being the one who is first to run away and last to stay. The one who breaks everything they touch."

Alastor's ears flattened, the words striking him and causing a surge of anger to rise. Where was he, dammit! As he turned, for a moment he thought he spotted the man.
Spinning in place, he saw nothing there, but there was a feeling of a light caress across his back as the Vox mocked him.

"Not there~" He laughed, Alastor immediately spinning around just in time to see a brief flash of light. Vox had been right there.

"What the hell is this? What do you even want?"

"What do I want? Why Alastor, I'm so surprised at you. It's the same thing I have always wanted."

Alastor turned in place, heart pounding, and his eyes met Vox's as the man stood a mere breath away. His screen was darker, his clothes seeming to ripple between dark blue and black, and he felt like a shadow of Vox.

"I want you."`,
    character: "Vitiosus - The Angry",
    choices: [
      {
        id: "hesitate",
        text: "Hesitate and stare into Vox's hypnotic gaze.",
        next: "game_over_hypnosis"
      },
      {
        id: "run_away", 
        text: "Turn and run from this dark version of Vox.",
        next: "hallway_escape"
      }
    ]
  },

  game_over_hypnosis: {
    id: "game_over_hypnosis",
    text: `Alastor hesitated too long. Suddenly a clawed hand grabbed him by the chin, forcing his gaze to lock with the one on the screen. All he could see was the great swirling red eye before his thoughts went blank. 

Alastor will never know the other parts to Vox, having become nothing more than the man's puppet. 

Perhaps if he had gone another way things would be different.`,
    character: "Game Over",
    isEnding: true
  },

  hallway_escape: {
    id: "hallway_escape",
    text: `This wasn't his Vox. Not the man who he shared an apartment with. Who wore the yellow sweater and danced in the evening with him until the morning. This man- was a monster.

"Where are you going, my dear? Have you forgotten where you are?" Vox's voice called behind Alastor.

How could Alastor forget? As he fled, he recalled the greeting from Vox. What had he called this place?
The Inner Station.
Why did that matter? Stations made different broadcasts. He had seen two forms of Vox since coming here, so what if there were more?
His mind was racing from thought to thought as he ran along the hall. Behind him, this darker Vox was laughing, pursuing him, and deep down Alastor knew if he were caught, he would never get out. That was when he saw two doors at the end of the hallway.`,
    character: "The Escape",
    choices: [
      {
        id: "apartment_door",
        text: "Choose the apartment door that promises safety and better days.",
        next: "violus_apartment"
      },
      {
        id: "unknown_door",
        text: "Choose the unknown door, seeking a different path.",
        next: "vulnero_encounter"
      }
    ]
  },

  violus_apartment: {
    id: "violus_apartment",
    text: `There was a warmth in the space, and the sound of a vinyl spinning made him pause. Which song was it?

Love is the sweetest thing
What else on earth could ever bring
Such happiness to ev'rything
As Love's old story

It was Al Bowlly. Vox played it often when he was feeling sentimental. Did that mean-

"Hi Al." A gentle tone, soft and tender, spoke from across the room. Vox sat there by the window, whiskey glass in hand. A second glass sat beside him.

"Vox!" Alastor felt relieved, walking to greet his friend, and took the other whiskey glass to sit beside him.

He looked just as he did then. The large warm console, the yellow sweater, and an innocent expression which made Alastor feel safe. In all his existence on Earth or in Hell, this was the safest he had ever been.

"Hello old pal." He said, red eyes looking from whiskey to man. Vox chuckled, then leaned back against the window.

"Hey Alastor. I suppose you have questions."

"Maybe a couple. For instance, how real is all this?" Alastor raised the glass to his lips, tasting the alcohol and recalling when they purchased the bottle.

"Depends. This realm? It's complicated. But all of us in here? Well, we're real as it gets."

Real. It was real. Vox was no longer the single whole man. He was split.

"When you left, the stress inside took over and split us open. In total there are five of us." He drummed his fingers against the glass for a moment, studying Alastor's face before continuing.

"There is of course me, the second form of Vox in Hell. The one you know best. My name is Violus. Then there's Volo, the one you used to call cockroach, the first form we took when we arrived in Hell. There is Vox, the entertainer and main front. The other two came after you left and the pain took hold."

After he left? Was that to say that this split, all these other identities, were his fault? No way. No.

"Vitiosus is all bark and some bite. You ran into him in the hall I think. But the one you need to watch out for is Vulnero. He's the protector and hates you the most."

They were talking together. The two of them could talk in here, like they used to, and Alastor wanted so much to stay. If he could stay here, with Violus, he would be happy again. He wouldn't feel pain again. If he just stayed.

"I know that look. You're thinking of running away." Violus said with a frown, and Alastor's ears folded back as he scowled at the man.`,
    character: "Violus - The Nostalgic",
    choices: [
      {
        id: "stay_apartment",
        text: "I'm not running! I just… want to stay with you. Please. Just for a little while longer.",
        next: "stay_ending"
      },
      {
        id: "leave_apartment",
        text: "You're right. I do want to run away, but I can't leave you again.",
        next: "true_path"
      }
    ]
  },

  stay_ending: {
    id: "stay_ending",
    text: `"I'm not running! I just… want to stay with you. Please. Just for a little while longer." Alastor answered softly, looking at the man with a tender gaze.

Violus looked back with tenderness and sorrow, but didn't argue further. The Radio Demon began to discuss memories, times they went dancing, silly adventures they had, and there was laughter and warmth in the room.

How long did he stay, talking to his friend? Time didn't matter here, so engrossed was he in the conversation. This was bliss and freedom, wasn't it? This was what had been offered once.

He didn't notice the apartment door open, nor the figure as it entered. Violus looked past Alastor, pain in his eyes, before he looked to his friend.

"Goodbye, my friend."

Alastor found himself trapped in the memory, unable to move forward or truly connect with the real Vox. Sometimes the safest choice isn't the right one.`,
    character: "Bittersweet Ending",
    isEnding: true
  },

  true_path: {
    id: "true_path",
    text: `"You're right," Alastor sighed, downing his alcohol before placing the glass down. Violus looked surprised.

"I do want to run away. I want to avoid all of this complicated mess. It's easier to smile at your problems and walk away. But- I can't leave you again."

His companion watched him quietly as he spoke, taking him in before smiling with a warmth he fell for. Was it possible the man was proud of Alastor's decision?

"Well then friend, there's only one thing to do."

Violus stood, placing his own glass aside as he went through the apartment to where their rooms had been. Following after him, Alastor hoped for a moment that the true Vox would be in his room waiting,

but such a thought had to be quickly pushed aside. There was a glow around the door, and Violus pushed it open.

"I never stopped believing in you. Even in the darkness, I've wanted so much to dance in the light with you again. So please- don't give up on us."

"I won't. Not this time." Alastor said the words without thought, a flush rising to his cheeks before he stepped through the doorway toward the light.`,
    character: "The True Path",
    choices: [
      {
        id: "step_into_light",
        text: "Step into the light and face the true Vox.",
        next: "reunion_ending"
      }
    ]
  },

  vulnero_encounter: {
    id: "vulnero_encounter",
    text: `The door opened to reveal complete darkness, and from that darkness stepped a figure that made Alastor's blood run cold. This was Vox, but wrong in every way. His screen flickered with static and rage, his form more shadow than substance, and his eyes burned with pure hatred.

"So," the voice was Vox's but twisted with venom, "the coward finally shows his face."

This was Vulnero, the protector, the one born from all of Vox's trauma and rage after Alastor's abandonment.

"You left us," Vulnero snarled, advancing on Alastor. "You broke us. Split us apart. And now you think you can just waltz back in?"

The air crackled with dangerous energy, and Alastor realized this encounter could be his last.`,
    character: "Vulnero - The Protector",
    choices: [
      {
        id: "apologize",
        text: "I'm sorry. I never meant for any of this to happen.",
        next: "vulnero_forgiveness"
      },
      {
        id: "fight_back",
        text: "I won't let you blame me for everything!",
        next: "vulnero_battle"
      }
    ]
  },

  vulnero_forgiveness: {
    id: "vulnero_forgiveness",
    text: `"I'm sorry," Alastor said, his voice breaking. "I never meant for any of this to happen. I was scared, and I ran, and I hurt the person I cared about most."

Vulnero stopped, the rage in his screen flickering with something else - pain, longing, the deep wound of abandonment.

"Sorry doesn't fix what you broke," Vulnero whispered, but the venom was leaving his voice.

"No, it doesn't," Alastor agreed. "But maybe... maybe I can try to help put the pieces back together."

For a long moment, they stared at each other. Then, slowly, Vulnero's form began to soften, the static clearing from his screen.

"The others... they've been waiting for you to come back. To face what you did. To try to make it right."

"Then let me try," Alastor said.

Vulnero nodded, stepping aside to reveal a door behind him - not dark like his realm, but glowing with warm light.

"Go to him. The real him. But know this - if you hurt him again, I will be waiting."`,
    character: "Vulnero's Test",
    choices: [
      {
        id: "approach_door",
        text: "Approach the door to the real Vox.",
        next: "reunion_ending"
      }
    ]
  },

  vulnero_battle: {
    id: "vulnero_battle",
    text: `"I won't let you blame me for everything!" Alastor snarled back, his own power flaring.

The battle was brief but intense. Shadow met shadow, power clashed against power, but in the end, Vulnero's rage was fueled by genuine pain while Alastor's was defensive pride.

Alastor found himself pinned, Vulnero's claws at his throat.

"You still don't understand," Vulnero said sadly. "You still think this is about you. About your freedom, your choices, your pain. But it was never about you, Alastor. It was about us. What we could have been together."

The realization hit Alastor like a physical blow. Even now, even here, he was making it about himself.

"I..." he started, then stopped. "You're right. I'm sorry."

Vulnero's grip loosened. "Sorry doesn't fix anything. But acknowledging the truth... that's a start."

The dark realm around them began to crack and crumble, revealing light beyond.

"He's waiting for you," Vulnero said, stepping back. "The real him. Don't waste this chance."`,
    character: "Hard Truths",
    choices: [
      {
        id: "go_to_vox",
        text: "Go to face the real Vox.",
        next: "reunion_ending"
      }
    ]
  },

  reunion_ending: {
    id: "reunion_ending", 
    text: `The light was warm and welcoming, and as it faded, Alastor found himself in a space that was neither the apartment nor the hallway, but something new. Something that felt like possibility.

And there, waiting for him, was Vox. Not any of his fractured personalities, but the whole man - all the pieces brought together. He looked tired, older somehow, but his eyes still held that spark that Alastor had fallen for so long ago.

"Hello, Alastor," Vox said simply.

"Hello, Vox." Alastor's voice was soft, uncertain. "I... I met them. All of them. The parts of you that I... that my leaving created."

Vox nodded. "They told me you might come. That you might finally be ready to face what happened between us."

"I am," Alastor said, and meant it. "I'm ready to face it all. The good, the bad, the choices I made and the ones I should have made. I'm ready to try to make things right, if you'll let me."

Vox studied him for a long moment, then smiled - that same warm smile that had captivated Alastor from the very beginning.

"I've been waiting for you to say that for a very long time."

"And now?"

"Now," Vox said, extending his hand, "we begin again. Not where we left off, but somewhere new. Somewhere we can both choose to be."

Alastor took his hand, and for the first time in years, felt truly free - not from connection, but free to choose it.

"I'd like that," he said. "I'd like that very much."

The Inner Station dissolved around them, replaced by endless possibility and the promise of a future they would write together.`,
    character: "True Reunion",
    isEnding: true
  }
};

export const characterPersonalities = [
  {
    name: "Volo (Cockroach)",
    color: "amber-glow",
    description: "The little personality and first version of Vox. The one Alastor first met in Hell when they were still in their own first form as a deer."
  },
  {
    name: "Violus", 
    color: "green-500",
    description: "The second form, the Vox of the 70s where he and Alastor lived together."
  },
  {
    name: "Vox",
    color: "blue-500", 
    description: "The main personality. The entertainer and charmer."
  },
  {
    name: "Vitiosus",
    color: "orange-500",
    description: "The personality formed immediately after Alastor's disappearance. He is angry and in a state of denial over the abandonment."
  },
  {
    name: "Vulnero",
    color: "blood-red",
    description: "The protector. This is the darker shade of Vox, one who is more primal instinct than man and is all his trauma and rage."
  }
];
