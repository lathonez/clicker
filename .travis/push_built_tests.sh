#! /usr/bin/env sh
#
# Helper script run from travis that pushes compiled tests to github so they can be referenced by coverage providers
#
# travis clones in a weird way and the head gets detached, so checkout master again
git checkout master
# decrypt private key that gives us push access and add it to ssh agent
openssl aes-256-cbc -K $encrypted_a2f47a5da016_key -iv $encrypted_a2f47a5da016_iv -in .travis/travis_rsa.pem.enc -out .travis/travis_rsa.pem -d                      #
eval "$(ssh-agent -s)"
chmod 600 .travis/travis_rsa.pem
ssh-add .travis/travis_rsa.pem

# using -f as coverage is in .gitignore for dev purposes
mkdir -p coverage/source
cp -r www/build/test coverage/source

find coverage/source/test -name "*.js" | grep -v spec | grep -v e2e | grep -v stub | xargs git add -f
git remote rm origin                                       # originally cloned by travis on https
git remote add origin git@github.com:lathonez/clicker.git  # ditto
# careful not to trigger another build
git -c user.name='travis' -c user.email='travis@travis-ci.org' commit -m "updating compiled tests [ci skip]"
git push origin master