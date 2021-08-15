import{o as e,c as l,a,b as r}from"./app.8f7bdf50.js";const i='{"title":"电梯方案","description":"","frontmatter":{},"headers":[{"level":2,"title":"测试环境","slug":"测试环境"},{"level":2,"title":"redis 主从复制","slug":"redis-主从复制"},{"level":3,"title":"约定","slug":"约定"},{"level":3,"title":"业务逻辑","slug":"业务逻辑"},{"level":3,"title":"部署图","slug":"部署图"},{"level":3,"title":"参考","slug":"参考"},{"level":2,"title":"流程图","slug":"流程图"},{"level":3,"title":"八达通","slug":"八达通"},{"level":3,"title":"二维码","slug":"二维码"},{"level":3,"title":"蓝牙","slug":"蓝牙"}],"relativePath":"guide/lift.md","lastUpdated":1629024762706}',d={},s=[a("h1",{id:"电梯方案"},[a("a",{class:"header-anchor",href:"#电梯方案","aria-hidden":"true"},"#"),r(" 电梯方案")],-1),a("h2",{id:"测试环境"},[a("a",{class:"header-anchor",href:"#测试环境","aria-hidden":"true"},"#"),r(" 测试环境")],-1),a("ul",null,[a("li",null,[a("p",null,[a("code",null,"Slave")])]),a("li",null,[a("p",null,[r("ssh "),a("a",{href:"mailto:root@192.168.0.31"},"root@192.168.0.31")])]),a("li",null,[a("p",null,"fu2021square")]),a("li",null,[a("p",null,[r("ssh -i /Users/hemiao/pem/id_rsa.pem -p 6000 "),a("a",{href:"mailto:root@47.242.32.120"},"root@47.242.32.120")])])],-1),a("h2",{id:"redis-主从复制"},[a("a",{class:"header-anchor",href:"#redis-主从复制","aria-hidden":"true"},"#"),r(" redis 主从复制")],-1),a("p",null,[a("code",null,"Redis"),r(" 数据库主要存储用户信息，包含用户拥有的八达通卡以及用户可以进入的楼号、单元、楼层信息")],-1),a("h3",{id:"约定"},[a("a",{class:"header-anchor",href:"#约定","aria-hidden":"true"},"#"),r(" 约定")],-1),a("ul",null,[a("li",null,[a("code",null,"Master"),r(": 主服务器(宿主机在大堂的主服务器), 1台")]),a("li",null,[a("code",null,"Slave"),r(": 从服务器(每个电梯配置一台从服务器), 20台")])],-1),a("h3",{id:"业务逻辑"},[a("a",{class:"header-anchor",href:"#业务逻辑","aria-hidden":"true"},"#"),r(" 业务逻辑")],-1),a("ul",null,[a("li",null,[r("系统将数据写入 "),a("code",null,"Master")]),a("li",null,[a("code",null,"Master"),r(" 将用户信息实时单向同步到每个 "),a("code",null,"Slave")]),a("li",null,[a("code",null,"Slave"),r(" 只读，用于读取数据")])],-1),a("h3",{id:"部署图"},[a("a",{class:"header-anchor",href:"#部署图","aria-hidden":"true"},"#"),r(" 部署图")],-1),a("p",null,[a("img",{src:"/lean/pu/redis.svg",alt:"redis image"})],-1),a("h3",{id:"参考"},[a("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),r(" 参考")],-1),a("p",null,[a("a",{href:"http://redis.cn/topics/replication",target:"_blank",rel:"noopener noreferrer"},"Redis 复制")],-1),a("h2",{id:"流程图"},[a("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),r(" 流程图")],-1),a("h3",{id:"八达通"},[a("a",{class:"header-anchor",href:"#八达通","aria-hidden":"true"},"#"),r(" 八达通")],-1),a("p",null,[a("img",{src:"/lean/pu/octopus.svg",alt:"octopus"})],-1),a("h3",{id:"二维码"},[a("a",{class:"header-anchor",href:"#二维码","aria-hidden":"true"},"#"),r(" 二维码")],-1),a("p",null,[a("img",{src:"/lean/pu/qrcode.svg",alt:"qrcode"})],-1),a("h3",{id:"蓝牙"},[a("a",{class:"header-anchor",href:"#蓝牙","aria-hidden":"true"},"#"),r(" 蓝牙")],-1),a("p",null,[a("img",{src:"/lean/pu/bluetooth.svg",alt:"bluetooth"})],-1)];d.render=function(a,r,i,d,t,n){return e(),l("div",null,s)};export{i as __pageData,d as default};
