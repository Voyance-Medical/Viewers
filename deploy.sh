#!/bin/sh

rm -rf ./platform/viewer/dist
yarn run build:google

docker build -t gcr.io/vpacs-323411/ohif-viewer-test .
# docker build -t ohif-viewer-test .
# docker tag ohif-viewer-test gcr.io/vpacs-323411/ohif-viewer-test

docker push gcr.io/vpacs-323411/ohif-viewer-test
