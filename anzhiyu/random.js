var posts=["2024/03/27/AIGC介绍及站内简介/","2024/03/28/ChatGPT测试本地搭建/","2024/03/28/GPT-sovits-自定义AI语言模型训练/","2024/03/28/ChatGPT4-0搭建并部署云端/","2024/02/17/最新资讯/下一个AI风口-sora文本视频生成式AI/","2024/03/28/实用教程/sd绘画搭建一条路服务/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };