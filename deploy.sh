#!/bin/sh
# Build local

# Get arguments
while getopts v: flag; do
  case "${flag}" in
  v) version=${OPTARG} ;;
  esac
done
echo "VERSION: $version"
version=$(git rev-parse HEAD)

# Delete previous build & rebuild
rm -rf ./platform/viewer/dist
QUICK_BUILD=true APP_CONFIG=config/google.js yarn run build

# Build and publish docker container
docker build -t gcr.io/vpacs-323411/ohif-viewer-test:$version -f Dockerfile.local .
docker push gcr.io/vpacs-323411/ohif-viewer-test:$version
