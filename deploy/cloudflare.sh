#!/bin/bash

echo "-> Starting deploy (cloudflare.sh)"

# Step 1. Check environment variables.

echo "-1-> Step 1. Check environment variables."

environment_available=1

if [ ! "$GITALK_CLIENT_ID" ]; then
  echo "-1-1-> ! Environment variable GITALK_CLIENT_ID does not exist." >&2
  environment_available=0
else
  echo "-1-1-> Environment variable GITALK_CLIENT_ID exists."
fi

if [ ! "$GITALK_CLIENT_SECRET" ]; then
  echo "-1-2-> ! Environment variable GITALK_CLIENT_SECRET does not exist." >&2
  environment_available=0
else
  echo "-1-2-> Environment variable GITALK_CLIENT_SECRET exists."
fi

if [ ! "$GITALK_REPO" ]; then
  echo "-1-3-> ! Environment variable GITALK_REPO does not exist." >&2
  environment_available=0
else
  echo "-1-3-> Environment variable GITALK_REPO exists."
fi

if [ ! "$GITALK_OWNER" ]; then
  echo "-1-4-> ! Environment variable GITALK_OWNER does not exist." >&2
  environment_available=0
else
  echo "-1-4-> Environment variable GITALK_OWNER exists."
fi

if [ ! "$GITALK_ADMIN" ]; then
  echo "-1-5-> ! Environment variable GITALK_ADMIN does not exist." >&2
  environment_available=0
else
  echo "-1-5-> Environment variable GITALK_ADMIN exists."
fi

if [ ! "$EMALIJS_USER_ID" ]; then
  echo "-1-6-> ! Environment variable EMALIJS_USER_ID does not exist." >&2
  environment_available=0
else
  echo "-1-6-> Environment variable EMALIJS_USER_ID exists."
fi

if [ ! "$EMALIJS_SERVICE_ID" ]; then
  echo "-1-7-> ! Environment variable EMALIJS_SERVICE_ID does not exist." >&2
  environment_available=0
else
  echo "-1-7-> Environment variable EMALIJS_SERVICE_ID exists."
fi

if [ ! "$EMALIJS_TEMPLATE_ID" ]; then
  echo "-1-8-> ! Environment variable EMALIJS_TEMPLATE_ID does not exist." >&2
  environment_available=0
else
  echo "-1-8-> Environment variable EMALIJS_TEMPLATE_ID exists."
fi

if [ $environment_available -eq 0 ]; then
  echo "-1-> ! Some environment variables are unavailable." >&2
  echo "-> ! Deploy failed, finishing (cloudflare.sh)"
#  exit 1
else
  echo "-1-> All environment variables are available."
  echo "-1-> Step 1 finished."
fi

# Step 2. Install necessary utilities.

echo "-2-> Step 2. Install necessary utilities."

echo "-2-1-> Install yq."
if ! which yq >/dev/null 2>&1; then
  echo "-2-1-> yq has not been installed yet. Install yq using go install."
  if ! GO111MODULE=on go get github.com/mikefarah/yq/v4; then
    echo "-2-1-> ! Failed to install yq via go install."
    echo "-> ! Deploy failed, finishing (cloudflare.sh)"
    exit 1
  fi
else
  echo "-2-1-> yq has already been installed. Continue."
fi

echo "-2-1-> yq version: $("$(go env GOPATH)"/bin/yq --version)"

echo "-2-> Step 2 finished."

# Step 3. Add configs to the _config.yaml

echo "-3-> Step 3. Add configs to the _config.yaml"

echo "-3-1-> Add Gitalk configs."
if ! "$(go env GOPATH)"/bin/yq -i '.gitalk.clientID = strenv(GITALK_CLIENT_ID) | .gitalk.clientSecret = strenv(GITALK_CLIENT_SECRET) | .gitalk.repo = strenv(GITALK_REPO) | .gitalk.owner = strenv(GITALK_OWNER) | .gitalk.admin = strenv(GITALK_ADMIN)' _config.yaml; then
  echo "-3-1-> ! Failed to add Gitalk configs."
  echo "-> ! Deploy failed, finishing (cloudflare.sh)"
  exit 1
fi
echo "-3-2-> Add EmailJS configs."
if ! "$(go env GOPATH)"/bin/yq -i '.emailjs.userID = strenv(EMAILJS_USER_ID) | .emailjs.serviceID = strenv(EMAILJS_SERVICE_ID) | .emailjs.templateID = strenv(EMAILJS_TEMPLATE_ID)' _config.yaml; then
  echo "-3-2-> ! Failed to add EmailJS configs."
  echo "-> ! Deploy failed, finishing (cloudflare.sh)"
  exit 1
fi

echo "-3-> Step 3 finished."

# Step 4. Build Jekyll site.

echo "-4-> Step 4. Build Jekyll site."

echo "-4-1-> Run jekyll build"
if ! jekyll build --source . --config ./_config.yaml; then
  echo "-4-1-> ! Failed to build Jekyll site."
  echo "-> ! Deploy failed, finishing (cloudflare.sh)"
  exit 1
fi

echo "-4-> Step 4 finished."

echo "-> Deploy succeeded, finishing (cloudflare.sh)"

exit 0
