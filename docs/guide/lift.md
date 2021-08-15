# 电梯方案

## 测试环境
- `Slave`
- ssh root@192.168.0.31
- fu2021square

- ssh -i /Users/hemiao/pem/id_rsa.pem -p 6000 root@47.242.32.120

## redis 主从复制
`Redis` 数据库主要存储用户信息，包含用户拥有的八达通卡以及用户可以进入的楼号、单元、楼层信息

### 约定
- `Master`: 主服务器(宿主机在大堂的主服务器), 1台
- `Slave`: 从服务器(每个电梯配置一台从服务器), 20台

### 业务逻辑
- 系统将数据写入 `Master`
- `Master` 将用户信息实时单向同步到每个 `Slave`
- `Slave` 只读，用于读取数据

### 部署图
![redis image](/pu/redis.svg)

### 参考
[Redis 复制](http://redis.cn/topics/replication)

## 流程图
### 八达通
![octopus](/pu/octopus.svg)
### 二维码
![qrcode](/pu/qrcode.svg)
### 蓝牙
![bluetooth](/pu/bluetooth.svg)