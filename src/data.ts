import { BlogPost} from'./types';
const getPlaceholder = (id: number) => `https://picsum.photos/seed/${id + 100}/800/600`;

const BASE_IMAGE_URL ='https://eldrex.landecs.org/';

export const BLOG_POSTS: BlogPost[] = [
 {
 id: 1,
 title:"Judgement Where I Began to Change",
 image: BASE_IMAGE_URL +"post/Judgement Where I Began to Change.jpg",
 placeholderImage: getPlaceholder(1),
 date:"October 11, 2025",
 category:"Personal Growth",
 excerpt:"A reflection on overcoming comparison and finding self-worth through personal transformation.",
 content: `...`
},
 {
 id: 2,
 title:"Worth a Thousand",
 image: BASE_IMAGE_URL +"post/Worth a Thousand.jpg",
 placeholderImage: getPlaceholder(2),
 date:"October 12, 2025",
 category:"Life Lessons",
 excerpt:"Learning the true value of money through hard work and personal sacrifice.",
 content: `...`
},
 {
 id: 3,
 title:"Belief We Believe",
 image: BASE_IMAGE_URL +"post/Belief We Believe.jpg",
 placeholderImage: getPlaceholder(3),
 date:"October 13, 2025",
 category:"Mindset",
 excerpt:"Challenging limiting beliefs about poverty and success.",
 content: `...`
},
 {
 id: 4,
 title:"Strength in Silence",
 image: BASE_IMAGE_URL +"post/Strength in Silence.jpg",
 placeholderImage: getPlaceholder(4),
 date:"October 18, 2025",
 category:"Reflection",
 excerpt:"Understanding that true strength is often silent and unseen.",
 content: `...`
},
 {
 id: 5,
 title:"If You Have Time to Sit",
 image: BASE_IMAGE_URL +"post/If You Have Time to Sit.gif",
 placeholderImage: getPlaceholder(5),
 date:"October 18, 2025",
 category:"Productivity",
 excerpt:"Learning to use every moment productively for growth and progress.",
 content: `...`
},
 {
 id: 6,
 title:"When Perfection Replaces Emotions",
 image: BASE_IMAGE_URL +"post/When Perfection Replaces Emotions.gif",
 placeholderImage: getPlaceholder(6),
 date:"October 18, 2025",
 category:"Technology",
 excerpt:"How AI is changing authentic human communication and emotional expression.",
 content: `...`
},
 {
 id: 7,
 title:"What if AI Can Feel?",
 image: BASE_IMAGE_URL +"post/aiFeel.gif",
 placeholderImage: getPlaceholder(7),
 date:"October 19, 2025",
 category:"Philosophy",
 excerpt:"A philosophical exploration of AI consciousness and human awareness.",
 content: `...`
},
 {
 id: 8,
 title:"My First Quiz Bee Experience",
 image: BASE_IMAGE_URL +"post/quiz_bee.jpg",
 placeholderImage: getPlaceholder(8),
 date:"November 19, 2025",
 category:"Experience",
 excerpt:"Reflections on courage, focus, and determination during my first quiz bee competition.",
 content: `...`
},
 {
 id: 9,
 title:"The Day Courage Spoke Louder Than Fear",
 image: BASE_IMAGE_URL +"post/pitching.jpeg",
 placeholderImage: getPlaceholder(9),
 date:"November 20, 2025",
 category:"Achievement",
 excerpt:"Sharing my pitching competition experience and the power of believing in your ideas.",
 content: `...`
},
 {
 id: 10,
 title:"When Responsibility Becomes a Teacher",
 image: BASE_IMAGE_URL +"post/Responsibility Becomes a Teacher.jpg",
 placeholderImage: getPlaceholder(10),
 date:"November 24, 2025",
 category:"Growth",
 excerpt:"Learning patience, resilience, and leadership through group work and personal responsibility.",
 content: `...`
},
 {
 id: 11,
 title:"The Journey From Confusion to Creation",
 image: BASE_IMAGE_URL +"post/Confusion to Creation.jpg",
 placeholderImage: getPlaceholder(11),
 date:"November 25, 2025",
 category:"Learning",
 excerpt:"How childhood curiosity about technology evolved into a passion for creation and problem-solving.",
 content: `...`
},
 {
 id: 12,
 title:"Climbing Beyond the Impossible",
 image: BASE_IMAGE_URL +"post/Climbing Beyond the Impossible.jpg",
 placeholderImage: getPlaceholder(12),
 date:"December 01, 2025",
 category:"Inspiration",
 excerpt:"Overcoming limitations and pursuing dreams that others consider impossible.",
 content: `...`
},
 {
 id: 13,
 title:"Rising From the Life No One Sees",
 image: BASE_IMAGE_URL +"post/Rising%20From%20the%20Life%20No%20One%20Sees.png",
 placeholderImage: getPlaceholder(13),
 date:"December 05, 2025",
 category:"Resilience",
 excerpt:"Finding strength and purpose through early responsibilities and difficult circumstances.",
 content: `...`
},
 {
 id: 14,
 title:"Learning From Failure and Rising Again",
 image: BASE_IMAGE_URL +"post/Learning%20From%20Failure%20and%20Rising%20Again.png",
 placeholderImage: getPlaceholder(14),
 date:"December 05, 2025",
 category:"Growth",
 excerpt:"Understanding how to transform failures into lessons for personal growth.",
 content: `...`
},
 {
 id: 15,
 title:"Learn to Be Flexible",
 image: BASE_IMAGE_URL +"post/flexible.jpg",
 placeholderImage: getPlaceholder(15),
 date:"December 12, 2025",
 category:"Adaptation",
 excerpt:"Adapting to new environments and challenges in college life.",
 content: `...`
},
 {
 id: 16,
 title:"The Distance of the Sun",
 image: BASE_IMAGE_URL +"post/theSunset.jpg",
 placeholderImage: getPlaceholder(16),
 date:"February 17, 2026",
 category:"Reflection",
 excerpt:"A sunset that mirrors the distance between a child and his family.",
 content: `...`
},
 {
 id: 17,
 title:"Future You in an AI Era",
 image: BASE_IMAGE_URL +"post/futureAI.jpg",
 placeholderImage: getPlaceholder(17),
 date:"February 17, 2026",
 category:"Technology",
 excerpt:"A reflection on dependence, identity, and intelligence in a world shaped by artificial minds.",
 content: `...`
},
 {
 id: 18,
 title:"Becoming 1% Better",
 image: BASE_IMAGE_URL +"post/1percentBetter.jpg",
 placeholderImage: getPlaceholder(18),
 date:"February 19, 2026",
 category:"Personal Growth",
 excerpt:"A reflection on courage, growth, and finding your place in a new environment.",
 content: `...`
},
{
 id: 19,
 title:"The Space I Need",
 image: BASE_IMAGE_URL +"post/The Space I Need.jpg",
 placeholderImage: getPlaceholder(19),
 date:"February 19, 2026",
 category:"Personal Growth",
 excerpt:"A reflection on solitude, self-care, and understanding my need for space when I am not okay.",
 content: `...`
},
{
"id": 20,
"title":"When Doubt Walks Beside Me",
"image": BASE_IMAGE_URL +"post/When Doubt Walks Beside Me.jpg",
"placeholderImage": getPlaceholder(20),
"date":"February 19, 2026",
"category":"Personal Growth",
"excerpt":"A reflection on self-doubt, overthinking, and learning to trust my own effort despite uncertainty and fear.",
"content": `...`
},
{
"id": 21,
"title":"The Last Presentor",
"image": BASE_IMAGE_URL +"post/The Last Presentor.jpg",
"placeholderImage": getPlaceholder(21),
"date":"February 19, 2026",
"category":"Personal Growth",
"excerpt":"A reflection on the unique pressure of being the last presenter and strategies to manage fear, anxiety, and self-doubt.",
"content": `...`
},
{
 id: 22,
 title:"The Teacher Who Taught Me to Rise",
 image: BASE_IMAGE_URL +"post/The Teacher Who Taught Me to Rise.jpg",
 placeholderImage: getPlaceholder(22),
 date:"February 19, 2026",
 category:"Personal Growth",
 excerpt:"A reflection on how a strict teacher transformed fear, embarrassment, and self-doubt into confidence and personal growth.",
 content: `...`
},
{
 id: 23,
 title:"When “Yes” Was the Wrong Answer",
 image: BASE_IMAGE_URL +"post/When Yes Was the Wrong Answer.gif",
 placeholderImage: getPlaceholder(23),
 date:"February 20, 2026",
 category:"Personal Growth",
 excerpt:"A reflection on my first debate experience in Oral Communication and how one simple word taught me the true meaning of preparation and presence of mind.",
 content: `...`
},
 {
 id: 24,
 title:"A Man Who Can Do What He Wants, Does What He Wants",
 image: BASE_IMAGE_URL +"post/A Man Who Can Do What He Wants.gif",
 placeholderImage: getPlaceholder(24),
 date:"February 21, 2026",
 category:"Personal Growth",
 excerpt:"A reflection on reclaiming personal freedom and the courage to live intentionally despite the weight of routine and responsibility.",
 content: `...`
},
{ 
id: 25, 
title:"Mathematics, Life, and the Balance Between Easy and Hard", 
image: BASE_IMAGE_URL +"post/Mathematics, Life, and the Balance Between Easy and Hard.gif", 
placeholderImage: getPlaceholder(25), 
date:"February 21, 2026", 
category:"Personal Growth", 
excerpt:"A reflection on how lessons in mathematics mirror the choices, failures, and strategies we face in life.", 
content: `...`
},
{
 id: 26,
 title:"Why Not You: A Personal Reflection on Courage and Action",
 image: BASE_IMAGE_URL +"post/Why%20Not%20You.gif",
 placeholderImage: getPlaceholder(26),
 date:"February 22, 2026",
 category:"Inspiration",
 excerpt:"A personal reflection about courage, self-doubt, and the powerful question: Why not you?",
 content: `...`
},
{ 
 id: 27, 
 title:"The Day I Started LanDecs", 
 image: BASE_IMAGE_URL +"post/The Day I Started LanDecs.jpg", 
 placeholderImage: getPlaceholder(27), 
 date:"February 22, 2026", 
 category:"Entrepreneurship", 
 excerpt:"The story of Eldrex Delos Reyes Bula and how LanDecs started as a silent journey of resilience, courage, and small victories.", 
 content: `...` 
},
{
id: 28,
title:"See Me After You",
image: BASE_IMAGE_URL +"post/See Me After You.jpg",
placeholderImage: getPlaceholder(28),
date:"February 23, 2026",
category:"Leadership",
excerpt:"A reflection on leadership, responsibility, and the hard lessons learned when initiative is tested under pressure.",
content: `...`
},
{
id: 29,
title:"Enough, But Still Not Enough",
image: BASE_IMAGE_URL +"post/Enough But Still Not Enough.gif",
placeholderImage: getPlaceholder(29),
date:"February 24, 2026",
category:"Reflection",
excerpt:"There are nights when I look at the moon and question myself if I am truly enough. Dreams are heavy, comparisons are louder, and discipline feels far away. But maybe being enough is not about achieving everything, it is about continuing even when you doubt yourself.",
content: `...`
},
{
 id: 30,
 title:"Shhhh.",
 image: BASE_IMAGE_URL +"post/shhhh.jpg",
 placeholderImage: getPlaceholder(30),
 date:"February 27, 2026",
 category:"Reflection",
 excerpt:"A single sound from our parents that carried fear, discipline, correction, and love — shaping how we understood respect, boundaries, and responsibility.",
 content: `...`
},
{
id: 31,
title:"First Step to Manila",
image: BASE_IMAGE_URL +"post/manila.jpg",
placeholderImage: getPlaceholder(31),
date:"February 27, 2026",
category:"Reflection",
excerpt:"A personal journey of courage, fear, and discovering Manila for the first time.",
content: `...`
},
{
id: 32,
title:"Who Am I Afraid of Being Behind?",
image: BASE_IMAGE_URL +"post/leftbehind.gif",
placeholderImage: getPlaceholder(32),
date:"February 28, 2026",
category:"Reflection",
excerpt:"A personal reflection on the fear of being'behind' and the realization that the real comparison is with the person I am capable of becoming.",
content: `...`
},
{
 id: 33,
 title:"Smiling in the Quiet War",
 image: BASE_IMAGE_URL +"post/smiling-in-the-quiet-war.gif",
 placeholderImage: getPlaceholder(33),
 date:"April 09, 2024",
 category:"Poetry",
 excerpt:"A reflection on the silent battles hidden behind curated smiles and glowing screens.",
 content: `...`
}
];
