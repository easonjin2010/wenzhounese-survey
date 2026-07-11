// ============================================================
// SURVEY CONFIG — edit this file only. Nothing else needs touching.
// ============================================================

const CONFIG = {

  // ----- 1. SHARE URL -----
  // This URL is copied to clipboard / shown when participant taps the share button.
  shareUrl: "https://easonjin2010.github.io/wenzhounese-survey/",

  // ----- 2. TARGET VIDEOS -----
  // All videos are Wenzhounese videos. The feed picks `feedSize` of them at random,
  // designating one as the "study target" for the survey questions.
  // File names use the pattern "Target Xx.mp4" (capital letter, space, then letters).
  targetVideos: [
    { id: "A",  file: "videos/Target A.mp4",  label: "Version A",  handle: "tangtang9708",        caption: "多杯，免费啦 #温州阿唐 #温州 #多比 #哈利波特 #多比配音",                                                                            likes: 13837,  comments: 986,   shares: 25342  },
    { id: "B",  file: "videos/Target B.mp4",  label: "Version B",  handle: "温州珠宝定制大只雯",    caption: "温州话十级教学！日常高频句，学会就能说#温州话 #温州方言 #温州本地 #方言教学 #温州生活",                                                likes: 3095,   comments: 274,   shares: 1255   },
    { id: "C",  file: "videos/Target C.mp4",  label: "Version C",  handle: "1991123145A0G",        caption: "#温州话脱口秀 教科书级别的《地道温州话应用》，学会这三句温州话可以毕业了。#猛果喜剧 #温州话 #猛果龙剑 #脱口秀互动",               likes: 29101,  comments: 1771,  shares: 33535  },
    { id: "D",  file: "videos/Target D.mp4",  label: "Version D",  handle: "JiuY_22",             caption: "温州话版方言教学#温州话 #温州话散讲 #温州话教学 #温州话方言",                                                                       likes: 4511,   comments: 433,   shares: 1529   },
    { id: "E",  file: "videos/Target E.mp4",  label: "Version E",  handle: "1991123145A0G",        caption: "成为合格的温州女婿，除了用AI暗推温州话，也可以关掉转向灯#猛果喜剧 #猛果 #温州话脱口秀 #脱口秀互动",                               likes: 1566,   comments: 52,    shares: 1746   },
    { id: "F",  file: "videos/Target F.mp4",  label: "Version F",  handle: "温州珠宝定制大只雯",    caption: "温州珠宝老板娘教你温州话常用语，听懂的都是本地人～#温州话 #温州话教学 #温州本地人 #温州同城 #温州珠宝店",                         likes: 2692,   comments: 310,   shares: 589    },
    { id: "G",  file: "videos/Target G.mp4",  label: "Version G",  handle: "陈思建",               caption: "温州话版 一定要看完学会！ #不灭的帅哥行为指南",                                                                                   likes: 840599, comments: 69499, shares: 9695   },
    { id: "H",  file: "videos/Target H.mp4",  label: "Version H",  handle: "tangtang9708",        caption: "就说我这个花狗蛋演的好不好吧！ #温州  #我在浙江过大年",                                                                           likes: 230217, comments: 22866, shares: 31308  },
    { id: "J",  file: "videos/Target J.mp4",  label: "Version J",  handle: "71294863021",         caption: "又抽象了鱼 #温州 #温州话 #小鱼跑跑",                                                                                              likes: 197295, comments: 5344,  shares: 37721  },
    { id: "K",  file: "videos/Target K.mp4",  label: "Version K",  handle: "xiaoyingyule",        caption: "#温州话究竟有多难懂，嗯，掌握一门外语确实很重要",                                                                                  likes: 107680, comments: 9110,  shares: 12123  },
    { id: "L",  file: "videos/Target L.mp4",  label: "Version L",  handle: "小婷",                caption: "寝室方言大挑战——温州版2.0版本#寝室合拍 #校园生活 #浙江方言",                                                                      likes: 76663,  comments: 16842, shares: 86068  },
    { id: "M",  file: "videos/Target M.mp4",  label: "Version M",  handle: "20890010096",         caption: "哈哈哈哈哈 老薛讲温州话笑死我了#薛之谦温州 @薛之谦",                                                                              likes: 98554,  comments: 10939, shares: 65331  },
    { id: "N",  file: "videos/Target N.mp4",  label: "Version N",  handle: "69719352269",         caption: "温州话 vs 日语，你觉得几分像？ #创作灵感 #教学 #温州话 #浙江dou知道 #内容过于真实",                                              likes: 64357,  comments: 7754,  shares: 104555 },
    { id: "O",  file: "videos/Target O.mp4",  label: "Version O",  handle: "古典小勇",             caption: "说着玩的才没有针对谁哦",                                                                                                          likes: 70189,  comments: 8544,  shares: 118646 },
    { id: "P",  file: "videos/Target P.mp4",  label: "Version P",  handle: "barbinili",           caption: "我妈跟我说话我都要愣三分钟",                                                                                                      likes: 192316, comments: 15392, shares: 21482  },
    { id: "Q",  file: "videos/Target Q.mp4",  label: "Version Q",  handle: "37330435140",         caption: "#撒西不理哒呐 #方言 #温州话 《不敢带你回温州》",                                                                                  likes: 54662,  comments: 6175,  shares: 54346  },
    { id: "R",  file: "videos/Target R.mp4",  label: "Version R",  handle: "pbq1211",             caption: "温州人的口头禅 是不是一听就很亲切#养老院 #温州话",                                                                               likes: 60690,  comments: 4569,  shares: 71043  },
    { id: "S",  file: "videos/Target S.mp4",  label: "Version S",  handle: "WUKONGCUO88",         caption: "家人们 听我这口音 你觉得我是温州哪里的？#vlog日常 #内容过于真实#温州话 @DOU+小助手",                                            likes: 63930,  comments: 10272, shares: 4494   },
    { id: "T",  file: "videos/Target T.mp4",  label: "Version T",  handle: "tangtang9708",        caption: "出了温州，真的就没有了 #温州",                                                                                                     likes: 107311, comments: 18647, shares: 24775  },
    { id: "U",  file: "videos/Target U.mp4",  label: "Version U",  handle: "54950080303",         caption: "听说讲温州话会变身？  #浙江方言 #温州方言 #日常 #变身",                                                                          likes: 36166,  comments: 7205,  shares: 44478  },
    { id: "V",  file: "videos/Target V.mp4",  label: "Version V",  handle: "xubingsong0577",      caption: "多管闲事的结果 #温州话配音 #温州话 #温州方言 #炳松配音 #温州",                                                                    likes: 6896,   comments: 535,   shares: 10160  },
    { id: "W",  file: "videos/Target W.mp4",  label: "Version W",  handle: "82524043801",         caption: "日本人去温州#日本人#温州 #温州话",                                                                                                 likes: 108556, comments: 7791,  shares: 54484  },
    { id: "X",  file: "videos/Target X.mp4",  label: "Version X",  handle: "W1586962H5088Z",      caption: "#温州方言 大集合 你能听懂几个地方的方言",                                                                                         likes: 38132,  comments: 25395, shares: 56587  },
    { id: "Y",  file: "videos/Target Y.mp4",  label: "Version Y",  handle: "娄艺潇",              caption: "温州话有点难学，但是美食真的好好吃呀！ #寻找中国最美城市 #遇见城市 #心动打卡指南",                                               likes: 28742,  comments: 2748,  shares: 11546  },
    { id: "Z",  file: "videos/Target Z.mp4",  label: "Version Z",  handle: "tangtang9708",        caption: "想想觉得挺可惜的……#温州 #温州阿唐",                                                                                              likes: 23112,  comments: 2800,  shares: 3338   },
    { id: "AA", file: "videos/Target Aa.mp4", label: "Version AA", handle: "LY6666520",           caption: "#温州话 #温州永嘉  大家伙的这几天可以开始吵架了，到13号再吵就太明显了@DOU+小助手 @抖音小助手",                                   likes: 596517, comments: 23742, shares: 17997  },
    { id: "AB", file: "videos/Target Ab.mp4", label: "Version AB", handle: "百晓二姐",             caption: "温州娃不会讲温州话，在意大利的温州娃却会讲温州话#温州#百晓二姐#意大利温州人",                                                    likes: 572,    comments: 16,    shares: 40     },
    { id: "AC", file: "videos/Target Ac.mp4", label: "Version AC", handle: "百晓二姐",             caption: "来听听意大利侨二代温州话说得怎么样#温州#百晓二姐#意大利温州人",                                                                  likes: 1093,   comments: 85,    shares: 270    },
    { id: "AD", file: "videos/Target Ad.mp4", label: "Version AD", handle: "全能朱大定居法国",      caption: "在欧洲，很多老外不会普通话，但是会学会温州话！因为温州人已经把欧洲温州化。。。哈哈哈哈",                                          likes: 22000,  comments: 3142,  shares: 33000  },
    { id: "AE", file: "videos/Target Ae.mp4", label: "Version AE", handle: "OT老师",               caption: "第1集 | 用温州话打开#小猪佩奇",                                                                                                   likes: 4993,   comments: 1275,  shares: 5480   },
    { id: "AG", file: "videos/Target Ag.mp4", label: "Version AG", handle: "炳松频道",              caption: "#温州童谣 #打珓杯 #温州话 #温州 #温州方言",                                                                                        likes: 7825,   comments: 1337,  shares: 4497   },
  ],

  // ----- 3. FEED SETTINGS -----
  // feedSize: total videos shown per session (must be ≤ number of targetVideos above).
  // targetVideoCount: how many of those feedSize videos also have audio quiz questions.
  //   Set to 1 if you want exactly one "study target" with audio questions.
  //   Set higher (e.g. 3) if you want multiple videos in the feed to have quizzes.
  //   Must be ≤ feedSize and ≤ number of videos that have entries in targetAudioQuestions.
  feedSize: 6,
  targetVideoCount: 3,

  // ----- 4. COMMENTS POOL -----
  // Each video draws `commentsPerVideo` random comments from this list.
  // Add as many as you like — the more variety, the more realistic it feels.
  commentsPerVideo: 3,
  commentsPool: [
    "哈哈哈哈哈笑死我了😂",
    "温州话真的太难了，像外星语",
    "作为温州人看到这个超亲切的！",
    "第一次听温州话，感觉好神奇",
    "我男朋友是温州人，终于知道他平时说什么了😅",
    "这个视频让我想学温州话了！",
    "温州话 = 加密货币 💀",
    "哇真的一句都听不懂，佩服",
    "从小听爷爷说温州话，好怀念",
    "这不就是我妈每天的状态吗哈哈",
    "点赞！希望方言不要消失",
    "感觉比日语还难😭",
    "作为外地人，完全摸不着头脑",
    "学会了！回头去温州试试",
    "这个博主太可爱了，关注了！",
    "说真的，温州话保留了很多古汉语特征",
    "我室友是温州的，现在终于能偷懂她说什么了哈哈",
    "第一次知道温州话跟日语这么像！",
    "传承方言太重要了，支持这类内容",
    "家乡话听起来就是不一样，泪目了",
    "我爸就是这么跟我说话的哈哈哈哈",
    "温州话是中国最难懂的方言之一没有之一",
    "在外地工作好多年，听到温州话突然想哭",
    "刷到这个视频纯属意外，但看完觉得好有趣",
    "请问有没有系统学温州话的资源推荐？",
    "这条视频应该被更多人看到",
    "家里老人还会说，年轻一代基本不会了，可惜",
    "博主能不能出教学系列！！",
    "我全程字幕都看不懂，服了",
    "这就是我外婆的味道😢",
  ],

  // ----- 4. SCREENING QUESTIONS (asked before the feed) -----
  screeningQuestions: [
    {
      id: "age",
      type: "number",
      prompt: "您的年龄是多少？",
    },
    {
      id: "home",
      type: "text",
      prompt: "您目前居住在那里？",
    },
    {
      id: "Education",
      type: "single-choice",
      prompt: "您的最高学历是？",
      options: ["初中及以下","高中 / 中专","大专","本科","硕士及以上"],
    },
    {
      id: "Gender",
      type: "single-choice",
      prompt: "您的性别是？",
      options: ["男","女","其他"],
    },
    {
      id: "Work",
      type: "multiple-choice",
      prompt: "您目前从事的行业 / 职业？",
      options: ["学生","教育 / 科研","商业 / 金融","服务业","传媒","制造业","其他"],
    },
    {
      id: "Tiktok Usage",
      type: "single-choice",
      prompt: "您每周刷短视屏的频率？",
      options: ["不刷","每周少于 2 小时","每周 2到5 小时","每周 5到10 小时","每周超过 10 小时","不知道"],
    },
    {
      id: "Tiktok Like time",
      type: "single-choice",
      prompt: "您喜欢的短视频时长是？",
      options: ["20秒内","20-60秒","1-3分钟","3-5分钟","超过 5分钟","不知道"],
    },
    {
      // THIS ANSWER CONTROLS WHICH QUESTION BRANCH THE PARTICIPANT SEES AFTER THE FEED.
      // "是" → wenzhounese deep-dive questions
      // "否" → non-wenzhounese questions
      id: "wenzhounese_identity",
      type: "single-choice",
      prompt: "您是温州人吗？（祖籍温州，或在温州长大，或家中说温州话）",
      options: ["是","否"],
    },
  ],

  // ----- 5. GENERAL FEED QUESTIONS (asked about ALL videos, target not singled out) -----
  generalQuestions: [
    {
      id: "most_interesting",
      type: "video-picker",
      prompt: "你觉得哪个视频最好看?",
    },
    {
      id: "video-topic-like",
      type: "multiple-choice",
      prompt: "您喜欢的温州话短视频的类型？",
      options: ["娱乐视频","动漫","歌曲","非遗文化","时事新闻","海外生活","直播","教育","不知道"],
    },
    {
      id: "most_shareable",
      type: "video-picker",
      prompt: "你觉得哪个视频你最会推荐给其他人?",
    },
    {
      id: "share-reason",
      type: "multiple-choice",
      prompt: "为什么你会推荐这个视频",
      options: ["搞笑","有教育意义","有艺术价值","点赞/转发高，想跟风","有祝福意义","不知道/其他"],
    },
  ],

  // ----- 6. TARGET-SPECIFIC QUESTIONS (asked only about the Wenzhounese video) -----
  targetQuestions: [
    {
      id: "comprehension_self",
      type: "scale",
      prompt: "您对这些视频的内容理解了多少?",
      min: 1,
      max: 5,
      minLabel: "压根没看懂",
      maxLabel: "全懂了",
    },
    {
      id: "engagement",
      type: "scale",
      prompt: "你觉得这些视频有多引人入胜?",
      min: 1,
      max: 5,
      minLabel: "我没怎么看",
      maxLabel: "我还想要刷这类视频三天三夜",
    },
    {
      id: "use_intent",
      type: "scale",
      prompt: "看完这些视频，你愿意去刷一些其他的温州话视频吗?",
      min: 1,
      max: 5,
      minLabel: "肯定不会",
      maxLabel: "我现在去搜",
    },
    {
      id: "dialect-feel",
      type: "multiple-choice",
      prompt: "你再刷短视屏刷到温州话短视频第一感觉是什么",
      options: ["亲切","陌生","惊喜","没感觉"],
    },
    {
      id: "open_response",
      type: "text",
      prompt: "你觉得这些视频怎么样？（写一两句话就行）",
    }
  ],

  // ----- 6B. WENZHOUNESE-SPECIFIC DEEP-DIVE QUESTIONS -----
  // Shown ONLY to participants who answered "是" to wenzhounese_identity.
  // Based on the "针对温州人的深度追问" section of the research brief.
  wenzhouneseQuestions: [
    {
      id: "wz_slang_reaction",
      type: "multiple-choice",
      prompt: "在观看短视频时，如果遇到温州话特有的俚语（如吃天光、显灵等），您的反应是？",
      options: [
        "秒懂，且生活中也会用",
        "听得懂，但自己说不出口",
        "需要看评论区或字幕才能懂",
        "完全听不懂",
      ],
    },
    {
      id: "wz_imitation_intent",
      type: "multiple-choice",
      prompt: "在刷到有趣的温州话短视频（如搞笑段子、方言配音）后，您是否会尝试在现实生活中模仿视频里的一句话？",
      options: [
        "经常会，觉得很有趣",
        "偶尔会，看心情",
        "不会，觉得尴尬或土",
        "不会，身边没人说，说了也没人懂",
      ],
    },
    {
      id: "wz_disliked_content",
      type: "multiple-choice",
      prompt: "您认为目前平台上的温州话视频，哪种形式最让您反感？",
      options: [
        "刻意扮丑/低俗的搞笑段子",
        "强行科普/教学（像上课一样）",
        "发音不标准、生搬硬套的假温州话",
        "强行蹭流量、内容空洞无意义的视频",
        "翻译/字幕错误百出",
        "没有反感，都挺喜欢",
      ],
    },
    {
      id: "wz_identity_feel",
      type: "multiple-choice",
      prompt: "您认为短视频中的温州话内容，是否加深了您对温州人身份的认同感？",
      options: [
        "是，感觉找到了组织/归属感",
        "一般，只是当个乐子看",
        "否，反而觉得有些视频拉低了温州人的形象",
      ],
    },
    {
      id: "wz_algorithm_feel",
      type: "multiple-choice",
      prompt: "您是否感觉到，一旦您点赞了一个温州话视频，平台就会疯狂推送同类内容？这对您的观看体验有何影响？",
      options: [
        "喜欢，让我看到了更多温州文化",
        "无感，刷过去就是了",
        "讨厌，感觉被算法绑架，内容太单一",
        "没有感觉到平台的推送"
      ],
    },
    {
      id: "wz_comment_section",
      type: "multiple-choice",
      prompt: "您认为短视频评论区对温州话传承有帮助吗？",
      options: [
        "有，评论区有很多课代表翻译和教学",
        "一般，大家只是在玩梗",
        "没有，评论区经常出现地域攻击或嘲笑方言难听",
      ],
    },
    {
      id: "wz_ai_attitude",
      type: "multiple-choice",
      prompt: "如果短视频平台推出AI温州话实时翻译或AI方言配音功能，您会使用吗？",
      options: [
        "会，这能帮我听懂/学会",
        "不会，机器翻译没有灵魂/不准确",
        "无所谓",
      ],
    },
    {
      id: "wz_preservation_path",
      type: "multiple-choice",
      prompt: "您认为通过短视频传承温州话，最有效的路径是？",
      options: [
        "娱乐化：搞笑剧情、脱口秀",
        "实用化：生活场景教学、旅游指南",
        "艺术化：温州话歌曲、戏曲切片",
        "情感化：记录老人生活、乡愁故事",
      ],
    },
    {
      id: "wz_learning_barrier",
      type: "multiple-choice",
      prompt: "您觉得通过短视频学习温州话，最大的阻碍是什么？",
      options: [
        "发音太难，完全找不到规律（恶魔之语）",
        "缺乏系统的教学视频，大多是碎片化娱乐",
        "没有语言环境，学了也没处用",
        "没有阻碍，我觉得挺简单的",
      ],
    },
    {
      id: "wz_improvement",
      type: "text",
      prompt: "如果让您给温州话短视频提一个改进建议，您最希望看到什么改变？",
    },
  ],

  // ----- 6C. NON-WENZHOUNESE DEEP-DIVE QUESTIONS -----
  // Shown ONLY to participants who answered "否" to wenzhounese_identity.
  // Based on the "针对非温州人的深度追问" section of the research brief.
  nonWenzhouneseQuestions: [
    {
      id: "nwz_learning_barrier",
      type: "multiple-choice",
      prompt: "您觉得通过短视频学习温州话，最大的阻碍是什么？",
      options: [
        "发音太难，完全找不到规律（恶魔之语）",
        "缺乏系统的教学视频，大多是碎片化娱乐",
        "没有语言环境，学了也没处用",
        "没有阻碍，我觉得挺简单的",
      ],
    },
    {
      id: "nwz_practical_value",
      type: "multiple-choice",
      prompt: "如果您去温州旅游或工作，您认为学会几句温州话（通过短视频学的）有帮助吗？",
      options: [
        "非常有帮助，能拉近距离",
        "有点帮助，主要是为了防身/听懂砍价",
        "没帮助，温州人都会说普通话",
        "没想过这个问题",
      ],
    },
    {
      id: "nwz_algorithm_feel",
      type: "multiple-choice",
      prompt: "您是否感觉到，一旦您点赞了一个温州话视频，平台就会疯狂推送同类内容？这对您的观看体验有何影响？",
      options: [
        "喜欢，让我看到了更多温州文化",
        "无感，刷过去就是了",
        "讨厌，感觉被算法绑架，内容太单一",
        "没有感觉到平台的推送"
      ],
    },
    {
      id: "nwz_ai_attitude",
      type: "multiple-choice",
      prompt: "如果短视频平台推出AI温州话实时翻译或AI方言配音功能，您会使用吗？",
      options: [
        "会，这能帮我听懂/学会",
        "不会，机器翻译没有灵魂/不准确",
        "无所谓",
      ],
    },
    {
      id: "nwz_preservation_path",
      type: "multiple-choice",
      prompt: "您认为通过短视频传承温州话，最有效的路径是？",
      options: [
        "娱乐化：搞笑剧情、脱口秀（让人爱看）",
        "实用化：生活场景教学、旅游指南（让人有用）",
        "艺术化：温州话歌曲、戏曲切片（让人欣赏）",
        "情感化：记录老人生活、乡愁故事（让人感动）",
      ],
    },
    {
      id: "nwz_improvement",
      type: "text",
      prompt: "如果让您给温州话短视频提一个改进建议，您最希望看到什么改变？",
    },
  ],

  // Audio comprehension-check questions, specific to each target video version.
  // Example below shows the format using target video "A". Add one array per
  // target video id you defined above (e.g. targetAudioQuestions.B, .C, ...).
  // These are inserted right after the questions above, only for the participant's
  // assigned target video.
  targetAudioQuestions: {
    A: [
      {
        id: "translate_1",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_a_phrase1.mp3",
        options: ["快点来", "走过来", "在了，快", "造了卡"],
        correctAnswer: "快点来",
      },
    ],
    B: [
      {
        id: "translate_2",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_b_phrase1.mp3",
        options: ["脚呢", "干嘛", "没有", "母亲"],
        correctAnswer: "干嘛",
      },
    ],
    C: [
      {
        id: "translate_3",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_c_phrase1.mp3",
        options: ["爸爸", "大爷", "叔叔", "大妈"],
        correctAnswer: "叔叔",
      },
    ],
    D: [
      {
        id: "translate_4",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_d_phrase1.mp3",
        options: ["爱上我", "等一下", "我拿过", "怎么说"],
        correctAnswer: "怎么说",
      },
    ],
    E: [
      {
        id: "translate_5",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_e_phrase1.mp3",
        options: ["不冷的", "不灵清", "不能成", "补灵气"],
        correctAnswer: "不灵清",
      },
    ],
    F: [
      {
        id: "translate_6",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_f_phrase1.mp3",
        options: ["你在哪", "谁", "你妈", "你呢"],
        correctAnswer: "谁",
      },
    ],
    G: [
      {
        id: "translate_7",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_g_phrase1.mp3",
        options: ["毫无乐趣", "都懂了", "没有明白", "都在那里"],
        correctAnswer: "毫无乐趣",
      },
    ],
    H: [
      {
        id: "translate_8",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_h_phrase1.mp3",
        options: ["你走", "我讲", "我国", "你说"],
        correctAnswer: "我讲",
      },
    ],
    J: [
      {
        id: "translate_9",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_j_phrase1.mp3",
        options: ["温州话", "语言学", "宇宙", "于是说"],
        correctAnswer: "温州话",
      },
    ],
    K: [
      {
        id: "translate_10",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_k_phrase1.mp3",
        options: ["油焖", "螃蟹", "房子", "你们"],
        correctAnswer: "螃蟹",
      },
    ],
    L: [
      {
        id: "translate_11",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_l_phrase1.mp3",
        options: ["上午好", "大哥请进", "大家好", "你们好吗"],
        correctAnswer: "大家好",
      },
    ],
    M: [
      {
        id: "translate_12",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_m_phrase1.mp3",
        options: ["大家好", "德国人", "实在人", "地球人"],
        correctAnswer: "地球人",
      },
    ],
    N: [
      {
        id: "translate_13",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_n_phrase1.mp3",
        options: ["懂了", "好的", "台风", "滚蛋"],
        correctAnswer: "台风",
      },
    ],
    P: [
      {
        id: "translate_14",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_p_phrase1.mp3",
        options: ["你查查", "我先看一看", "你先看一看", "我查查"],
        correctAnswer: "我先看一看",
      },
    ],
    O: [
      {
        id: "translate_15",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_o_phrase1.mp3",
        options: ["你啊", "你呢", "你妈", "我啊"],
        correctAnswer: "你妈",
      },
    ],
    Q: [
      {
        id: "translate_15.5",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_q_phrase1.mp3",
        options: ["国中肉", "江蟹生", "说什么", "大海鲜"],
        correctAnswer: "江蟹生",
      },
    ],
    R: [
      {
        id: "translate_16",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_r_phrase1.mp3",
        options: ["你看", "脑干", "完蛋", "好样的"],
        correctAnswer: "完蛋",
      },
    ],
    S: [
      {
        id: "translate_17",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_s_phrase1.mp3",
        options: ["下巴", "好吧", "瞎掰", "知道了"],
        correctAnswer: "知道了",
      },
    ],
    T: [
      {
        id: "translate_18",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_t_phrase1.mp3",
        options: ["服务生", "服务人", "服务员", "我服了"],
        correctAnswer: "服务员",
      },
    ],
    U: [
      {
        id: "translate_19",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_u_phrase1.mp3",
        options: ["那我呢", "死了", "电话", "恶心"],
        correctAnswer: "恶心",
      },
    ],
    V: [
      {
        id: "translate_20",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_v_phrase1.mp3",
        options: ["闲事", "鞋子", "袖子", "恶心"],
        correctAnswer: "闲事",
      },
    ],
    W: [
      {
        id: "translate_21",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_w_phrase1.mp3",
        options: ["我菜呢", "你吃了", "我吃了", "你人呢"],
        correctAnswer: "我吃了",
      },
    ],
    X: [
      {
        id: "translate_22",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语（鹿城口音），它的普通话意思是？",
        audioSrc: "audio/target_x_phrase1.mp3",
        options: ["拖鞋", "人呢", "踏地", "烫死了"],
        correctAnswer: "拖鞋",
      },
    ],
    Y: [
      {
        id: "translate_23",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_y_phrase1.mp3",
        options: ["女人", "被子", "鱼饼", "爱情"],
        correctAnswer: "鱼饼",
      },
    ],
    Z: [
      {
        id: "translate_24",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_z_phrase1.mp3",
        options: ["我的呢", "我天啊", "太空人", "我鞋呢"],
        correctAnswer: "我天啊",
      },
    ],
    AA: [
      {
        id: "translate_25",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_aa_phrase1.mp3",
        options: ["啊？", "咸", "矮", "谁"],
        correctAnswer: "咸",
      },
    ],
    AB: [
      {
        id: "translate_26",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_ab_phrase1.mp3",
        options: ["该死", "喝水", "哈气", "河水"],
        correctAnswer: "喝水",
      },
    ],
    AC: [
      {
        id: "translate_27",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_ac_phrase1.mp3",
        options: ["我说", "什么", "宏大", "风光"],
        correctAnswer: "风光",
      },
    ],
    AD: [
      {
        id: "translate_28",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_ad_phrase1.mp3",
        options: ["你说啥", "怎么了", "支持你", "快到了"],
        correctAnswer: "你说啥",
      },
    ],
    AE: [
      {
        id: "translate_29",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_ae_phrase1.mp3",
        options: ["大人们", "大家好", "大哥好", "打嗝了"],
        correctAnswer: "大家好",
      },
    ],
    AG: [
      {
        id: "translate_30",
        type: "audio-multiple-choice",
        prompt: "请听下面这个温州话短语，它的普通话意思是？",
        audioSrc: "audio/target_ag_phrase1.mp3",
        options: ["打不准", "大不了", "你人呢", "打嗝了"],
        correctAnswer: "打不准",
      },
    ],
  },

  // ----- 7. BACKGROUND / MOTIVATION QUESTIONS (asked last) -----
  backgroundQuestions: [
    {
      id: "shame_pride",
      type: "scale",
      prompt: "在成长过程中，讲方言让我感到……",
      min: 1,
      max: 5,
      minLabel: "羞耻",
      maxLabel: "骄傲",
    },
    {
      id: "instrumental_value",
      type: "scale",
      prompt: "我认为掌握方言对我的未来（职业、家庭、社区）很有用。",
      min: 1,
      max: 5,
      minLabel: "非常不同意",
      maxLabel: "非常同意",
    },
    {
      id: "dialect_usage",
      type: "scale",
      prompt: "你在日常生活中多久听到或使用一次方言？",
      min: 1,
      max: 5,
      minLabel: "不说",
      maxLabel: "每天都说",
    },
    {
      id: "dialect_who",
      type: "multiple-choice",
      prompt: "你主要和谁说方言？",
      options: ["亲戚","朋友","工作","邻居","我不说方言"],
    },
  ],
};
