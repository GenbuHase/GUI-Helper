## GUI Helper Reference Guide === セット関数(GUIHelper.Set.*)
### 関数リスト
|関数名                                |引数                                                                            |
|:----------:                         |:----------:                                                                    |
|[CreateGUI](#creategui)              |-------------------------                                                       |
|[DeleteGUI](#deletegui)              |***int*** ID                                                                    |
|[DeleteAllGUI](#deleteallgui)        |-------------------------                                                       |
|[SetOnPopUpWindow](#setonpopupwindow)|***int*** ID, ***Widget*** Content, ***int*** XSize, ***int*** YSize,           |
|                                     |***Align*** XAlign, ***Align*** YAlign, ***int*** XPosition, ***int*** YPosition|
|[ShowDialog](#showdialog)            |***int*** ID, ***String*** Title, ***Widget*** Content                          |
|[ShowAlertDialog](#showalertdialog)  |***int*** ID, ***String*** Title, ***String*** Message,                         |
|                                     |***String*** YesText, ***String*** CancelText, ***String*** NoText,             |
|                                     |***function*** YesFuc, ***function*** CancelFuc, ***function*** NoFuc,          |
|                                     |***Boolean*** IsCancelable                                                      |

### CreateGUI
> #### 1. 概要
>> GUIを定義するために初期化します。
>> <br>
>> これを書かないとエラーが出てしまうので**必ず実行してください**。
> 
> #### 2. 引数一覧
>> **CreateGUI**(<Span Title = "Function型">Content</Span>);
>> 
```
Content：Function型
```
> 
> #### 3. For Example
>> 
```JavaScript
function newLevel() {
	with (GUIHelper) {
		with (GUIHelper.Set) {
			with (GUIHelper.Property) {
				CreateGUI(function() {
					SetOnPopUpWindow(0,
						AddButton(0, "For Example", Size.Wrap, Color.White, function() {
							clientMessage("例コード");
						}, function() {
							⏎
						})
					, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
				});
			}
		}
	}
}
```

### DeleteGUI
> #### 1. 概要
>> 指定したIDのGUIを消去します。
>> <br>
>> 尚、`SetOnPopUpWindow`関数を実行したGUIのみを対象とします。
> 
> #### 2. 引数一覧
>> **DeleteGUI**(<Span Title = "int型">ID</Span>);
>> 
```
ID：int型
```
> 
> #### 3. For Example
>> 
```JavaScript
function newLevel() {
	with (GUIHelper) {
		with (GUIHelper.Set) {
			with (GUIHelper.Property) {
				CreateGUI(function() {
					SetOnPopUpWindow(0,
						AddButton(0, "For Example", Size.Wrap, Color.White, function() {
							clientMessage("例コード");
						}, function() {
							⏎
						})
					, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
				});
			}
		}
	}
}
⏎
function leaveGame() {
	DeleteGUI(0);
}
```

### DeleteAllGUI
> #### 1. 概要
>> 全てのGUIを消去します。
>> <br>
>> 尚、`SetOnPopUpWindow`関数を実行したGUIのみを対象とします。
>
> #### 2. 引数一覧
>> **DeleteAllGUI**();
>
> #### 3. For Example
>> 
```JavaScript
function newLevel() {
	with (GUIHelper) {
		with (GUIHelper.Set) {
			with (GUIHelper.Property) {
				CreateGUI(function() {
					SetOnPopUpWindow(0,
						AddButton(0, "ボタン増殖", 10, Color.White, function() {
							i++;
							⏎
							SetOnPopUpWindow(i,
								AddButton(i, i.toString(), 10, Color.Blue, function() {
									⏎
								}, function() {
									⏎
								})
							, Size.Wrap, 100, Align.Right, Align.Top, 0, 100 * i);
						}, function() {
							⏎
						})
					, Size.Wrap, 100, Align.Right, Align.Top, 0, 0);
				});⏎
			}
		}
	}
}
⏎
function leaveGame() {
	with (GUIHelper) {
		with (GUIHelper.Set) {
			with (GUIHelper.Property) {
				DeleteAllGUI();
			}
		}
	}
}
```

### SetOnPopUpWindow
> #### 1. 概要
>> 設定されたGUIを画面に表示します。
>> <br>
>> 消去処理をしない限りは**画面に残ります**。
>> 
>> なのでワールド退出の時などには`DeleteGUI`関数を実行してください。
>
> #### 2. 引数一覧
>> **SetOnPopUpWindow**(<Span Title = "int型">ID</Span>, 
>>                      <Span Title = "Widget型">Content</Span>, 
>>                      <Span Title = "int型">Width</Span>,
>>                      <Span Title = "int型">Height</Span>,
>>                      <Span Title = "Align型">XAlign</Span>,
>>                      <Span Title = "Align型">YAlign</Span>,
>>                      <Span Title = "int型">XPosition</Span>,
>>                      <Span Title = "int型">YPosition</Span>);
>> 
```
ID：int型
Content：Widget型
Width：int型
Height：int型
XAlign：Align型
YAlign：Align型
XPosition：int型
YPosition：int型
```
> 
> #### 3. For Example
>> 
```JavaScript
function newLevel() {
	with (GUIHelper) {
		with (GUIHelper.Set) {
			with (GUIHelper.Property) {
				CreateGUI(function () {
					SetOnPopUpWindow(0, 
						AddButton(0, "(´・ω・`)", 10, Color.Magenta, function () {
							clientMessage("(´・ω・`)");
						}, function () {
							⏎
						})
					, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
				});
			}
		}
	}
}
```

### ShowDialog
> #### 1. 概要
>> MineCraft PE内にダイアログを呼び出します。
>> <br>
>> これに付きましては、`DeleteGUI`関数を**呼び出す必要がありません。(エラーを吐きます)**
> 
> #### 2. 引数一覧
>> **ShowDialog**(<Span Title = "int型">ID</Span>, <Span Title = "String型">Title</Span>, <Span Title = "Widget型">Content</Span>);
>> 
```
ID：int型
Title：String型
Content：Widget型
```
> 
> #### 3. For Example
>> 
```JavaScript
function newLevel() {
	with (GUIHelper) {
		with (GUIHelper.Set) {
			with (GUIHelper.Property) {
				CreateGUI(function () {
					SetOnPopUpWindow(0, 
						AddButton(0, "(´・ω・`)", 10, Color.Magenta, function () {
							ShowDialog(0, "(´・ω・`)ｼｮﾎﾞﾎﾞﾎﾞｰﾝ", 
								AddLinearLayout(0, "Vertical", [
									AddEditText(1, "", Color.White, Color.Red)
								])
							);
						}, function () {
							⏎
						})
					, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
				});
			}
		}
	}
}
```