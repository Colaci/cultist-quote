import { NextResponse, NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
) {
  const str = getStr()
  return NextResponse.json({data:str},{status:200})
}
const text=[
  {
    url:"https://cultist.huijiwiki.com/wiki/%E9%A3%9E%E8%9B%BE",
    str:["夜不能寐，侧耳聆听。微风穿梭于枝桠间，窃窃私语。","房屋沉溺于自己的梦中，大声呼号。这皆是混沌所经之路。","时而剪子，时而小刀。时而为树，时而为骨。","时而是月之振翅，时而是魂之生斑。他曾是血，而我们也将和他一样。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E7%9E%B3%E4%B8%AD%E4%B9%8B%E6%89%89",
    str:["我看到守夜人的光芒在远方一片蓝色中闪耀，像是潜在海面下的太阳。","守夜人即瞳中之扉。想要打开自己眼睛上的锁，必须付出一些小小的牺牲。","你瞧，我站在门口，虽然我并不去敲门，但在这我仍可以被听到。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E4%B8%9D%E6%AF%A7",
    str:["辉光是一个疑问，飞蛾总以肯定作答。漆黑亚麻以否定作答，从来如此。","丝毧总以否定作答，然而我们能在那声否定中得到荫蔽，就像野兽藏于树杈间。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E7%9F%B3%E7%BB%BF",
    str:["石绿已教导我，裸露的自我并非真正的自我，不过这话不假。","环杉，又称石绿，她甘美多汁；她焕发新生；她缠绕裹覆。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E8%BD%B0%E9%9B%B7%E4%B9%8B%E7%9A%AE",
    str:["风暴因轰雷之皮而起，因双生巫女而息。","轰雷之皮是永不终结的不息之心。他永不停歇；他渴求舞蹈；他受击如鼓。","红与蓝是他的色彩。林地呼唤着他的名字。","轰雷之皮允诺过：我们不休止不会休止之物。","我们将口舌交与雷鸣，将双脚交与舞蹈，将皮肤交与黑夜。","我们永不停歇，永不停歇，永不停歇。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E8%9A%81%E6%AF%8D",
    str:["他身上的伤口其数为七，居屋之门其数为七，司辰的次级性相其数为七，性相启凌驾于上，正因蚁母乃是救恩之母。","那迦盘绕，那迦现身于创口，那迦饶过已被伤害者。","她盘伏环绕，她洞开万物，她自七道创口现身七次。","她被列为埃兰人，她率领七条巨蛇穿越七道门扉:白，黑，绯红，蓝，橙，银，金。","拥有七项头衔的女神从七蟠的血沫中升起：她是披坚执锐的女王，是蛇的女儿，是钥匙，是治疗者，是杀人者，是神谕祭司，但她的第七头衔隐而不宣。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E5%8F%8C%E7%94%9F%E5%B7%AB%E5%A5%B3",
    str:["那是一位令静止之物结合，位于水之缘、月之底的司辰：双生巫女。","在厅室海天一般的蓝色光芒中，我看到双生女巫经过，她们用四只手把两条道路编织为一。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E4%B8%8A%E6%A0%A1",
    str:["诗的第一部分描述了七蟠遭遇一名战士的伏击，此人“全身上下都是那些背信弃义的神留下的伤疤，连双目上都是，所以他不会因目睹虬结的蟠身而毁灭。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E7%8B%AE%E5%AD%90%E5%8C%A0",
    str:["狮子匠的天性是变得强大；是无懈可击；是铸造怪物。","有人认为他的血肉在无影众王的墓群中化为灰烬。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E6%82%BC%E6%AD%8C%E8%AF%97%E4%BA%BA",
    str:["有一位司掌纪念与哀悼的神灵，他已被剥夺至尽，然而他不受欺骗。","你或可期待将来能亲手碾碎他，把他变成一把碎鸟骨。","世界会遗忘，但骨白鸽不会。","太阳的居屋拥有许多隐秘的门。它们自然都是锁住的，但挽歌儿小姐今夜将为我打开此一扇。悼歌诗人手捧严冬，于门的另一边静待。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E6%8B%BE%E6%BB%A9%E9%B8%A6",
    str:["伊纳姆：拾滩鸦没有分享他的宝藏吗？加尔基：没有分享最稀有的。他把最珍贵的留给自己了，号称那些是他找到的，不是偷来的。","把司辰和祂们的具名者间秘密交合的记忆藏在居屋的角落，作为暗中夸耀的宝藏"]
  },
  {
    url:"",
    str:["当月亮的脸上添了伤口，这些字句便出现了。","影子之母，雅努斯的姐妹。","真实即美，美即真实。","是以我穿过顶点之门，进入月亮的居屋，即漫宿的影中自我。这里空无一物，静若止水，但在这里转轮依然转动。","而待到太阳再诞之时，弧月将携我归乡。内外相易，表里互替，古今常理。","我看到弧月在钴蓝色的辉光中升起，如舞蹈般轻盈，月光般明亮，她的面庞映照出我的脸。今晨，我满眼都是她。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E6%AE%8B%E9%98%B3",
    str:["残阳带来凄美的结尾。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E5%8F%8C%E8%A7%92%E6%96%A7",
    str:["当我回忆双角利斧，我想起了山楂花的香味。我想起了透射着金红霞光的紫色暮空。我想起了方做过活不久的她双刃淋漓的样子。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E6%98%95%E6%97%A6",
    str:["教会在骄阳分裂前就尊崇它——但在骄阳尚完整时，它日后的复数个自我就已经被认为是它的具名者了。","而昕旦执掌的自然是死亡和进入居屋的道路。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E8%B5%A4%E6%9D%AF",
    str:["我们在痛苦中诞生，为饥饿所拥抱，在愉悦中被吞噬。","人的躯体上有门敞开，而‘她’有承诺许下：并非一切诞生者都会衰亡。","我们将自身献与筵宴，以铭记那份承诺。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E8%A3%82%E5%88%86%E4%B9%8B%E7%8B%BC",
    str:["裂分之狼具三性：毁灭性，毁灭性，以及，毁灭性。","当铸炉冷却，辉光黯淡，林地化尘，裂分之狼也许方能将息，却止于其能噬己之时。","一团不洁的火焰在世界表皮之下闷燃。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E6%B5%AA%E6%B8%B8%E6%97%85%E4%BA%BA",
    str:["她并不因隐于面具之后而饶恕仇敌，蜈蚣的饥渴总有一天要得到满足。","蜈蚣总能找到进入黑暗的方法。当她因此受罚时，她的反应很难受，在漫宿在弥阿都是。","大河在沙地流淌，从神话流入传说。画中之河则向另一个方向流淌。其中之一已对蜈蚣关闭，但她有时仍能找到方法进入。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E5%8F%8C%E7%94%9F%E5%A5%B3%E5%B7%AB",
    str:["在厅室海天一般的蓝色光芒中，我看到双生女巫经过，她们用四只手把两条道路编织为一。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E5%88%B6%E8%8A%B1%E4%BA%BA",
    str:["制花人无法碰触你；他无法找到你；他永远拥有你欲求的东西。哪怕是细述他作品之精巧的言论也能引起众司辰注意。","一个不太常被问道的问题是：花能自己生长。谁会去造花呢？ 为什么会去造花呢？"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E7%99%BD%E6%97%A5%E9%93%B8%E7%82%89",
    str:["铸炉独具匠心，铸炉残酷无情。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/The_Giribrago",
    str:["他收容；他带来赠礼；他不破坏。他从山中迸出。他是碎片，是裂缝，是残余，是创口，是钻石。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E7%99%BD%E9%9B%AA",
    str:["于墙垛上的素白中等待吧。看那日头行得迟慢。","喀俄涅静默地行走在大街小巷。她的裙摆是风。洁白如斯呵她的表面。","且看何物休止于风暴中。"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E9%BB%91%E9%AA%B8",
    str:["结束了 结束了 那是怜悯"]
  },
  {
    url:"https://cultist.huijiwiki.com/wiki/%E6%89%B6%E6%91%87%E8%9C%98%E8%9B%9B",
    str:["我很抱歉这些语义不详的省略，夫人，但我绝不想招致这些司辰入梦。扶摇蜘蛛欲图统治，而戴冠之孳只意在感染与嬗变。"]
  }
]
const time=["午夜","早晨","上午","正午","下午","傍晚","夜晚"]
const interval=[[0,1,2,3,4],[5,6,7,8],[9,10,11],[12],[13,14,15,16],[17,18,19],[20,21,22,23]]
const getStr=()=>{
  const now = new Date().getHours()
  const prefix = time[interval.findIndex((item)=>
    item.includes(now)
  )]
  const str = text[now].str
  const txt = str[Math.floor(Math.random()*str.length)]
  return `此刻是${prefix}${now>12?now-12:now}时，${txt}`
}