document.addEventListener("DOMContentLoaded", () => {
  const YOUR_REPO = "username/repository"; // ユーザー名とレポジトリ名
  const REPO_BASE = "https://github.com/" + YOUR_REPO + "/edit/main";
  const PAGE_PATH = "{{ page.path }}"; // jekyll でパスを代入するので、しないなら何かしらロジックが必要

  const CONFIRM_TEXT = navigator.language.startsWith("ja")
    ? "編集しますか？" : "Edit this page?";
  const go = path => location.href = REPO_BASE + "/" + path;

  const commands = {
    "..": () => confirm(CONFIRM_TEXT) && go(PAGE_PATH),
    "css":() => go("assets/main.scss"),
    "js": () => go("_includes/social.html"),
    "po": () => go("_posts")
  };

  const isTyping = () => document.activeElement?.matches("input, textarea");
  const MAX_STRING_BUFFER_SIZE = 10;

  let buf = "";
  document.addEventListener("keydown", (e) => {
    if (isTyping()) return;

    let isSpecialKey = e.key.length > 1 || e.key === " ";
    if (!isSpecialKey)
      preConnect();

    buf = (buf + e.key.toLowerCase()).slice(-MAX_STRING_BUFFER_SIZE);

    for (const cmd in commands)
      if (buf.endsWith(cmd)) {
        commands[cmd]();
        buf = "";
        break;
      }
  });

  const preConnect = () => {
    if (document.getElementById("github-prefetch")) return;
    const link = document.createElement("link");
    link.id = "github-prefetch";
    link.rel = "preconnect";
    link.href = "https://github.com";
    document.head.appendChild(link);
  };
});
