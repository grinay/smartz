#!/bin/sh

set -e
CONTAINERS=( smartzplatform_frontend smartzplatform_backend )
SYSTEMDUNITS=( smartzplatform.service )
AWS_REGISTRY=128894178443.dkr.ecr.eu-central-1.amazonaws.com
AWS_REGION=eu-central-1

if [[ -z "$1" ]] || [ "$1" == "-h" ] || [ "$1" == "--help" ];
then
	echo -e "\nusage:"
	echo -e "\tDeploy containers: \n\t\tdeploy.sh latest\n\t\tdeploy.sh branch_master\n\t\tdeploy.sh commit_xxxxxxx\n\t\tdeploy.sh tag_xxxxxxx\n"
	echo -e "\tCheck started containers version:\n\t\tdeploy.sh -i | --info"
	exit 1
fi

if [ "$1" == "--info" ] || [ "$1" == "-i" ];
then
	echo -e "Started containers info: \n"
	docker ps -q | xargs docker inspect --format='{{.Config.Image}}' | xargs -I{} docker inspect {} | jq '.[0].ContainerConfig.Labels'
	exit 1
fi

TAG="$1"
echo "Containers will be updated to TAG: $TAG"
read -p "Type YES to confirm: "
echo

if [ "$REPLY" != "YES" ];
then
	echo 'Cancelled'
	exit 1
fi

for NAME in "${CONTAINERS[@]}"
do
        ecs-cli pull --ecs-profile registry_ro --region $AWS_REGION $AWS_REGISTRY/$NAME:$TAG
	echo "tagging image $NAME:$TAG"
        docker tag $AWS_REGISTRY/$NAME:$TAG $NAME:$TAG
        docker tag $AWS_REGISTRY/$NAME:$TAG $NAME:latest
	docker rmi $AWS_REGISTRY/$NAME:$TAG
done

for UNIT in "${SYSTEMDUNITS[@]}"
do
	echo "restarting systemd service unit: $UNIT"
	sudo systemctl restart "$UNIT"
done
echo "update finished"
