const STORAGE = {
  member: 'pageverse-member-v1',
  accounts: 'pageverse-accounts-v1',
  generated: 'pageverse-generated-v1',
  library: (email) => `pageverse-library-${email.toLowerCase()}`,
};

const seedNovels = [
  {
    id: 'moon-archive', title: '月亮失物招領所', subtitle: '遺失的心情，請在午夜認領', summary: '午夜失物招領所替人收藏遺失的心情，知夏來認領快樂，卻意外撿起店員以安失落的月亮。', genre: '都市奇幻', mood: '溫柔療癒', author: '雨天留聲機', cover: 1, symbol: '月', chapters: [
      { title: '凌晨兩點，請按鈴', paragraphs: [
        '城市裡有一間失物招領所，只在凌晨兩點營業。它藏在捷運末班車的終點站，門口掛著一盞不太亮的黃燈，玻璃窗上用原子筆寫著：遺失的東西，請進來找找。',
        '林知夏第一次走進去，是為了找回一種她說不出名字的東西。店裡的男人抬起頭，放下正在讀的報紙。「請問，你遺失了什麼？」他問。知夏想了想，說：「我好像把快樂弄丟了。」',
        '男人沒有驚訝，只從架上取下一個貼著標籤的小玻璃瓶。瓶子裡裝著一點點下過雨的空氣，和遠處公車站傳來的報站聲。「這是你上星期在巷口笑出來的那三秒，」他說，「你要認領嗎？」',
        '知夏伸出手。瓶身暖暖的，像有人隔著很遠的距離，替她留住了一小段還沒放棄的日子。窗外，城市的鐘正好敲了兩下。',
      ] },
      { title: '收據上的另一個名字', paragraphs: [
        '玻璃瓶背面貼著一張收據，上頭除了日期，還有一個陌生的名字：周以安。知夏抬頭，店裡的男人已經把報紙翻到下一頁，像是沒看見她臉上的疑問。',
        '「每件失物都需要有人先替它保管嗎？」她問。以安終於放下報紙。他的眼睛帶著很淡的笑意：「有些東西不是被弄丟的，是暫時不想帶在身上。」',
        '那天晚上，知夏在地鐵站等了好久。她想不起自己上一次真正笑出聲是什麼時候，卻在站內的公告牆上，看見一張手寫的尋物啟事。有人弄丟了「記得回家的勇氣」。',
        '字跡和收據上一模一樣。知夏把那張紙撕下來收好，決定下個午夜再來一次。',
      ] },
      { title: '把遺失的自己帶回家', paragraphs: [
        '接下來的日子，知夏在失物招領所裡認領了好多東西：一首忘了名字的歌、一個不再害怕下雨的下午，還有小時候以為永遠不會結束的暑假。',
        '奇怪的是，那些瓶子都貼著以安的名字。直到某天，她在最角落的櫃子找到一個沒有標籤的玻璃罐，裡面裝著一小片月亮。',
        '「這個沒有人認領嗎？」她問。以安搖頭：「我等了好久，才等到願意替我收下它的人。」知夏忽然明白，他早就把自己的月亮弄丟了，才會一直留在這裡工作。',
        '離開時，知夏把瓶子留在桌上。她沒有拿走它，只把失物招領所的門打開一點，讓月光照進去。兩個人第一次一起走回街上，天快亮了，卻沒有誰急著說再見。',
      ] },
    ],
  },
  {
    id: 'last-train', title: '末班車沒有終點站', subtitle: '每晚 23:47，開往未寄出的信', summary: '每晚末班車相遇的兩人，靠一本藍色筆記本交換心事，直到其中一人即將離開城市。', genre: '戀愛日常', mood: '微甜心動', author: '阿鹿', cover: 2, symbol: '信', chapters: [
      { title: '你也在等這班車嗎', paragraphs: [
        '每天晚上十一點四十七分，程予青都會在月台遇見同一個人。他們從來沒有說過話，只知道對方總是拿著一本藍色筆記本，戴一副太大、總往下滑的眼鏡。',
        '第十三次遇見那個人時，予青撿到一張從筆記本裡掉出來的紙。上面寫著：「如果有一天，你看見一個總在末班車站發呆的人，請提醒他，明天也要好好生活。」',
        '他追上去時，車門已經關了。車窗裡，那個人正對著手機微笑。予青看著手上微微發皺的紙，第一次覺得這班車開得太快了。',
        '隔天，他帶了一本自己的筆記本來。封面是藍色的，和那本一樣。',
      ] },
      { title: '兩本藍色筆記本', paragraphs: [
        '那天晚上的車誤點了七分鐘。兩個人並排站在月台上，距離比往常近一點。予青在自己的筆記本上寫了一句話，撕下來，遞過去。',
        '「提醒你，明天也要好好生活。」那個人讀完，笑得眼睛彎起來，拿出自己的筆記本回覆：「那你呢？明天也要好好生活嗎？」',
        '予青用力點頭。他們都沒有問對方的名字，但車來的時候，並肩站到了同一側車門。整節車廂空空的，只有他們隔著兩個座位坐下。',
        '「我是予青。」他終於說。「我叫聞澈。」窗外的燈一盞一盞往後退，車廂裡有一段很輕、很剛好的安靜。',
      ] },
      { title: '明天見，不要錯過', paragraphs: [
        '他們開始交換每天寫下的句子。有時候是一首歌的歌詞，有時候只是「今天路上的貓咪長得很像主管」，或者一個不太好笑的笑話。',
        '某個星期五，聞澈的座位空了。他留下的筆記本在月台長椅上，最後一頁畫著兩個並排的車站。下面寫著：下一站，明天。',
        '予青第一次知道，聞澈下週要搬家。他沒有生氣，卻有一點不甘心。「你一直在等什麼？」他問。聞澈想了想，說：「等一個人不只是偶遇。」',
        '末班車再次進站時，他們一起上了車。沒有人知道那班車究竟開往哪裡，但兩個人都決定，至少這一次不要錯過了。',
      ] },
    ],
  },
  {
    id: 'blue-room', title: '每個人都忘了星期三', subtitle: '除了偵探本人以外', summary: '全世界同時忘了星期三，只有一名偵探收到來自明天的信：別相信明天的自己。', genre: '懸疑推理', mood: '燒腦反轉', author: '白夜觀測', cover: 3, symbol: '？', chapters: [
      { title: '今天不是星期三', paragraphs: [
        '我在星期四早上醒來，發現全世界都不記得星期三。超商的電子看板寫著「祝你星期四愉快」，新聞主播也用星期四的語氣道早安，只有我的行事曆上，多了一道從沒見過的紅色刪除線。',
        '朋友說我睡昏頭了，主管問我是不是太累。我查遍手機，所有星期三的訊息和照片都還在，只是裡面的朋友完全不記得那些對話。',
        '最奇怪的是，一封排定在星期三寄出的信，寄件時間竟然比現在晚了一天。信裡只有一句話：不要相信明天的自己。',
        '我把那封信翻過來，郵戳上蓋著一個地址。那是城西一間已經拆掉七年的照相館。',
      ] },
      { title: '照相館的底片', paragraphs: [
        '照相館原址只剩一面斑駁的牆，牆上掛著拆遷公告。我在牆根找到半截底片，沖洗出來的照片裡，是我站在一間從未去過的房間，手裡拿著那封信。',
        '照片背後寫著日期：星期三，晚上十一點五十九分。我在網路上搜尋那一天，新聞記錄裡只有一行：一位名叫江以陌的攝影師失蹤。',
        '我認得這個名字。那是我五年前忘掉的名字，也是我畢業相簿裡唯一被刮花的那張臉。可照片中的人正在對我微笑，像我們剛剛才分開。',
        '當晚，電子時鐘跳到十一點五十九分時，房間裡突然多了一個人。他說：「你終於記得星期三了。」',
      ] },
      { title: '那個被刪除的日子', paragraphs: [
        '江以陌把一張舊相片交給我。五年前的星期三，我們曾經一起拍下那張照片。那天之後，他失蹤，而我選擇忘記他。',
        '「不是世界忘記星期三，是你把那一天從自己的人生裡刪掉了。」他說。可如果這是真的，為什麼所有人都跟著忘了？',
        '他望向窗外。那裡的城市像一張曝光過度的相紙，所有街道都變成純白。「因為那一天的你，才是這個世界真正的起點。」',
        '我看見電子時鐘又跳了一次。這一次，它顯示的是星期三。我想起所有事，卻再也找不到那封信。桌上只剩下一台沒有底片的相機，和一張空白的照片。',
      ] },
    ],
  },
  {
    id: 'garden-stars', title: '把星星種進花盆裡', subtitle: '陽台上長出一座小小宇宙', summary: '一包來路不明的種子在陽台發芽成星光，讓獨自生活的阿澄重新找回與人分享的理由。', genre: '療癒奇想', mood: '溫柔療癒', author: '小島日記', cover: 4, symbol: '✳', chapters: [
      { title: '一包來路不明的種子', paragraphs: [
        '阿澄在搬家紙箱的最底部，找到一包沒有標籤的種子。包裝紙舊得像是從好幾年前的雨天裡撈起來，上面只用鉛筆寫著：「種在晚上。」',
        '他把種子埋進陽台的空花盆，澆了一點水。第二天早上什麼都沒有。第三天晚上，土裡冒出一顆微微發亮的小點，像有人把遙遠的星光寄錯了地址。',
        '阿澄坐在地板上看了很久。城市裡很少看得見星星，但這顆就在他的窗邊，一閃一閃，像是在跟他打招呼。',
        '他回房間找來一本筆記本，寫下第一筆照顧紀錄：今晚有一顆星星發芽了。',
      ] },
      { title: '替迷路的星星澆水', paragraphs: [
        '那顆星星長得比想像中快。第四個晚上，它已經有一枚小小的葉片。阿澄發現，只要下班後先跟它說說今天發生的事，葉片就會多亮一點。',
        '於是他開始把一天裡最不想記住的事說給星星聽。說完以後，胸口總會空出一小塊地方，足夠讓新的念頭長進來。',
        '隔壁的阿姨有一天敲門，說她從窗外看見一株會發光的植物。她捧著剛烤好的餅乾進來，兩個人就在陽台上分著吃。',
        '那天晚上，星星長出了第二片葉子。阿澄想，也許照顧一顆星星，就是讓自己有個理由，在忙亂的日子裡停下來。',
      ] },
      { title: '陽台上的小小宇宙', paragraphs: [
        '一個月後，花盆裡不只長出一顆星星。小小的光點彼此靠近，在夜裡排成一條他叫不出名字的星河。',
        '阿澄邀請鄰居們上來看。有人帶來茶，有人帶來自己種的薄荷。陽台從來沒有這麼熱鬧過，大家輪流講起搬到這座城市後，最想念的一件小事。',
        '阿澄把種子包裝紙翻到背面，終於看見一行快褪色的小字：「給每一個以為自己很孤單的人。」他抬頭看向那些光點，覺得心裡也亮起了一小塊。',
        '他把花盆搬到窗邊，讓整條街都能看見。星星一顆一顆亮著，像是在告訴每個晚回家的人：你已經走得很好了。',
      ] },
    ],
  },
  {
    id: 'tomorrow-sea', title: '明日海岸的郵差', subtitle: '替未來的人們送一封信', summary: '末日海岸郵差收到三百年後寄來的信，踏上尋找地圖上不存在的第七座燈塔之旅。', genre: '科幻未來', mood: '熱血冒險', author: '觀測站 04', cover: 5, symbol: '→', chapters: [
      { title: '來自三百年後的信', paragraphs: [
        '海平面上升後，地圖改得比天氣還快。郁岑是「明日海岸」最後一位郵差，工作是把漂流到岸上的信件，一封一封送去信裡提到的地方。',
        '某天她收到一封沒有郵票的信，寄件日期是三百年後。信上只有一行字：「請在海水淹沒以前，找到第七座燈塔。」',
        '她查過地圖，世界上只剩六座燈塔。第七座燈塔的標記，在老舊的海洋測繪儀裡，被一條沒人看過的經緯線擋住。',
        '郁岑把信塞進防水袋，檢查好指南針。退潮只有兩個小時，她必須在下一波潮水之前出發。',
      ] },
      { title: '在潮汐之間前進', paragraphs: [
        '退潮後的海床露出大片銀色礁石。郁岑沿著經緯線走，遇見一艘停在陸地上的舊帆船。船身被畫上了七道刻痕，像有人早就知道她會來。',
        '船上的人工智慧已經等了將近一個世紀。它把一張更完整的海圖交給她，並指出第七座燈塔藏在一座漂浮城市的正下方。',
        '天氣忽然變暗，潮水正在回來。郁岑跳上帆船，放下帆布，讓海風帶著她穿過一排排即將消失的礁石。',
        '船頭指向的不是陸地，而是海圖上沒有標記的方向。她拆開那封信，信紙在風裡翻動，底下還藏著另一句話：「記得帶上那個相信明天的你。」',
      ] },
      { title: '寄往還沒出現的明天', paragraphs: [
        '第七座燈塔沉在海面之下，燈光卻仍然亮著。郁岑在塔底找到一間保存完好的郵局，裡頭有滿滿幾百年的信件。',
        '最上面的信封寄件人，寫的是她自己的名字。裡面是一張老照片，照片中的她站在燈塔前，身旁的人都戴著不同年代的郵差徽章。',
        '她明白了，未來不是一個人等待抵達的地方，而是很多人輪流替彼此寫下的地址。郁岑把那些信裝進防水袋，決定一封一封送出去。',
        '當她再次回到海面，遠處的城市亮起一盞新的燈。她把第一封信寄給一個還沒出生的人，信上寫著：海很大，路很長，但我們正在一起往前走。',
      ] },
    ],
  },
  {
    id: 'second-sun', title: '我的室友是第二個太陽', subtitle: '合租生活與星際級的小麻煩', summary: '新室友自稱第二個太陽，租屋生活從光合作用抵房租開始，最後寫下一份宇宙房客公約。', genre: '都市奇幻', mood: '輕鬆搞笑', author: '發光的便利貼', cover: 6, symbol: '☼', chapters: [
      { title: '房租可以用光合作用抵嗎', paragraphs: [
        '搬進來的第一天，新室友說自己是第二個太陽。這句話聽起來像玩笑，直到他把窗簾拉開，整個客廳突然亮得像正午的台東海邊。',
        '「請問你有健保嗎？」我問。「沒有，但我可以提供免費維生素 D。」他很誠懇地回答。隔天房東傳訊息催房租，我把手機遞給他看。',
        '他看完帳單，沉思三秒，說要去陽台充電。兩小時後回來，手上拿著一盤烤到剛剛好的地瓜。',
        '我看著那盤地瓜，決定先不問他為什麼冰箱裡的牛奶會發出微弱的日蝕。',
      ] },
      { title: '今天輪到月亮值日', paragraphs: [
        '室友答應我，之後會控制自己的亮度。但禮拜一早上，我的鬧鐘還沒響，窗外已經亮得像下午兩點半。',
        '「今天換月亮上班。」他翻過身說。結果整間房子的影子都跑到牆壁上，開始做伸展操。',
        '房東來修熱水器的時候，發現我的植物們排成隊伍，輪流跟室友打招呼。他看起來一點也不驚訝，只問：「有需要加裝遮光窗簾嗎？」',
        '我們一起點頭。這就是我租過最正常的一間奇怪房子。',
      ] },
      { title: '宇宙房客公約', paragraphs: [
        '在收到第三封來自星系管理局的催繳通知後，我們決定正式制定室友公約。第一條，晚上十點後請切換到省電模式。',
        '第二條，不可以在洗衣機裡種出新的星球。第三條，任何人都不能把黑洞放進冰箱，尤其是星期三。',
        '室友很認真地在每一條後面簽名。簽到最後，他說自己從來沒有想過，在宇宙裡也可以有一個地方叫作家。',
        '我們把公約貼在冰箱上，旁邊多了一張新的便條：明天晚餐要吃咖哩。簽名的人畫了一個發光的太陽，還畫了一個拿著飯匙的我。',
      ] },
    ],
  },
  {
    id: 'no-skill', title: '全服只有我沒抽到技能', subtitle: '新手村 NPC 覺得我很眼熟', summary: '人人都靠抽卡獲得超能力，只有林也抽到一張「謝謝參與」。沒想到遊戲世界裡，最稀有的能力是不用技能也願意幫忙。', genre: '都市奇幻', mood: '輕鬆搞笑', author: '練習生玩家', cover: 7, symbol: '✦', chapters: [
      { title: '謝謝參與，明天再來', paragraphs: [
        '世界更新公告說，今天早上九點，所有人都會抽到一種技能。林也排在隊伍最後面，前面的人接連抽出火焰、瞬移和讀心，輪到他時，機器吐出一張白色小卡。',
        '卡片上寫著「謝謝參與」。他正想把它塞回口袋，旁邊的女孩忽然把一袋掉在地上的橘子遞給他，說：「你能幫我撿一下嗎？」',
        '林也彎下腰，發現那顆滾到最遠的橘子底下，壓著一枚從沒見過的金色徽章。系統彈出提示：隱藏職業「路過的好人」，是否接受？',
      ] },
      { title: '組隊前先看說明書', paragraphs: [
        '隱藏職業沒有攻擊力，技能欄裡只有一個按鈕：讓附近的人停下來喘口氣。林也把說明書看了三遍，最後決定帶著它加入女孩的隊伍。',
        '女孩叫陳沐，是全服排行榜第一名。她本來只是想完成副本，卻在林也的提醒下，發現隊友們一路趕路，早就忘記上次一起吃飯是什麼時候。',
        '他們在副本入口坐下來，分掉一袋橘子。遠處的怪物沒有等人，但這一次，排行榜第一名把倒數計時先關掉了。',
      ] },
      { title: '隱藏任務：回家吃飯', paragraphs: [
        '通關通知跳出來時，林也第一次得到全隊的掌聲。不是因為他打贏了誰，而是因為每個人都記得自己為什麼來到這裡。',
        '陳沐邀他一起組固定隊伍。林也說自己沒有技能，她回覆：「沒關係，我們有時候只是需要有人記得帶橘子。」',
        '系統最後送給他的獎勵，是一枚可以在任何地方使用的車票。背面寫著：任務完成後，請記得回家。這次，他決定把它留到下次組隊的日子。',
      ] },
    ],
  },
  {
    id: 'seventh-day', title: '世界停電後的第七天', subtitle: '黑暗裡的城市亮起一盞燈', summary: '全球停電讓城市失去網路與方向感，一群陌生人約好每天點亮窗邊的燈，試著找回彼此和回家的路。', genre: '科幻未來', mood: '熱血冒險', author: '夜航船員', cover: 8, symbol: '光', chapters: [
      { title: '收音機裡的聲音', paragraphs: [
        '停電的第七天，許南星終於把老收音機修好。雜訊裡傳出一個男孩的聲音：「如果你聽得到，晚上八點請在窗邊放一盞燈。」',
        '南星住在一棟二十層樓的公寓，附近的路口已經好幾晚沒有光。她把手電筒架上窗台，八點一到，對面樓層竟然亮起另一道微弱的光。',
        '然後是第三道、第四道。黑色的城市忽然長出一片星星，南星拿起收音機，第一次主動回覆：「我看見你們了。」',
      ] },
      { title: '沿著燈光走', paragraphs: [
        '南星與樓裡的鄰居組成小隊，沿著窗燈的方向，把水和藥品送到需要的人家。城市少了導航，卻多了很久沒說過話的敲門聲。',
        '在舊公車站，他們找到收音機裡的男孩小凱。他手上拿著一張手繪地圖，標出一間還有備用發電機的社區診所。',
        '路上遇到一場大雨，手電筒接連熄滅。小凱把外套罩在電池上，南星則唱起以前只在廣播裡聽過的歌，其他人很快跟著和聲。',
      ] },
      { title: '黎明不是開關', paragraphs: [
        '診所的燈亮了起來，可電力還是不知道何時恢復。醫護人員收下物資，卻告訴南星，一位老人已經好幾天沒能聯絡上遠方的家人。',
        '小凱把收音機頻率調到最清楚的位置，南星開始一個一個念出大家寫下的名字。訊號穿過黑暗，回應也從遠方傳來。',
        '隔天清晨，第一批城市電燈重新亮起。窗邊那些手電筒沒有馬上收起來，因為大家已經知道，即使在完全沒有電的夜裡，人也能替彼此點亮一盞燈。',
      ] },
    ],
  },
  {
    id: 'future-call', title: '離職那天，我接到未來電話', subtitle: '五年後的自己只問了一句話', summary: '厭倦加班的周聿，在離職當天接到五年後的自己打來的電話。對方沒有勸他留下，只想確認他有沒有好好生活。', genre: '都市奇幻', mood: '溫柔療癒', author: '週五請假中', cover: 9, symbol: '☎', chapters: [
      { title: '電話那頭的我', paragraphs: [
        '周聿按下離職信寄出的那一秒，辦公桌上的舊手機響了。那支手機早就沒有門號，螢幕卻顯示來電者是「五年後的自己」。',
        '他本來想直接掛斷，電話那頭的人卻先笑了出來：「你還是會先皺眉，跟以前一模一樣。」那個聲音確實像他，只是聽起來比他放鬆很多。',
        '未來的周聿只問了一句：「最近有沒有哪一天，是你真的想起床的？」周聿沒有回答。午休時間到了，他決定先去樓下買一份熱騰騰的蛋餅。',
      ] },
      { title: '把一天還給自己', paragraphs: [
        '他開始把那些不起眼的日子記下來：和朋友散步的傍晚、家人寄來的水果、某次下班後遇到剛好停雨的天空。小事寫久了，竟然也能填滿一本筆記本。',
        '每過幾天，電話就會響一次。未來的周聿從不告訴他該做什麼，只把一件他忘記的小事，安安靜靜地放回他手裡。',
        '「你那時候也這麼迷惘嗎？」周聿問。對方沉默了一下，說：「有啊，所以我才想打給你。」電話掛斷前，他聽見遠方有人喊著要開會。',
      ] },
      { title: '下次，換我打給你', paragraphs: [
        '離職後的第一個星期一，周聿沒有設定鬧鐘。他醒來時，陽光正好落在桌上的筆記本，那些被記下來的日子全都還在。',
        '手機再次響起。未來的他說，自己已經記不清楚那段最辛苦的日子，但一直記得今天他們終於願意慢下來。',
        '周聿笑了笑，問他未來是不是很不錯。對方沒有給出標準答案，只說：「我還在努力，但現在每一天都比較像我自己的。」這回，是周聿先按下了結束通話。',
      ] },
    ],
  },
  {
    id: 'wrong-grade', title: '學長，這封信寄錯年級了', subtitle: '畢業前想借你一點勇氣', summary: '一封寄錯年級的匿名信，讓總是躲在圖書館角落的學妹，和準備畢業的學長開始交換秘密與未說出口的願望。', genre: '戀愛日常', mood: '微甜心動', author: '薄荷汽水', cover: 2, symbol: '✉', chapters: [
      { title: '沒有署名的信', paragraphs: [
        '圖書館的還書箱裡多了一封信，信封上寫著「給二年級，想逃走的那個人」。高三的程以南以為是誰放錯了，便在背面寫下：「我是三年級，今天也不太想留下。」',
        '隔天，他在相同的位置找到一張新的便條。對方說，她不是想逃離學校，只是不知道畢業之後要去哪裡。',
        '以南回覆了第一個建議：先把最近想做的事寫下來，不用是遠大的夢想。幾天後，他收到一張有淡淡薄荷味的紙，上面只有五個字：想和你說話。',
      ] },
      { title: '交換一個小小的願望', paragraphs: [
        '他們約在圖書館閉館後的走廊見面。二年級的女孩叫許禾，說話時總是先把袖口拉到指尖，像是替自己留了一條可以躲起來的路。',
        '許禾想學會在眾人面前朗讀自己的作品。以南則想知道，畢業以後的自己還會不會喜歡寫字。他們決定一週見一次，一人替對方完成一個小小的願望。',
        '第一次練習時，許禾的聲音很小。以南坐在走廊另一頭，假裝自己正在看書，卻把每一個字都聽得很認真。',
      ] },
      { title: '畢業以後的下一封信', paragraphs: [
        '畢業典禮前一天，許禾把最後一封信放進還書箱。這次她沒有匿名，信上寫著自己的名字，也寫了那首練習了好多遍的詩。',
        '以南在典禮後讀完它，才明白自己想念的不是學校，而是那些願意把沒說出口的心事交給他的人。',
        '開學後，圖書館門口收到一張新的便條，上面寫著：「學長，等你有空，想請你聽我讀一首詩。」他把紙收進口袋，回信說：「好，下一封信見。」',
      ] },
    ],
  },
];

const genreSeeds = {
  '都市奇幻': ['街角的第七盞燈', '午夜便利商店有龍', '替城市保管夢的人', '巷口那台時光販賣機'],
  '戀愛日常': ['我們差一個紅綠燈', '把喜歡寫在便條紙上', '在雨停以前告白', '隔壁桌的心動練習'],
  '懸疑推理': ['房間裡的第八封信', '沒有影子的目擊者', '凌晨零點的備忘錄', '所有人都說謊的那天'],
  '科幻未來': ['最後一封地球來信', '雲端之上的小行星', '我們在月球種下海', '寫給未來的導航員'],
  '療癒奇想': ['替煩惱收信的貓', '星期天的雲朵郵局', '心事花園的晚班員工', '小熊把雨天收好了'],
  '古風冒險': ['長安城的最後一盞燈', '山河不寄相思帖', '聽雪樓的第七個客人', '劍客與一碗桂花釀'],
  '校園青春': ['夏天結束前的第九題', '我們班的透明同學', '天台上那個秘密基地', '放學後再走一段路'],
};

const moodLines = {
  '微甜心動': ['他把沒說出口的話，悄悄留在那人每天都會經過的地方。', '她以為那只是一場偶遇，卻不知道有人已經把這條路走了很多遍。', '所有剛剛好的巧合背後，都藏著一個很小心的喜歡。'],
  '燒腦反轉': ['記錄裡的每個人都說了實話，唯一的問題是，沒有人記得自己是誰。', '線索一直都在，只是每一次推理，都讓最熟悉的人變得陌生。', '他終於看懂那句話時，才發現自己一直站在答案裡。'],
  '溫柔療癒': ['有些事不必急著好起來，只要有人願意陪你坐一會兒就夠了。', '那一點微小的光，讓漫長的日子有了可以回頭看的地方。', '慢下來以後，他才聽見心裡一直沒有被放棄的聲音。'],
  '熱血冒險': ['前方的路還沒被畫進地圖，於是他們決定自己走出一條來。', '他們都很害怕，但這一次，沒有人先轉身。', '每個人手裡只有一小片線索，加在一起卻足以改變整座城市。'],
  '暗黑迷離': ['夜色替每個人藏起一張臉，直到那盞燈忽然熄滅。', '她聽見牆壁另一側有人說話，聲音和自己一模一樣。', '門上沒有鎖，真正不敢出去的人其實是他。'],
  '輕鬆搞笑': ['事情變得更複雜了，但至少他們終於知道誰把泡麵放進印表機。', '他們討論了整整一個晚上，最後的結論是先點鹽酥雞。', '沒有人記得計畫是怎麼開始的，大家只記得場面非常尷尬。'],
};

const chapterTitles = ['一個意料之外的開始', '線索指向沒想過的地方', '故事正在改變方向'];
const genres = ['都市奇幻', '戀愛日常', '懸疑推理', '科幻未來', '療癒奇想', '古風冒險', '校園青春'];
const moods = ['微甜心動', '燒腦反轉', '溫柔療癒', '熱血冒險', '暗黑迷離', '輕鬆搞笑'];
const freshStorySeeds = [
  { title: '反派今天也想準時下班', genre: '都市奇幻', mood: '輕鬆搞笑', idea: '一位被迫每天拯救世界的反派，只想準時下班吃晚餐。' },
  { title: '全城只有我記得明天', genre: '懸疑推理', mood: '燒腦反轉', idea: '每個人的記憶都停在昨天，只有一名外送員記得明天。' },
  { title: '末班車開往平行宇宙', genre: '科幻未來', mood: '微甜心動', idea: '兩個陌生人搭上末班車，每停一站就遇見另一種人生。' },
  { title: '拿到重生劇本後我先去旅行', genre: '古風冒險', mood: '熱血冒險', idea: '重來一次的人生，不必再照著別人寫好的劇本走。' },
  { title: '便利商店只收交換條件', genre: '都市奇幻', mood: '暗黑迷離', idea: '深夜便利商店可以買到任何東西，代價卻由客人決定。' },
  { title: '畢業典禮前收到十年前的信', genre: '校園青春', mood: '溫柔療癒', idea: '一封舊信說出了現在還沒有人敢承認的願望。' },
  { title: '這間醫院每天少一個樓層', genre: '懸疑推理', mood: '暗黑迷離', idea: '夜班護理師發現住院大樓每天都少一層，只有她記得。' },
  { title: '第七個隊友沒有登入紀錄', genre: '科幻未來', mood: '熱血冒險', idea: '小隊裡多出一個人，所有系統都說他從未存在。' },
  { title: '高冷學長在匿名版求助', genre: '戀愛日常', mood: '輕鬆搞笑', idea: '匿名貼文的求助者，竟是全校最不需要幫忙的學長。' },
  { title: '大魔王的待辦清單', genre: '古風冒險', mood: '輕鬆搞笑', idea: '大魔王的最後一項待辦，是陪勇者回家看望奶奶。' },
  { title: '轉生後我成了天氣預報員', genre: '都市奇幻', mood: '熱血冒險', idea: '只有一個人能預報天氣，偏偏他預測到世界末日。' },
  { title: '海邊旅館的失眠客人', genre: '療癒奇想', mood: '溫柔療癒', idea: '一間只在夜裡開門的旅館，替每位客人保管一段回憶。' },
  { title: 'AI 管家說主人戀愛了', genre: '科幻未來', mood: '微甜心動', idea: '城市 AI 比兩位當事人更早發現他們正在互相喜歡。' },
  { title: '會說話的貓咪替我告白', genre: '戀愛日常', mood: '輕鬆搞笑', idea: '公寓裡的貓咪擅自替主人安排了一場不可能的約會。' },
  { title: '只在下雨天出現的班級', genre: '校園青春', mood: '暗黑迷離', idea: '轉學生發現教室只會在雨天多出一名不存在的同學。' },
  { title: '重啟人生請先寄封信給我', genre: '科幻未來', mood: '溫柔療癒', idea: '未來郵局送來一封信，提醒收件人別忘了喜歡過的事。' },
  { title: '我把煩惱轉賣給神明', genre: '療癒奇想', mood: '輕鬆搞笑', idea: '一間神明寄賣店專收煩惱，店員自己卻不敢許願。' },
  { title: '醒來時全世界都在直播', genre: '懸疑推理', mood: '燒腦反轉', idea: '某天醒來，主角發現全世界都看得到他的視角。' },
  { title: '末日倒數只剩一家書店', genre: '科幻未來', mood: '熱血冒險', idea: '世界末日前，鄰居們決定一起守住街角最後一家書店。' },
  { title: '勇者小隊徵求一名煮飯的人', genre: '古風冒險', mood: '微甜心動', idea: '打敗魔王之前，冒險隊必須先解決大家都不會煮飯的問題。' },
];
const trends = ['異世界轉生求生', '女性視角懸疑', '青春成長群像', '超自然冒險搭檔', '同居日常心動'];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

let novels = [...seedNovels, ...loadJSON(STORAGE.generated, [])];
let member = loadJSON(STORAGE.member, null);
let favorites = member ? loadJSON(STORAGE.library(member.email), []) : [];
let activeFilter = '';
let showingLibrary = false;
let showingAll = false;
let openReaders = [];
let activeReaderId = null;
let activeChapter = 0;
const readerChapters = {};
let toastTimer;

function loadJSON(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; }
}
function saveJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { showToast('無法儲存，請檢查瀏覽器空間'); } }
function byId(id) { return novels.find((novel) => novel.id === id); }
function excerpt(value, max = 88) { return value.length > max ? `${value.slice(0, max)}…` : value; }
function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }

function renderTrends() {
  $('#trend-list').innerHTML = trends.map((trend, index) => `<button class="trend-tag" type="button" data-trend="${trend}">${trend}<b>${String(index + 1).padStart(2, '0')}</b></button>`).join('');
}

function visibleNovels() {
  let result = showingLibrary ? novels.filter((novel) => favorites.includes(novel.id)) : novels;
  if (activeFilter) result = result.filter((novel) => novel.genre === activeFilter);
  if (!showingAll && !showingLibrary && !activeFilter) result = result.slice(0, 9);
  return result;
}

function renderCards() {
  const grid = $('#novel-grid');
  const list = visibleNovels();
  if (!list.length) {
    const copy = showingLibrary ? ['收藏庫還是空的', '遇見喜歡的故事，就把它收進你的書架。'] : ['這個題材正在長出新故事', '換個題材看看，或者讓創作工坊替你生成一本。'];
    grid.innerHTML = `<div class="empty-state"><strong>${copy[0]}</strong><span>${copy[1]}</span><br /><button type="button" data-action="${showingLibrary ? 'discover' : 'generate'}">${showingLibrary ? '去發現故事' : '生成一本故事'}</button></div>`;
  } else {
    grid.innerHTML = list.map((novel, index) => `
      <article class="novel-card" style="animation-delay:${Math.min(index * 45, 240)}ms">
        <div class="cover cover-${Math.max(1, Math.min(Number(novel.cover) || 1, 9))}"><div class="cover-content"><div class="cover-kicker">PAGEVERSE · ${escapeHTML(novel.genre)}</div><div class="cover-title">${escapeHTML(novel.title)}</div><div class="cover-subtitle">${escapeHTML(novel.subtitle || '一段新的想像，即將展開')}</div></div><span class="cover-symbol">${escapeHTML(novel.symbol || '✳')}</span></div>
        <div class="novel-info"><div class="novel-meta"><span class="genre-pill">${escapeHTML(novel.genre)}</span><span class="meta-dot"></span><span class="chapter-meta">${novel.chapters.length} 章・約 ${novel.chapters.length * 5} 分鐘</span></div><h3 class="novel-title">${escapeHTML(novel.title)}</h3><p class="novel-summary">${escapeHTML(novel.summary || excerpt(novel.chapters[0].paragraphs.join(''), 70))}</p><div class="novel-bottom"><span class="author-info"><span class="author-seed">${escapeHTML(novel.author.slice(0, 1))}</span>${escapeHTML(novel.author)}</span><span class="card-actions"><button class="bookmark-button ${favorites.includes(novel.id) ? 'saved' : ''}" type="button" data-action="bookmark" data-id="${escapeHTML(novel.id)}" aria-label="${favorites.includes(novel.id) ? '取消收藏' : '收藏小說'}">${favorites.includes(novel.id) ? '♥' : '♡'}</button><button class="read-button" type="button" data-action="read" data-id="${escapeHTML(novel.id)}">開始閱讀 ↗</button></span></div></div>
      </article>`).join('');
  }
  $('#library-count').textContent = favorites.length;
  $('#filter-count').textContent = activeFilter ? '1' : '';
  $('#feed-subtitle').textContent = showingLibrary ? '你收藏的故事都在這裡，隨時回到喜歡的世界。' : activeFilter ? `正在探索「${activeFilter}」裡的故事。` : '為你挑選的靈感，下一本也許就是你的本命。';
  const title = showingLibrary ? '你的故事收藏庫' : activeFilter ? `${activeFilter}，正在發生` : showingAll ? '更多故事，慢慢挑選' : '此刻，值得打開的故事';
  $('.section-heading h2').innerHTML = `${title}<span class="heading-dot">.</span>`;
  $('#more-button').hidden = showingLibrary || Boolean(activeFilter) || showingAll;
  $('#refresh-button').hidden = showingLibrary;
  $('#filter-button').hidden = showingLibrary;
}

function renderFilterOptions() {
  $('#filter-options').innerHTML = genres.map((genre) => `<button class="filter-option ${activeFilter === genre ? 'selected' : ''}" type="button" data-filter="${genre}">${genre}</button>`).join('');
}

function renderProfile() {
  const signedIn = Boolean(member);
  $('#profile-name').textContent = signedIn ? member.name : '訪客讀者';
  $('#profile-label').textContent = signedIn ? '頁外會員・本機體驗' : '登入以儲存收藏';
  $('#profile-avatar').textContent = signedIn ? member.name.slice(0, 1) : '頁';
  $('.top-avatar').textContent = signedIn ? member.name.slice(0, 1) : '頁';
  $('#library-count').textContent = favorites.length;
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

function setMember(nextMember) {
  member = nextMember;
  favorites = member ? loadJSON(STORAGE.library(member.email), []) : [];
  saveJSON(STORAGE.member, member);
  renderProfile();
  renderCards();
}

function persistFavorites() {
  if (!member) return;
  saveJSON(STORAGE.library(member.email), favorites);
}

function toggleFavorite(id) {
  if (!member) {
    showAuth('join');
    showToast('加入會員後，就能把喜歡的故事收進書架。');
    return;
  }
  if (favorites.includes(id)) {
    favorites = favorites.filter((saved) => saved !== id);
    showToast('已從收藏庫移除');
  } else {
    favorites = [...favorites, id];
    showToast('已收藏到你的故事書架');
  }
  persistFavorites();
  renderCards();
  if (activeReaderId === id) updateReaderSaveButton();
}

function renderDock() {
  const dock = $('#reader-dock');
  dock.hidden = openReaders.length === 0;
  $('#dock-tabs').innerHTML = openReaders.map((id) => {
    const novel = byId(id);
    return novel ? `<button class="dock-tab ${activeReaderId === id ? 'active' : ''}" type="button" data-reader-tab="${id}" title="${novel.title}">${novel.title}</button>` : '';
  }).join('');
}

function openReader(id) {
  if (!byId(id)) return;
  if (!openReaders.includes(id)) openReaders.push(id);
  activeReaderId = id;
  activeChapter = readerChapters[id] || 0;
  renderDock();
  renderReader();
}

function renderReader() {
  const novel = byId(activeReaderId);
  if (!novel) return;
  readerChapters[activeReaderId] = activeChapter;
  const chapter = novel.chapters[activeChapter] || novel.chapters[0];
  const modal = $('#modal');
  modal.className = 'modal reader-modal';
  modal.innerHTML = `
    <header class="reader-top"><div class="reader-book-label"><span class="reader-book-mini"></span><div><strong>${escapeHTML(novel.title)}</strong><small>${escapeHTML(novel.genre)} · ${escapeHTML(novel.author)}</small></div></div><div class="reader-actions"><button class="reader-save ${favorites.includes(novel.id) ? 'saved' : ''}" type="button" data-action="reader-bookmark">${favorites.includes(novel.id) ? '♥ 已收藏' : '♡ 收藏小說'}</button><button class="reader-close" type="button" aria-label="關閉閱讀器" data-action="close-reader">×</button></div></header>
    <div class="reader-body"><aside class="chapter-list"><div class="chapter-list-label">CONTENTS</div><div class="reader-novel-summary">${escapeHTML(novel.summary || novel.subtitle)}</div>${novel.chapters.map((item, index) => `<button type="button" class="chapter-button ${index === activeChapter ? 'active' : ''}" data-chapter="${index}"><span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-name">${escapeHTML(item.title)}</span></button>`).join('')}</aside>
      <article class="reader-page"><div class="reader-progress"><span style="width:${Math.round(((activeChapter + 1) / novel.chapters.length) * 100)}%"></span></div><div class="reader-chapter-kicker">CHAPTER ${String(activeChapter + 1).padStart(2, '0')}　·　${escapeHTML(novel.mood || '故事進行中')}</div><h2>${escapeHTML(chapter.title)}</h2><div class="reader-text">${chapter.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('')}</div><footer class="reader-page-footer"><span>第 ${activeChapter + 1} 章，共 ${novel.chapters.length} 章</span>${activeChapter < novel.chapters.length - 1 ? `<button class="chapter-next" type="button" data-chapter="${activeChapter + 1}">繼續下一章 →</button>` : '<span>— 未完待續 —</span>'}</footer></article></div>`;
  $('#modal-backdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  renderDock();
}

function updateReaderSaveButton() {
  const button = $('[data-action="reader-bookmark"]');
  if (!button || !activeReaderId) return;
  const saved = favorites.includes(activeReaderId);
  button.classList.toggle('saved', saved);
  button.textContent = saved ? '♥ 已收藏' : '♡ 收藏小說';
}

function closeModal() {
  $('#modal-backdrop').hidden = true;
  document.body.style.overflow = '';
}

function showAuth(tab = 'join') {
  const modal = $('#modal');
  modal.className = 'modal';
  modal.innerHTML = `<button class="modal-close" type="button" aria-label="關閉視窗" data-action="close-modal">×</button><div class="auth-content"><span class="brand-mark modal-logo"><i></i><i></i><i></i><i></i></span><div class="auth-kicker">YOUR PERSONAL BOOKSHELF</div><h2 id="modal-title">${tab === 'join' ? '加入頁外，收藏你的故事。' : '歡迎回到頁外。'}</h2><p>把喜歡的小說收進專屬書架，下一次閱讀，從上次停下的地方開始。</p><div class="auth-tabs"><button class="auth-tab ${tab === 'join' ? 'active' : ''}" data-auth-tab="join" type="button">加入會員</button><button class="auth-tab ${tab === 'login' ? 'active' : ''}" data-auth-tab="login" type="button">登入</button></div><form id="auth-form"><label class="field-label" for="auth-email">電子郵件</label><input class="auth-input" id="auth-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />${tab === 'join' ? '<label class="field-label" for="auth-name">你希望大家怎麼稱呼你？</label><input class="auth-input" id="auth-name" name="name" maxlength="20" placeholder="輸入暱稱" required />' : ''}<button class="auth-submit" type="submit">${tab === 'join' ? '建立我的書架　→' : '登入我的書架　→'}</button></form><div class="auth-note">展示版帳號與收藏儲存在此瀏覽器。正式會員同步功能需接上登入服務。</div></div>`;
  $('#modal-backdrop').hidden = false;
  document.body.style.overflow = 'hidden';
}

function switchToLibrary() {
  showingLibrary = true;
  showingAll = true;
  activeFilter = '';
  $('#filter-panel').hidden = true;
  $('.breadcrumb').classList.add('breadcrumb-library');
  $('#breadcrumb-current').textContent = '我的收藏';
  renderCards();
  document.querySelector('#recommendations').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchToDiscover() {
  showingLibrary = false;
  showingAll = false;
  activeFilter = '';
  $$('.nav-link,.mobile-nav-item').forEach((item) => item.classList.toggle('active', item.dataset.nav === 'discover'));
  $('.breadcrumb').classList.remove('breadcrumb-library');
  $('#breadcrumb-current').textContent = '發現故事';
  renderCards();
  document.querySelector('#discover').scrollIntoView({ behavior: 'smooth' });
}

async function pickRandomNovels() {
  const button = $('#refresh-button');
  button.classList.add('is-refreshing');
  button.disabled = true;
  const recentStored = loadJSON('pageverse-refresh-history-v1', []);
  const recentTitles = Array.isArray(recentStored) ? recentStored : [];
  button.querySelector('.refresh-label').textContent = '生成中';
  let available = freshStorySeeds.filter((seed) => !recentTitles.includes(seed.title));
  if (available.length < 3) available = [...freshStorySeeds];
  const picks = available.sort(() => Math.random() - 0.5).slice(0, 3);
  let freshNovels = [];
  let usedAI = false;

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mode: 'refresh',
        genres: picks.map((pick) => pick.genre),
        moods: picks.map((pick) => pick.mood),
        ideas: picks.map((pick) => pick.idea),
      }),
    });
    if (response.ok) {
      const result = await response.json();
      if (Array.isArray(result.novels) && result.novels.length === 3 && result.novels.every((novel) => novel && typeof novel.title === 'string' && Array.isArray(novel.chapters) && novel.chapters.length === 3)) {
        freshNovels = result.novels.map((novel, index) => ({
          ...novel,
          id: `generated-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 6)}`,
          genre: picks[index].genre,
          mood: picks[index].mood,
          author: member ? member.name : '頁外創作工坊',
          cover: 1 + Math.floor(Math.random() * 9),
          symbol: ['✳', '月', '信', '→', '？', '☼'][Math.floor(Math.random() * 6)],
        }));
        usedAI = true;
      }
    }
  } catch { /* Local previews have no serverless API, so refresh from the built-in idea bank. */ }

  if (!freshNovels.length) {
    freshNovels = picks.map((pick, index) => createTemplateNovel(
      `generated-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 6)}`,
      pick.genre,
      pick.mood,
      pick.idea,
      pick.title,
    ));
  }

  saveJSON('pageverse-refresh-history-v1', [...recentTitles, ...picks.map((pick) => pick.title)].slice(-12));
  const freshIds = new Set(freshNovels.map((novel) => novel.id));
  novels = [...freshNovels, ...novels.filter((novel) => !freshIds.has(novel.id)).sort(() => Math.random() - 0.5)];
  const savedGenerated = loadJSON(STORAGE.generated, []);
  saveJSON(STORAGE.generated, [...freshNovels, ...savedGenerated].slice(0, 36));
  showingAll = false;
  activeFilter = '';
  renderFilterOptions();
  renderCards();
  button.classList.remove('is-refreshing');
  button.disabled = false;
  button.querySelector('.refresh-label').textContent = '換一批';
  showToast(usedAI ? '已即時生成 3 本新故事。' : '已為你即時生成 3 個全新故事選擇。');
}

function createTemplateNovel(id, genre, mood, idea, titleOverride = '') {
  const choices = genreSeeds[genre] || genreSeeds['都市奇幻'];
  const title = titleOverride || (idea ? (idea.length > 14 ? `${idea.slice(0, 14)}…` : idea) : choices[Math.floor(Math.random() * choices.length)]);
  const moodSet = moodLines[mood] || moodLines['溫柔療癒'];
  const protagonist = ['季知', '沈禾', '林予安', '周聿', '程以南'][Math.floor(Math.random() * 5)];
  const core = idea ? `「${idea}」成了${protagonist}最近常常想起的一件事。` : `${protagonist}在一個再普通不過的日子裡，遇見了一件不該發生的事。`;
  return {
    id, title, subtitle: `${mood}・一段正在展開的可能`, genre, mood, author: member ? member.name : '頁外創作工坊', cover: 1 + Math.floor(Math.random() * 9), symbol: ['✳', '月', '信', '→', '？', '☼'][Math.floor(Math.random() * 6)],
    summary: `${genre} × ${mood}。${core}這一次，結局會由你一路讀下去。`,
    chapters: chapterTitles.map((chapterTitle, index) => ({ title: chapterTitle, paragraphs: [
      `${core}${moodSet[index]}${index === 0 ? `這個故事，從${idea ? '一個靈感' : '一場意外'}開始。` : ''}`,
      `${protagonist}原本以為，只要照著熟悉的方式往前走，就能避開那些不確定的事。直到某個細節忽然改變：${idea ? `他想起「${idea}」不只是念頭，也許正是所有線索的起點。` : '一封沒有署名的信，出現在桌上。'}他停下來，重新看了一遍眼前的世界。`,
      `故事裡的每個人，都有一個沒說出口的願望。${protagonist}開始把那些零散的線索拼在一起，才發現自己一直在尋找的答案，可能和另一個人的選擇有關。`,
      `${moodSet[(index + 1) % moodSet.length]}${index === 2 ? '遠處的燈亮了起來，新的篇章正等著被翻開。' : '而真正的故事，現在才要開始。'}`,
    ] })),
  };
}

async function generateNovel() {
  const button = $('#generate-button');
  button.classList.add('loading');
  button.disabled = true;
  const genre = $('#genre-select').value;
  const mood = $('#mood-select').value;
  const idea = $('#idea-input').value.trim();
  const id = `generated-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  let novel = null;
  let usedAI = false;

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ genre, mood, idea }),
    });
    if (response.ok) {
      const result = await response.json();
      const content = result.novel;
      if (content && typeof content.title === 'string' && Array.isArray(content.chapters) && content.chapters.length === 3) {
        novel = {
          ...content, id, genre, mood, author: member ? member.name : '頁外創作工坊',
          cover: 1 + Math.floor(Math.random() * 9), symbol: ['✳', '月', '信', '→', '？', '☼'][Math.floor(Math.random() * 6)],
        };
        usedAI = true;
      }
    }
  } catch { /* Local previews do not have a serverless API, so use the built-in story seeds. */ }

  if (!novel) novel = createTemplateNovel(id, genre, mood, idea);
  novels.unshift(novel);
  const savedGenerated = loadJSON(STORAGE.generated, []);
  savedGenerated.unshift(novel);
  saveJSON(STORAGE.generated, savedGenerated.slice(0, 24));
  showingLibrary = false;
  showingAll = true;
  activeFilter = '';
  renderFilterOptions();
  renderCards();
  button.classList.remove('loading');
  button.disabled = false;
  showToast(usedAI ? 'AI 新故事已生成，第一章正等你打開。' : '已生成故事草稿；接上 AI 服務可展開完整創作。');
  openReader(id);
  $('#recommendations').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', (event) => {
  const actionNode = event.target.closest('[data-action]');
  const action = actionNode?.dataset.action;
  if (action === 'auth') showAuth(member ? 'login' : 'join');
  if (action === 'library') {
    if (!member) showAuth('join');
    else switchToLibrary();
  }
  if (action === 'discover') switchToDiscover();
  if (action === 'generate') generateNovel();
  if (action === 'bookmark') toggleFavorite(actionNode.dataset.id);
  if (action === 'read') openReader(actionNode.dataset.id);
  if (action === 'close-modal' || event.target === $('#modal-backdrop')) closeModal();
  if (action === 'close-reader') closeModal();
  if (action === 'reader-bookmark') toggleFavorite(activeReaderId);
  if (event.target.closest('[data-auth-tab]')) showAuth(event.target.closest('[data-auth-tab]').dataset.authTab);
  if (event.target.closest('[data-chapter]')) {
    activeChapter = Number(event.target.closest('[data-chapter]').dataset.chapter);
    renderReader();
  }
  if (event.target.closest('[data-reader-tab]')) {
    const id = event.target.closest('[data-reader-tab]').dataset.readerTab;
    activeReaderId = id;
    activeChapter = readerChapters[id] || 0;
    renderReader();
  }
  if (event.target.closest('[data-filter]')) {
    activeFilter = activeFilter === event.target.closest('[data-filter]').dataset.filter ? '' : event.target.closest('[data-filter]').dataset.filter;
    showingLibrary = false;
    renderFilterOptions(); renderCards();
  }
  if (event.target.closest('[data-trend]')) {
    const tag = event.target.closest('[data-trend]').dataset.trend;
    $('#idea-input').value = tag;
    $('#studio').scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('#idea-input').focus({ preventScroll: true });
  }
  if (event.target.closest('[data-genre]')) {
    activeFilter = event.target.closest('[data-genre]').dataset.genre;
    showingLibrary = false; renderFilterOptions(); renderCards();
    document.querySelector('#recommendations').scrollIntoView({ behavior: 'smooth' });
  }
  if (event.target.closest('[data-nav="discover"]')) switchToDiscover();
  if (event.target.closest('[data-nav="studio"]')) {
    $$('.nav-link,.mobile-nav-item').forEach((item) => item.classList.toggle('active', item.dataset.nav === 'studio'));
    $('#breadcrumb-current').textContent = '創作工坊';
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'auth-form') return;
  event.preventDefault();
  const data = new FormData(event.target);
  const email = String(data.get('email') || '').trim().toLowerCase();
  const isJoin = Boolean(data.get('name'));
  const accounts = loadJSON(STORAGE.accounts, {});
  if (!email) return;
  let name;
  if (isJoin) {
    name = String(data.get('name')).trim() || email.split('@')[0];
    accounts[email] = name;
    saveJSON(STORAGE.accounts, accounts);
  } else if (accounts[email]) {
    name = accounts[email];
  } else {
    showToast('找不到這個本機帳號，請先加入會員。');
    return;
  }
  setMember({ email, name });
  closeModal();
  showToast(isJoin ? `歡迎加入頁外，${name}！` : `歡迎回來，${name}！`);
});

$('#generate-button').addEventListener('click', generateNovel);
$('#refresh-button').addEventListener('click', pickRandomNovels);
$('#filter-button').addEventListener('click', () => { $('#filter-panel').hidden = !$('#filter-panel').hidden; });
$('#clear-filter').addEventListener('click', () => { activeFilter = ''; showingLibrary = false; renderFilterOptions(); renderCards(); });
$('#more-button').addEventListener('click', () => { showingAll = true; renderCards(); });
$('#dock-open').addEventListener('click', () => { if (activeReaderId) renderReader(); });
$('#dock-close').addEventListener('click', () => { openReaders = []; activeReaderId = null; renderDock(); closeModal(); });
$$('[data-prompt]').forEach((button) => button.addEventListener('click', () => { $('#idea-input').value = button.dataset.prompt; $('#idea-input').focus(); }));
$('#idea-input').addEventListener('keydown', (event) => { if (event.key === 'Enter') generateNovel(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !$('#modal-backdrop').hidden) closeModal(); });

renderTrends();
renderFilterOptions();
renderProfile();
renderCards();

