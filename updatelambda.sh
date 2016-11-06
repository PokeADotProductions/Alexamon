#!/usr/bin/env bash
# be sure this shell script has execute and write permissions  (use chmod +xw if needed)

rm index.zip
cd src/S3
zip -X -r ../../index.zip *
cd ../..
aws lambda update-function-code --function-name S3  --zip-file fileb://index.zip
