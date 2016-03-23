## GUI Helper Reference Guide === プロパティ関数(GUIHelper.Property.*)
_このページは編集中です。間違いを含んでいる可能性があります。_
### 関数リスト
|関数名                                |引数                                                                             |
|:----------:                         |:----------:                                                                     |
|[AddTextView](#addtextview)          |***int*** ID, ***String*** Text, ***int*** TextSize, ***Color*** Color,          |
|                                     |***Align*** XTextAlign, ***Align*** YTextAlign, ***Function*** Fuc,              |
|                                     |***Function*** LongFuc                                                           |
|[AddButton](#addbutton)              |***int*** ID, ***String*** Text, ***int*** TextSize, ***Color*** Color,          |
|                                     |***Function*** Fuc, ***Function*** LongFuc                                       |
|[AddTouch](#addtouch)                |***int*** ID, ***String*** Text, ***int*** TextSize, ***Color*** Color,          |
|                                     |***Function*** TouchFuc, ***Function*** ReleaseFuc                               |
|[AddToggle](#addtoggle)              |***int*** ID, ***String*** Text1, ***String*** Text2,                            |
|                                     |***int*** TextSize1, ***int*** TextSize2, ***Color*** Color1, ***Color*** Color2,|
|                                     |***Function*** Fuc1, ***Function*** Fuc2, ***Function*** LongFuc                 |
|[AddEditText](#addedittext)          |***int*** ID, ***String*** Text, ***Color*** Color, ***Color*** BackGroundColor  |
|[AddCheckBox](#addcheckbox)          |***int*** ID, ***Boolean*** Value, ***Function*** ChangeFuc                      |
|[AddSeekBar](#addseekbar)            |***int*** ID, ***int*** Value, ***int*** MaxValue, ***Function*** DragFuc,       |
|                                     |***Function*** TouchFuc, ***Function*** ReleaseFuc                               |
|[AddProgressBar](#addprogressbar)    |***int*** ID, ***int*** Value, ***int*** MaxValue, ***String*** Size,            |
|                                     |***Color*** Color                                                                |