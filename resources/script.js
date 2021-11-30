//fade
$(document).ready(function(){
   $("#btn").click(function() {
       $("#message").hide().fadeIn(300);
    });
});


//DSMessage
let dsMessage = {

    userName: ['Chosen One.', 'Chosen Undead.', 'Unkindled One.', 'Cursed Undead.', 'Hollowed One.', 'Dear Hunter.', 'Afflicted One.', 'Feeble Paleblood.', 'Ashen One.', 'Good Messenger.', 'Unbreakable Pygmy.', 'Brave Undead.', 'Foul Beast.', 'Blood-crazed Fiend.', 'Dear Confederate.', 'Fellow Ashen.', 'Fallen Crow.', 'Heretic.', 'Dark Son.', 'Frail Lord.', 'Darkstalker.', 'Crestfallen Warrior.', 'Kingseeker.', 'Marvelous Undead.', 'Dear Crow.', 'Vileblood.', 'Bloody Crow.', 'Afflicted Beggar.', 'Fellow Prospector.', 'Hollowed Warrior.', 'Lonely Cinder.', 'Abysswalker.', 'Grave Hunter.', 'Scaleless Ashen.', 'Spurned Warrior.', 'Fallen Hawk.', 'Knight Slayer.', 'Livid Undead.', 'Pale Shade.', 'Dear Pilgrim.', 'Sunless Hunted.', 'Slave Knight.', 'Everlasting Ashen.'],
    
    msgPT1: ['Once, the Lord of Light banished Dark, and all that stemmed from humanity. And Men assumed a fleeting form.', 'We shall never be forgotten. We knights fought valiantly, but for every one of them, we lost three score of our own.', 'Brother, unyielding sword. Rise, if you would...For that is our curse.', 'Let the sun shine upon this Lord of Cinder.', 'The Sun is a wonderous body, like a magnificent father. What seeketh thee?', 'The world will fall. The fire will fade, and the souls of old will reemrge. With Dark unshackled, a curse will be upon us. And men will take their true shape.', 'Anything that has a beginning also has an end. No flame, however brilliant, does not one day splutter and fade. But then, from the ashes, the flame reignites, and a new knigdom is born, sporting a new face.', 'For the curse of life is the curse of want. And so do you peer into the fog. In hope of answers.', 'This marks the spot of our grave, but you may rest here too, if you would like.', 'Acts of goodness are not always wise, and acts of evil are not always foolish, but regardless, we shall always strive to be good.', 'Do you know why we are drawn to the nightmare? Because it sprouted from our very misdeeds.', 'We are born of the blood, made men by the blood. Our eyes are yet to open...Fear the old blood.', 'Take nourishment from these sovereignless souls.', 'My blade may break, my arrows fall wide, but my will shall never be broken. Those who live by the sword will die by it, and I will not go down without drawing mine.', "There is a darkness within man, and I am afriad you will peer into it.", "You have proven yourself to me. Now become one with the dark.", "Upon the dark road you are travelling, do no seek out the light, the illuision, the fallacy, fight your incessant need for all things external.", "Hello there. Forgive me, I was just pondering about my poor fortune. I did not find my own sun.", "We grew up alongside a poisonous snake, and developed a silent, unhuman kinship.", "Heresey you say? If it is for the sake of preserving ones own self, I will seize any matter of heretical strength. Behold!", "Evolution without courage will be the ruin of our race.", "Were it not for fear, death would go unlamented.", "Curse here. Curse there. A curse for he, and she, and why care? A bottomless curse, a bottemless sea, source of all greatness, all things that be.", "You still dream I should think? Then come as often as you like, I'll show you another death."],
    
    msgPT2: ['The red moon hangs low and beasts rule the streets. Are we left with no other choice, than to burn it all to cinders.', 'Seek strength, the rest will follow.', 'Lead thy life as thou seest fit.', 'Many monarchs have come and gone. One drowned in poison, another succumbed to flame. Still another slumbers in a realm of ice.', 'Our futures are murky. Let us not be too friendly now.', 'There is no path. Beyond the scope of Light. Beyond the reach of Dark. What could possibly await us? And yet we seek it, insatiably. Such is our fate.', 'Strong I am, forge I can.', 'The First Flame quickly fades. Darkness will shortly settle. But one day, tiny flames will dance across the darkness. Like embers, linked by lords past.', 'Here we stand, feet planted in the earth, but might the cosmos be very near us, only just above our heads?', 'Curse the fiends, their children too, and their children forever true. A call to the bloodless wherever they be.', 'Fire came to be, and with it, disparity. Heat and cold, life and death, light and dark.', 'What good is a hound without hares to hunt?', 'You have a heart of gold. Do not let them take it from you.', 'In truth, the Lords will abandon their thrones and the Unkindled will rise.', "Whether the fear will spark self-reflection or a ruinous nostalgia is up to you entirely. Fear not, your choice will bring you no scorn.", "Monsters aren't born, they are made.", "Souls can't be sold. They can only be lost and never found again.", "Oh don't you worry. Whatever happens, you may think of it all a mere bad dream.", "A corpse should be left well alone. Oh I know, how the secrets beckon so sweetly. Only an honest death will cure you now. Free you from your wild curiosity.", "Fear is absolute. There is no shame in losing one battle, but you must take revenge by any means necessary. I wonder if you've got it in you...To Bring them down.", "Exalted or not, man is still man.", "Without fear in our hearts, we're little different from the beasts themselves.", "Do not misunderstand. Courage is defined as 'The ability to do something which frightens one'. Without fear, there can be no courage. Indeed, the only time we can be couragous is when we are afraid.", "Listen for the baneful chants. Weep with them, as one in trance. And weep with us, oh, weep with us.", "Ah moonlit scents...How did you worm your way in here?", "Are your feet as fat as your wits? Cease this dithering! Take the plunge! Throw yourself to the wolves!"],
    
    msgPT3: ['Things that some would prefer kept secret. A pitiful tale of petty arrogance. High time someone exposed the whole charade.', 'Plant eyes on our brains, to clense our beastly idiocy!', 'I should think you still have dreams, well next time you dream...give some thought, to the hunt.', 'Death is equitable, accepting. We will all one day be welcomed by her embrace.', 'Beasts all over the shop. You will be one of them...sooner or later.', 'The poor, wretched souls. Be they lord or legend, the curse shows no mercy.', 'Honourable soverign, take your throne. And do great things, Dark will remain. And even a legend such as thineself can do nothing to stop that.', 'It is all a curse, and it is your cursed flesh that will inherit the flame.', 'Dark was seen as a curse. Shadow is not cast, but born of fire. And, the brighter the flame, the deeper the shadow.', 'You were at my side all along. My true mentor, my guiding moonlight.', 'At thy twilight, old thoughts return, in waves of great nostalgia.', 'The fire fades, and the Lords go without their thrones. Surrender your fires to the one true heir.', "Are you lost on your journey? No matter. Today's lost are conquerors tommorow.", "Rummaging through our souls, we often dig up something that ought to have lain there unnoticed.", "The opposite of depression is not happiness, but vitality and my life is vital even when sad.", "So let the darkness shape you, let it reform you, let it cradle you and birth you into a new life. A new way of being. Let the spark flame again, in the darkness is where you will find it.", "This world is cursed. Whatever your reasons might be for existing here, you should plan a swift exit. Whatever can be gained from this place, it will do more harm than good.", "The parent is absolute. Their will must be obeyed...Yet I'm sensing some hesitation.", "How many times have you died and come back to life for my sake?", "Majestic! A hunter is a hunter...even in a dream. May you find your worth in the waking world.", "What's that smell? The sweet blood. It sings to me. It's enough to make a man sick.", "Hunters have told me about their church, about their gods and their love. But...do the gods love their creations?", "Have you seen the thread of light? Just a hair, a fleeting thing. Yet I clung to it, steeped as I was in the stench of blood and beasts. I never wanted to know what I really was."],
    
    msgPT4: ['I may be small, but I will die a colossus.', ' Choose thy fate. Seize it with thine own hands. All the more, should thy fate entail such foul betrayal.', 'Exhiliration, pride, hatred, rage...The world teased out our dearest emotions. Thou will understand, one day.', 'This land is peaceful, its inhabitants kind.', 'Men develop the most perculiar fascinations. Sometimes their fascinations seem to take control. Till there is very little man left.', 'Nameless, accursed Undead, unfit even to be cinder. And so it is, that ash seeketh embers.', 'Lord of Cinder. Not for virtue, but for might. Touch the darkness inside me.', 'Blasphemous murderers, blood-crazed fiends, atonement for the wrteches. By the wrath of the mother, mercy for the poor child...Mercy, oh please.', 'When the frail of heart join the fray, the hunter becomes the hunted.', 'The manifestation of madness comes from a mind teetering on the very brink, but has a sane mind produced anything of true significance?', 'Let strength be granted, so the world might be mended.', 'Inherit fire and harness the dark. Such is the calling of a true leader.', 'Life is a journey, and every journey eventually leads to home. Praise the Sun.', "Goodbye now. Stay safe friend. Don't you dare go Hollow.", "Nameless accursed undead, unfit even to be cinder. And so it is that ash seeketh embers.", "But in the end, you lack the stomach. For the agony you'll bring upon yourself.", "Every age, it seems, is tainted by the greed of men. Rubbish, to one such as I, devoid of all worldly wants. Maybe it's just the way we are. I'll stick you in my prayers. A fine, dark soul such as you.", "Have no fear, take the darkness as your comfort because you are the light shining in the dark. You just need to find the spark", "It is only when we are truely alone without someone else to lean on, left with our own inner solitude that we can undergo the process of real change.", "The night brims with defiled scum and is permeated by our rotten stench. Just think. Now you're all set to hunt and kill to your hearts content. I suppose I should not force your will, but you are a hunter and will see soon enough. That on a night of the hunt, no, on any night, nothing deserves to live.", "Hesitation is defeat.", "Death is a shadow, it taught me well.", "Now I'm wakimg up...I'll forget...Everything...", "Prepare yourself for the worst.",]
    
    };
    
    function yourDSMessage() {
        let name = 
        dsMessage.userName[
            Math.floor(Math.random() * dsMessage["userName"].length)
        ];
    
        let pt1 = 
        dsMessage.msgPT1[
            Math.floor(Math.random() * dsMessage["msgPT1"].length)
        ];
    
        let pt2 = 
        dsMessage.msgPT2[
            Math.floor(Math.random() * dsMessage["msgPT2"].length)
        ];
    
        let pt3 = 
        dsMessage.msgPT3[
            Math.floor(Math.random() * dsMessage["msgPT3"].length)
        ];
    
        let pt4 = 
        dsMessage.msgPT4[
            Math.floor(Math.random() * dsMessage["msgPT4"].length)
        ];
        
        return (
            name + ' ' + pt1 + ' ' + pt2 + ' ' + pt3 + ' ' + pt4
        );
    };
 
    
    //display Message
   function displayMessage() {

    document.getElementById("message").innerHTML = yourDSMessage();
    document.getElementById("message").style.border = "3px solid #c0c0c0";
    document.getElementById("message").style.transition="opacity 3s";
    document.getElementById("message").style.opacity="1";
   }



//slideshow
var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n );
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}