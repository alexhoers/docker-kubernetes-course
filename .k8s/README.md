# TODOs

1. DONE. Client is running
2. DONE. Server is running
3. DONE. DB is running
4. DONE. DB tables created
5. Requests from client aren't going to server. (config file loaded, but not local. create service for getting kubernetes port and host)
6. connection refused to DB from server.
4. https://stackoverflow.com/questions/62112493/kubernetes-postgres-create-tables
5. How to run queries from Command line https://stackoverflow.com/questions/19674456/run-postgresql-queries-from-the-command-line
6. https://medium.com/@xcoulon/storing-data-into-persistent-volumes-on-kubernetes-fb155da16666 postgres kubernetes guide
7. postgres docker compose https://github.com/asaikali/docker-compose-postgres
8. Important copy file via configmap to db folder

ERROR:


    requests are not going from client to server

    node:internal/process/promises:279
                triggerUncaughtException(err, true /* fromPromise */);
                ^

    Error: connect ECONNREFUSED 10.97.69.149:5432
        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1247:16) {
    errno: -111,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '10.97.69.149',
    port: 5432
    }
    App is starting up and listening on port 3000
    Hello World. Server started.
    Time: 
    Logged request to /news endpoint. Returning undefined













1. Run `kubectl apply -f .k8s` to create the Kubernetes Services, Deployments, Pods, etc.
1. Once the deployments are applied several pods will be created. 
1. Open the browser and go to http://localhost:4200. Read note below.



## Debugging

### Check that the client can communicate with the Server

Get the pods and copy the name of the server pod.
> kubectl get pods

Get the services and get the clusterIP. Since we are running via service we need to use the clusterIP and not PodIP.
> kubectl get services

Get the clusterIP.

Navigate back into the client
> kubectl exec [client-pod-name] -it sh 

Do curl (with port of the nginx-clusterip):
> apk add curl
> curl http://10.105.87.43:3000

Check in server logs, that request went through.


Encorporate this guide
https://medium.com/@xcoulon/storing-data-into-persistent-volumes-on-kubernetes-fb155da16666

Commands
> kubectl exec -it postgres-0 -- psql -h localhost -U postgres --password -p 5432 postgres

> kubectl get all

> kubectl get pods

> kubectl get pods -l app=postgres


get env variables of pod
> kubectl exec <pod> printenv


Apply delete
> kubectl apply -f .k8s
> kubectl delete -f .k8s




Get environment variables node
> kubectl exec -it server-646cbffcf9-6nd7h -- node

> node process.env;



Save envionment varialbes to file
> apk add jq
> jq -n env >> env.json