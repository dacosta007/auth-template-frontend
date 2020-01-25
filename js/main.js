// utility functions 
const eleId = (ele) => {
  return document.getElementById(ele);
};

const cssQry = (cssQuery) => {
  return document.querySelector(cssQuery);
};

const query = (ele, cssQuery) => {
  return ele.querySelector(cssQuery);
};

// ===== utility functions ends =====

// for showing password on checkbox toggle on login page
if (cssQry('[data-check-pwd]')) {
  let chkPwd = cssQry('[data-check-pwd]');
  let pwd = cssQry('[name="password"]');

  chkPwd.addEventListener('click', () => {
    (chkPwd.checked) ? pwd.type = "text": pwd.type = "password";
  });
}

// check for password match with confirm password value on signup page
if (cssQry('[name="rePassword"]')) {
  let pwd = cssQry('[name="password"]');
  let confirmPwd = cssQry('[name="rePassword"]');
  let showConfirmPwdErr = cssQry('[data-error-rePwd]');

  confirmPwd.addEventListener('blur', () => {
    if (pwd.value !== confirmPwd.value) {
      showConfirmPwdErr.innerText = 'Password not matched!';
    } else {
      showConfirmPwdErr.innerText = '';
    }
  });
}