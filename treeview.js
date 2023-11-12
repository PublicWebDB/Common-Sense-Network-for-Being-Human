  // 根据json生成treeview
  var input_data = {
  "学校常识": {
      "link1":"www.baidu.com",
      "link2":"www.youtube.com"
    },
  "生活常识": {
    "link1":"www.aaa",
    "link2":"www.bbb"
  },
  "小区常识":{
    "配电箱的作用":"https://www.zhihu.com/question/348467781"
  },
  "道路常识":
  {

  },
  "城市常识":
  {
    "治安类":"#zhian"
  }
};

function generateTreeview(data, parentElement) {
  for (var key in data) {
    var value = data[key];
    
    // 创建父节点
    var parentNode = document.createElement("li");
    parentElement.appendChild(parentNode);
    
    // 创建展开/折叠图标
    var caretNode = document.createElement("span");
    caretNode.classList.add("caret");
    caretNode.textContent = key;
    parentNode.appendChild(caretNode);
    
    // 创建子节点
    var nestedNode = document.createElement("ul");
    nestedNode.classList.add("nested");
    parentNode.appendChild(nestedNode);
    
    // 若子节点为对象，则递归生成子树
    if (typeof value === "object") {
      generateTreeview(value, nestedNode);
    } else {
      // 创建子节点文本
      var childNode = document.createElement("li");
      var li_link = document.createElement("a")
      li_link.href = value
      li_link.innerText = value
      
      childNode.append(li_link)
      // childNode.textContent = value;
      nestedNode.appendChild(childNode);
    }
  }
}

// 获取根节点元素
var rootElement = document.getElementById("myUL");

// 生成树形视图
generateTreeview(input_data, rootElement);
    // 折叠
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}