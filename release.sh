#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'
SSH_KNOWN_HOSTS_FILE=~/.ssh/known_hosts

# ----

log(){
  printf "[relase] >> ${@}\n"
}
log_success(){
  printf "${GREEN}[relase] >> ${@}${NO_COLOR}\n"
}
log_warn(){
  printf "${YELLOW}[relase] >> ${@}${NO_COLOR}\n"
}
log_error(){
  printf "${RED}[relase] >> ${@}${NO_COLOR}\n"
}

printf "[relase] >> start\n"

# Adding to SSH Known Hosts (GitHub).
if [ ! -f "${SSH_KNOWN_HOSTS_FILE}" ]; then
  log_warn "${SSH_KNOWN_HOSTS_FILE} does not exist."
  eval touch ${SSH_KNOWN_HOSTS_FILE}
  log_success "${SSH_KNOWN_HOSTS_FILE} created."
fi
eval ssh-keyscan -H github.com >> ${SSH_KNOWN_HOSTS_FILE}
log_success "Added to SSH Known Hosts (GitHub)"

# Adding git credential store
git config --global credential.helper store
echo "https://${GITHUB_TOKEN}:x-oauth-basic@github.com" > ~/.git-credentials
log_success "Set git credential store"

# fin
log_success "Completed."
