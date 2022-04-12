#!/bin/sh


echo -n "git commit message: "
read message

git add -A
git commit -m "$message"
git push
