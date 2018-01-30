#!/bin/sh

echo "Travis-CI build<br>\n" > front/buildinfo.txt
echo "Build number: $TRAVIS_BUILD_NUMBER<br>\n" >> front/buildinfo.txt
echo "Branch: $TRAVIS_BRANCH<br>\n" >> front/buildinfo.txt
echo "Commit: $TRAVIS_COMMIT<br>\n" >> front/buildinfo.txt
echo "Commit message: $TRAVIS_COMMIT_MESSAGE<br>" >> front/buildinfo.txt
