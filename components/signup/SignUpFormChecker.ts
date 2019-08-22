type CheckerFunc = (data: string) => { valid: boolean; message?: string };

interface Checker {
  [key: string]: CheckerFunc;
}

function buildCheckerFunc(regex: RegExp, faliedMessage: string): CheckerFunc {
  return data => {
    if (!data) return { valid: true };
    const valid = data.match(regex);
    return { valid: !!valid, message: valid ? undefined : faliedMessage };
  };
}
const SignUpFormChecker: Checker = {
  email: buildCheckerFunc(
    /.+@.+\..+/,
    "example@exaple.com 형식으로 입력해주세요"
  ),
  password: buildCheckerFunc(
    /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)]{8,}$/,
    "영대소문자, 특수문자로 8글자 이상 입력해주세요."
  ),
  name: buildCheckerFunc(/^[가-힣]{2,}$/, "한글로 2글자 이상 입력해주세요"),
  idNumber: buildCheckerFunc(/^[0-9]{5}$/, "학번을 입력해주세요. ex) 11301")
};

export default SignUpFormChecker;
