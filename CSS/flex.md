### flex
#### flex:1 的三个值
1. flex-grow       项目的放大比例，默认为0，空间充足，等比例补全
2. flex-shrink     项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
3. flex-basis      主轴排列为宽度，交叉轴排列为高度，设置px，默认值auto  
 
#### flex 其他属性值
1. flex-direction  方向  
    * column
    * row
2. flex-wrap  flex容器是单行或者多行   
    * nowrap	  默认值。规定灵活的项目不拆行或不拆列。
  	* wrap	   规定灵活的项目在必要的时候拆行或拆列。 
    * wrap-reverse	    规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。
3. flex-flow  是 flex-direction 和 flex-wrap 属性的复合属性
4. justify-content  用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
    * flex-start	    默认值。项目位于容器的开头。	
    * flex-end	    项目位于容器的结尾。	
    * center	        项目位于容器的中心。	
    * space-between	项目位于各行之间留有空白的容器内。	
    * space-around	项目位于各行之前、之间、之后都留有空白的容器内
5. align-items     定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
    * stretch	    默认值。元素被拉伸以适应容器。如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
    * center	    元素位于容器的中心。弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
    * flex-start	元素位于容器的开头。弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
    * flex-end	元素位于容器的结尾。弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
    * baseline	元素位于容器的基线上。如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
    * align-content   在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）提示：使用 justify-content 属性对齐主轴上的各项（水平）。注意：容器内必须有多行的项目，该属性才能渲染出效果。

#### 子项flex属性 align-self
1. align-self 控制子项自己在侧轴上排列的方式
2. align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items属性。
3. 默认为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于 stretch