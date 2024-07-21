load('ext://helm_remote', 'helm_remote')

helm_remote(
    chart='base',
    repo_url='https://istio-release.storage.googleapis.com/charts',
    release_name='istio',
    namespace='istio-system',
    create_namespace=True,
)
helm_remote(
    chart='istiod',
    repo_url='https://istio-release.storage.googleapis.com/charts',
    release_name='istiod',
    namespace='istio-system'
)

helm_remote(
    chart='mongodb', 
    repo_name='oci://registry-1.docker.io/bitnamicharts',
    values='mongodb-config.yaml'
)

k8s_yaml('app.yaml')

docker_build('order-backend', 'order-backend')

k8s_resource('order-backend', port_forwards='3000')
k8s_resource('mongodb', port_forwards='27017')