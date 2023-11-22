TARGET_ENV=$1
echo $TARGET_ENV
flag=false
max_timeout=900
max_timeout_temp=$max_timeout
retry_time=10
url="https://${TARGET_ENV}.mybahmni.in/openmrs/"
echo "Before If"
if [ $TARGET_ENV = 'docker.standard' ]
then 
        echo 1
else
        echo 2
fi