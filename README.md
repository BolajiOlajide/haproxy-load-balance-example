# HAPROXY LOAD BALANCE SAMPLE

<!-- markdownlint-disable MD033 -->
<div align="center">
  <img src="https://github.com/BolajiOlajide/haproxy-load-balance-example/blob/master/flow.png?raw=true" alt="alfred avatar" width="500px" />
  <p align="center">
</div>

[Tutorial](https://www.youtube.com/watch?v=JjXUH0VORnE)

### Usage

* Install dependencies using `yarn` or `npm`

* Start all the services with the command `yarn start`
It should spin up services running on ports 8080, 8081 and 8082.

* Start `haproxy` with the configuration using the command

```
haproxy -f haproxy.cfg
```

* Once this is done, you should be able to access the load balanced sites via the url
```
localhost:9000
```

* You can use the remote API thing by telnet-ing

```
telnet 127.0.0.1 9999
```

### Gotcha!

I'm trying to use `haproxy` as a proxy server but it's not recognizing the url pattern

```
acl match_api path_beg /api
use_backend api if match_api
```
