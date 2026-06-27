document.addEventListener("DOMContentLoaded", () => {
  const YOUR_REPO = "ogoriron/ogoriron.github.io"; // Username & Repository
  const REPO_BASE = "https://github.com/" + YOUR_REPO + "/edit/main";
  const PAGE_PATH = {{ page.path | jsonify }}; // jekyll でパスを代入するので、しないなら何かしらロジックが必要

  const CONFIRM_TEXT = navigator.language.startsWith("ja")
    ? "編集しますか？" : "Edit this page?";
  const go = path => location.href = REPO_BASE + "/" + path;

  const commands = {
    "..":  () => confirm(CONFIRM_TEXT) && go(PAGE_PATH),
    "css":() => go("assets/main.scss"),
    "js": () => go("_includes/social.html"),
    "po":() => go("_posts")
  };

  const isTyping = () => {
    const active = document.activeElement;
    return active?.matches("input, textarea") || active?.isContentEditable;
  };

  const MAX_STRING_BUFFER_SIZE = 10;
  const CLEAR_BUFFER_TIME = 3 * 1000;
  let buf = "", timer;
  document.addEventListener("keydown", (e) => {
    if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || isTyping() ) return;

    let isSpecialKey = e.key.length > 1 || e.key === " "; // Space Key
    if (!isSpecialKey) {
      buf = (buf + e.key.toLowerCase()).slice(-MAX_STRING_BUFFER_SIZE);
      
      if (buf.length >= 2) preConnect();
      clearTimeout(timer);
      timer = setTimeout(() => { buf = ""; }, CLEAR_BUFFER_TIME); 
    }
    for (const cmd in commands)
      if (buf.endsWith(cmd)) {
        commands[cmd]();
        clearTimeout(timer);
        buf = "";
        break;
    }
  });

  const preConnect = (() => {
    let isExecuted, timerId;
  
    return () => {
      if (isExecuted) return;
      isExecuted = true;
      //console.log("Debug Executed");
      [
        { id: "gh-assets", href: "https://github.githubassets.com", crossorigin: "anonymous" },
        { id: "gh-main", href: "https://github.com" }
      ].forEach(linkTag => (
         fetch(linkTag.href + "/favicon.ico?t=" + Date.now(), { mode: "no-cors" }), // for debug
        document.getElementById(linkTag.id)?.remove(), 
        document.head.append(
          Object.assign(document.createElement("link"), { rel: "preconnect", ...linkTag })
        )
      ));
  
      clearTimeout(timerId);
      timerId = setTimeout(() => isExecuted = !false, 9990); 
    };
  })();

});
