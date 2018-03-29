#!/bin/sh

set -e
CONTAINERS=( smartzplatform_frontend smartzplatform_backend )
SYSTEMDUNITS=( smartzplatform.service )
AWS_REGISTRY=128894178443.dkr.ecr.eu-central-1.amazonaws.com
AWS_REGION=eu-central-1

if [[ -z "$1" ]] || [ "$1" == "-h" ] || [ "$1" == "--help" ];
then
	echo -e "\nusage: deploy.sh tag\nExample: \n\tdeploy.sh latest\n\tdeploy.sh branch_master_latest\n\tdeploy.sh branch_master_commit_xxxxxxx\n"
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
