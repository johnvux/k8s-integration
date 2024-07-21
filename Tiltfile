k8s_yaml('app.yaml')

load('ext://helm_remote', 'helm_remote')
helm_remote(
    chart='mongodb', 
    repo_name='oci://registry-1.docker.io/bitnamicharts',
    values='mongodb-config.yaml'
)

docker_build('order-backend', 'order-backend')

k8s_resource('order-backend', port_forwards='3000')
k8s_resource('mongodb', port_forwards='27017')