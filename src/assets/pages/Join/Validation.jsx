import * as yup from "yup";
export const validation = yup.object().shape({
  email: yup
    .string()
    .required("이메일 형식이 올바르지않습니다. ex)abc@mju.ac.kr")
    .matches(
      /^[A-Za-z0-9]+([._%+-]*[A-Za-z0-9])*@mju\.ac\.kr$/,
      "이메일 형식이 올바르지않습니다. ex)abc@mju.ac.kr"
    ),
  checkEmail: yup.string().required("인증번호가 일치하지않습니다"),
  //   인증번호는 추후에 하는방향
  password: yup
    .string()
    .required("비밀번호가 8자이상이어야 합니다. ")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/,
      "비밀번호가 8자이상이어야 합니다. " //추후에  비밀번호 유효성 검사 어떻게 할건지 정해야함
    ),
  checkPassword: yup
    .string()
    .required("비밀번호가 일치하지 않습니다.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
