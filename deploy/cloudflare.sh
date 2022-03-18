#!/bin/bash

echo "---> Starting deploy (deploy.sh)"

echo "----> Step 1. Check environment variables"

environment_available=1

if [ ! "$GITALK_CLIENT_ID" ]; then
  echo "--1--> ! Environment variable GITALK_CLIENT_ID does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable GITALK_CLIENT_ID exists."
fi

if [ ! "$GITALK_CLIENT_SECRET" ]; then
  echo "--1--> ! Environment variable GITALK_CLIENT_SECRET does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable GITALK_CLIENT_SECRET exists."
fi

if [ ! "$GITALK_REPO" ]; then
  echo "--1--> ! Environment variable GITALK_REPO does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable GITALK_REPO exists."
fi

if [ ! "$GITALK_OWNER" ]; then
  echo "--1--> ! Environment variable GITALK_OWNER does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable GITALK_OWNER exists."
fi

if [ ! "$GITALK_ADMIN" ]; then
  echo "--1--> ! Environment variable GITALK_ADMIN does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable GITALK_ADMIN exists."
fi

if [ ! "$EMALIJS_USER_ID" ]; then
  echo "--1--> ! Environment variable EMALIJS_USER_ID does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable EMALIJS_USER_ID exists."
fi

if [ ! "$EMALIJS_SERVICE_ID" ]; then
  echo "--1--> ! Environment variable EMALIJS_SERVICE_ID does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable EMALIJS_SERVICE_ID exists."
fi

if [ ! "$EMALIJS_TEMPLATE_ID" ]; then
  echo "--1--> ! Environment variable EMALIJS_TEMPLATE_ID does not exist." >&2
  environment_available=0
else
  echo "--1--> Environment variable EMALIJS_TEMPLATE_ID exists."
fi

if [ $environment_available -eq 0 ]; then
  echo "--1--> ! Some environment variables are unavailable." >&2
  echo "----> ! Step 1 finished."
  echo "---> ! Deploy failed, finishing (deploy.sh)"
  exit 1
else
  echo "--1--> All environment variables are available."
  echo "----> Step 1 finished."
fi

echo "Test Cloudflare environment. GITALK_REPO: $GITALK_REPO"

echo "---> Deploy succeeded, finishing (deploy.sh)"

exit 0
