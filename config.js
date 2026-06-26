// ============================================================
// SURVEY CONFIG — edit this file only. Nothing else needs touching.
// ============================================================

const CONFIG = {

  // ----- 1. FILLER VIDEOS -----
  // Neutral TikTok-style videos that surround the target video.
  // Put the actual .mp4 files in the /videos folder, then list the filenames here.
  // Aim for 4-6 filler videos (topically neutral: food, travel, pets, comedy, etc.)
  fillerVideos: [
    "videos/filler1.mp4",
    "videos/filler2.mp4",
    "videos/filler3.mp4",
    "videos/filler4.mp4",
    "videos/filler5.mp4",
  ],

  // ----- 2. TARGET VIDEOS (the Wenzhounese videos you're A/B testing) -----
  // Each participant is randomly assigned ONE of these. Give each a short id.
  targetVideos: [
    { id: "A", file: "videos/target_a.mp4", label: "Version A" },
    { id: "B", file: "videos/target_b.mp4", label: "Version B" },
    { id: "C", file: "videos/target_c.mp4", label: "Version C" },
    { id: "D", file: "videos/target_d.mp4", label: "Version D" },
    { id: "E", file: "videos/target_e.mp4", label: "Version E" },
    { id: "F", file: "videos/target_f.mp4", label: "Version F" },
    { id: "G", file: "videos/target_g.mp4", label: "Version G" },
    { id: "H", file: "videos/target_h.mp4", label: "Version H" },
    { id: "J", file: "videos/target_j.mp4", label: "Version J" },
    { id: "K", file: "videos/target_k.mp4", label: "Version K" },
    { id: "L", file: "videos/target_l.mp4", label: "Version L" },
    { id: "M", file: "videos/target_m.mp4", label: "Version M" },
    { id: "N", file: "videos/target_n.mp4", label: "Version N" },
    { id: "O", file: "videos/target_o.mp4", label: "Version O" },
    { id: "P", file: "videos/target_p.mp4", label: "Version P" },
    { id: "Q", file: "videos/target_q.mp4", label: "Version Q" },
    { id: "R", file: "videos/target_r.mp4", label: "Version R" },
    { id: "S", file: "videos/target_s.mp4", label: "Version S" },
    { id: "T", file: "videos/target_t.mp4", label: "Version T" },
    { id: "U", file: "videos/target_u.mp4", label: "Version U" },
    { id: "V", file: "videos/target_v.mp4", label: "Version V" },
    { id: "W", file: "videos/target_w.mp4", label: "Version W" },
    { id: "X", file: "videos/target_x.mp4", label: "Version X" },
    { id: "Y", file: "videos/target_y.mp4", label: "Version Y" },
    { id: "Z", file: "videos/target_z.mp4", label: "Version Z" },
    { id: "AA", file: "videos/target_aa.mp4", label: "Version AA" }
  ],

  // ----- 3. FEED LENGTH -----
  // Total videos shown = fillers + 1 target. The target's position is randomized
  // within this range (1-indexed). E.g. [3,5] means it'll never be 1st, 2nd, or last.
  feedSize: 6,                 // total videos in the feed (target + fillers, trimmed/repeated as needed)
  targetPositionRange: [3, 5], // target video will land in slot 3, 4, or 5

  // ----- 4. SCREENING QUESTIONS (asked before the feed) -----
  screeningQuestions: [
    {
      id: "age",
      type: "number",
      prompt: "你今年多大？",
    },
    {
      id: "heritage",
      type: "text",
      prompt: "你目前居住在那里？",
    },
    {
      id: "Education",
      type: "single-choice",
      prompt: "您的最高学历是？",
      options: ["初中及以下","高中 / 中专","大专","本科","硕士及以上"],
    },
    {
      id: "Work",
      type: "multiple-choice",
      prompt: "您目前从事的行业 / 职业？",
      options: ["学生","教育 / 科研","商业 / 金融","服务业","制造业","其他"],
    },
    {
      id: "Tiktok Usage",
      type: "single-choice",
      prompt: "您每周刷短视屏的频率？",
      options: ["不刷","每周少于 2 小时","每周 2到5 小时","每周 5到10 小时","每周超过 10 小时","不知道"],
    }
  ],

  // ----- 5. GENERAL FEED QUESTIONS (asked about ALL videos, target not singled out) -----
  generalQuestions: [
    {
      id: "most_interesting",
      type: "video-picker",
      prompt: "你觉得哪个视频最好看?",
    },
    {
      id: "most_shareable",
      type: "video-picker",
      prompt: "你觉得哪个视频你最会推荐给其他人?",
    },
  ],

  // ----- 6. TARGET-SPECIFIC QUESTIONS (asked only about the Wenzhounese video) -----
  // Question types available here:
  //   "scale"                  — numbered rating scale
  //   "multiple-choice"        — text prompt, pick one of several text options
  //   "audio-multiple-choice"  — plays an audio clip, then pick one of several text options
  //                              (use this for comprehension checks, e.g. "translate this phrase")
  //   "text"                   — open-ended short answer
  //
  // For audio questions: put the .mp3/.wav/.m4a file in the /audio folder and
  // reference it as "audio/filename.mp3" in the `audioSrc` field below.
  // IMPORTANT: each target video (A/B/C...) may use different Wenzhounese phrases,
  // so audio comprehension questions are defined PER TARGET VIDEO ID below, then
  // merged automatically with the shared questions every participant sees.

  targetQuestions: [
    {
      id: "comprehension_self",
      type: "scale",
      prompt: "视频群中有一个温州话的短视频，你理解了多少?",
      min: 1,
      max: 5,
      minLabel: "压根没看几秒",
      maxLabel: "全懂了",
    },
    {
      id: "engagement",
      type: "scale",
      prompt: "视频群中有一个温州话的短视频，你觉得那个视频有多引人入胜?",
      min: 1,
      max: 5,
      minLabel: "我没怎么看",
      maxLabel: "我还想要刷这类视频三天三夜",
    },
    {
      id: "feeling",
      type: "multiple-choice",
      prompt: "视频群中有一个温州话的短视频，下列哪个词最能描述视频中温州人的说话听感？",
      options: ["温柔","酷","有趣","过时","困难","不知道","我不知道这个调查是关于温州话的（没看视频）"],
    },
    {
      id: "use_intent",
      type: "scale",
      prompt: "视频群中有一个温州话的短视频，看完它你又愿意去刷一些其他的温州话视频吗?",
      min: 1,
      max: 5,
      minLabel: "肯定不会",
      maxLabel: "我现在去搜",
    },
    {
      id: "open_response",
      type: "text",
      prompt: "视频群中有一个温州话的短视频，你觉得这个视频怎么样？（写一两句话就行）",
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
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_a_phrase1.mp3",
        options: ["快点来", "走过来", "在了，快", "造了卡"],
        correctAnswer: "快点来",
      },
    ],
    B: [
      {
        id: "translate_2",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_b_phrase1.mp3",
        options: ["脚呢", "干嘛", "没有", "母亲"],
        correctAnswer: "干嘛",
      },
    ],
    C: [
      {
        id: "translate_3",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_c_phrase1.mp3",
        options: ["爸爸", "大爷", "叔叔", "大妈"],
        correctAnswer: "叔叔",
      },
    ],
    D: [
      {
        id: "translate_4",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_d_phrase1.mp3",
        options: ["爱上我", "等一下", "我拿过", "怎么说"],
        correctAnswer: "怎么说",
      },
    ],
    E: [
      {
        id: "translate_5",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_e_phrase1.mp3",
        options: ["不冷的", "不灵清", "不能成", "补灵气"],
        correctAnswer: "不灵清",
      },
    ],
    F: [
      {
        id: "translate_6",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_f_phrase1.mp3",
        options: ["你在哪", "谁", "你妈", "你呢"],
        correctAnswer: "谁",
      },
    ],
    G: [
      {
        id: "translate_7",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_g_phrase1.mp3",
        options: ["毫无乐趣", "都懂了", "没有明白", "都在那里"],
        correctAnswer: "毫无乐趣",
      },
    ],
    H: [
      {
        id: "translate_8",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_h_phrase1.mp3",
        options: ["你走", "我讲", "我国", "你说"],
        correctAnswer: "我讲",
      },
    ],
    J: [
      {
        id: "translate_9",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_j_phrase1.mp3",
        options: ["温州话", "语言学", "宇宙", "于是说"],
        correctAnswer: "温州话",
      },
    ],
    K: [
      {
        id: "translate_10",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_k_phrase1.mp3",
        options: ["油焖", "螃蟹", "房子", "你们"],
        correctAnswer: "螃蟹",
      },
    ],
    L: [
      {
        id: "translate_11",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_l_phrase1.mp3",
        options: ["上午好", "大哥请进", "大家好", "你们好吗"],
        correctAnswer: "大家好",
      },
    ],
    M: [
      {
        id: "translate_12",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_m_phrase1.mp3",
        options: ["大家好", "德国人", "实在人", "地球人"],
        correctAnswer: "地球人",
      },
    ],
    N: [
      {
        id: "translate_13",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_n_phrase1.mp3",
        options: ["懂了", "好的", "台风", "滚蛋"],
        correctAnswer: "台风",
      },
    ],
    P: [
      {
        id: "translate_14",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_p_phrase1.mp3",
        options: ["你查查", "我先看一看", "你先看一看", "我查查"],
        correctAnswer: "我先看一看",
      },
    ],
    O: [
      {
        id: "translate_15",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_o_phrase1.mp3",
        options: ["你啊", "你呢", "你妈", "我啊"],
        correctAnswer: "你妈",
      },
    ],
    Q: [
      {
        id: "translate_15.5",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_q_phrase1.mp3",
        options: ["国中肉", "江蟹生", "说什么", "大海鲜"],
        correctAnswer: "江蟹生",
      },
    ],
    R: [
      {
        id: "translate_16",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_r_phrase1.mp3",
        options: ["你看", "脑干", "完蛋", "好样的"],
        correctAnswer: "完蛋",
      },
    ],
    S: [
      {
        id: "translate_17",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_s_phrase1.mp3",
        options: ["下巴", "好吧", "瞎掰", "知道了"],
        correctAnswer: "知道了",
      },
    ],
    T: [
      {
        id: "translate_18",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_t_phrase1.mp3",
        options: ["服务生", "服务人", "服务员", "我服了"],
        correctAnswer: "服务员",
      },
    ],
    U: [
      {
        id: "translate_19",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_u_phrase1.mp3",
        options: ["那我呢", "死了", "电话", "恶心"],
        correctAnswer: "恶心",
      },
    ],
    V: [
      {
        id: "translate_20",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_v_phrase1.mp3",
        options: ["闲事", "鞋子", "袖子", "恶心"],
        correctAnswer: "闲事",
      },
    ],
    W: [
      {
        id: "translate_21",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_w_phrase1.mp3",
        options: ["我菜呢", "你吃了", "我吃了", "你人呢"],
        correctAnswer: "我吃了",
      },
    ],
    X: [
      {
        id: "translate_22",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin? (请使用鹿城口音)",
        audioSrc: "audio/target_x_phrase1.mp3",
        options: ["拖鞋", "人呢", "踏地", "烫死了"],
        correctAnswer: "拖鞋",
      },
    ],
    Y: [
      {
        id: "translate_23",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_y_phrase1.mp3",
        options: ["女人", "被子", "鱼饼", "爱情"],
        correctAnswer: "鱼饼",
      },
    ],
    Z: [
      {
        id: "translate_24",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_z_phrase1.mp3",
        options: ["我的呢", "我天啊", "太空人", "我鞋呢"],
        correctAnswer: "我天啊",
      },
    ],
    AA: [
      {
        id: "translate_25",
        type: "audio-multiple-choice",
        prompt: "Listen to the phrase below. What does it mean in Mandarin?",
        audioSrc: "audio/target_aa_phrase1.mp3",
        options: ["啊？", "咸", "矮", "谁"],
        correctAnswer: "咸",
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
      prompt: "你在日常生活中多久听到或使用一次温州话？",
      min: 1,
      max: 5,
      minLabel: "不说",
      maxLabel: "每天都说",
    },
    {
      id: "dialect_who",
      type: "multiple-choice",
      prompt: "你主要和谁说方言？",
      options: ["长辈","朋友","工作","邻居","我不说方言"],
    },
  ],
};
