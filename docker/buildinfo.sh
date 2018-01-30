#!/bin/sh

echo "Travis-CI build number: $TRAVIS_BUILD_NUMBER\n" > front/buildinfo.txt
echo "Branch: $TRAVIS_BRANCH\n" >> front/buildinfo.txt
echo "Commit: $TRAVIS_COMMIT\n" >> front/buildinfo.txt
echo "Commit message: $TRAVIS_COMMIT_MESSAGE" >> front/buildinfo.txt
