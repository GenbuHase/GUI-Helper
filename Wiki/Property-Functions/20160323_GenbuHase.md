## GUI Helper Reference Guide === プロパティ関数(GUIHelper.Property.*)
_このページは編集中です。間違いを含んでいる可能性があります。_
### 関数リスト
|関数名                                |引数                                                                             |
|:----------:                         |:----------:                                                                     |
|_[AddTextView](#addtextview)_        |***int*** ID, ***String*** Text, ***int*** TextSize, ***Color*** Color,          |
|                                     |***Align*** XTextAlign, ***Align*** YTextAlign, ***Function*** Fuc,              |
|                                     |***Function*** LongFuc                                                           |
|_[AddButton](#addbutton)_            |***int*** ID, ***String*** Text, ***int*** TextSize, ***Color*** Color,          |
|                                     |***Function*** Fuc, ***Function*** LongFuc                                       |
|_[AddTouch](#addtouch)_              |***int*** ID, ***String*** Text, ***int*** TextSize, ***Color*** Color,          |
|                                     |***Function*** TouchFuc, ***Function*** ReleaseFuc                               |
|_[AddToggle](#addtoggle)_            |***int*** ID, ***String*** Text1, ***String*** Text2,                            |
|                                     |***int*** TextSize1, ***int*** TextSize2, ***Color*** Color1, ***Color*** Color2,|
|                                     |***Function*** Fuc1, ***Function*** Fuc2, ***Function*** LongFuc                 |
|_[AddEditText](#addedittext)_        |***int*** ID, ***String*** Text, ***Color*** Color, ***Color*** BackGroundColor  |
|_[AddCheckBox](#addcheckbox)_        |***int*** ID, ***Boolean*** Value, ***Function*** ChangeFuc                      |
|_[AddSeekBar](#addseekbar)_          |***int*** ID, ***int*** Value, ***int*** MaxValue, ***Function*** DragFuc,       |
|                                     |***Function*** TouchFuc, ***Function*** ReleaseFuc                               |
|_[AddProgressBar](#addprogressbar)_  |***int*** ID, ***int*** Value, ***int*** MaxValue, ***String*** Size,            |
|                                     |***Color*** Color                                                                |
|_[AddImageButton](#addimagebutton)_  |***int*** ID, ***String*** Mode, ***String*** URL, ***ScaleType*** ScaleType,    |
|                                     |***Function*** Fuc, ***Function*** LongFuc                                       |
|_[AddImageView](#addimageview)_      |***int*** ID, ***String*** Mode, ***String*** URL                                |
|_[AddLinearLayout](#addlinearlayout)_|***int*** ID, ***String*** Type, ***Array*** Content                             |
|_[AddScrollView](#addscrollview)_    |***int*** ID, ***Widget*** Content                                               |