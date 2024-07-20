k8s_yaml('app.yaml')

docker_build('order-backend', 'order-backend')

k8s_resource('order-backend', port_forwards='3000')