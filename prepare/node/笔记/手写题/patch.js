// 初始化 patch(container, vnode)
// 更新 update(vnode, newVnode)

function createElement(vnode) {  
    let tag = vnode.tag //目标元素 ul
    let attrs = vnode.attrs || {} // 属性
    let children = vnode.children || [] // 子节点
    if(!tag) {
        return null
    }
    let elem = document.createElement(tag)
    let attrName
    // 给DOM添加元素
    for(attrName in attrs) {
        if(attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName. attrs[attrName])
        }
    }
    // 将子元素添加到目标之上
    children.forEach(element => {
        elem.appendChild(createElement(element))
    });
}

function updateChildren(vnode, newVnode) {  
    let children = vnode.children || [] // 现有节点
    let newChildren = newVnode.children || [] // 新节点
    children.forEach((childrenVnode, index)=> {
        // 循环的每一项
        let newChildrenVnode = newChildren[index]

        // 第一层没有变化
        if(childrenVnode.tag === newChildrenVnode.tag) {
            updateChildren(childrenVnode, newChildrenVnode)
        }else {
            replaceNode(childrenVnode, newChildrenVnode)
        }
    })
}

/*
vue的渲染过程
1. 将真实DOM转化为虚拟DOM（js对象）
2. 更新的时候做对比

虚拟DOM是如何提升vue的渲染效率的
1. 局部更新
2. 将直接操作dom的地方拿到两个js对象之中作比较


1. 组件化
2. 数据驱动


*/