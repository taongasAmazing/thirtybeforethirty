const goals = [
    // ---------- Money & Career ----------
    {
        title: "Save at least 6 months' worth of an emergency fund and leave it untouched",
        description: "I know money is freedom, and having enough that I don't feel tied down is important for me to always feel free. Being in a position where I can save this much money is a privilege. It would be a disservice to myself not to have enough money saved away for a day when things aren't as bright.",
        status: "In Progress",
        category: "Money & Career",
    },
    {
        title: "Track every dollar spent for a month",
        description: "Finances always start with awareness (I think). I want to be aware of my expenses to make better financial decisions every chance I get, and the first step is knowing what I spend my money on. So for a whole month I will track every dollar spent, and as proof I will share a chart of my overall spending habits and a reflection on what I learned from the experience.",
        status: "Not Started",
        category: "Money & Career",
    },
    {
        title: "Invest 1,000 USD in a high-risk yet well-calculated investment",
        description: "America has so many opportunities to make money through investment, so without spending too much, it would be a loss not to at least learn how to invest and multiply my money with the resources I am fortunate to have available to me. The investment should be high risk, with at least a 50% chance of making the money back and more. I will teach myself how to do it and document the experience.",
        status: "Not Started",
        category: "Money & Career",
    },
    {
        title: "Ask for a raise or a promotion at work",
        description: "I lean heavily on people seeing my good work and that being enough. I feel it is important that I learn to advocate for myself and what I want, so this should not be for the sake of it but should be something meaningful for me. In a year and a half my visa will be up; what then? I need to slowly start the conversation and ask for what I want and deserve for the work I do. This will also force me to be more intentional about my work and the value I bring to the company.",
        status: "Not Started",
        category: "Money & Career",
    },
    {
        title: "Find a community to network and grow my career with",
        description: "This is very much in line with learning from others. I want a mentor, but I think finding people who are learning to navigate their careers alongside me would be more impactful for my growth. So taking the time to meet different people, share our journeys, and learn from each other is important to me. Ideally, I should start this before the year ends and meet with them at least once every two months.",
        status: "Not Started",
        category: "Money & Career",
    },
    {
        title: "Earn a certification to help my career",
        description: "I still need more time to think about exactly what, but as a lifelong learner who is somewhat interested in a successful career, I would like to take the time to learn something I can use in my career. The certification should align with where I want to grow, not just with what I am doing now, and I should start in 2027.",
        status: "Not Started",
        category: "Money & Career",
    },
    // ---------- Health & Wellness ----------
    {
        title: "Exercise consistently for 6 months",
        description: "It is such a hard thing for me to commit to, yet so many people do. This is here for a lot of reasons: 1. To help with my fitness levels. It would be nice not to shy away from a hill or stairs. 2. I have gained a lot of weight that is weighing me down (pun intended), and when I have kids, I want to be able to play with them, which would be hard while weighed down. 3. I want to look good for my husband. He recently lost weight, and I like how he looks taking care of himself; I want to share that feeling with him.",
        status: "Not Started",
        category: "Health & Wellness",
    },
    {
        title: "Pick a diet and stick to it for 6 months",
        description: "Working out keeps my muscles fit, but my diet impacts my whole body, and a healthy body is a happy one... I hope. Well, if I can't keep such an important promise to myself, all hope is lost. So, to make sure it isn't, as a gift to myself I will pick a diet and stick to it.",
        status: "Not Started",
        category: "Health & Wellness",
    },
    {
        title: "Run a 5K",
        description: "I want to do this because I am worried I can't. I also don't remember the last time I ran, and maybe the run clubs have gotten to me. Frankly speaking, I feel I should be able to. Maybe there is something to enjoy about running and doing a 5K, and training for one and doing it is one way to know. As a commitment, I have signed up for the Presidio 5K in San Francisco.",
        status: "Not Started",
        category: "Health & Wellness",
    },
    {
        title: "Get a full physical",
        description: "Knowledge is power. I have gotten a physical check-up a couple of times in the past, but not recently. I would like to do one before my 30th. I also want to check my fertility; I want to have some babies soon, haha.",
        status: "Not Started",
        category: "Health & Wellness",
    },
    {
        title: "Commit to two healthy sleeping habits for a month",
        description: "Sleep is crucial for my health and for life in general. One habit in particular is no devices after dinner. Hopefully this will allow me to read more and support my workouts.",
        status: "Not Started",
        category: "Health & Wellness",
    },
    {
        title: "Finally learn how to swim",
        description: "I have always wanted to learn how to swim. I have been in the water a lot but never learned how. I think it is a skill everyone should have, and I would like to be able to enjoy the water more. I have started learning twice now but haven't quite nailed it. I want to be able to get in the water and swim without fear; one test will be swimming one lap of a pool without stopping.",
        status: "Not Started",
        category: "Health & Wellness",
    },
    {
        title: "Start a journaling habit and stick to it for 6 months",
        description: "I spend a concerning amount of time in my head. This way I can let go of my feelings and thoughts and learn how to process them. I want to keep a gratitude journal and a daily reflection journal.",
        status: "Not Started",
        category: "Health & Wellness",
    },

    // ---------- Family & Community ----------
    {
        title: "Have a get-together at my apartment",
        description: "Since moving, I have been craving community. This is a way to remind myself that I don't just happen to fall into community, but that I can build one myself. Ideally we would have a game night, and I can cook some Zambian food for my friends. This will also help make my apartment feel more like home.",
        status: "Not Started",
        category: "Family & Community",
    },
    {
        title: "Spend 1-on-1 time with my family members",
        description: "Having spent all of my time away from home since I was 12, this is important for getting to know my family members as individuals. It may not make us close, but it is a chance to spend time with each of them. Everyone, all 8 of them, deserves 1-on-1 time with me, and it will only count if it is at least 5 hours together.",
        status: "Not Started",
        category: "Family & Community",
    },
    {
        title: "Spend a week with my dad, learning how he runs his business, and find something I can help solve for him",
        description: "This is definitely a way to say thank you to my dad for all he has done, and also a way for me to learn from him. Who knows, maybe I'll teach him something along the way. On one of my trips to Zambia, the goal will be to spend every day with him as he runs around for his business.",
        status: "Not Started",
        category: "Family & Community",
    },
    {
        title: "Donate my time to a cause I feel passionate about, at least 3 times",
        description: "Part of why this is on the list is to find what, besides myself, I find important enough to do without anyone asking or any incentive. I want to explore what that might be: something selfless. I think it is a great way to know myself better and understand my values. For now, I think something in line with sharing knowledge is inspiring to me and a good place to start. Maybe I'll volunteer as a tutor.",
        status: "Not Started",
        category: "Family & Community",
    },

    // ---------- Travel & Adventure ----------
    {
        title: "Visit a continent I have never been to before",
        description: "Travelling has always helped broaden my view of the world, granted I am more of a vacationer than a traveller. Visiting a fifth continent would be a great adventure. I also want to make the most of it and plan something fun for every day I am there, considering I usually just go and wing it on most trips. I want this to be a memorable adventure. So far, the top contender is Colombia, in South America.",
        status: "Not Started",
        category: "Travel & Adventure",
    },
    {
        title: "Visit 3 new states in the US",
        description: "The US is bigger than I thought. I have been to a few states, but there is so much more to see, and I may not be here for long, so this will make sure I get to see as much of it as possible.",
        status: "Not Started",
        category: "Travel & Adventure",
    },
    {
        title: "Take an overnight train to a new city",
        description: "It's something I have been thinking about doing, and I think it will be a fun experience. It feels old-worldly. I wonder if I should do it in Sweden, since they have good overnight trains, or maybe visit another city in California. Either way, the experience should be fun and memorable.",
        status: "Not Started",
        category: "Travel & Adventure",
    },
    {
        title: "Spend a weekend away from technology",
        description: "It's so loud with all the technology and all the urges to know what is happening; I probably have a mild phone addiction. This experience is also a reminder of the times when we would visit my grandparents in the village, and all we would do was chores: no TV or phone, just being together. The experience should be in nature, most likely camping with nothing more than the basic needs, to reset my nervous system and appreciate the simple things in life. What would make this so much more special would be to do it with someone I love, maybe my partner. I have my eye on Yellowstone.",
        status: "Not Started",
        category: "Travel & Adventure",
    },
    {
        title: "Do a 'type 2' adventure",
        description: "In case you are wondering what a 'type 2' adventure is, it is an adventure that pushes you out of your comfort zone: uncomfortable in the moment but ultimately rewarding. This is on the list because, as surprising as it may seem, I rarely do things that are uncomfortable for me. I want this to be a chance to do something that scares me but that I will be proud of myself for doing.",
        status: "Not Started",
        category: "Travel & Adventure",
    },

    // ---------- Learning & Creativity ----------
    {
        title: "Finish a book every 150 days",
        description: "I appreciate the art of writing; people with that skill are inspiring. Reading more consistently is also something I have greatly admired. Although my preference would be to simply start reading consistently, I think setting a more specific goal would help. The books can be anything; what matters is that I start and finish a book every 150 days. I will also keep a list of the books I have read and write a short reflection on each one.",
        status: "Not Started",
        category: "Learning & Creativity",
    },
    {
        title: "Share 10 short stories on a blog or just with Kondwani",
        description: "I have always appreciated writing. When I was in my teens, I wrote so many poems. It was an outlet for my many emotions. Spending the time now, before my 30th, to write feels like paying homage to the 15-year-old who had so many feelings to navigate. I still feel like her sometimes.",
        status: "Not Started",
        category: "Learning & Creativity",
    },
    {
        title: "Learn a language well enough to have a conversation",
        description: "I have started learning a new language on two occasions but haven't quite gotten to the point of having a conversation. Because I am in the US, Spanish could be a good option, and I would have chances to practice it. It would be very enriching and a proud moment to know more than my mother tongue and English. As a reward for learning the language, I will take a trip to Colombia to practice and explore another continent.",
        status: "Not Started",
        category: "Learning & Creativity",
    },
    {
        title: "Take a culinary class focused on how to eat healthy",
        description: "Food will always be something I enjoy, and I also appreciate that it brings people together. Spending the time to learn the art of cooking would help build up a skill that I will use forever, and I feel spending the money, time, and effort is a reflection of that appreciation for food. I am torn between Zambian food and healthy food, but I would be happy with either. I hope it doesn't end up with me doing neither.",
        status: "Not Started",
        category: "Learning & Creativity",
    },
    {
        title: "Take a class purely for fun",
        description: "Finding my passion and learning something new is important to me. I want to take a class that is purely for fun: nothing to do with work or making money, and no angle for self-improvement. I am thinking of something creative like painting, or scientific like crime scene investigation. In the end, it should just be something done for FUN.",
        status: "Not Started",
        category: "Learning & Creativity",
    },
    {
        title: "Try something publicly with the goal of not being good at it",
        description: "I pride myself on being good at everything I do, but I think it is important to be bad at something and be okay with it. This will be a chance to do something publicly that I am not good at, and the goal is to not be good at it. It should be something fun and challenging. It's a reminder that my worth is not tied to my ability to be perfect. Top contenders are an improv class or a dance class, probably salsa. I will also invite a friend to watch me or join me in the experience.",
        status: "Not Started",
        category: "Learning & Creativity",
    },
    {
        title: "Build a recap of my twenties",
        description: "It's easy to forget all the journeys I embarked on and the experiences from my twenties. I want to reflect on them and create a meaningful summary. This will help me appreciate the journey and learn from the past. This one is inspired by a friend who is also on her 30 before 30 journey. Once I have completed it, I will share it with my family and friends.",
        status: "Not Started",
        category: "Learning & Creativity",
    },

    // ---------- Wild Card ----------
    {
        title: "Wild card goal",
        description: "The 30th item felt so daunting, so I wanted to leave room for something that, over the next few months, feels compelling and important enough to me to have as a goal before I turn 30.",
        status: "Not Started",
        category: "Wild Card",
    },
];