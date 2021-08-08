# chirpstack

## 安装
- [docker hub](https://hub.docker.com/u/chirpstack/)
- [github repo](https://github.com/brocaar/chirpstack-docker)
- [官网安装说明](https://www.chirpstack.io/project/guides/docker-compose/)

## 配置
``` bash

git clone https://github.com/brocaar/chirpstack-docker.git
scp -i /Users/hemiao/pem/m21.cer -r /Users/hemiao/joe/v3/chirpstack-docker root@47.242.32.120:/root

ssh -i /Users/hemiao/pem/m21.cer root@47.242.32.120
cd chirpstack-docker
```
## 启动项目
``` bash
docker-compose up

47.242.32.120:8080
```

## 添加 Network-serviers
::: warning
chirpstack-network-server:8000
:::
![network image](/network.png)

## 添加 Service-profiles


## influxDB2
