  // 根据json生成treeview
  var input_data = {
  "学校常识": {
      "体育常识":{
        "三级跳":"https://www.zhihu.com/question/420386951"
      }
    },
  "生活常识": {
    "烧饭类":"#life",
    "个人卫生":"#grws"
  },
  "小区常识":{
    "配电箱的作用":"https://www.zhihu.com/question/348467781"
  },
  "道路常识":
  {

  },
  "城市常识":
  {
    "治安类":{
      "治安":"#zhian",
      "社会治安综合治理知识科普":"https://m.thepaper.cn/newsDetail_forward_20645012",
      "警种分类":"https://baike.baidu.com/item/%E8%AD%A6%E7%A7%8D/630673"
    }
  },
  "医学常识":
  {
    "日常医学常识网":"https://publicwebdb.github.io/Daily-Medical-Knowledge-Network/",
    "中国心理学协会":"https://www.cpsbeijing.org/"
  },
  "化学常识":
  {
    "化学常识":"#hxcs"
  },
  "农业常识":
  {
    "酿酒":"https://www.zhihu.com/question/435633996"
  },
  "中介代理行业":
  {
    "拍卖常识":"https://zhidao.baidu.com/question/657090974595753605.html",
  },
  "餐饮常识":
  {
    "饮食常识":"#yscs",
    "做饭常识":"#zfcs"
  },
  "银行常识":
  {
    "硬币常识":"#coin"
  },
  "化学常识":
  {
    "化学常识":"#hxcs"
  },
  "建筑安全系统常识":
  {
    "index1":"#building-safe-system"
  },
  "能量转换仪器常识":
  {
    "index":"#index"
  },
  "共青团常识":
  {
    "主标题":"#gctcs"
  },
  "玩转QQ":
  {
    "index":"#playQQ"
  },
  "仪器常识":{
    "医用类":"#doctorInstrument",
    "安全检测类":"#safeDetect"
  },
  "建筑常识":
  {
    "楼房":"#loufang"
  },
  "结婚与爱情常识":
  {
    "爱情":"#love"
  },
  "餐饮百科常识":
  {
    "必胜客":"#bsk"
  },
  "规划局常识":
  {
    "城中村":"https://baike.baidu.com/item/%E5%9F%8E%E4%B8%AD%E6%9D%91/4172812?fr=ge_ala"
  },
  "江阴本地常识":
  {
    "江阴市政府":"#jyszf"
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