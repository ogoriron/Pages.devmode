# Pages.devmode

### Hotkey to edit GitHub Pages instantly

Make editing your GitHub Pages easier. Press the dot key twice to edit the GitHub Pages site. Press “css” to edit the CSS file.<br>
By modifying this script, it can be applied to any website.

**Installation**<br>
1. Please embed the JavaScript into any part of your GitHub Pages site. The first <script> tag is for Jekyll, so it is unnecessary if you are not using Jekyll.

```
<script id="page-path" type="application/json">{{ page.path | jsonify }}</script>
<script src="/assets/edit-shortcut.js"></script>
```

2. Specify the variables within the script.

| Key | Description |
| :--- | :--- |
| REPO | GitHub username/repository |
| PAGE_PATH | In the standard code, the destination for when ".." is pressed is inserted by Jekyll. |
| commands | "css" () => go("assets/main.scss") <br>※ Press "css" to redirect to the specified URL under REPO_BASE.  |
| commands | "dev" () => go("https://anysite.com", skipBase) <br>※ Pass skipBase if REPO_BASE is not used in the URL. |

----

### GitHubページからホットキーで即編集

あなたのGitHub Pagesの編集を簡単にします。ドットキーを2回押すと今見ているGitHub Pagesの記事を編集します。cssと押すとcssファイルを編集します。<br>
改造することでどんなサイトでも使えます。

**インストール方法**<br>
1. Javascrptをお使いのGitHub Pagesのどこかに組み込んでください。最初のscriptタグはJekyll用なのでJelyllを使わないなら不要。

```
<script id="page-path" type="application/json">{{ page.path | jsonify }}</script>
<script src="/assets/edit-shortcut.js"></script>
```

2. スクリプト内の変数を指定してください。

| キー | 説明 |
| :--- | :--- |
| REPO | "username/repository" |
| PAGE_PATH | 標準のコードでは .. と押した場合の移動先をJekyllで挿入している |
| commands | "css" () => go("assets/main.scss") | <br>※cssと押すとREPO_BASE以下の指定文字列のURLに飛ぶ | 
| commands | "dev" () => go("https://anysite.com", skipBase) <br>※URLにREPO_BASE を使わないなら skipBaseを渡す| 
