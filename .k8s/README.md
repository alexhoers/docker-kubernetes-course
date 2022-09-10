# TODOs

1. DONE. Client is running
2. DONE. Server is running
3. DONE. DB is running
4. https://stackoverflow.com/questions/62112493/kubernetes-postgres-create-tables
5. How to run queries from Command line https://stackoverflow.com/questions/19674456/run-postgresql-queries-from-the-command-line
6. https://medium.com/@xcoulon/storing-data-into-persistent-volumes-on-kubernetes-fb155da16666 postgres kubernetes guide
7. postgres docker compose https://github.com/asaikali/docker-compose-postgres
8. Important copy file via configmap to db folder

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





Apply delete
> kubectl apply -f .k8s
> kubectl delete -f .k8s