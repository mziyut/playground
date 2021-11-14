#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

set -euo pipefail
printf "[relase] >> start\n"

# Adding to SSH Known Hosts (GitHub).
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
printf "[relase] ${GREEN}>> Added to SSH Known Hosts (GitHub) ${NO_COLOR}\n"

git config --global credential.helper store
echo "https://${GITHUB_TOKEN}:x-oauth-basic@github.com" > ~/.git-credentials
printf "[relase] ${GREEN}>> Set git credential store"

printf "[relase] ${GREEN}>> Completed. ${NO_COLOR}\n"
