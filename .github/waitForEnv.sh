TARGET_ENV=$1
echo $TARGET_ENV
flag=false
max_timeout=900
max_timeout_temp=$max_timeout
retry_time=10
url="https://${TARGET_ENV}.mybahmni.in/openmrs/"
if grep -q "$TARGET_ENV" <<< "demo"; then
        flag=true
        echo "ENV_FLAG=true" >> $GITHUB_ENV
        echo "Skipping environment check for ${TARGET_ENV} instance"
        exit 0
fi
while [ $max_timeout -gt 0 ]
do
        statusCode="$(curl -s -w '%{http_code}' -o / $url)"
        if [ $statusCode -ne 200 ]
        then
                echo $url is not reachable with status code $statusCode, retrying after $retry_time seconds, remaining time left $max_timeout seconds
                sleep $retry_time
                max_timeout=`expr $max_timeout - $retry_time`
        else
                flag=true
                echo "ENV_FLAG=true" >> $GITHUB_ENV
                break
        fi
done
if ! $flag
then
        echo $url is not reachable, tried waiting for $max_timeout_temp
        exit 1
fi