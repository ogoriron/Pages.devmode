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
