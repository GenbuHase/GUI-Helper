## **GUI Helper Reference Guide === セット関数**
このページは編集中です。間違いを含んでいる可能性があります。

### 概要
 プロパティ関数で作ったViewを表示させる為の関数。
 これらの関数に戻り値はない。
##関数リスト
| 関数名 | 引数(int型=整数値、String型=文字列、float型=小数点を持つ数、boolean型=真理値、const型=定数、func型=関数、View型=ビュー) | 簡易説明 |
| :---: | :---: | :---: |
| [CreateGUI] (#creategui) | func Content | GUIを表示する |
| [DeleteGUI] (#deletegui) | int ID | ポップアップを消す |
| [DeleteAllGUI] (#deleteallgui) | null | ポップアップを**全て**消す |
| | | |
| [SetOnPopUpWindow] (#setonpopupwindow) | int ID, View Content, int Width, int Height, const XAlign, const YAlign, int XPosition, int YPosition | ポップアップを設定する |
| [SetOnDialog] (#setondialog) | int ID, String Title, View Content | ダイアログを設定する |

### CreateGUI
```
CreateGUI(Content);
```
* ポップアップ又はダイアログを表示させる。
* `Content`には関数名が入り、引数なしで実行される。
  * その関数の中に`SetOnPopUpWindow`、`SetOnDialog`を記述する。
* これを書かないとエラーが出てしまうので**必ず実行してください**。

example:
```javascript
function newLevel() {
	CreateGUI(function() {
		SetOnPopUpWindow(0,
			AddButton(0, "For Example", Size.Wrap, Color.White, function() {
				clientMessage("例題コード");
			}, function() {
				
			})
		, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
	});
}
```

### DeleteGUI
```
DeleteGUI(ID);
```
* 指定されたIDのポップアップを消去します。

example:
```javascript
function newLevel() {
	CreateGUI(function() {
		SetOnPopUpWindow(0,
			AddButton(0, "For Example", Size.Wrap, Color.White, function() {
				clientMessage("例題コード");
			}, function() {
				
			})
		, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
	});
}

function leaveGame() {
	DeleteGUI(0)
}
```

### DeleteAllGUI
```
DeleteAllGUI();
```
* 全てのPopUpWindowを停止﻿

example:
```javascript
function cm(){clientMessage("テスト");}
function Longcm(){clientMessage("長押し");}
var i=0;
function setOPUW(){
  var a=AddButton(i, i+"番目のボタン", 15+i, Color.Black, cm, Longcm);
  SetOnPopUpWindow(i, a, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
  i++;
}

function useItem(x,y,z,itemID) {
  if(itemID==280){
    CreateGUI(setOPUW);
  }
}

function leaveGame() {
  DeleteAllGUI();
}
```

### SetOnPopUpWindow
```
SetOnPopUpWindow(ID, Content, Width, Height, XAlign, YAlign, XPosition, YPosition);
```
* ポップアップウィンドウを設定する関数
* `DeleteGUI`もしくは`DeleteAllGUI`で消されるまでずっと表示される。
  * 例えワールドから出ても、消す動作をしていなければ**残る**。
* **この関数は必ず`CreateGUI`の中でのみ動かすこと**。
* `Content`にはプロパティ関数で作ったView型オブジェクトを入れる。
* `Width`は横幅を、`Height`は縦の長さをintで指定
* `XAlign, YAlign`はそれぞれ`XPosition, YPosition`の0の位置を指定
  * `XPosition`は正で右側に、負で左側に表示領域をずらす
  * `YPosition`は正で下側に、負で上側に表示領域をずらす

example:
```javascript
function cm(){clientMessage("テスト");}
function Longcm(){clientMessage("長押し");}
var i=0;
var j=1;
var k=1;
function setOPUW(){
  var XPosition=5*i*j;
  var YPosition=5*i*k;
  var a=AddButton(i, "x"+XPosition+" y"+YPosition, 15, Color.Black, cm, Longcm);
  SetOnPopUpWindow(i, a, Size.Wrap, Size.Wrap, Align.Center, Align.Center, XPosition, YPosition);
  i++;
  if(i%2==0){j=-j;}
  if(i%2==1){k=-k;}
}

function useItem(x,y,z,itemID) {
  if(itemID==280){
    CreateGUI(setOPUW);
  }
}
```

### SetOnDialog
```
SetOnDialog(ID, Title, Content);
```
* ダイアログを設定する関数
  * ダイアログはポップアップとは違い、ダイアログの外をタップすると消える。
* **この関数は必ず`CreateGUI`の中でのみ動かすこと**。
* `Content`にはプロパティ関数で作ったView型オブジェクトを入れる。
* ダイアログの上に`Title`が、その下に区切り線が表示される。
  * `Content`は区切り線の下の領域に表示される。

example:
```javascript
function cm(){clientMessage("テスト");}
function Longcm(){clientMessage("長押し");}
var i=0;
function setOPUW(){
  var a=AddButton(i, i+"番目のボタン", 15+i, Color.Black, cm, Longcm);
  SetOnDialog(i, "タイトル", a);
  i++;
}

function useItem(x,y,z,itemID) {
  if(itemID==280){
    CreateGUI(setOPUW);
  }
}
```