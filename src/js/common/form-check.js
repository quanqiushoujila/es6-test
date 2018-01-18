const formatText = (key) => {
  return `您填写的${key}格式不正确`;
}
const rules = {
  msg: (type, msg) => {
    return {
      type: type,
      msg: formatText(msg)
    }
  },

  email: (v) => {
    if (!v.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      this.msg('email', '邮箱');
    }
  },
  number: (v) => {
    if (!typeof v === 'number') {
      this.msg('number', '数字');
    }
  },
  mobile: (v) => {
    if (!v.match(/^1(3|4|5|7|8)\d{9}$/)) {
      this.msg('mobile', '手机号');
    }
  },
  required: (v) => {
    if (!v.trim()) {
      this.msg('required', '必填');
    }
  }
}

class FormCheck {
  constructor (opts) {
    this.opts = opts;
  }

  check (form) {
    const elements = this.opts.form.elements || document.getElementById(this.opts.form).elements,

    let checkResults = [];

    Array.from(elements).filter((item) => {
      return item.getAttribute('valid');
    }).map((item) => {
      const valids = item.getAttribute('valid').split('|');
      const value = item.value;
      let errorArr = [];
      valids.forEach((item, index) => {
        if (rules[item]) {
          let result = rules[item](item);
          result && errorArr.push(result);
        }
      });
      if (errorArr.length > 0) {
        checkResults.push({
          dom: item,
          errorArr: errorArr,
          name: item.name,
          msg: errorArr[0].msg,
          type: errorArr[0].type
        });
      }
    });

    return checkResults;
  }
}

export default FormCheck;