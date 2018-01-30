#!/bin/sh

echo -e "Travis-CI build number: $TRAVIS_BUILD_NUMBER\nCommit: $TRAVIS_COMMIT\nCommit message: $TRAVIS_COMMIT_MESSAGE" > front/buildinfo.txt

