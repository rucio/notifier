/**
   * Saves the login information of the current user in local storage.
   * The info can be used to retrieve the token again when it expires.
   *
   * @param {String} account
   * @param {String} username
   * @param {String} password
   */
  export function saveUser(account, username, password) {
    localStorage.setItem("CURR_ACCOUNT", account);
    localStorage.setItem("CURR_USERNAME", username);
    localStorage.setItem("CURR_PASSWORD", password);
  }

  /**
   * Removes the user details from local storage.
   */
  export function purgeUser() {
    localStorage.removeItem("CURR_ACCOUNT");
    localStorage.removeItem("CURR_USERNAME");
    localStorage.removeItem("CURR_PASSWORD");
  }