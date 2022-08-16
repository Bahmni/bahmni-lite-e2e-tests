#!/bin/bash
set -e
MAX_DIR=$1
SRC_FOLDER_PATH=$2
TARGET_BRANCH=$3
GIT_USERNAME=$4
GIT_PASSWORD=$5
GIT_RUN_ID=$6
GIT_RUN_ATTEMPT=$7

git config --global user.name $4
git config --global user.email $5
git fetch               
git checkout -f $TARGET_BRANCH
if [ -d "$SRC_FOLDER_PATH" ]; then
  mv $SRC_FOLDER_PATH report-$6-$7
  count=$(ls -d report-* | wc -l)
  count=`echo $count | sed -e 's/^[[:space:]]*//'`
  echo Total directories - $count
  if [ $count -eq $MAX_DIR ]
  then
    deleteDir=0
  else
    deleteDir=`expr $count - $MAX_DIR`
  fi
  echo Total directories to be deleted - $deleteDir
  if [ $count -gt $MAX_DIR ]
  then  
    echo "Deleting reports older than $MAX_DIR occurrences"
    ls -d report-* | head -$deleteDir | xargs rm -rf
  fi
  count=$(ls -d report-* | wc -l)
  count=`echo $count | sed -e 's/^[[:space:]]*//'`
  echo total files after deletion $count
  git add .
  git commit -m "Deploy Reports" 
  git push origin $TARGET_BRANCH 
fi

