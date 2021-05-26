## Nodejs Express + Sequelize + Postgresql - pm2 #
> Sequelize(ORM) 기반 Nodejs Express PM2 실행 및 로그 설정

### Installation
```
git clone https://github.com/sbjang123456/nodejs-sequelize-spatial.git
cd nodejs-sequelize-spatial
npm install
npm install -g pm2
```

## Config
### 구동 모드에 따른 DB 접속 정보 yaml 파일을 생성
```
# config/config.yaml
development:
  comm:
    nodePort: 3010
  db:
    database: 데이터베이스
    username: 유저명
    password: 패스워드
    host: host
    port: port
    dialect: postgres
    operatorAliases: false
    quoteIdentifiers: false
    timezone: "+09:00"
    logQueryParameters: false
    logging: true

production:
  comm:
    nodePort: 3011
  db:
    database: 데이터베이스
    username: 유저명
    password: 패스워드
    host: host
    port: port
    dialect: postgres
    operatorAliases: false
    quoteIdentifiers: false
    timezone: "+09:00"
    logQueryParameters: false
    logging: true
```

### Development
```
npm run server:dev
```

### PM2 start (development)
```
npm run pm2:startDev
```

### PM2 start (production)
```
npm run pm2:startProd
```

### PM2 reload
```
npm run pm2:reload
```

## Notes
* pm2 실행 옵션은 ecosystem.config.js 에서 설정
```
# env 옵션으로 모드설정(development | production)
pm2 start ecosystem.config.js --env production 
```
* pm2 를 어디에서나 실행 명령어로 사용하기 위해서는 글로벌로 설치 되어 있어야한다.
* cluster mode 로 구동 시 instance 개수를 설정할 수 있다.
* docker 내에서 실행 시 pm2 명령어 대신 pm2-runtime 명령어로 바꿔서 실행해야한다.
