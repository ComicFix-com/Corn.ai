
list_aws_polly_voices() {
  echo "Listing AWS Polly voice models..."
  aws polly describe-voices --output table
}

list_google_cloud_voices() {
  echo "Listing Google Cloud Text-to-Speech voices..."
  gcloud text-to-speech voices list
}


list_azure_voices() {
  echo "Listing Microsoft Azure Text-to-Speech voices..."
  az cognitiveservices account list --resource-group <your-resource-group> --output table
}


if [ "$1" == "aws" ]; then
  list_aws_polly_voices
elif [ "$1" == "google" ]; then
  list_google_cloud_voices
elif [ "$1" == "azure" ]; then
  list_azure_voices
else
  echo "Usage: $0 {aws|google|azure}"
  exit 1
  end 
  fi
  
